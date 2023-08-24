'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a2dab6f869d2764c4ebf2c4b6e3d91c7",
"assets/AssetManifest.json": "c47164cf18f0e4432309f85c4b87867a",
"assets/assets/Alineacion.png": "6dbdf242266304d47165ed873c83fa0c",
"assets/assets/Club.png": "f290709f6af94dc124c5372b9fb2d2bb",
"assets/assets/HomeClub.png": "65a24042b2deafb7464ed07a178b5205",
"assets/assets/HomeEntrenador.png": "bc3bfd7933f4e23fe1bef84862569d44",
"assets/assets/HomePadres.jpg": "d2da8456141d3d4952a18e61c21b7827",
"assets/assets/HomePubli.png": "7ffd74447a3e5a1718613b21961affb2",
"assets/assets/iconos/11.png": "a84d72a76a4345ce20d145b7935b7b4b",
"assets/assets/iconos/2tamarilla.png": "4e1a5fe0f1ec05a8649c26efd224b0eb",
"assets/assets/iconos/applestore.png": "b351a9c9125d18629108906a356cd413",
"assets/assets/iconos/balonazul.png": "adaac29a08ff3b5b3ad33b656d25b321",
"assets/assets/iconos/balongris.png": "cb9f25d7116866804e9a550c4a71435f",
"assets/assets/iconos/banquillo.png": "9884bd71c8387884e9e020815620b577",
"assets/assets/iconos/borrar.png": "7bbc5bfdb2254d6be0da2422a05101c9",
"assets/assets/iconos/buscar.png": "72d916bdece87550e8ed5996e6569a68",
"assets/assets/iconos/buscarblanco.png": "e591e5c68d4f9f6d675aba4a4a57de0b",
"assets/assets/iconos/calendario.png": "aa5b29f341d5943192d405085efa3d72",
"assets/assets/iconos/calendarioX.png": "8a61dab6179b184c51a2bef4d4fd3ce5",
"assets/assets/iconos/categoria1.png": "613cf128d268df1966fe6e783d0db220",
"assets/assets/iconos/centrocampista.png": "070536c62121dacfa6e9bc38a2c4241a",
"assets/assets/iconos/centrocampistarojo.png": "2490ce753306426d49ecaf2792aeed3d",
"assets/assets/iconos/cfutbol.png": "6aae59dbf8675341d073e3a541fb99a9",
"assets/assets/iconos/checkedazul.png": "4a12adc8986e492c50c29744c2d72c9a",
"assets/assets/iconos/configuracion.png": "692aeb2ad4b464fc91959953ca35b2ee",
"assets/assets/iconos/cronometro1.png": "1fa4fa857563c8124a3898f9b05b1382",
"assets/assets/iconos/cruz.png": "f2d33ecf2fcaeb205c4cab85928ee94d",
"assets/assets/iconos/cruz1.png": "3b5a41c0beeabc0fc587d3a9fddf3c63",
"assets/assets/iconos/cuotas.png": "6f62afa1aba263bfc0f7078efe6775ed",
"assets/assets/iconos/defensa.png": "bb9eb74ed9257ea08308bb4dcfccc3bb",
"assets/assets/iconos/defensarojo.png": "fd41f946e35b5a9a3c53f28dfc8fdec7",
"assets/assets/iconos/delantero.png": "6afe52c61eff688e85eab85b194d2242",
"assets/assets/iconos/Delantero1.png": "742de4f09892d877e0801fd2cddf6124",
"assets/assets/iconos/delanterorojo.png": "f227fa76d672b1e8dccb1b1b21dfb22b",
"assets/assets/iconos/disponible.png": "659518cba855188319e08f60562011a9",
"assets/assets/iconos/email.png": "715e37002c7ecfeaca3111d9e5e65ad8",
"assets/assets/iconos/enmano.png": "1d6044db1b3100c31f77f347e2b0a2d7",
"assets/assets/iconos/EscClubAzul.png": "0217aa7a0f621c3b2cc7e45916595114",
"assets/assets/iconos/fb.png": "ba65acbb655c75a412b3203bbe7a28d9",
"assets/assets/iconos/fiebre1.png": "b6272e16b803cb37c08b6488a008b6af",
"assets/assets/iconos/googleplay.png": "9d93de90d3fa8da19466a5c35e2c4f84",
"assets/assets/iconos/ig.png": "75cd073804c684ea383b767c5093f8d0",
"assets/assets/iconos/impresora.png": "14cffbf7ae3df11f3bdc092d23e3210a",
"assets/assets/iconos/jornada1.png": "08869915a0f804dcd61a43852942a312",
"assets/assets/iconos/Ko.png": "a7433c5be82f2b49658635b67e68a5e0",
"assets/assets/iconos/lateralidad.png": "d4bf45520de5dad1f1b70df9ee4197bb",
"assets/assets/iconos/lesion.png": "e7db994851f1124dfa95c1e2466caecc",
"assets/assets/iconos/lesionado.png": "e6fcfe1ac5d90be0fce1b2974ef941f7",
"assets/assets/iconos/libros.png": "a522f0c4e72f1db4b1138f5fbf9a7dd8",
"assets/assets/iconos/loading.gif": "9627baf241edb820aa70797c3c2f6320",
"assets/assets/iconos/logout.png": "0d7517fc05f2cd82b19fe81eb68b1b38",
"assets/assets/iconos/mas.png": "8a50448657ec296b8222ec66f43b8cbc",
"assets/assets/iconos/nodisponible.png": "b8f84af8d2031bdb62ea9dc2a8feb5c0",
"assets/assets/iconos/notificaciones.png": "7950050b702dd0a3f67de31d5a96f286",
"assets/assets/iconos/Ok.png": "acf80fc4518002e15dfaaa8652d2b6d9",
"assets/assets/iconos/pagopendiente.png": "63e5cf2744e32da2be63fb80d3704cc0",
"assets/assets/iconos/penalti.png": "31ce5a56a5e9cf9153fef177fe12eed8",
"assets/assets/iconos/perfil.png": "819d739b3334c2770dd88a276b01f3d2",
"assets/assets/iconos/porcenta.png": "478c3861431904e1ccae6719d369ae9c",
"assets/assets/iconos/portero.png": "622b2b95f0e81f03dfd5df977ea3a869",
"assets/assets/iconos/porterorojo.png": "970c6e2d90a68687e898f3edecb7375f",
"assets/assets/iconos/provincia.png": "cd4217cdeb76569e02c3a0583a60616e",
"assets/assets/iconos/provincia1.png": "466645b39343c270cf0cb9ec1d13423b",
"assets/assets/iconos/reloj1.png": "e3d2bce6550ce6d4c18b99485381788f",
"assets/assets/iconos/star.png": "5043e46308826f36f956cfe8c38e7e11",
"assets/assets/iconos/tamarilla.png": "694bdfe4ec01278e3efe89a16176d113",
"assets/assets/iconos/tango.png": "aea64aac5758838c1776d9144dd402bd",
"assets/assets/iconos/tarjeta.png": "9126fa2318d904b58a59dfaeca36a089",
"assets/assets/iconos/temporada1.png": "7157d11bd34b3ae44e1e359b1dc7f6e0",
"assets/assets/iconos/tipocategoria.png": "74b1f7323d2825bf9ee8cdae07461d0b",
"assets/assets/iconos/trabajo.png": "6f419ffc66f108d6ca3ef48a7cd85b19",
"assets/assets/iconos/transferencia.png": "6540ccdbe5deeec434501eee674696c0",
"assets/assets/iconos/troja.png": "aab9926c4a6aad081c6420c44edc65ed",
"assets/assets/iconos/www.png": "4adc5f9021c5ddbbaae7c11e31b4c4de",
"assets/assets/logoplayfutbol.png": "4b5798c80bea545dfb178db1b18b18b7",
"assets/assets/logoplayfutbolapp.png": "cf9a614563655d959659345bd12e844f",
"assets/assets/logoplayfutbolhorizontal.png": "043c225c94173725f4d37421c8e0105e",
"assets/assets/menu/billete.png": "1d6044db1b3100c31f77f347e2b0a2d7",
"assets/assets/menu/config.png": "9c29d67160bb0bca13f6a90b9dd02416",
"assets/assets/menu/config1.png": "692aeb2ad4b464fc91959953ca35b2ee",
"assets/assets/menu/contabilidad.png": "c8c113990cb7723be23f7921240d8edb",
"assets/assets/menu/contabilidad1.png": "86b45a0fa22a848dc226832f4f4f5452",
"assets/assets/menu/entrenamientos.png": "96e5cbd46166a0ca7f34470fd89d05f8",
"assets/assets/menu/entrenamientos1.png": "63b98d5ec4c8b198750a64cf24120587",
"assets/assets/menu/equipos.png": "9c211bf47d41a8e0b61cbe2a76493655",
"assets/assets/menu/equipos1.png": "311ff13470324bba4e896df2557b8696",
"assets/assets/menu/estadisticas.png": "435b6803e218a2c9d3a95f3ffe156982",
"assets/assets/menu/jugadores.png": "7ec9904bb60e1e870ec3c1107ea99118",
"assets/assets/menu/jugadores1.png": "31e75b41cd4a978d24ce889f49c5054b",
"assets/assets/menu/listado.png": "e5bcf3d062a0d60f4edcf1d4bc0c05de",
"assets/assets/menu/listado1.png": "da3aec72e84e0354bb38e88e7eb6db50",
"assets/assets/menu/nuevo.png": "01706cdf646682bd2f8b5367f4161e55",
"assets/assets/menu/partidos.png": "61701414c9845dedb48ddc61deb683d6",
"assets/assets/menu/partidos1.png": "bd7d8d2717556993d451698a731a289c",
"assets/assets/menu/resultados.png": "810179ef5cce0daa19c7b0aba1e70032",
"assets/assets/menu/usuarios.png": "74b1f7323d2825bf9ee8cdae07461d0b",
"assets/assets/no-image.png": "1bdef0b5837fe56734fd7d7d93a83ee5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "65e21b5db78a7c132bbb04776ec9c399",
"assets/NOTICES": "2867811e4069fbf932e65b3cac088e5b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2592359d156e4ab882f797d620cf238d",
"/": "2592359d156e4ab882f797d620cf238d",
"main.dart.js": "31827269bc012f01be3babcf7c99bfc7",
"manifest.json": "d6197a12a84af55a946f98791f4e6aa0",
"version.json": "7e6439915ac20369e9bb9bdb735776d7"};
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
