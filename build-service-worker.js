const workboxBuild = require('workbox-build');
const distDirectory =  'dist/';

workboxBuild.injectManifest({
  swSrc: 'service-worker.js',
  swDest: distDirectory + '/sw.js',
  globDirectory: distDirectory,
  globPatterns: [ "**/*.{txt,ico,html,js,css}"],
})
  .then(() => {
    console.log('Service worker generated.');
  });
