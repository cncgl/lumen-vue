var elixir = require('laravel-elixir');
require('laravel-elixir-webpack-ex');

elixir(function(mix) {
  mix.webpack('vuestrap.js', require('./webpack.config.js'), 'resources/assets/js', 'resources/assets/webpack');

});
