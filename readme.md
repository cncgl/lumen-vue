# Lumen-Vue

[![Dependency Status](https://gemnasium.com/badges/github.com/cncgl/lumen-vue.svg)](https://gemnasium.com/github.com/cncgl/lumen-vue)
[![Code Climate](https://codeclimate.com/github/cncgl/lumen-vue/badges/gpa.svg)](https://codeclimate.com/github/cncgl/lumen-vue)
[![Issue Count](https://codeclimate.com/github/cncgl/lumen-vue/badges/issue_count.svg)](https://codeclimate.com/github/cncgl/lumen-vue)

Sample for Lumen + laravel-elixir + webpack + Vue.js

## Install

### clone from repository
```
$ git clone https://github.com/cncgl/lumen-vue
```

### download libraries
```
$ composer update
$ npm install
```

### generate .env file.
```
$ cp .env.sample .env
$ php keygenerate.php
<string with length 32>
```
copy string to APP_KEY in .env

### create database by mysql
```
$ php artisan migrate
```

## for development
```
php -S 0.0.0.0:4000 -t public
```

## License
[MIT](LICENSE)
