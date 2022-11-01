importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  "/TheAiClasses/precache-manifest.80886d5069455c200bc77064f6b655de.js"
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/TheAiClasses/index.html"), {
  
  blacklist: [/^\/_/,/\/[^/]+\.[^/]+$/],
});
