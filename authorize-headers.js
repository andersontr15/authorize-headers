var jwt = require('jsonwebtoken');
var isAuthorized = function(request, response, next) {
	if(request.headers.authorization) {
		var token = request.headers.authorization.split(' ')[1];
		jwt.verify(token, process.env.secret, function(err, decoded) {
			if(err) {
				return response.status(400).send('Not authorized');
			}
			next();
		});
	};
};

module.exports = isAuthorized;