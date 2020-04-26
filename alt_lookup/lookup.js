var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://www.google.com/search?q=Shiatsu+Back+Shoulder+and+Neck+Massager+with+Heat,+Electric+Deep+Tissue+4D+Kneading+Massage+for+Shoulder,+Back+and+Neck,+Best+Gifts+for+Women+Men+Mom+Dad,+FDA+Approved',
  'headers': {
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:65.0) Gecko/20100101 Firefox/65.0'
  }
};
request(options, function (error, response) { 
  if (error) throw new Error(error);
  console.log(response.body);
});
