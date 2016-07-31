var path = require('path');

module.exports = {
  resolve: {
    root: path.resolve('./')
  },
  themeLoader: {
    themes: ['./resources/assets/sass/theme.scss', './node_modules/vuestrap/theme/bootstrap.scss'],
  },
  module: {
    loaders: [{
      test: /\.vue$/,
      loader: 'vue'
    }, {
      test: /\.js$/,
      loader: 'babel'
    }, {
      test: /\.html$/,
      loader: 'html'
    }, {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader!vuestrap-theme-loader'
    }]
  }
};
