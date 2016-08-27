var elixir = require('laravel-elixir');
// require('laravel-elixir-webpack-ex');
require('laravel-elixir-webpack');

elixir(function(mix) {
  // mix.webpack('vuestrap.js', require('./webpack.config.js'), 'resources/assets/js', 'resources/assets/webpack');
  mix.webpack('main.js', require('./webpack.config.js'));
  // mix.browserSync();
});
