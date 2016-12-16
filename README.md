authorize-headers.js
===========

Simple express middleware to verify if a jsonwebtoken is valid.

To use in Node:

```js
var authorizeHeaders = require('authorize-headers');
var app = express();
app.get('/', authorizeHeaders, function(request, response) {
	// Continue with request if successful
	// Otherwise middleware will return a 400
});


```

- Built by Theodore Anderson