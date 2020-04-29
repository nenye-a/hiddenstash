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
  link: string;
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
 * that include {name, link, description, and price/rating} for
 * each search result
 *
 * @param htmlBody
 */

function parseGoogleResults(htmlBody: ParseResult) {
  let results = htmlBody.querySelectorAll('.rc');
  let sites: Array<Result> = [];

  results.forEach((result: HTMLElement) => {
    let name: string = result?.querySelector('.LC20lb.DKV0Md')?.rawText || '';
    let link = result.querySelector('a').getAttribute('href') || '';
    let description: string = result?.querySelector('.st')?.rawText || '';
    let price = '';
    let amount = result.querySelector('.dhIWPd.f')?.rawText || '';

    sites.push({
      name,
      link,
      description,
      amount,
      price,
    });
  });

  return sites;
}

function filterResults(source: string, results: Array<Result>) {
  //This method filters the parsed list of google results to return items are not available from the source site

  let sourceDomain = getDomain(source);
  let filteredResults = [];
  //TODO: decide if we want unique domain results only
  for (let i = 0; i < results.length; i++) {
    //remove results that are from the same domain
    let linkDomain = getDomain(results[i].link);
    if (linkDomain !== sourceDomain) {
      filteredResults.push(results[i]);
    }
    //TODO: search sites and find missing prices, remove non-priced items from search results
  }
  return filteredResults;
}

function getDomain(link: string) {
  //this function takes a website string and returns the site's domain
  let regex = /(?:[\w-]+\.)+[\w-]+/;
  let domain = regex.exec(link);
  return domain ? domain[0] : '';
}
