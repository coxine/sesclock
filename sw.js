this.addEventListener('install', function (event) {
    console.log('install');
    event.waitUntil(
      caches.open('sw_demo').then(function (cache) {
        return cache.addAll([
          '/style.css',
          '/panda.jpg',
          './diy.js',
          './index.html',
          './time.svg',
          './bg.svg',
        ])
      }
      ));
  });