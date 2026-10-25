/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/09/11/启发式算法代码/index.html","9861cc33b6aa043d211000bd3c6e66e1"],["/2024/09/12/从AR到SARIMA时间序列预测/index.html","543acf13f4d059dc0714f5931a59fc91"],["/2024/10/01/PDF_math/index.html","111f7c14b8cd6caf53c38fc5aabf094b"],["/2025/04/08/GNN/index.html","c0872ad11492c1bba00ff2c3e01c123c"],["/2025/04/08/GitHub desktop基本用法/2023-05-07_232823.png","c24df821a6497444e71b2243e0577a9a"],["/2025/04/08/GitHub desktop基本用法/Untitled 1.png","2fa248a8f262c8636a07d3bd06dcc1fe"],["/2025/04/08/GitHub desktop基本用法/Untitled 10.png","c2154d964d2e468589b86bef5f35d53a"],["/2025/04/08/GitHub desktop基本用法/Untitled 11.png","abda8e93832cdb4fb8b0e6341c8d031f"],["/2025/04/08/GitHub desktop基本用法/Untitled 12.png","3505440efe0f7c43537137fd83adeb14"],["/2025/04/08/GitHub desktop基本用法/Untitled 13.png","46f19d6ccf828fd50d1317069a3aa2bb"],["/2025/04/08/GitHub desktop基本用法/Untitled 14.png","c7d61ce5820b53b7cfb746674160f9c5"],["/2025/04/08/GitHub desktop基本用法/Untitled 15.png","1c74bd4c3c479c6cbb717b5ab7ba9380"],["/2025/04/08/GitHub desktop基本用法/Untitled 16.png","17d74c538216b387e59724648a311cf9"],["/2025/04/08/GitHub desktop基本用法/Untitled 17.png","e61d189ea48bf0684d3c6330cae5b66e"],["/2025/04/08/GitHub desktop基本用法/Untitled 18.png","a0f26d2c02b09e6f98a49b4ed5e92990"],["/2025/04/08/GitHub desktop基本用法/Untitled 19.png","655dace5a204d04f04bb771c1f78f202"],["/2025/04/08/GitHub desktop基本用法/Untitled 2.png","326f9c7a13fe45ec249f127fc0380ccd"],["/2025/04/08/GitHub desktop基本用法/Untitled 20.png","68f746a0060ea6c081d1bf2c1496fb2f"],["/2025/04/08/GitHub desktop基本用法/Untitled 21.png","b1e5ea352441a541703f9d2867bc3841"],["/2025/04/08/GitHub desktop基本用法/Untitled 22.png","9197489c29212235b23d03aaafc12169"],["/2025/04/08/GitHub desktop基本用法/Untitled 23.png","f13175ce125954d6db5235205f48d978"],["/2025/04/08/GitHub desktop基本用法/Untitled 24.png","43e23660e25d8aa2e044c40c459cd400"],["/2025/04/08/GitHub desktop基本用法/Untitled 25.png","138b3364053bb65add68db6669f5d636"],["/2025/04/08/GitHub desktop基本用法/Untitled 26.png","426824e5d019a894a527b700abe629de"],["/2025/04/08/GitHub desktop基本用法/Untitled 27.png","6fcb131534b72e9365601b15cffa56bb"],["/2025/04/08/GitHub desktop基本用法/Untitled 3.png","354fa66f304720bdef613d8096574e32"],["/2025/04/08/GitHub desktop基本用法/Untitled 4.png","cd69f961522f00c1fac975902d60823d"],["/2025/04/08/GitHub desktop基本用法/Untitled 5.png","56c7f45017b1c73b44fe11be74a3b923"],["/2025/04/08/GitHub desktop基本用法/Untitled 6.png","4830b6f9dec4491262ec4335c953bb16"],["/2025/04/08/GitHub desktop基本用法/Untitled 7.png","50613175b6820d882c6b95df34780461"],["/2025/04/08/GitHub desktop基本用法/Untitled 8.png","d8513c20ac045674ba216bca64a1060a"],["/2025/04/08/GitHub desktop基本用法/Untitled 9.png","4305232b7f50b2c39bebbdcf89f10117"],["/2025/04/08/GitHub desktop基本用法/Untitled.png","af1264ba3284f0a578c35ca704f2ab4f"],["/2025/04/08/GitHub desktop基本用法/index.html","7b7f57a16e146545c3c10a357220494d"],["/2025/04/08/RNN/LSTM.jpg","c34fd7c632befb396f4e157c98470abb"],["/2025/04/08/RNN/LSTM1.jpg","57f2cdd1b0cfcb163774e54535b40bfc"],["/2025/04/08/RNN/RNN1.jpg","758f76c6bab9f0219f3588b93787cfba"],["/2025/04/08/RNN/index.html","b78d19144ed1ff901c538490e6d87bf4"],["/2025/04/08/RNN/结构.jpg","d7e72281db9e464a9a7b4229738c50e1"],["/2025/04/08/python程序带图片等资源打包/index.html","c204a9176ba43ea14d06b3da504dff22"],["/2025/04/08/pytorch建立神经网络/index.html","26b30fc819dd17ef2d13e4698b257daf"],["/2025/04/08/pytorch数据集以及数据预处理/index.html","6ed301033dcc54c25112b855f4054e28"],["/2025/04/08/pytorch的torch/index.html","9ced6060cb416df5ba8da1e5e3cf6750"],["/2025/04/08/transformer/index.html","10933947d890db34f581894e23b575f9"],["/2025/04/08/transformer/transformer结构.jpg","26d347d1c6018cc16530e7761936a52a"],["/2025/04/08/交通运输工程学课程设计代码/index.html","195bc5b7a4f919a63dd5b7eb6923239a"],["/2025/04/08/人工智能学习导航/index.html","45188d2bad12ecbe7d3f71938e5a561e"],["/2025/04/08/卷积神经网络/index.html","c9adc0c286596d1a448f071306c43544"],["/2025/04/08/卷积神经网络/卷积.jpg","1144e9ddb23750ec1877335ca5b9bcfc"],["/2025/04/08/卷积神经网络/卷积映射.jpg","d54fe5c4bd2b0a2ee319dc0e3df5a19c"],["/2025/04/08/卷积神经网络/卷积核.jpg","3969f7a51960f77382756610730a961e"],["/2025/04/08/排队论模型代码/index.html","b9922431cad2f2e3d8d67c6be4e3e82b"],["/2025/04/08/数据库/armstrong.png","741a26fa49aa88c62856a453782145c0"],["/2025/04/08/数据库/index.html","231f624e156a8938cf9ad29188b1d2da"],["/2025/04/08/数据库/关系代数语言.png","a9f5a7da444ce6d7a8b8efc0448c2280"],["/2025/04/08/数据库/条件表达式.jpg","deb6c08debaa3c6fd4fde5913d591fc5"],["/2025/04/08/数据库/除法.jpg","e89e113bc766851db3354518ccf9b5fa"],["/2025/04/08/数据结构之栈与队列代码/index.html","0c4d4d7d7e0cd053092756451bf8904b"],["/2025/04/08/数据结构之线性表代码/index.html","fd558423eb3ee02c1dfda9299a140a6b"],["/2025/04/08/灰色预测/index.html","1d9980ea70a62694969b08033e34a9c1"],["/2025/04/08/生死狙击2净化行动挂机脚本/index.html","05a2569877ed8b58a1ddf0610bcc4e48"],["/2025/04/08/神经网络基础（带数学公式）/LRelu-1.jpg","f010eca3c636a0cfdefa647f028b51d8"],["/2025/04/08/神经网络基础（带数学公式）/index.html","f7010c714f6eea06d35d64c85cae2270"],["/2025/04/08/神经网络基础（带数学公式）/relu-1.jpg","a700890ecfe183578f1a107b989820c4"],["/2025/04/08/神经网络基础（带数学公式）/sigmoid-1.jpg","8700f16266182247ec64d4ffdba2b762"],["/2025/04/08/神经网络基础（带数学公式）/softmax-1.jpg","7d6f562911a7f0fd908f1d5e477071bf"],["/2025/04/08/神经网络基础（带数学公式）/tanh-1.jpg","cb8571f4d0eee29a2e7afd80e46783d7"],["/2025/04/08/神经网络基础（带数学公式）/神经元.jpg","3bc2a81ebcb996e4940b87f746a643bc"],["/2025/04/08/神经网络基础（带数学公式）/神经元组合.jpg","504a43377811cb5d55849e2c9a4f43bf"],["/2025/04/08/神经网络基础（带数学公式）/神经网络结构.jpg","ac37ac9c814125fa901f41d4848045fa"],["/2025/04/08/结合熵权法的topsis客观评价/index.html","a319817ebd615bc118a78834de2111d2"],["/2025/07/19/c++学习文档/index.html","67266b5b6161c58744596b06123a2b4d"],["/2025/07/31/Linux学习文档/index.html","3e6bdb7b331d51670c592a3f0670889b"],["/2026/10/25/Canvas粒子互动示例/index.html","3485c68674fce1cb2df091e108693bbf"],["/404.html","5afd7400e6cd59a291ab914bb0a68e76"],["/about/index.html","3ffbcb1958cea3113def96640bb3104f"],["/archives/2024/09/index.html","e4f2bed2342bfbaa11e20a8445326b5f"],["/archives/2024/10/index.html","ba75778e96a2a6d192e337e4b2e0b4a9"],["/archives/2024/index.html","70d3f0806e0ed44d84f7106aa1aca847"],["/archives/2025/04/index.html","f4b31ba2a75ec2b967b4570a47948061"],["/archives/2025/04/page/2/index.html","969a9a7c272506e40c1edcca617fdd88"],["/archives/2025/07/index.html","4374c895a3144d92e4047f87116711e2"],["/archives/2025/index.html","276e3720248e4aac61c2189d48b4969b"],["/archives/2025/page/2/index.html","49489ab0509d0d7e02d92079f3fb801f"],["/archives/2026/10/index.html","dac128362d1fe064e34ddac599a1f430"],["/archives/2026/index.html","48fb34bc7a3474b49131011e721aaa4d"],["/archives/index.html","e799f30acc647f059844d97a0af2543a"],["/archives/page/2/index.html","58cfd90a7530b47f916bf6c7fef6f513"],["/categories/index.html","5d6ea658b3a4072aa2250fa6cc8f36ad"],["/categories/人工智能/index.html","7f896d912897f7a5e635f4b71c0ee739"],["/categories/前端/index.html","b2f62bbc3a404eb5685e8e759de71d77"],["/categories/基础工具/index.html","c5a4aaa90820d46731d5678654ed212b"],["/categories/数学建模/index.html","7847eb2e731c430a1e8e4f0931ec8824"],["/categories/游戏/index.html","525590ec3505b4bb4281b3ceb36a5a11"],["/categories/游戏/自动化/index.html","c8fe6c2dd61bf4a18052de1ab8380ba6"],["/categories/考研/index.html","470810a9e495f32e4a89fb7d58776cfe"],["/css/gitalk.css","0ade898214669899d4b3dfff008f477c"],["/css/hbe.style.css","fcaaade86fb27219333c41afd7d96b16"],["/css/highlight-dark.css","38590286d62ddb6f019a3464a74e9979"],["/css/highlight.css","c1b2551c1f51e2e80f4aaf6c02af0115"],["/css/main.css","bf11d2cdc2dee9ec10e63f2f1874351e"],["/for-you/index.html","104ea594536c084daa3f29e8297a75d1"],["/for-you/story.js","caf24ad6cb468416e2ca59800cfe9abc"],["/for-you/style.css","cd8c1cccf4073e201938515035cc0f3f"],["/img/avatar.png","e4020cb9bc27a52f406fa41c882f5cd1"],["/img/default.png","68806dba9dd97a7766f0d30393a875c3"],["/img/fluid.png","4aed91411d3b02af426592260f4b7b12"],["/img/loading.gif","a7f8992e7cbe0d616d652a9309a4f04b"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/index.html","d92b44bb5d379036461bc57564d16c54"],["/js/boot.js","7683fab2fc9d03a3a659aa956b3a54e8"],["/js/canvas-particle.js","054b6e22419fa2603beb4adc9bd60d6c"],["/js/color-schema.js","5e4105d10638e64b40820fa28567d0d5"],["/js/events.js","734c9d1a9b78947e2e2e2d8b88c5920b"],["/js/img-lazyload.js","fab30a410e5f490fce3f977a6936a714"],["/js/leancloud.js","fb4a815ccdb5d851d00561dbb62251c4"],["/js/local-search.js","9dc47a0b7b6bacfd16541c9b2b5b6bc5"],["/js/plugins.js","6c10bee3f659ca91b534bf4a81d62f1e"],["/js/utils.js","f7ce9014de1cd7358eeb3aba81c8efe2"],["/lib/hbe.a3b9f59caa.js","12aa73d27e799df2a5beaf855a677bbe"],["/links/index.html","729d643ff1c467db76adbc7c456c1ee8"],["/page/2/index.html","042b5999dd6a20765c872d62f48d1a5f"],["/sw-register.js","38d085cc4b3a3c8ad2c017336d5fafcb"],["/tags/Canvas/index.html","79a2533c11f57d07e96fae4d13b27494"],["/tags/JavaScript/index.html","9766311574c5f27e6fb779a62f3f4acb"],["/tags/index.html","cfe880f572ae2eb3f158442989028993"],["/tags/交互/index.html","3a265b75a7264e4005392ae7a68e479d"],["/考研复试.html","0ebb5f2a58310ecf7167bb4c9ef2b693"]];
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
