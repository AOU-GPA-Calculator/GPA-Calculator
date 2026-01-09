const CACHE_NAME = "aou-gpa-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./aou-logo.png",
  "./scale.png",
  "./icon.png" 
];

// Install Service Worker
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Fetch Assets
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request);
    })
  );
});
