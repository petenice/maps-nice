// webpack.mix.js

const mix = require('laravel-mix');
const postcssnested = require("postcss-nested");
const vars = require('postcss-simple-vars');

mix.postCss('public/web/src/nice.css', 'public/web/css', [require('postcss-custom-properties')])
  .options({
    postCss: [require('tailwindcss'), postcssnested, vars],
    processCssUrls: false
  })
  .browserSync({
    proxy: 'maps-local.fb.test',
    files: ['./public/templates/**/*.twig', './public/web/src/**/*.css']
  })
  .disableNotifications();

if (mix.inProduction()) {
  mix.purgeCss({
    enabled: true,
    content: ['public/templates/**/*.twig'],
  });
}

