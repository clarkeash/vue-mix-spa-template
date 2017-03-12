let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your application. By default, we are compiling the less
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.js('src/js/app.js', 'dist/js');
mix.less('src/less/app.less', 'dist/css');
mix.copy('src/index.html', 'dist/index.html');
mix.setPublicPath('dist');

// mix.browserSync('my-site.dev');

