module.exports = {
  "globDirectory": "dist/",
  globPatterns: [
    "index.html",
    "**/*.bundle.css",
    "**/*.bundle.js"
  ],
  swSrc: "workbox-sw.js",
  "swDest": "dist/sw.js",
  "globIgnores": [
    "../workbox-cli-config.js"
  ]
};
