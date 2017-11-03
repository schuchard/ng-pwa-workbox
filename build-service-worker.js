const workboxBuild = require('workbox-build');
const distDirectory =  'dist/';
const fs = require('fs');
const workboxFileName = 'workbox-sw.prod.v2.1.1.js';

workboxBuild.injectManifest({
  swSrc: 'service-worker.js',
  swDest: distDirectory + '/sw.js',
  globDirectory: distDirectory,
  globPatterns: [
    "index.html",
    "**/*.bundle.css",
    "**/*.bundle.js"
  ],
})
  .then(() => {
    /*
    * copy ServiceWorker into dist folder
    * handled by the workbox cli but not with `injectManifest`
    * */
    fs.createReadStream(`node_modules/workbox-sw/build/importScripts/${workboxFileName}`).pipe(fs.createWriteStream(`dist/${workboxFileName}`));
    fs.createReadStream(`node_modules/workbox-sw/build/importScripts/${workboxFileName}.map`).pipe(fs.createWriteStream(`dist/${workboxFileName}.map`));
  })
  .then(() => console.log('Service worker generated.'));
