const config = {
	plugins: {
		'postcss-preset-env': {
			features: {
				'image-set-function': false,
			}
		},
		'postcss-calc': { precision: 3 }
	},
}

if (process.env.NODE_ENV === 'production') {
	config.plugins['postcss-sort-media-queries'] = {
		sort: 'mobile-first',
	};

	config.plugins['postcss-csso'] = {};
}


module.exports = config;
