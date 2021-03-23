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

var precacheConfig = [["C:/wode/public/2021/03/23/article-title/index.html","2015a87fab986f5b1bdee0ec824cc278"],["C:/wode/public/2021/03/23/file_name/index.html","4d36c3305bf57a3bf8228129180910b6"],["C:/wode/public/2021/03/23/hello-world/index.html","f696e2aa2bd548309c929e610da58f4a"],["C:/wode/public/2021/03/23/zhuyi/index.html","e6417de414aa7ce7abd6b8b4f8f3e6b9"],["C:/wode/public/2021/03/23/博文的题目/index.html","38cc0327806f510d17283914015d9301"],["C:/wode/public/404.html","4bb71e38596d34f49d2b5a06d27e6975"],["C:/wode/public/archives/2021/03/index.html","3e99a9a16fff6486f9a2ea6217937f77"],["C:/wode/public/archives/2021/index.html","6d531e8d6c09f3bd0150f22fdb104944"],["C:/wode/public/archives/index.html","176435ab1270e0da646b063bfed62a50"],["C:/wode/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["C:/wode/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["C:/wode/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["C:/wode/public/categories/index.html","ebaa8721618e15bfe74c5f8b5d5a75ea"],["C:/wode/public/categories/打卡/index.html","c2ccb624deb957162bd6a9d09a356544"],["C:/wode/public/css/cont.css","d684ed91c4996166c06bf511187f4db5"],["C:/wode/public/css/index.css","72433ed827f9183bce5c4e1e3850e3ef"],["C:/wode/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/wode/public/css/z.css","62f9443f82e5e1765b4c0a7a8bbc11a7"],["C:/wode/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["C:/wode/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/wode/public/img/alipay.jpg","f5e177b2ac7219e5146b5be2e28618ae"],["C:/wode/public/img/avatar.png","1366a4f67157a922f1e3209c7779542b"],["C:/wode/public/img/fa.png","5f4ca3f63ccbfe01a691a29b44f29473"],["C:/wode/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["C:/wode/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["C:/wode/public/img/h.png","dabdb6b3cf9981741797c5a6c93969dc"],["C:/wode/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["C:/wode/public/img/n.png","d22b66fcffddf04488b4726d75557499"],["C:/wode/public/img/wechat.jpg","f6af2e47c701f7292eb8150a15e39bb7"],["C:/wode/public/img/wode.png","037d9167556772dac531a5df5b5813b2"],["C:/wode/public/img/z.png","293621a0d9b2eaad64e49c1930efd9b5"],["C:/wode/public/img/zhang.png","4ede025a4c07d718f56a126e53520508"],["C:/wode/public/index.html","ebfc31e8390de0e570d7d7458687c836"],["C:/wode/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["C:/wode/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["C:/wode/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["C:/wode/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["C:/wode/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["C:/wode/public/link/index.html","58ab2a8ee50da491ef1fedd072e02f8f"],["C:/wode/public/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["C:/wode/public/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["C:/wode/public/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["C:/wode/public/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["C:/wode/public/live2d-widget/autoload.js","767726c570dad7d1469fa5dba259937e"],["C:/wode/public/live2d-widget/demo/demo.html","2596a8630c0801002b3dff127b50518b"],["C:/wode/public/live2d-widget/demo/login.html","814084edfca521aea7c069da8e0698ad"],["C:/wode/public/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["C:/wode/public/live2d-widget/waifu-tips.js","a9c44b950d15d302701dc6f000f22720"],["C:/wode/public/live2d-widget/waifu.css","3a99c2d53bcc1909828ae072e789fda1"],["C:/wode/public/music/index-1.html","394067f7b5c02e76e709b278c25a9a4f"],["C:/wode/public/tags/index.html","55d42d6595129811387e42be48350749"],["C:/wode/public/tags/打卡/index.html","f0ee6153d9b684b64bb8bf89338ab0cf"],["C:/wode/public/timeline/index.html","5c115c6db9a43e26d8f78ec2aa4fe4a9"]];
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







