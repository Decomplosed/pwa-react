const CACHE_NAME = 'version-1'
const urlsToCache = ['index.html', 'offline.html']

const self = this

// Install SW
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME))
})

// Listen for request
self.addEventListener('fetch', (e) => {})

//Activate the SW
self.addEventListener('activate', (e) => {})
