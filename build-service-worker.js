const workboxBuild = require('workbox-build');
const distDirectory =  'dist/';
const fs = require('fs');

workboxBuild.injectManifest({
  swSrc: 'service-worker.js',
  swDest: distDirectory + '/sw.js',
  globDirectory: distDirectory,
  globPatterns: [
    "index.html",
    "**/*.bundle.css",
    "**/*.bundle.js",
    "**/*.chunk.js"
  ],
})
  .then(() => {
    // read installed workbox version
    const workboxPkg = require('./node_modules/workbox-sw/package.json');
    const workboxFileName = `workbox-sw.prod.v${workboxPkg.version}.js`;

    /*
    * copy ServiceWorker into dist folder
    * handled by the workbox cli but not with `injectManifest`
    * */
    fs.createReadStream(`node_modules/workbox-sw/build/importScripts/${workboxFileName}`).pipe(fs.createWriteStream(`dist/${workboxFileName}`));
    fs.createReadStream(`node_modules/workbox-sw/build/importScripts/${workboxFileName}.map`).pipe(fs.createWriteStream(`dist/${workboxFileName}.map`));
  })
  .then(() => console.log('Service worker generated.'));
