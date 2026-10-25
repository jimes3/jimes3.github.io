/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/09/11/启发式算法代码/index.html","f3351cb4c764307bfb4f2334ee49b490"],["/2024/09/12/从AR到SARIMA时间序列预测/index.html","9b18ff374044b90e4b15c1daf039545a"],["/2024/10/01/PDF_math/index.html","7b0baa8e008bebcd2ca14730708393d4"],["/2025/04/08/GNN/index.html","0462960844b11c778736e1fcb8973459"],["/2025/04/08/GitHub desktop基本用法/2023-05-07_232823.png","c24df821a6497444e71b2243e0577a9a"],["/2025/04/08/GitHub desktop基本用法/Untitled 1.png","2fa248a8f262c8636a07d3bd06dcc1fe"],["/2025/04/08/GitHub desktop基本用法/Untitled 10.png","c2154d964d2e468589b86bef5f35d53a"],["/2025/04/08/GitHub desktop基本用法/Untitled 11.png","abda8e93832cdb4fb8b0e6341c8d031f"],["/2025/04/08/GitHub desktop基本用法/Untitled 12.png","3505440efe0f7c43537137fd83adeb14"],["/2025/04/08/GitHub desktop基本用法/Untitled 13.png","46f19d6ccf828fd50d1317069a3aa2bb"],["/2025/04/08/GitHub desktop基本用法/Untitled 14.png","c7d61ce5820b53b7cfb746674160f9c5"],["/2025/04/08/GitHub desktop基本用法/Untitled 15.png","1c74bd4c3c479c6cbb717b5ab7ba9380"],["/2025/04/08/GitHub desktop基本用法/Untitled 16.png","17d74c538216b387e59724648a311cf9"],["/2025/04/08/GitHub desktop基本用法/Untitled 17.png","e61d189ea48bf0684d3c6330cae5b66e"],["/2025/04/08/GitHub desktop基本用法/Untitled 18.png","a0f26d2c02b09e6f98a49b4ed5e92990"],["/2025/04/08/GitHub desktop基本用法/Untitled 19.png","655dace5a204d04f04bb771c1f78f202"],["/2025/04/08/GitHub desktop基本用法/Untitled 2.png","326f9c7a13fe45ec249f127fc0380ccd"],["/2025/04/08/GitHub desktop基本用法/Untitled 20.png","68f746a0060ea6c081d1bf2c1496fb2f"],["/2025/04/08/GitHub desktop基本用法/Untitled 21.png","b1e5ea352441a541703f9d2867bc3841"],["/2025/04/08/GitHub desktop基本用法/Untitled 22.png","9197489c29212235b23d03aaafc12169"],["/2025/04/08/GitHub desktop基本用法/Untitled 23.png","f13175ce125954d6db5235205f48d978"],["/2025/04/08/GitHub desktop基本用法/Untitled 24.png","43e23660e25d8aa2e044c40c459cd400"],["/2025/04/08/GitHub desktop基本用法/Untitled 25.png","138b3364053bb65add68db6669f5d636"],["/2025/04/08/GitHub desktop基本用法/Untitled 26.png","426824e5d019a894a527b700abe629de"],["/2025/04/08/GitHub desktop基本用法/Untitled 27.png","6fcb131534b72e9365601b15cffa56bb"],["/2025/04/08/GitHub desktop基本用法/Untitled 3.png","354fa66f304720bdef613d8096574e32"],["/2025/04/08/GitHub desktop基本用法/Untitled 4.png","cd69f961522f00c1fac975902d60823d"],["/2025/04/08/GitHub desktop基本用法/Untitled 5.png","56c7f45017b1c73b44fe11be74a3b923"],["/2025/04/08/GitHub desktop基本用法/Untitled 6.png","4830b6f9dec4491262ec4335c953bb16"],["/2025/04/08/GitHub desktop基本用法/Untitled 7.png","50613175b6820d882c6b95df34780461"],["/2025/04/08/GitHub desktop基本用法/Untitled 8.png","d8513c20ac045674ba216bca64a1060a"],["/2025/04/08/GitHub desktop基本用法/Untitled 9.png","4305232b7f50b2c39bebbdcf89f10117"],["/2025/04/08/GitHub desktop基本用法/Untitled.png","af1264ba3284f0a578c35ca704f2ab4f"],["/2025/04/08/GitHub desktop基本用法/index.html","f55b5f565a09b2b235333a7ca496441e"],["/2025/04/08/RNN/LSTM.jpg","c34fd7c632befb396f4e157c98470abb"],["/2025/04/08/RNN/LSTM1.jpg","57f2cdd1b0cfcb163774e54535b40bfc"],["/2025/04/08/RNN/RNN1.jpg","758f76c6bab9f0219f3588b93787cfba"],["/2025/04/08/RNN/index.html","500e77f9898df5f2c3cad46f699c0ec1"],["/2025/04/08/RNN/结构.jpg","d7e72281db9e464a9a7b4229738c50e1"],["/2025/04/08/python程序带图片等资源打包/index.html","ac33ee1a20d9223c307cb50e6c1765f0"],["/2025/04/08/pytorch建立神经网络/index.html","d98facc4429a2fa24e535c735efe910a"],["/2025/04/08/pytorch数据集以及数据预处理/index.html","86cd5fd4d5d25347da652d339c9892cf"],["/2025/04/08/pytorch的torch/index.html","745af35110db8ba59cab26f84e6077c2"],["/2025/04/08/transformer/index.html","4ec72aedfce749a5f66bf2d042e24c3c"],["/2025/04/08/transformer/transformer结构.jpg","26d347d1c6018cc16530e7761936a52a"],["/2025/04/08/交通运输工程学课程设计代码/index.html","74d0ac45da78e43a0c8cfb47f6ad4b07"],["/2025/04/08/人工智能学习导航/index.html","33adb1592b30ce0e437ba73082b95451"],["/2025/04/08/卷积神经网络/index.html","0cb87d5ad0fa695554555774cc09bba6"],["/2025/04/08/卷积神经网络/卷积.jpg","1144e9ddb23750ec1877335ca5b9bcfc"],["/2025/04/08/卷积神经网络/卷积映射.jpg","d54fe5c4bd2b0a2ee319dc0e3df5a19c"],["/2025/04/08/卷积神经网络/卷积核.jpg","3969f7a51960f77382756610730a961e"],["/2025/04/08/排队论模型代码/index.html","0b7480e6605389cb1f37484013a8d674"],["/2025/04/08/数据库/armstrong.png","741a26fa49aa88c62856a453782145c0"],["/2025/04/08/数据库/index.html","0f8ad17a362bb5b24dd7367df3925afd"],["/2025/04/08/数据库/关系代数语言.png","a9f5a7da444ce6d7a8b8efc0448c2280"],["/2025/04/08/数据库/条件表达式.jpg","deb6c08debaa3c6fd4fde5913d591fc5"],["/2025/04/08/数据库/除法.jpg","e89e113bc766851db3354518ccf9b5fa"],["/2025/04/08/数据结构之栈与队列代码/index.html","bc05ab7ab05540afe109a51faf2b192b"],["/2025/04/08/数据结构之线性表代码/index.html","a8f23ea4b3587cfc9eccf19f8e209455"],["/2025/04/08/灰色预测/index.html","d05b74c7ef3c5d9e32db24f5c3062e3c"],["/2025/04/08/生死狙击2净化行动挂机脚本/index.html","9ee94519caf6e3b9496db765bcb07725"],["/2025/04/08/神经网络基础（带数学公式）/LRelu-1.jpg","f010eca3c636a0cfdefa647f028b51d8"],["/2025/04/08/神经网络基础（带数学公式）/index.html","0892236798c29eb5756b4899997775c5"],["/2025/04/08/神经网络基础（带数学公式）/relu-1.jpg","a700890ecfe183578f1a107b989820c4"],["/2025/04/08/神经网络基础（带数学公式）/sigmoid-1.jpg","8700f16266182247ec64d4ffdba2b762"],["/2025/04/08/神经网络基础（带数学公式）/softmax-1.jpg","7d6f562911a7f0fd908f1d5e477071bf"],["/2025/04/08/神经网络基础（带数学公式）/tanh-1.jpg","cb8571f4d0eee29a2e7afd80e46783d7"],["/2025/04/08/神经网络基础（带数学公式）/神经元.jpg","3bc2a81ebcb996e4940b87f746a643bc"],["/2025/04/08/神经网络基础（带数学公式）/神经元组合.jpg","504a43377811cb5d55849e2c9a4f43bf"],["/2025/04/08/神经网络基础（带数学公式）/神经网络结构.jpg","ac37ac9c814125fa901f41d4848045fa"],["/2025/04/08/结合熵权法的topsis客观评价/index.html","bed5eee14bbf4a5f74a83dd89e63427e"],["/2025/07/19/c++学习文档/index.html","e22bd0bf3f06db7bd7ca57fdaf1f29d9"],["/2025/07/31/Linux学习文档/index.html","8fd70cf3318d5c34f5ce24a6ae67c5db"],["/2026/10/25/Canvas粒子互动示例/index.html","f5c1994e11bb1350f1f200456b7145cb"],["/404.html","ae930c7c205626dc1a9e4795999e4b81"],["/about/index.html","41331cd7ae9c49b7715082f7a7b0df8c"],["/archives/2024/09/index.html","2c2e6b6d4ff5a27df370e61e3a00db1f"],["/archives/2024/10/index.html","4b9b515525f00c38b9a50a0f96740265"],["/archives/2024/index.html","650e866680a7663b09deb5c2032a5415"],["/archives/2025/04/index.html","5c541595ee80912fc2347a57f5edc072"],["/archives/2025/04/page/2/index.html","dc3ca7e5847e742ec5975778d8958fb7"],["/archives/2025/07/index.html","46bc36b83df7aa7774ef93217c03527b"],["/archives/2025/index.html","a7d1200e22b9c6a49b0264984bb6a20c"],["/archives/2025/page/2/index.html","c59e7cba077f5bc5046316d83abcd69a"],["/archives/2026/10/index.html","7c871fed3a7d86001424914a424fb3fb"],["/archives/2026/index.html","c2f29294e5020afd8c956334b6d25ae8"],["/archives/index.html","971abf7124ae7c9fa5dc838cc9262058"],["/archives/page/2/index.html","338e39614b4be4fb0828717f3e1ef656"],["/categories/index.html","2dab34ade6ba92e57f10c2e39c516d7f"],["/categories/人工智能/index.html","88232db56833fdf42852d4ec910780be"],["/categories/前端/index.html","94c318fbc3e3b6845c24ab7388ab4b15"],["/categories/基础工具/index.html","fae09ff9d019b1c93140817ddbfc13c0"],["/categories/数学建模/index.html","d4fc0ebf4a640d012ce138baaed00355"],["/categories/游戏/index.html","df81ece2b1a92420b7ccf2b8b3055786"],["/categories/游戏/自动化/index.html","e3120adc53ac10e95c3953188c249c70"],["/categories/考研/index.html","c64239203eb51ffb9097feb8bc28d557"],["/css/gitalk.css","dda66353075b3893a301d5f0e73d5699"],["/css/hbe.style.css","fcaaade86fb27219333c41afd7d96b16"],["/css/highlight-dark.css","09c0cfe8f304bea391aadf7dce3c8c4e"],["/css/highlight.css","a6ec400facef1ec9d47ffe52573379a8"],["/css/main.css","3f03f5da078a5034ef0043c5ba0915ae"],["/img/avatar.png","e4020cb9bc27a52f406fa41c882f5cd1"],["/img/default.png","68806dba9dd97a7766f0d30393a875c3"],["/img/fluid.png","4aed91411d3b02af426592260f4b7b12"],["/img/loading.gif","a7f8992e7cbe0d616d652a9309a4f04b"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/index.html","a3f64cfdd93f2389bd50761ed42747be"],["/js/boot.js","7683fab2fc9d03a3a659aa956b3a54e8"],["/js/color-schema.js","5e4105d10638e64b40820fa28567d0d5"],["/js/events.js","734c9d1a9b78947e2e2e2d8b88c5920b"],["/js/img-lazyload.js","fab30a410e5f490fce3f977a6936a714"],["/js/leancloud.js","fb4a815ccdb5d851d00561dbb62251c4"],["/js/local-search.js","9dc47a0b7b6bacfd16541c9b2b5b6bc5"],["/js/plugins.js","6c10bee3f659ca91b534bf4a81d62f1e"],["/js/utils.js","f7ce9014de1cd7358eeb3aba81c8efe2"],["/lib/hbe.a3b9f59caa.js","12aa73d27e799df2a5beaf855a677bbe"],["/links/index.html","00c7486a237e9130209d0d89c7aa11ea"],["/page/2/index.html","3e0ec623b80e8aff02f7b73c19c6229a"],["/sw-register.js","d7acb41417a08095f49ede9e6f037136"],["/tags/Canvas/index.html","e9a5e0f32b0eb798d8678a0b4a482e54"],["/tags/JavaScript/index.html","458c39f44f7b1a2160e7b66f2910c816"],["/tags/index.html","728f138ba7e6cf1ce881b5faf02f36fe"],["/tags/交互/index.html","201bd0793e00f90ae4fe6c3cfe9ac1a6"],["/考研复试.html","f728b68e2bfffcf6211355fe777b40f4"]];
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
