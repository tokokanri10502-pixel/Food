const CACHE_NAME = 'toko-food-trend-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  './icon-192.png',
  'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Oswald:wght@500;700&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

// インストール時にアセットをキャッシュ
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
});

// 古いキャッシュの削除
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// リクエストをフェッチしてキャッシュを利用
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // キャッシュがあればそれを返し、なければネットワークから取得
        return response || fetch(event.request).then((fetchResponse) => {
          // 記事データ（動的コンテンツ）をキャッシュに保存するロジック（オプション）
          // ここでは単純な Cache-First 戦略、または Network-First を検討
          return fetchResponse;
        });
      })
      .catch(() => {
        // オフライン時のフォールバック（必要なければそのままでも良いが、エラーを握り潰さない）
        return new Response('Offline content not available');
      })
  );
});
