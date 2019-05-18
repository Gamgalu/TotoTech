// Requires "request" to be installed (see https://www.npmjs.com/package/request)
var request = require('request');
var fs = require('fs');

request.post({
  url: 'https://api.remove.bg/v1.0/removebg',
  formData: {
    image_file: fs.createReadStream('32546473.jpg'),
    size: 'auto',
  },
  headers: {
    'X-Api-Key': 'CAU5ouDtWL1vGzrNGUYecghw'
  },
  encoding: null
}, function(error, response, body) {
  if(error) return console.error('Request failed:', error);
  if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
  fs.writeFileSync("32546473fg.png", body);
});
