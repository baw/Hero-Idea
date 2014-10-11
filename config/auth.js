// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

	'facebookAuth' : {
		'clientID' 		: 'your-secret-clientID-here', // your App ID
		'clientSecret' 	: 'your-client-secret-here', // your App Secret
		'callbackURL' 	: process.env.CALLBACK_URL_BASE + '/auth/facebook/callback'
	},

	'twitterAuth' : {
		'consumerKey' 		: process.env.TWITTER_CONSUMER_KEY,
		'consumerSecret' 	: process.env.TWITTER_CONSUMER_SECRET,
		'callbackURL' 		: process.env.CALLBACK_URL_BASE + '/auth/twitter/callback'
	},

	'googleAuth' : {
		'clientID' 		: 'your-secret-clientID-here',
		'clientSecret' 	: 'your-client-secret-here',
		'callbackURL' 	: process.env.CALLBACK_URL_BASE + '/auth/google/callback'
	}

};
