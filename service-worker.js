importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js')

workbox.core.setCacheNameDetails({
    prefix: '',
    suffix: '',
    precache: 'precache'
});

workbox.routing.registerRoute(
    ({ request }) => request.mode === 'navigate',
    new workbox.strategies.NetworkFirst({
        cacheName: 'pages',
        plugins: [
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [200],
            }),
        ],
    }),
);

workbox.routing.registerRoute(
    ({ request }) =>
        request.destination === 'style' ||
        request.destination === 'script' ||
        request.destination === 'worker',
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'assets',
        plugins: [
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [200],
            }),
        ],
    }),
);

workbox.routing.registerRoute(
    ({ request }) => request.destination === 'image',
    new workbox.strategies.CacheFirst({
        cacheName: 'images',
        plugins: [
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [200],
            }),
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30,
            }),
        ],
    }),
);

workbox.routing.registerRoute(
    ({ url }) => url.origin === 'https://fonts.googleapis.com',
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'font-stylesheets',
    })
);

workbox.routing.registerRoute(
    ({ url }) => url.origin === 'https://fonts.gstatic.com',
    new workbox.strategies.CacheFirst({
        cacheName: 'fonts',
        plugins: [
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200],
            }),
            new workbox.expiration.ExpirationPlugin({
                maxAgeSeconds: 60 * 60 * 24 * 365,
                maxEntries: 30,
            }),
        ],
    })
);

workbox.precaching.precacheAndRoute([
    { url: '/index', revision: null },
    { url: '/404.html', revision: null },
    { url: '/stylesheet.css', revision: null },
    { url: '/service-worker.js', revision: null },
    { url: '/manifest.json', revision: null },
    { url: '/about/index.html', revision: null },
    { url: '/about/references/index.html', revision: null },
    { url: '/about/success/index.html', revision: null },
    { url: '/datasheets/index.html', revision: null },
    { url: '/elements/index.html', revision: null },
    { url: '/elements/404.html', revision: null },
    { url: '/hpq/index.html', revision: null },
    { url: '/particles/index.html', revision: null },
    { url: '/particles/404.html', revision: null },
    { url: '/periodic_table/index.html', revision: null },
    { url: '/periodic_table/styles/index.html', revision: null },
    { url: '/team/index.html', revision: null },
    { url: '/team/administration_department/index.html', revision: null },
    { url: '/units/index.html', revision: null },
    { url: '/units/metric/index.html', revision: null },
    { url: '/units/metric/si/index.html', revision: null },
    { url: '/units/metric/si/units/index.html', revision: null },
    { url: '/units/metric/si/units/second/index.html', revision: null },
    { url: '/units/metric/si/constants/index.html', revision: null },
    { url: '/units/metric/si/constants/avogadro/index.html', revision: null },
    { url: '/units/metric/si/constants/boltzmann/index.html', revision: null },
    { url: '/units/metric/si/constants/caesium_frequency/index.html', revision: null },
    { url: '/units/metric/si/constants/elementary_charge/index.html', revision: null },
    { url: '/units/metric/si/constants/luminous_efficacy/index.html', revision: null },
    { url: '/units/metric/si/constants/planck/index.html', revision: null },
    { url: '/units/metric/si/constants/speed_of_light/index.html', revision: null },
    { url: '/wiki/index.html', revision: null },
    { url: '/wiki/physics/index.html', revision: null },
    { url: '/wiki/physics/hep_+_nuclear/index.html', revision: null },
    { url: '/wiki/physics/hep_+_nuclear/hep/index.html', revision: null },
    { url: '/wiki/physics/hep_+_nuclear/hep/particle_accelerator/index.html', revision: null },
    { url: '/files/periodic_tables/full.png', revision: null },
    { url: '/files/thumbnails/avogadro.png', revision: null },
    { url: '/files/thumbnails/boltzmann.png', revision: null },
    { url: '/files/thumbnails/caesium_frequency.png', revision: null },
    { url: '/files/thumbnails/coming_soon.png', revision: null },
    { url: '/files/thumbnails/D1.png', revision: null },
    { url: '/files/thumbnails/D2.png', revision: null },
    { url: '/files/thumbnails/D3.png', revision: null },
    { url: '/files/thumbnails/datasheets.png', revision: null },
    { url: '/files/thumbnails/defining_constants.png', revision: null },
    { url: '/files/thumbnails/elementary_charge.png', revision: null },
    { url: '/files/thumbnails/elements.png', revision: null },
    { url: '/files/thumbnails/hpq_log.png', revision: null },
    { url: '/files/thumbnails/luminous_efficacy.png', revision: null },
    { url: '/files/thumbnails/periodic_table.png', revision: null },
    { url: '/files/thumbnails/planck.png', revision: null },
    { url: '/files/thumbnails/second.png', revision: null },
    { url: '/files/thumbnails/sources.png', revision: null },
    { url: '/files/thumbnails/speed_of_light.png', revision: null },
    { url: '/files/thumbnails/work_in_progress.png', revision: null },
    { url: '/favicon.svg', revision: null },
    { url: '/favicon.png', revision: null },
    { url: '/favicon.ico', revision: null },
]);