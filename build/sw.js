importScripts('workbox-sw.prod.v2.1.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "3rdpartylicenses.txt",
    "revision": "316e7e1c83ffcd61b553d908154b40d0"
  },
  {
    "url": "favicon.ico",
    "revision": "b9aa7c338693424aae99599bec875b5f"
  },
  {
    "url": "index.html",
    "revision": "eaa7580c749816a0ca682bf3f5199d57"
  },
  {
    "url": "inline.76dc11ea09801643f303.bundle.js",
    "revision": "dc97875e6ebe08da9d4c28d5edb29e16"
  },
  {
    "url": "main.bda10c3659d01938a32c.bundle.js",
    "revision": "3198d545351088638fbb1ebc73a0e701"
  },
  {
    "url": "polyfills.14173651b8ae6311a4b5.bundle.js",
    "revision": "79cde672022b1d5c0ab86d0b0cc135f6"
  },
  {
    "url": "styles.d41d8cd98f00b204e980.bundle.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "vendor.5739d563dc0ddb7536ab.bundle.js",
    "revision": "a0df157ec4bdd4216d4a395dd66dd2d5"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
