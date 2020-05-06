import axios from 'axios';
import parse, { HTMLElement } from 'node-html-parser';

type SearchQuery = {
  name: string;
  source: string;
  price: number;
};

type Result = {
  name: string;
  description: string;
  price: string;
  amount: string;
  url: string;
  imgUrl?: string;
};

type ParseResult = HTMLElement & {
  valid: boolean;
};

export async function productLookup(query: SearchQuery) {
  let { name, source } = query;
  let search = name.replace(' ', '+');
  let shopping_tag = '&sxsrf=ALeKk02aluvgSzdsFIRVsfqe30HYpca6Yw:1588732498018&source=lnms&tbm=shop&sa=X&ved=2ahUKEwjAtL_hmZ7pAhUnknIEHd75CJUQ_AUoAXoECAwQAw&biw=1440&bih=745';
  let result = await axios.get('https://www.google.com/search?q=' + search + shopping_tag, {
    headers: {
      'content-type': 'application/json',
      'user-agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:65.0) Gecko/20100101 Firefox/65.0',
    },
    responseType: 'text',
  });
  let root = parse(result.data) as ParseResult;

  let googleResult = parseGoogleResults(root);
  let filteredResults = filterResults(source, googleResult);
  return filteredResults;
}

/**
 *
 * Method parses initial google HTML into a list of JSON objects
 * that include {name, url, description, and price/rating} for
 * each search result
 *
 * @param htmlBody
 */

function parseGoogleResults(htmlBody: ParseResult) {
  let result_tag = '.sh-dgr__gr-auto.sh-dgr__grid-result'; //'.rc' sh-dgr__content sh-dgr__gr-auto sh-dgr__grid-result G9CET IiiNhe
  let results = htmlBody.querySelectorAll(result_tag);
  let sites: Array<Result> = [];
  let name_tag = '.A2sOrd'; // '.LC20lb.DKV0Md'
  let amount_tag = '.Nr22bf'; //'.dhIWPd.f'
  let url_tag = '.a3H7pd.r29r0b.shntl'; // 'a'
  results.forEach((result: HTMLElement) => {
    let name = result?.querySelector(name_tag)?.rawText || '';
    let url = 'https://www.google.com' + result?.querySelector(url_tag).getAttribute('href') || '';
    let description = result?.querySelector(url_tag)?.rawText || '';//result?.querySelector('.st')?.rawText || '';
    let amount = result.querySelector(amount_tag)?.rawText || '';
    let price = getPriceFromText(amount);
    console.log(name + ' ' + url + ' ' + description + ' ' + amount + ' ' + price)
    console.log(getTrueUrl(url))
    sites.push({
      name,
      url,
      description,
      amount,
      price,
    });
  });

  return sites;
}

/**
 *
 * This method filters the parsed list of google results
 * to return items are not available from the source site
 *
 */
function filterResults(source: string, results: Array<Result>) {
  let sourceDomain = getDomain(source);
  let filteredResults = [];
  //TODO: decide if we want unique domain results only
  for (let result of results) {
    //remove results that are from the same domain
    let linkDomain = getDomain(result.url);

    // if (linkDomain !== sourceDomain) {
    //   filteredResults.push(result);
    // }
    filteredResults.push(result);
    //TODO: search sites and find missing prices, remove non-priced items from search results
  }
  return filteredResults;
}

/**
 *
 * This function takes a website string and returns the site's domain
 *
 * @param link
 */

function getDomain(url: string) {
  let regex = /(?:[\w-]+\.)+[\w-]+/;
  let domain = regex.exec(url);
  return domain ? domain[0] : '';
}


/**
 *
 * This function follows a temp google shopping url to get the true one
 *
 * @param link
 */

async function getTrueUrl(url: string) {

  console.log(url)
  let result = await axios.get(url, {
    headers: {
      'content-type': 'application/json',
      'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:65.0) Gecko/20100101 Firefox/65.0',
    },
    responseType: 'text',
  }).catch(e => {
    console.log('That did not go well. Url was: ' + url)
    throw e
  });
  let root = parse(result.data) as ParseResult;

  console.log(root)



}

/**
 *
 * This method takes a string and returns the prices listed, separated by comma
 *
 * @param link
 */

function getPriceFromText(text: string) {
  let textMatches = text.match(/(\$\d+\.\d{1,2})/g);

  if (textMatches && textMatches.length > 0) {
    let price = textMatches[0];
    return price.replace('$', '');
  }
  return '';
}
