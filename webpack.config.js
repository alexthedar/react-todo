var webpack = require('webpack')
var path = require('path')

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

module.exports={
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],  //entry file for webpack to start from
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery',
      'jquery': 'jQuery'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor:  {
        warnings: false
      }
    })
  ],
  output: {                   // where to output.  uses dirname for root adn then places accordingly
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    modulesDirectories: [
      'node_modules',
      './app/components',
      './app/api'
    ],
    alias: {
      app: 'app',
      Main: 'app/components/Main.jsx',
      applicationStyles: 'app/styles/app.scss',
      actions: 'app/actions/actions.jsx',
      reducers: 'app/reducers/reducers.jsx',
      configureStore: 'app/store/configureStore.jsx'
    },
    extensions: ['', '.js', '.jsx'],  //what are the extensions of the files to go through
  },
  module: {
    loaders: [  //needed for babel to convert jsx and other stuff
      {
        loader: 'babel-loader',  //name of loader to be used
        query: {
          presets: ['react','es2015', 'stage-0']  //what languages will be tranlasted
        },

        test: /\.jsx?$/,  //regex to say only get files that use jsx at the end and put them through this loader
        exclude: /(node_modules|bower_components)/  //what folders do i not want the babel to go through
      }
    ]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/foundation-sites/scss')
    ]
  },
  devtool: process.env.NODE_ENV === 'production' ? undefined : 'eval-source-map'
}
