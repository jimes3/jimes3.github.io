/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/09/GitHub desktop基本用法/2023-05-07_232823.png","c24df821a6497444e71b2243e0577a9a"],["/2024/01/09/GitHub desktop基本用法/Untitled 1.png","2fa248a8f262c8636a07d3bd06dcc1fe"],["/2024/01/09/GitHub desktop基本用法/Untitled 10.png","c2154d964d2e468589b86bef5f35d53a"],["/2024/01/09/GitHub desktop基本用法/Untitled 11.png","abda8e93832cdb4fb8b0e6341c8d031f"],["/2024/01/09/GitHub desktop基本用法/Untitled 12.png","3505440efe0f7c43537137fd83adeb14"],["/2024/01/09/GitHub desktop基本用法/Untitled 13.png","46f19d6ccf828fd50d1317069a3aa2bb"],["/2024/01/09/GitHub desktop基本用法/Untitled 14.png","c7d61ce5820b53b7cfb746674160f9c5"],["/2024/01/09/GitHub desktop基本用法/Untitled 15.png","1c74bd4c3c479c6cbb717b5ab7ba9380"],["/2024/01/09/GitHub desktop基本用法/Untitled 16.png","17d74c538216b387e59724648a311cf9"],["/2024/01/09/GitHub desktop基本用法/Untitled 17.png","e61d189ea48bf0684d3c6330cae5b66e"],["/2024/01/09/GitHub desktop基本用法/Untitled 18.png","a0f26d2c02b09e6f98a49b4ed5e92990"],["/2024/01/09/GitHub desktop基本用法/Untitled 19.png","655dace5a204d04f04bb771c1f78f202"],["/2024/01/09/GitHub desktop基本用法/Untitled 2.png","326f9c7a13fe45ec249f127fc0380ccd"],["/2024/01/09/GitHub desktop基本用法/Untitled 20.png","68f746a0060ea6c081d1bf2c1496fb2f"],["/2024/01/09/GitHub desktop基本用法/Untitled 21.png","b1e5ea352441a541703f9d2867bc3841"],["/2024/01/09/GitHub desktop基本用法/Untitled 22.png","9197489c29212235b23d03aaafc12169"],["/2024/01/09/GitHub desktop基本用法/Untitled 23.png","f13175ce125954d6db5235205f48d978"],["/2024/01/09/GitHub desktop基本用法/Untitled 24.png","43e23660e25d8aa2e044c40c459cd400"],["/2024/01/09/GitHub desktop基本用法/Untitled 25.png","138b3364053bb65add68db6669f5d636"],["/2024/01/09/GitHub desktop基本用法/Untitled 26.png","426824e5d019a894a527b700abe629de"],["/2024/01/09/GitHub desktop基本用法/Untitled 27.png","6fcb131534b72e9365601b15cffa56bb"],["/2024/01/09/GitHub desktop基本用法/Untitled 3.png","354fa66f304720bdef613d8096574e32"],["/2024/01/09/GitHub desktop基本用法/Untitled 4.png","cd69f961522f00c1fac975902d60823d"],["/2024/01/09/GitHub desktop基本用法/Untitled 5.png","56c7f45017b1c73b44fe11be74a3b923"],["/2024/01/09/GitHub desktop基本用法/Untitled 6.png","4830b6f9dec4491262ec4335c953bb16"],["/2024/01/09/GitHub desktop基本用法/Untitled 7.png","50613175b6820d882c6b95df34780461"],["/2024/01/09/GitHub desktop基本用法/Untitled 8.png","d8513c20ac045674ba216bca64a1060a"],["/2024/01/09/GitHub desktop基本用法/Untitled 9.png","4305232b7f50b2c39bebbdcf89f10117"],["/2024/01/09/GitHub desktop基本用法/Untitled.png","af1264ba3284f0a578c35ca704f2ab4f"],["/2024/01/09/GitHub desktop基本用法/index.html","242951e697ad1e2507ccc795581e1747"],["/2024/01/10/算法学习导航/index.html","6ac9d026d9b179d8cc9da355e83a4554"],["/2024/01/12/python程序带图片等资源打包/index.html","583ba938278349230c6b9a55591af19e"],["/404.html","b995544bea51bcf5cb5b2b8cc5d628a0"],["/about/index.html","170be4b114d89e410cbe9a35a7169867"],["/archives/2024/01/index.html","33ac8b4b67276a930a1e9831a58e55cf"],["/archives/2024/index.html","94a36ccbd6fb3845ba490e60c7bfc304"],["/archives/index.html","12714dcc555d0de155f10ba3c8cc4fd7"],["/categories/index.html","ebe9d91eddb533773246a4a410cfa0e1"],["/categories/人工智能/index.html","e28a888c0907a48a28558e81ac07d40d"],["/categories/基础工具/index.html","acb7fe3da958e825da402f298e7dea8f"],["/css/gitalk.css","eba36f8ca5d2b08b78cd012fc3555381"],["/css/highlight-dark.css","28aa40846afab9eeecb2c53fe7a08ca4"],["/css/highlight.css","90b3122736bbb495ee402aaf05fe483e"],["/css/main.css","30f483a119a312eee8a5b86202501842"],["/img/avatar.png","e4020cb9bc27a52f406fa41c882f5cd1"],["/img/default.png","68977cd063e5d182b3a43614be3d98d8"],["/img/fluid.png","4aed91411d3b02af426592260f4b7b12"],["/img/loading.gif","93e33d89a8cbe54ec945235d25af5607"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/index.html","50d80a8a1856aef0aac0717a8237d32f"],["/js/boot.js","7683fab2fc9d03a3a659aa956b3a54e8"],["/js/color-schema.js","5e4105d10638e64b40820fa28567d0d5"],["/js/events.js","734c9d1a9b78947e2e2e2d8b88c5920b"],["/js/img-lazyload.js","fab30a410e5f490fce3f977a6936a714"],["/js/leancloud.js","fb4a815ccdb5d851d00561dbb62251c4"],["/js/local-search.js","9dc47a0b7b6bacfd16541c9b2b5b6bc5"],["/js/plugins.js","6c10bee3f659ca91b534bf4a81d62f1e"],["/js/utils.js","f7ce9014de1cd7358eeb3aba81c8efe2"],["/links/index.html","57618673c92cd85a8055130b78ecbfe7"],["/sw-register.js","4e351c28186d809a1364ef386effa6bd"],["/tags/index.html","7eff48eff7fbef2194247f21b946fc9a"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
