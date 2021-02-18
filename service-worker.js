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

var precacheConfig = [["C:/Users/27431/Desktop/myweb/public/2021/02/17/file_name/index.html","8f638819d11ba5861b5a04f66c8b8f3b"],["C:/Users/27431/Desktop/myweb/public/2021/02/17/hello-world/index.html","daf6915313b53948b4627acda77a7859"],["C:/Users/27431/Desktop/myweb/public/404.html","b957e2938ef4513edd49bcbb4d70eb63"],["C:/Users/27431/Desktop/myweb/public/archives/2021/02/index.html","79f011219fabe4f10fc56a996a4c0bdd"],["C:/Users/27431/Desktop/myweb/public/archives/2021/index.html","7a4a4e285f7e2325545abf1c92c9117f"],["C:/Users/27431/Desktop/myweb/public/archives/index.html","864f04c360abdd3f8e8ca2aa02ca0050"],["C:/Users/27431/Desktop/myweb/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["C:/Users/27431/Desktop/myweb/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["C:/Users/27431/Desktop/myweb/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["C:/Users/27431/Desktop/myweb/public/categories/index.html","904913c169964f042d5db71b3af90b9b"],["C:/Users/27431/Desktop/myweb/public/categories/分类/index.html","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/27431/Desktop/myweb/public/css/index.css","8574cd173afcebe5a9b343fde9b66bde"],["C:/Users/27431/Desktop/myweb/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/27431/Desktop/myweb/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["C:/Users/27431/Desktop/myweb/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/27431/Desktop/myweb/public/img/alipay.jpg","f5e177b2ac7219e5146b5be2e28618ae"],["C:/Users/27431/Desktop/myweb/public/img/avatar.png","1366a4f67157a922f1e3209c7779542b"],["C:/Users/27431/Desktop/myweb/public/img/fa.png","5f4ca3f63ccbfe01a691a29b44f29473"],["C:/Users/27431/Desktop/myweb/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["C:/Users/27431/Desktop/myweb/public/img/h.png","dabdb6b3cf9981741797c5a6c93969dc"],["C:/Users/27431/Desktop/myweb/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["C:/Users/27431/Desktop/myweb/public/img/n.png","d22b66fcffddf04488b4726d75557499"],["C:/Users/27431/Desktop/myweb/public/img/wechat.jpg","f6af2e47c701f7292eb8150a15e39bb7"],["C:/Users/27431/Desktop/myweb/public/img/z.png","293621a0d9b2eaad64e49c1930efd9b5"],["C:/Users/27431/Desktop/myweb/public/img/zhang.png","4ede025a4c07d718f56a126e53520508"],["C:/Users/27431/Desktop/myweb/public/index.html","13ddeb4efb23b2cd027015d6afe4734b"],["C:/Users/27431/Desktop/myweb/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["C:/Users/27431/Desktop/myweb/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["C:/Users/27431/Desktop/myweb/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["C:/Users/27431/Desktop/myweb/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["C:/Users/27431/Desktop/myweb/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["C:/Users/27431/Desktop/myweb/public/link/index.html","c2bcbe47f5977ea9e644e4a533a07936"],["C:/Users/27431/Desktop/myweb/public/tags/index.html","0f46ed25311ad60b2e4a58f92f19a06b"],["C:/Users/27431/Desktop/myweb/public/tags/标签名/index.html","39db262e82eb5037c110c6e19b293d24"]];
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







