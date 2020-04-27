var parse = require('node-html-parser').parse

var request = require('request');
var fs = require('fs');
var sites = []

// uncomment to test
// const item = "Shiatsu Back Shoulder and Neck Massager with Heat, Electric Deep Tissue 4D Kneading Massage for Shoulder, Back and Neck, Best Gifts for Women Men Mom Dad, FDA Approved"
// const source = "https://www.amazon.com/Shiatsu-Back-Shoulder-Neck-Massager/dp/B07G142F9Z/ref=sr_1_1?dchild=1&keywords=Shiatsu+Back+Shoulder+and+Neck+Massager+with+Heat%2C+Electric+Deep+Tissue+4D+Kneading+Massage+for+Shoulder%2C+Back+and+Neck%2C+Best+Gifts+for+Women+Men+Mom+Dad%2C+FDA+Approved&qid=1587943377&sr=8-1"
// const price = 59.98
var alternatives = lookup(item, source, price)

function lookup(item, source, price){
    //this function takes a item name, a source site where it was found, and a price to compete with to return the best 
    //items and links and prices found on other sites
    var search = item.replace(" ", "+")
    var options = {
        'method': 'GET',
        'url': 'https://www.google.com/search?q='+search,
        'headers': {
          'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:65.0) Gecko/20100101 Firefox/65.0'
        }
      };

        //http request to google 
    request(options, function (error, response) { 
        if (error) throw new Error(error);
        
        const root = parse(response.body);
    
        var sites = parse_google_response(root)

        var filtered_sites = filter_results(source, sites)
        console.log(filtered_sites)
        console.log("logged from within function")
        return filtered_sites
    });
}

function filter_results(source, results){
    //This method filters the parsed list of google results to return items are not available from the source site

    var source_domain = get_domain(source)
    var filtered_results = []
    //TODO decide if we want unique domain results only
    for (i=0; i<results.length; i++){
        //remove results that are from the same domain
        var link_domain = get_domain(results[i].link)
        if (link_domain != source_domain){
            filtered_results.push(results[i])
        }
        //TODO: search sites and find missing prices, remove non-priced items from search results

    }
    return filtered_results
}

function parse_google_response(html_body){
    // this method parses initial google HTML into a list of JSON objects that include {name, link, description, and price/rating} for each search result
    const results = html_body.querySelectorAll('.rc')

  i = 0 
  for (i=0; i<results.length; i++){
      var name = results[i].querySelector(".LC20lb.DKV0Md").rawText //item name
    var link = results[i].querySelector(".LC20lb.DKV0Md").parentNode.getAttribute("href") //link 
    var description = results[i].querySelector(".st").rawText //description
    try {
        var amount = results[i].querySelector(".dhIWPd.f").rawText //rating or price
        var price = get_price_from_text(amount)
    }
    catch(e){
        console.log("could not find google price "+name)
        var amount = ''
        var price = ''
    }
    
    sites.push({"name": name, "link": link, "description": description, "amount": amount, "price": price})
  }

  return sites
}

function get_domain(link){
    //this function takes a website string and returns the site's domain
    var regex = /(?:[\w-]+\.)+[\w-]+/
    return regex.exec(link)[0]
}

function get_price_from_website(term, source){
    //this function gets the likely prices of an item from a particular website
    var options = {
        'method': 'GET',
        'url': source,
      };    
    var price = request(options, function (error, response){
        if (error) throw new Error(error);
        var listing = repsonse  // get product listing on site, ideally by fuzzy matching. Currently just pulls whole site
        var prices = get_price_from_text(listing)
        return prices[0] // returns first price
    })

    return price
}

function get_price_from_text(text){
    //This method takes a string and returns the prices listed, separated by comma
    return parseFloat(text.match(/(\$\d+\.\d{1,2})/g)[0].replace("$",""))
}

//test parsing search returns
// const result = parse('<div class="rc" data-hveid="CAMQAA" data-ved="2ahUKEwjgoK-f7YbpAhUogK0KHeWzAcgQFSgAMAB6BAgDEAA"><div class="r"><a href="https://www.amazon.com/Shiatsu-Back-Shoulder-Neck-Massager/dp/B07G142F9Z"><br><h3 class="LC20lb DKV0Md">Shiatsu Back Shoulder and Neck Massager with Heat, Electric ...</h3><div class="TbwUpd NJjxre"><cite class="iUh30 bc tjvcx">www.amazon.com<span class="eipWBe"> &rsaquo; Shiatsu-Back-Shoulder-Neck-Mass...</span></cite></div></a><div class="B6fmyf"><div class="TbwUpd"><cite class="iUh30 bc tjvcx">www.amazon.com<span class="eipWBe"> &rsaquo; Shiatsu-Back-Shoulder-Neck-Mass...</span></cite></div><div class="eFM0qc"><span><div class="action-menu"><a class="GHDvEf" href="#" id="am-b0" aria-label="Result Options" aria-expanded="false" aria-haspopup="true" role="button" jsaction="m.tdd;keydown:m.hbke;keypress:m.mskpe" data-ved="2ahUKEwjgoK-f7YbpAhUogK0KHeWzAcgQ7B0wAHoECAMQBA"><span class="mn-dwn-arw"></span></a><ol class="action-menu-panel" role="menu" tabindex="-1" jsaction="keydown:m.hdke;mouseover:m.hdhne;mouseout:m.hdhue" data-ved="2ahUKEwjgoK-f7YbpAhUogK0KHeWzAcgQqR8wAHoECAMQBQ"><li class="action-menu-item" role="menuitem"><a class="fl" href="https://webcache.googleusercontent.com/search?q=cache:GMGxpkf09w4J:https://www.amazon.com/Shiatsu-Back-Shoulder-Neck-Massager/dp/B07G142F9Z+&amp;cd=1&amp;hl=en&amp;ct=clnk&amp;gl=us">Cached</a></li></ol></div></span></div></div></div><div class="s"><div><span class="st">... <em>Heat</em>, <em>Electric Deep Tissue 4D Kneading Massage</em> for <em>Shoulder</em>, <em>Back</em> and <em>Neck</em>, <em>Best Gifts</em> for <em>Women Men Mom Dad</em>, <em>FDA Approved</em>: Health &amp; Personal Care.</span><div class="dhIWPd f"><g-review-stars><span class="tPhRLe" role="img" aria-label="Rated 4.5 out of 5,"><span style="width:59px"></span></span></g-review-stars> Rating: 4.5 - ‎829 reviews</div></div></div><div data-base-uri="/search" id="ed_12" data-ved="2ahUKEwjgoK-f7YbpAhUogK0KHeWzAcgQ2Z0BMAB6BAgDEAg"></div></div>')
// console.log(result.querySelector(".LC20lb.DKV0Md").rawText) //item name
// console.log(result.querySelector(".LC20lb.DKV0Md").parentNode.getAttribute("href")) //link 
// console.log(result.querySelector(".st").rawText) //description
// console.log(result.querySelector(".dhIWPd.f").rawText) //rating/price

//console.log(result.structure)

//attempt to read a file to load html instead
// console.log("here")
// var response = fs.readFile("alt_lookup/response.html", function (error, response) {
//     if (error) {
//         console.log(error)
//         console.log('Contents you are looking are Not Found');
//     } else {
//         console.log(response)
//     }
// })
// const root = parse(response);
//console.log(root.structure);


    
