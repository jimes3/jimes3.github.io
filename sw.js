/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/09/GitHub desktop基本用法/2023-05-07_232823.png","c24df821a6497444e71b2243e0577a9a"],["/2024/01/09/GitHub desktop基本用法/Untitled 1.png","2fa248a8f262c8636a07d3bd06dcc1fe"],["/2024/01/09/GitHub desktop基本用法/Untitled 10.png","c2154d964d2e468589b86bef5f35d53a"],["/2024/01/09/GitHub desktop基本用法/Untitled 11.png","abda8e93832cdb4fb8b0e6341c8d031f"],["/2024/01/09/GitHub desktop基本用法/Untitled 12.png","3505440efe0f7c43537137fd83adeb14"],["/2024/01/09/GitHub desktop基本用法/Untitled 13.png","46f19d6ccf828fd50d1317069a3aa2bb"],["/2024/01/09/GitHub desktop基本用法/Untitled 14.png","c7d61ce5820b53b7cfb746674160f9c5"],["/2024/01/09/GitHub desktop基本用法/Untitled 15.png","1c74bd4c3c479c6cbb717b5ab7ba9380"],["/2024/01/09/GitHub desktop基本用法/Untitled 16.png","17d74c538216b387e59724648a311cf9"],["/2024/01/09/GitHub desktop基本用法/Untitled 17.png","e61d189ea48bf0684d3c6330cae5b66e"],["/2024/01/09/GitHub desktop基本用法/Untitled 18.png","a0f26d2c02b09e6f98a49b4ed5e92990"],["/2024/01/09/GitHub desktop基本用法/Untitled 19.png","655dace5a204d04f04bb771c1f78f202"],["/2024/01/09/GitHub desktop基本用法/Untitled 2.png","326f9c7a13fe45ec249f127fc0380ccd"],["/2024/01/09/GitHub desktop基本用法/Untitled 20.png","68f746a0060ea6c081d1bf2c1496fb2f"],["/2024/01/09/GitHub desktop基本用法/Untitled 21.png","b1e5ea352441a541703f9d2867bc3841"],["/2024/01/09/GitHub desktop基本用法/Untitled 22.png","9197489c29212235b23d03aaafc12169"],["/2024/01/09/GitHub desktop基本用法/Untitled 23.png","f13175ce125954d6db5235205f48d978"],["/2024/01/09/GitHub desktop基本用法/Untitled 24.png","43e23660e25d8aa2e044c40c459cd400"],["/2024/01/09/GitHub desktop基本用法/Untitled 25.png","138b3364053bb65add68db6669f5d636"],["/2024/01/09/GitHub desktop基本用法/Untitled 26.png","426824e5d019a894a527b700abe629de"],["/2024/01/09/GitHub desktop基本用法/Untitled 27.png","6fcb131534b72e9365601b15cffa56bb"],["/2024/01/09/GitHub desktop基本用法/Untitled 3.png","354fa66f304720bdef613d8096574e32"],["/2024/01/09/GitHub desktop基本用法/Untitled 4.png","cd69f961522f00c1fac975902d60823d"],["/2024/01/09/GitHub desktop基本用法/Untitled 5.png","56c7f45017b1c73b44fe11be74a3b923"],["/2024/01/09/GitHub desktop基本用法/Untitled 6.png","4830b6f9dec4491262ec4335c953bb16"],["/2024/01/09/GitHub desktop基本用法/Untitled 7.png","50613175b6820d882c6b95df34780461"],["/2024/01/09/GitHub desktop基本用法/Untitled 8.png","d8513c20ac045674ba216bca64a1060a"],["/2024/01/09/GitHub desktop基本用法/Untitled 9.png","4305232b7f50b2c39bebbdcf89f10117"],["/2024/01/09/GitHub desktop基本用法/Untitled.png","af1264ba3284f0a578c35ca704f2ab4f"],["/2024/01/09/GitHub desktop基本用法/index.html","4969b2c27b96dc3a05749d20b384cf67"],["/2024/01/10/人工智能学习导航/index.html","c41f3521a20bc6bc140264d6af160ed6"],["/2024/01/12/python程序带图片等资源打包/index.html","5671c1d4e0435dbcfda9ea1cde113846"],["/2024/02/02/数据结构之线性表代码/index.html","b564a64538c5b4644b36bf2aaeeda083"],["/2024/02/03/数据结构之栈与队列代码/index.html","2666fc8b426e7baa4d8d6810bbd23782"],["/2024/07/21/生死狙击2净化行动挂机脚本/index.html","9ed7462131129bcc0ca8890c9410426d"],["/2024/09/11/交通运输工程学课程设计代码/index.html","f5112b71d020303e1310643f0a6c39bb"],["/2024/09/11/启发式算法代码/index.html","00760465cf8f37f9d9923f0c88edd538"],["/2024/09/11/排队论模型代码/index.html","760a9faa6d6915833a04db9917ccf80b"],["/2024/09/11/灰色预测/index.html","6a5a39c1da2ad87a52c4167745d7e63f"],["/2024/09/11/结合熵权法的topsis客观评价/index.html","37fd0a74e52f20047ee5390d38739cec"],["/2024/09/12/从AR到SARIMA时间序列预测/index.html","cbc0a59a28c07ab58d9a2dde4d7d89c5"],["/2024/10/01/PDF_math/index.html","e1e99bff1b1e03b99eb6e084e6783fe8"],["/2025/01/11/数据库/armstrong.png","741a26fa49aa88c62856a453782145c0"],["/2025/01/11/数据库/index.html","513975333d8fb0226117ab0bf75aaa31"],["/2025/01/11/数据库/关系代数语言.png","a9f5a7da444ce6d7a8b8efc0448c2280"],["/2025/01/11/数据库/条件表达式.jpg","deb6c08debaa3c6fd4fde5913d591fc5"],["/2025/01/11/数据库/除法.jpg","e89e113bc766851db3354518ccf9b5fa"],["/2025/01/19/神经网络基础（带数学公式）/LRelu-1.jpg","f010eca3c636a0cfdefa647f028b51d8"],["/2025/01/19/神经网络基础（带数学公式）/index.html","67faeae7fdf88f728add6dce1e105060"],["/2025/01/19/神经网络基础（带数学公式）/relu-1.jpg","a700890ecfe183578f1a107b989820c4"],["/2025/01/19/神经网络基础（带数学公式）/sigmoid-1.jpg","8700f16266182247ec64d4ffdba2b762"],["/2025/01/19/神经网络基础（带数学公式）/softmax-1.jpg","7d6f562911a7f0fd908f1d5e477071bf"],["/2025/01/19/神经网络基础（带数学公式）/tanh-1.jpg","cb8571f4d0eee29a2e7afd80e46783d7"],["/2025/01/19/神经网络基础（带数学公式）/神经元.jpg","3bc2a81ebcb996e4940b87f746a643bc"],["/2025/01/19/神经网络基础（带数学公式）/神经元组合.jpg","504a43377811cb5d55849e2c9a4f43bf"],["/2025/01/19/神经网络基础（带数学公式）/神经网络结构.jpg","ac37ac9c814125fa901f41d4848045fa"],["/2025/01/21/卷积神经网络/index.html","175658ee9edcb9586a1ca500f8787f8f"],["/2025/01/21/卷积神经网络/卷积.jpg","1144e9ddb23750ec1877335ca5b9bcfc"],["/2025/01/21/卷积神经网络/卷积映射.jpg","d54fe5c4bd2b0a2ee319dc0e3df5a19c"],["/2025/01/21/卷积神经网络/卷积核.jpg","3969f7a51960f77382756610730a961e"],["/2025/01/22/transformer/index.html","637e48e8681948cdf6b0283e53457c5b"],["/2025/01/22/transformer/transformer结构.jpg","26d347d1c6018cc16530e7761936a52a"],["/2025/01/26/pytorch建立神经网络/index.html","95fd90815102c3c61c660ae73308912d"],["/2025/01/26/pytorch数据集以及数据预处理/index.html","7c0c5895389a321e2db40619c566d43f"],["/2025/01/26/pytorch的torch/index.html","93401bbed7ff5d02d2a635d0f8a360c6"],["/2025/02/08/RNN/LSTM.jpg","c34fd7c632befb396f4e157c98470abb"],["/2025/02/08/RNN/LSTM1.jpg","57f2cdd1b0cfcb163774e54535b40bfc"],["/2025/02/08/RNN/RNN1.jpg","758f76c6bab9f0219f3588b93787cfba"],["/2025/02/08/RNN/index.html","f11659b64ab3a702a06c9ad3ce870d61"],["/2025/02/08/RNN/结构.jpg","d7e72281db9e464a9a7b4229738c50e1"],["/2025/02/14/GNN/index.html","c5087dc37d93097cb800be7c5af69112"],["/2025/07/19/c++学习文档/index.html","f0bc7122192fb5b1e94bdd9e32c43f20"],["/2025/07/31/Linux学习文档/index.html","8c5d34f0e50441e9c977d87db50d29a0"],["/404.html","8173dbeab2b7dbe3d6192c43060e82f8"],["/about/index.html","ec01f83773cfb8a581d3a02f6fd699a1"],["/archives/2024/01/index.html","c832fd9ce7aefd34782c061cfcfed94d"],["/archives/2024/02/index.html","37212142d2c01543d2a69ba063a72270"],["/archives/2024/07/index.html","b2d4388d6440a273e7bab945a77721d6"],["/archives/2024/09/index.html","8c23cc1adc17354bfa8fa0b8aaf5fed9"],["/archives/2024/10/index.html","79a04aa7d3c61b216eec4281539566cf"],["/archives/2024/index.html","712c7b8251971440618db9c74116cb68"],["/archives/2025/01/index.html","57c1254c452797200fa13c9accee59e4"],["/archives/2025/02/index.html","c718e9d8ab60c0384cd4b266c6f491c4"],["/archives/2025/07/index.html","5c4a0f4aa975f68a9d9468dfb7908ba4"],["/archives/2025/index.html","4f15b571c17e486bff8baacbfcb87610"],["/archives/index.html","c0f87a6a02a8eecf5cecc2f49cd3ab40"],["/archives/page/2/index.html","128c1dc1676df54c9c138fa2978404db"],["/categories/index.html","1e8af9048b4ffc36d0102f9b98bd3093"],["/categories/人工智能/index.html","e35f17c91cdcc8f8de85332d9ca1cc3e"],["/categories/基础工具/index.html","9faa9cf2e47358460b3d16b7a0384dec"],["/categories/数学建模/index.html","f6f7fcc9a828cf3e0498976803af49ce"],["/categories/游戏/index.html","5b8172dea18340c8b0ded3c1cf1064dd"],["/categories/游戏/自动化/index.html","357b9833c028b2ef16c6a85db8754f3e"],["/categories/考研/index.html","01446e0baa79026ef82e1b230066e248"],["/css/gitalk.css","a16acfbb3533a89fdbb9f8562798eb12"],["/css/highlight-dark.css","bc64c43aef36aa571eac099405e09551"],["/css/highlight.css","861529f683b476d606131f592ac7f6da"],["/css/main.css","e5b32cbfbf21f0c8b75f072305b2cd9b"],["/img/avatar.png","e4020cb9bc27a52f406fa41c882f5cd1"],["/img/default.png","68806dba9dd97a7766f0d30393a875c3"],["/img/fluid.png","4aed91411d3b02af426592260f4b7b12"],["/img/loading.gif","a7f8992e7cbe0d616d652a9309a4f04b"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/index.html","c6d351393af8b4c90beac1cc6b5ce1ff"],["/js/boot.js","7683fab2fc9d03a3a659aa956b3a54e8"],["/js/color-schema.js","5e4105d10638e64b40820fa28567d0d5"],["/js/events.js","734c9d1a9b78947e2e2e2d8b88c5920b"],["/js/img-lazyload.js","fab30a410e5f490fce3f977a6936a714"],["/js/leancloud.js","fb4a815ccdb5d851d00561dbb62251c4"],["/js/local-search.js","9dc47a0b7b6bacfd16541c9b2b5b6bc5"],["/js/plugins.js","6c10bee3f659ca91b534bf4a81d62f1e"],["/js/utils.js","f7ce9014de1cd7358eeb3aba81c8efe2"],["/links/index.html","f4bb61776d051c829587a49cc6e14a8b"],["/page/2/index.html","7c1fdd5c82d778fa269a459edb85b8a1"],["/sw-register.js","51bbf1046eeaf675d6c5dffcab564692"],["/tags/index.html","e33f9e85a07af928047fddcc4410f143"],["/考研复试.html","39727e92b828bfeec850964c83788d32"]];
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
