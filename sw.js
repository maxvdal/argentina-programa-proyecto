const CACHE_NAME = "CACHE1"

this.addEventListener('install', async function() {
    const cache = await caches.open(CACHE_NAME);
    cache.addAll([
        '/funciones.js',
        '/index.html',
        '/css/estilos1.css',
    ])
})

self.addEventListener('fetch', event => {
   
    const getCustomResponsePromise = async => {
        console.log(`URL ${event.request.url}`, `location origin ${location}`)

    event.respondWith(getCustomResponsePromise())
    }
})