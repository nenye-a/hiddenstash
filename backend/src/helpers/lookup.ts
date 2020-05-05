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

  let result = await axios.get('https://www.google.com/search?q=' + search, {
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
  let results = htmlBody.querySelectorAll('.rc');
  let sites: Array<Result> = [];

  results.forEach((result: HTMLElement) => {
    let name = result?.querySelector('.LC20lb.DKV0Md')?.rawText || '';
    let url = result?.querySelector('a').getAttribute('href') || '';
    let description = result?.querySelector('.st')?.rawText || '';
    let amount = result.querySelector('.dhIWPd.f')?.rawText || '';
    let price = getPriceFromText(amount);

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
    if (linkDomain !== sourceDomain) {
      filteredResults.push(result);
    }
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
 * This method takes a string and returns the prices listed, separated by comma
 *
 * @param link
 */

function getPriceFromText(text: string) {
  let textMatches = text.match(/(\$\d+\.\d{1,2})/g);
  if (textMatches && textMatches.length > 0) {
    let price = textMatches[0];
    return parseFloat(price).toString().replace('$', '');
  }
  return '';
}
