module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{html,jpg,json,md}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};