var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function reverse(html) {
	var rev = html.split('').reverse().join('');
	console.log(rev);
}

getHTML(requestOptions, reverse);