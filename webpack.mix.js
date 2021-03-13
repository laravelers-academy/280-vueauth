const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js').vue();

mix.combine([
	'resources/assets/js/jsvalidator.js'
], 'public/js/custom.js');

mix.combine([
	'resources/assets/css/custom.css'
], 'public/css/custom.css');