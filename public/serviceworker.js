const CACHE_NAME = 'version-1'
const urlsToCache = ['index.html', 'offline.html']

const self = this

// Install SW
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache')

      return cache.addAll(urlsToCache)
    })
  )
})

// Listen for request
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(() => {
      return fetch(e.request).catch(() => caches.match('offline.html'))
    })
  )
})

//Activate the SW
self.addEventListener('activate', (e) => {
  const cacheWhitelist = []
  cacheWhitelist.push(CACHE_NAME)
})
