'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "10968e82cba0f1ea5f96f2f87ae8bb1b",
"assets/AssetManifest.bin.json": "0c5b3fbfeacc3d008dddb20e35d3c787",
"assets/AssetManifest.json": "b37ffbad824cd5184afb73eb80944ff2",
"assets/assets/images/google-play-badge.png": "1e91d02cf5a902f38f2923c006d79281",
"assets/assets/images/google-play-badge_n.png": "3f660e8a7a28597b82ce538305727d08",
"assets/assets/images/image_error.svg": "f9a890e8829d6d6daad90c3c802c872f",
"assets/assets/images/launcher_icon.png": "93867acc8863094efbaba01e3eb37a40",
"assets/assets/images/logo.png": "93867acc8863094efbaba01e3eb37a40",
"assets/assets/images/playstore-badge_n.png": "dcb9855eda7a050c7bda222e12d8eaa3",
"assets/assets/snackbar/back.svg": "8cdc05219e218423f0ebd2d79d4f0b00",
"assets/assets/snackbar/bubbles.svg": "5b13919135c373ecb104d19ea881cd4d",
"assets/assets/snackbar/types/failure.svg": "f9a890e8829d6d6daad90c3c802c872f",
"assets/assets/snackbar/types/help.svg": "08f0f0a5bbe15fe454e3bd59c973310a",
"assets/assets/snackbar/types/success.svg": "e74e73b44b7900099241e5d211d8ddaa",
"assets/assets/snackbar/types/warning.svg": "fea8151183fa6add29f7dd8c375b1ba7",
"assets/assets/svg/app-store-badge.svg": "2928664fe1fc6aca88583a6f606d60ba",
"assets/assets/svg/apple_logo.svg": "0c0e528a1980d271f2eeeb9cda281d09",
"assets/assets/svg/exit_icon.svg": "52814b0df193b71a9c75d64667d23f28",
"assets/assets/svg/facebook_logo.svg": "1e80416aa91f53526b9135b7fbcb8474",
"assets/assets/svg/google_logo.svg": "d5b50c2b9b4e27a67e4c5f53b6a88033",
"assets/assets/svg/home_icon.svg": "a3eed7c79189a713a795073c9afc9fad",
"assets/assets/svg/list.svg": "e49a1ade909ca7e55ff0b0dece917e38",
"assets/assets/svg/logout_icon.svg": "d599fdb2a3fe361f9ec8712912ed830a",
"assets/assets/svg/microsoft_logo.svg": "f38b84306846b7f6033ecb858a67b8fd",
"assets/assets/svg/profile_icon.svg": "9460694360a997ab724f7d8623237aa9",
"assets/assets/svg/settings_icon.svg": "174c5e65353a1da2bfb2f8d9f9766271",
"assets/assets/svg/signin_icon.svg": "ebbce83978ac0c782d6176bfce1db6f1",
"assets/assets/svg/signup_icon.svg": "2d88ad0ce1081f1a99d5fff88d306ddb",
"assets/assets/svg/twitter_x_logo.svg": "fedffeab76b5ac2efd5488da7423844d",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "ff478beb0dc038beb5a4f5110042e75c",
"assets/NOTICES": "06e188347fb2fc8270853ce2d68f42b3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f25e8e701660fb45e2a81ff3f43c6d5c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a33000aa5d642676bd6c15220ce2868b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a912de1bdee34cc20b57999416be0fcd",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "b44e70133a3aff3272e2684f4dca0c78",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "5237a61215d0b226465ab70332abb03a",
"icons/Icon-512.png": "93867acc8863094efbaba01e3eb37a40",
"icons/Icon-maskable-192.png": "6f98eadaf189848c6cd8aaad3d1f24a5",
"icons/Icon-maskable-512.png": "2249cf0bd53bd4443d0c4a395c813e7e",
"index.html": "29a90f629598a1a7a6eda4ebc08012e9",
"/": "29a90f629598a1a7a6eda4ebc08012e9",
"main.dart.js": "43de57a3eafb0e6ba4dc1c666954704a",
"manifest.json": "c42d947d732892982b7de4da2627cf60",
"version.json": "452a96d91d3cbf92fb5e46082e1dbe3f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
