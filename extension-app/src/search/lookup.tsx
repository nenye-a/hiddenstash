import { extractPrice } from '../utils/extractPrice';
import { session } from '../utils/storage';

let parse = require('node-html-parser').parse;
let request = require('request'); // TODO: Change to Axios
let fs = require('fs');

// TEST_CASE
// const product = "Shiatsu Back Shoulder and Neck Massager with Heat, Electric Deep Tissue 4D Kneading Massage for Shoulder, Back and Neck, Best Gifts for Women Men Mom Dad, FDA Approved"
// const source = "https://www.amazon.com/Shiatsu-Back-Shoulder-Neck-Massager/dp/B07G142F9Z/ref=sr_1_1?dchild=1&keywords=Shiatsu+Back+Shoulder+and+Neck+Massager+with+Heat%2C+Electric+Deep+Tissue+4D+Kneading+Massage+for+Shoulder%2C+Back+and+Neck%2C+Best+Gifts+for+Women+Men+Mom+Dad%2C+FDA+Approved&qid=1587943377&sr=8-1"
// const price = '59.98'
// let alternatives = productLookup({ product, source, price })

type SearchQuery = {
  id: string;
  product: string;
  source: string;
  price: string;
  results?: Array<Result>;
};

type Result = {
  name: string;
  description: string;
  price: string;
  amount: string;
  link: string;
};

/**
 * Takes an product name, a source site where it was found,
 * and a price to compete with to return the best items and links
 * and prices found on other sites
 * @param query
 */
export function productLookup(query: SearchQuery) {
  let { product, source, price } = query;
  let search = product.replace(' ', '+');
  let options = {
    method: 'GET',
    url: 'https://www.google.com/search?q=' + search,
    headers: {
      'user-agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:65.0) Gecko/20100101 Firefox/65.0',
    },
  };

  // @ts-ignore
  request(options, (error, response) => {
    if (error) throw new Error(error);
    const root = parse(response.body);
    let sites = parseGoogleResults(root);
    query.results = filterResults(source, sites);
    console.log(query.results);
    session.set(['searchQuery', query.id], query); // sets item in the sesssion, needs to be adjusted to return state.
  });
}

function filterResults(source: string, results: Array<Result>) {
  //This method filters the parsed list of google results to return items are not available from the source site

  let sourceDomain = getDomain(source);
  let filteredResults = [];
  //TODO: decide if we want unique domain results only
  for (let i = 0; i < results.length; i++) {
    //remove results that are from the same domain
    let link_domain = getDomain(results[i].link);
    if (link_domain != sourceDomain) {
      filteredResults.push(results[i]);
    }
    //TODO: search sites and find missing prices, remove non-priced items from search results
  }
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
// @ts-ignore
function parseGoogleResults(htmlBody) {
  //
  const results = htmlBody.querySelectorAll('.rc');
  let sites = [];

  for (let i = 0; i < results.length; i++) {
    let name: string = results[i].querySelector('.LC20lb.DKV0Md').rawText; //item name
    let link: string = results[i]
      .querySelector('.LC20lb.DKV0Md')
      .parentNode.getAttribute('href'); //link
    let description: string = results[i].querySelector('.st').rawText; //description
    let price = '';
    let amount = '';
    try {
      let amount = results[i].querySelector('.dhIWPd.f').rawText; //rating or price
    } catch (e) {
      console.log('could not find google price ' + name);
    }

    sites.push({
      name: name,
      link: link,
      description: description,
      amount: amount,
      price: price,
    });
  }
  return sites;
}

function getDomain(link: string) {
  //this function takes a website string and returns the site's domain
  let regex = /(?:[\w-]+\.)+[\w-]+/;
  let domain = regex.exec(link);
  return domain ? domain[0] : '';
}
