/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["D:/myweb/public/2021/02/20/file_name/index.html","00321fd37e7af97d07ac14d2925aa6fa"],["D:/myweb/public/2021/02/20/hello-world/index.html","36aa26c16f6feddea4339c655ff80a0c"],["D:/myweb/public/404.html","c06a0e956812275f2b8f72ffb4330dc4"],["D:/myweb/public/archives/2021/02/index.html","9632477f39719f810be6372a2e580757"],["D:/myweb/public/archives/2021/index.html","40cf2f1e55625425f560fb488c524541"],["D:/myweb/public/archives/index.html","9d5694a2af4a641518fb6bcc39f6ef64"],["D:/myweb/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/myweb/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/myweb/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/myweb/public/categories/index.html","d1e33ec96323f42af085ab21444e0bb4"],["D:/myweb/public/categories/打卡/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/myweb/public/css/cont.css","d684ed91c4996166c06bf511187f4db5"],["D:/myweb/public/css/index.css","36a72dd17d3e81fbb3204f8b47dcd4df"],["D:/myweb/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/myweb/public/css/z.css","62f9443f82e5e1765b4c0a7a8bbc11a7"],["D:/myweb/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/myweb/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/myweb/public/img/alipay.jpg","f5e177b2ac7219e5146b5be2e28618ae"],["D:/myweb/public/img/avatar.png","1366a4f67157a922f1e3209c7779542b"],["D:/myweb/public/img/fa.png","5f4ca3f63ccbfe01a691a29b44f29473"],["D:/myweb/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/myweb/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/myweb/public/img/h.png","dabdb6b3cf9981741797c5a6c93969dc"],["D:/myweb/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/myweb/public/img/n.png","d22b66fcffddf04488b4726d75557499"],["D:/myweb/public/img/wechat.jpg","f6af2e47c701f7292eb8150a15e39bb7"],["D:/myweb/public/img/wode.png","037d9167556772dac531a5df5b5813b2"],["D:/myweb/public/img/z.png","293621a0d9b2eaad64e49c1930efd9b5"],["D:/myweb/public/img/zhang.png","4ede025a4c07d718f56a126e53520508"],["D:/myweb/public/index.html","d89457477f5e2ef3dd0dd7a2913e2832"],["D:/myweb/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["D:/myweb/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["D:/myweb/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["D:/myweb/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["D:/myweb/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["D:/myweb/public/link/index.html","686b3437ad7ee4e3a373259185df001b"],["D:/myweb/public/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["D:/myweb/public/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["D:/myweb/public/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["D:/myweb/public/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["D:/myweb/public/live2d-widget/autoload.js","767726c570dad7d1469fa5dba259937e"],["D:/myweb/public/live2d-widget/demo/demo.html","2596a8630c0801002b3dff127b50518b"],["D:/myweb/public/live2d-widget/demo/login.html","814084edfca521aea7c069da8e0698ad"],["D:/myweb/public/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["D:/myweb/public/live2d-widget/waifu-tips.js","a9c44b950d15d302701dc6f000f22720"],["D:/myweb/public/live2d-widget/waifu.css","3a99c2d53bcc1909828ae072e789fda1"],["D:/myweb/public/music/index-1.html","8354988a62319dfab9c9fff2e357ba8a"],["D:/myweb/public/tags/index.html","8720b32ba34165693e5a14801328e900"],["D:/myweb/public/tags/打卡/index.html","a283f5efd167a3b58e4ae678d4ccd402"],["D:/myweb/public/timeline/index.html","118db5b9a08797c8d320ea1bef58b68c"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







