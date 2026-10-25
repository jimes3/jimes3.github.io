/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/09/11/启发式算法代码/index.html","f6c2d0d5f12bef6aafa2e7d505cf0b28"],["/2024/09/12/从AR到SARIMA时间序列预测/index.html","45309a71e21510f36120d15564fbc4d8"],["/2024/10/01/PDF_math/index.html","d2289f2098d2ddc4dd743530401c1783"],["/2025/04/08/GNN/index.html","c16c38933548096a8d419b5fb755d41b"],["/2025/04/08/GitHub desktop基本用法/2023-05-07_232823.png","c24df821a6497444e71b2243e0577a9a"],["/2025/04/08/GitHub desktop基本用法/Untitled 1.png","2fa248a8f262c8636a07d3bd06dcc1fe"],["/2025/04/08/GitHub desktop基本用法/Untitled 10.png","c2154d964d2e468589b86bef5f35d53a"],["/2025/04/08/GitHub desktop基本用法/Untitled 11.png","abda8e93832cdb4fb8b0e6341c8d031f"],["/2025/04/08/GitHub desktop基本用法/Untitled 12.png","3505440efe0f7c43537137fd83adeb14"],["/2025/04/08/GitHub desktop基本用法/Untitled 13.png","46f19d6ccf828fd50d1317069a3aa2bb"],["/2025/04/08/GitHub desktop基本用法/Untitled 14.png","c7d61ce5820b53b7cfb746674160f9c5"],["/2025/04/08/GitHub desktop基本用法/Untitled 15.png","1c74bd4c3c479c6cbb717b5ab7ba9380"],["/2025/04/08/GitHub desktop基本用法/Untitled 16.png","17d74c538216b387e59724648a311cf9"],["/2025/04/08/GitHub desktop基本用法/Untitled 17.png","e61d189ea48bf0684d3c6330cae5b66e"],["/2025/04/08/GitHub desktop基本用法/Untitled 18.png","a0f26d2c02b09e6f98a49b4ed5e92990"],["/2025/04/08/GitHub desktop基本用法/Untitled 19.png","655dace5a204d04f04bb771c1f78f202"],["/2025/04/08/GitHub desktop基本用法/Untitled 2.png","326f9c7a13fe45ec249f127fc0380ccd"],["/2025/04/08/GitHub desktop基本用法/Untitled 20.png","68f746a0060ea6c081d1bf2c1496fb2f"],["/2025/04/08/GitHub desktop基本用法/Untitled 21.png","b1e5ea352441a541703f9d2867bc3841"],["/2025/04/08/GitHub desktop基本用法/Untitled 22.png","9197489c29212235b23d03aaafc12169"],["/2025/04/08/GitHub desktop基本用法/Untitled 23.png","f13175ce125954d6db5235205f48d978"],["/2025/04/08/GitHub desktop基本用法/Untitled 24.png","43e23660e25d8aa2e044c40c459cd400"],["/2025/04/08/GitHub desktop基本用法/Untitled 25.png","138b3364053bb65add68db6669f5d636"],["/2025/04/08/GitHub desktop基本用法/Untitled 26.png","426824e5d019a894a527b700abe629de"],["/2025/04/08/GitHub desktop基本用法/Untitled 27.png","6fcb131534b72e9365601b15cffa56bb"],["/2025/04/08/GitHub desktop基本用法/Untitled 3.png","354fa66f304720bdef613d8096574e32"],["/2025/04/08/GitHub desktop基本用法/Untitled 4.png","cd69f961522f00c1fac975902d60823d"],["/2025/04/08/GitHub desktop基本用法/Untitled 5.png","56c7f45017b1c73b44fe11be74a3b923"],["/2025/04/08/GitHub desktop基本用法/Untitled 6.png","4830b6f9dec4491262ec4335c953bb16"],["/2025/04/08/GitHub desktop基本用法/Untitled 7.png","50613175b6820d882c6b95df34780461"],["/2025/04/08/GitHub desktop基本用法/Untitled 8.png","d8513c20ac045674ba216bca64a1060a"],["/2025/04/08/GitHub desktop基本用法/Untitled 9.png","4305232b7f50b2c39bebbdcf89f10117"],["/2025/04/08/GitHub desktop基本用法/Untitled.png","af1264ba3284f0a578c35ca704f2ab4f"],["/2025/04/08/GitHub desktop基本用法/index.html","2b73b1cc3487b50b6b3656c5d5f3c9c0"],["/2025/04/08/RNN/LSTM.jpg","c34fd7c632befb396f4e157c98470abb"],["/2025/04/08/RNN/LSTM1.jpg","57f2cdd1b0cfcb163774e54535b40bfc"],["/2025/04/08/RNN/RNN1.jpg","758f76c6bab9f0219f3588b93787cfba"],["/2025/04/08/RNN/index.html","38e1c780b209d02ba8902f03e30eb2cf"],["/2025/04/08/RNN/结构.jpg","d7e72281db9e464a9a7b4229738c50e1"],["/2025/04/08/python程序带图片等资源打包/index.html","edf4d8b48801d09af85e65348b1f65b5"],["/2025/04/08/pytorch建立神经网络/index.html","2eed6ff7fba142fade07f8c5d335215c"],["/2025/04/08/pytorch数据集以及数据预处理/index.html","fe0a8a2513058bb20e087171f24e57ad"],["/2025/04/08/pytorch的torch/index.html","59bda586348b28d26bf20ddf6d05390f"],["/2025/04/08/transformer/index.html","4e46db98a260e805b9cb56cffe664999"],["/2025/04/08/transformer/transformer结构.jpg","26d347d1c6018cc16530e7761936a52a"],["/2025/04/08/交通运输工程学课程设计代码/index.html","d0af44290e5ae24ce029258cff41d0dc"],["/2025/04/08/人工智能学习导航/index.html","6716230a0d01959663f06a15e13e698a"],["/2025/04/08/卷积神经网络/index.html","05afebc3c1ae64cf4501992285209fcc"],["/2025/04/08/卷积神经网络/卷积.jpg","1144e9ddb23750ec1877335ca5b9bcfc"],["/2025/04/08/卷积神经网络/卷积映射.jpg","d54fe5c4bd2b0a2ee319dc0e3df5a19c"],["/2025/04/08/卷积神经网络/卷积核.jpg","3969f7a51960f77382756610730a961e"],["/2025/04/08/排队论模型代码/index.html","092fc3b2f8b89feac26be50d4c62178c"],["/2025/04/08/数据库/armstrong.png","741a26fa49aa88c62856a453782145c0"],["/2025/04/08/数据库/index.html","b11589eac9fb80e7b2a3ec153159813c"],["/2025/04/08/数据库/关系代数语言.png","a9f5a7da444ce6d7a8b8efc0448c2280"],["/2025/04/08/数据库/条件表达式.jpg","deb6c08debaa3c6fd4fde5913d591fc5"],["/2025/04/08/数据库/除法.jpg","e89e113bc766851db3354518ccf9b5fa"],["/2025/04/08/数据结构之栈与队列代码/index.html","d76533a292a0f1cb6a3486a86db32d18"],["/2025/04/08/数据结构之线性表代码/index.html","9211ace9f1ed7fddc72c020974772e18"],["/2025/04/08/灰色预测/index.html","7b01688f47ef71b260e91ebff5da06e1"],["/2025/04/08/生死狙击2净化行动挂机脚本/index.html","459174ccbab4b7f122d6bf4a1ff44949"],["/2025/04/08/神经网络基础（带数学公式）/LRelu-1.jpg","f010eca3c636a0cfdefa647f028b51d8"],["/2025/04/08/神经网络基础（带数学公式）/index.html","e9386d2615f3effe0977d3ca548245ff"],["/2025/04/08/神经网络基础（带数学公式）/relu-1.jpg","a700890ecfe183578f1a107b989820c4"],["/2025/04/08/神经网络基础（带数学公式）/sigmoid-1.jpg","8700f16266182247ec64d4ffdba2b762"],["/2025/04/08/神经网络基础（带数学公式）/softmax-1.jpg","7d6f562911a7f0fd908f1d5e477071bf"],["/2025/04/08/神经网络基础（带数学公式）/tanh-1.jpg","cb8571f4d0eee29a2e7afd80e46783d7"],["/2025/04/08/神经网络基础（带数学公式）/神经元.jpg","3bc2a81ebcb996e4940b87f746a643bc"],["/2025/04/08/神经网络基础（带数学公式）/神经元组合.jpg","504a43377811cb5d55849e2c9a4f43bf"],["/2025/04/08/神经网络基础（带数学公式）/神经网络结构.jpg","ac37ac9c814125fa901f41d4848045fa"],["/2025/04/08/结合熵权法的topsis客观评价/index.html","8189e5db6ae58843d2850d663936882b"],["/2025/07/19/c++学习文档/index.html","fde46ee4ba3d550e99474e8dd68187be"],["/2025/07/31/Linux学习文档/index.html","c1c6fb176ed21823e8942aaf1fd574d2"],["/2026/10/25/Canvas粒子互动示例/index.html","585ef04bea5eafa687d5ac653479fc7b"],["/404.html","9d6fdcb44be2991a874fdb266ae62b9b"],["/about/index.html","b7bf4ce1164f9d7fea49126ed693d2cd"],["/archives/2024/09/index.html","4a38672b06e8caa340cd3193fd11cc6d"],["/archives/2024/10/index.html","4eeaba1240aa6308c61ed253c171789b"],["/archives/2024/index.html","d178bc50225760d6ec86efc7a3ccf12d"],["/archives/2025/04/index.html","a667c49c23f0624501774e92661ef812"],["/archives/2025/04/page/2/index.html","b8ca4c00f0b86945278152f9f7e54fa4"],["/archives/2025/07/index.html","d88d69ffdf4820377f5852c6c082e9e6"],["/archives/2025/index.html","05833805e0bcb5e2885dd396715957f3"],["/archives/2025/page/2/index.html","4ee765b0f792461fd42078569c1ed660"],["/archives/2026/10/index.html","4fdc4264c5b825122e557c7650c4c385"],["/archives/2026/index.html","b0eb51f550189548a451728a255c4166"],["/archives/index.html","fc0bbf0bd80af40c44aece32b768f849"],["/archives/page/2/index.html","90fc7f28c5d6ba3d59370abef7939973"],["/categories/index.html","3e7f705d80df0fed6c21f7ef0f74f076"],["/categories/人工智能/index.html","3fc944ece28d0fdb252409116697a0e1"],["/categories/前端/index.html","c0cbde598df4d406eeb620d7bbbac386"],["/categories/基础工具/index.html","a8678dfe665013153dae842ccdad527a"],["/categories/数学建模/index.html","bfd26b1676da8910a4547825f8d97204"],["/categories/游戏/index.html","d9539fedded87580bcbe86f39b8b4414"],["/categories/游戏/自动化/index.html","91b325e7e9d5861a7988b02c0aaaa3f6"],["/categories/考研/index.html","90f9c281f17b970a0d45936c8a73f37f"],["/css/gitalk.css","dda66353075b3893a301d5f0e73d5699"],["/css/hbe.style.css","fcaaade86fb27219333c41afd7d96b16"],["/css/highlight-dark.css","09c0cfe8f304bea391aadf7dce3c8c4e"],["/css/highlight.css","a6ec400facef1ec9d47ffe52573379a8"],["/css/main.css","3f03f5da078a5034ef0043c5ba0915ae"],["/img/avatar.png","e4020cb9bc27a52f406fa41c882f5cd1"],["/img/default.png","68806dba9dd97a7766f0d30393a875c3"],["/img/fluid.png","4aed91411d3b02af426592260f4b7b12"],["/img/loading.gif","a7f8992e7cbe0d616d652a9309a4f04b"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/index.html","3b6e50fc5540bc8493437e8c4da8845e"],["/js/boot.js","7683fab2fc9d03a3a659aa956b3a54e8"],["/js/canvas-particle.js","722a04aa3b5dfe6440fbe055dae0a616"],["/js/color-schema.js","5e4105d10638e64b40820fa28567d0d5"],["/js/events.js","734c9d1a9b78947e2e2e2d8b88c5920b"],["/js/img-lazyload.js","fab30a410e5f490fce3f977a6936a714"],["/js/leancloud.js","fb4a815ccdb5d851d00561dbb62251c4"],["/js/local-search.js","9dc47a0b7b6bacfd16541c9b2b5b6bc5"],["/js/particle-demo.js","8cfd15f81fb7f790fd91811311667946"],["/js/plugins.js","6c10bee3f659ca91b534bf4a81d62f1e"],["/js/utils.js","f7ce9014de1cd7358eeb3aba81c8efe2"],["/lib/hbe.a3b9f59caa.js","12aa73d27e799df2a5beaf855a677bbe"],["/links/index.html","ad41251023cf1b9539d10bca5a18a642"],["/page/2/index.html","a1815e86f6f94cb3a2ccdbf266d30960"],["/sw-register.js","5a0acf7dcfde6653791e134abf0c61ef"],["/tags/Canvas/index.html","e8c3ed19b08e25080041d877ebea0cad"],["/tags/JavaScript/index.html","66a41bf6935cf6e03b13a8bc0747c47d"],["/tags/index.html","e9d7fc8daa7f66352072c718c3347cec"],["/tags/交互/index.html","b64ddab936a4e2d1f4ed648dedbed6ba"],["/考研复试.html","208412a2d8df19b5f0becfb230ef11ce"]];
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
