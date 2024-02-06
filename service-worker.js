const cacheName = 'SPA-salon-v1';
const filesToCache = 
[
    '/',
    '/index.html',
    '/TM.html',
    '/ENG.html',
    '/assets/css/flex-slider.css',
    '/assets/css/fontawesome.css',
    '/assets/css/owl.css',
    '/assets/css/templatemo-sixteen.css',
    '/assets/fonts/Flaticon.woff',
    '/assets/fonts/flexslider-icon.eot',
    '/assets/fonts/flexslider-icon.svg',
    '/assets/fonts/flexslider-icon.ttf',
    '/assets/fonts/flexslider-icon.woff',
    '/assets/fonts/FontAwesome.otf',
    '/assets/fonts/fontawesome-webfont.eot',
    '/assets/fonts/fontawesome-webfont.svg',
    '/assets/fonts/fontawesome-webfont.ttf',
    '/assets/fonts/fontawesome-webfont.woff',
    '/assets/fonts/fontawesome-webfont.woff2',
    '/assets/fonts/slick.eot',
    '/assets/fonts/slick.svg',
    '/assets/fonts/slick.ttf',
    '/assets/fonts/slick.woff',
    '/assets/images/bg_image.jpg',
    '/assets/images/SPA.png',
    '/assets/js/accordions.js',
    '/assets/js/custom.js',    
    '/assets/js/isotope.js',
    '/assets/js/owl.js',
    '/assets/js/slick.js',
    'assets/videos/face massage.mp4',
    'assets/videos/вакуумный массаж .mp4',
    'assets/videos/кхмерский массаж +классический массаж лица  — копия.mp4',
    'assets/videos/кхмерский массаж +классический массаж лица .mp4',
    'assets/videos/кхмерский массаж +стоун массаж.mp4',
    'assets/videos/кхмерский массаж с медной монетой.mp4',
    'vendor/bootstrap/css/bootstrap.css',
    'vendor/bootstrap/css/bootstrap.min.css',
    'vendor/bootstrap/css/bootstrap.css.map',
    'vendor/bootstrap/css/bootstrap.min.css.map',
    'vendor/bootstrap/js/bootstrap.bundle.js',
    'vendor/bootstrap/js/bootstrap.bundle.js.map',
    'vendor/bootstrap/js/bootstrap.bundle.min.js',
    'vendor/bootstrap/js/bootstrap.bundle.min.js.map',
    'vendor/bootstrap/js/bootstrap.js',
    'vendor/bootstrap/js/bootstrap.js.map',
    'vendor/bootstrap/js/bootstrap.min.js',
    'vendor/bootstrap/js/bootstrap.min.js.map',
    'vendor/jquery/jquery.js',
    'vendor/jquery/jquery.min.js',
    'vendor/jquery/jquery.min.js.map',
    'vendor/jquery/jquery.slim.js',
    'vendor/jquery/jquery.slim.min.js',
    'vendor/jquery/jquery.slim.min.js.map'
];
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});