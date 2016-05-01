module.exports = {
	entry: ['./src/Select.js'],
	output: {
		filename: 'dist/react-select-umd.js', //this is the default name, so you can skip it
		//at this directory our bundle file will be available
		//make sure port 8090 is used when launching webpack-dev-server
		libraryTarget: 'umd'
	},
	module: {
		loaders: [
			{
				//tell webpack to use jsx-loader for all *.jsx files
				test: /\.js?$/,
				loader: 'babel',
				query: {
	        presets: ['react', 'es2015']
	      }
				/*query: {
					optional: ['spec.protoToAssign'],
					loose: ['es6.classes', 'es6.properties.computed'],
					externalHelpers: true,
					stage: 0
				}*/
			}
		]
	},
	externals: [
		'react',
		'react-dom'
	],
	resolve: {
		extensions: ['', '.js', '.jsx']
	}
}
