var path = require('path');
var webpack = require('webpack');
var extractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: './resources/assets/js/main.js',
    vendor: ['vue', 'vue-resource', 'vue-router', 'vuestrap', 'bulma', 'font-awesome/scss/font-awesome']
  },
  resolveLoader: {
    root: [path.join(__dirname, 'node_modules')]
  },
  resolve: {
    root: path.resolve('./'),
    extensions: ['', '.js' , '.scss' , '.vue']
  },
  themeLoader: {
    themes: ['./resources/assets/stylesheets/theme.scss', './node_modules/vuestrap/theme/_bootstrap.scss'],
  },
  module: {
    loaders: [{
      test: /\.vue$/,
      loader: 'vue'
    }, {
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    }, {
      test: /\.jade$/,
      loader: 'jade'
    }, {
      test: /\.html$/,
      loader: 'html'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.s(a|c)ss$/,
      loader: extractTextPlugin.extract('css!sass')
      // loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader!vuestrap-theme-loader'
    }, {
      test: /\.(png|jpg|jpeg|gif)$/,
      loader: `file?name=../static/[name].[ext]`
    }, {
      test: /\.(svg|eot|ttf)(\?v=\d+\.\d+\.\d+)?$/,
      loader: `file?name=../static/[name].[ext]`
    }, {
      test: /\.woff(\d+)?(\?v=\d+\.\d+\.\d+)?$/,
      loader: `file?name=../static/[name].[ext]`
    }]
  },
  plugins: [
    new extractTextPlugin('../stylesheets/[name].css'),
    new webpack.ProvidePlugin({
      Vue: 'vue',
      VueResource: 'vue-resource',
      VueRouter: 'vue-router'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    })
  ],
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  devtool: '#source-map'
};
