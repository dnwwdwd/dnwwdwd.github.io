/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/07/Java二级/index.html","5a1432c3260dc49c018f836156bc9f4b"],["/2024/02/25/RabbitMQ一死信队列介绍和应用/FscN6wgWJ-ZmoGu-nduqqnoEe7ok.png","2bac24181829291d3fe18ac6eaf1a570"],["/2024/02/25/RabbitMQ一死信队列介绍和应用/FunTdS3iZ-hpJht21wf0-BM-l1zx.png","4ddf155ebc5f63fbf7c304947816d60a"],["/2024/02/25/RabbitMQ一死信队列介绍和应用/index.html","c4eb89391cd3c554a055c6babdaae2e0"],["/2024/02/25/Redis项目保姆级教程/0658f9fa4f7f4bdebfb72bb11d88fd48.png","71c999625a7daa56b935c4cea00dadc0"],["/2024/02/25/Redis项目保姆级教程/0b29d03335b74d5aafee3f0f89dd1dd1.png","d92c01460757265ed71e19b71c9988c5"],["/2024/02/25/Redis项目保姆级教程/0b73fdac10c84c2d942781bf08ab8430.png","6949df7598c331d5e68e3a694a716041"],["/2024/02/25/Redis项目保姆级教程/1704961005165-78cf71e0-713e-4099-81b7-3ae7e58ac95f.png","a924dd91d34a40ecbc4922ded7b955ca"],["/2024/02/25/Redis项目保姆级教程/1704961109560-48da8d20-a5e0-4f38-8f53-89cb00bab418.png","8fea682054aed0d0ba11dfc642862c8e"],["/2024/02/25/Redis项目保姆级教程/198d6d254bb247ac9747431ea9b239c4.png","a8ff16522f9c23bfac1cded26a70277d"],["/2024/02/25/Redis项目保姆级教程/2c463295462141aaad84995e9f1de6be.png","66c9cf6aec5a74a2b161cef6641cc360"],["/2024/02/25/Redis项目保姆级教程/385421e706964a3d95e6fb8511792c8b.png","2a26d7d2eb6e323196cba9ecb5d11315"],["/2024/02/25/Redis项目保姆级教程/3beec339d7664f65b3f11f2839ef37af.png","f72e98ca7e2274252e3a972870977e58"],["/2024/02/25/Redis项目保姆级教程/3bf8f13802b7464a8d17b065eae77265.png","2ace29b3b69c45af486d8dcc70403c10"],["/2024/02/25/Redis项目保姆级教程/3dfa0ee11b564d64a4c9bebf46929d88.png","af593d9e24216dee4c834b1ce977b98d"],["/2024/02/25/Redis项目保姆级教程/445c48fc42294d0c828a2dcfad15058e.png","1f516221dbb28d802566bae46a8b5922"],["/2024/02/25/Redis项目保姆级教程/45a8ce3198eb4444be90d6da9dd95a16.png","17139e7ab25cbd19c3e5817c283d171b"],["/2024/02/25/Redis项目保姆级教程/535f14482cb34c8b8eabc892198bf74a.png","96c88f701d9ba6515d007e134a6f62e1"],["/2024/02/25/Redis项目保姆级教程/60d3700594484f79b9bc4fa60a320299.png","8899f5c146f4ea15285c67f458dce17f"],["/2024/02/25/Redis项目保姆级教程/623a7dcb6aaf400597d0bb84cd57519b.png","d133d5869d6ecda13a77b9f0c2338ca1"],["/2024/02/25/Redis项目保姆级教程/6484db674c51487097513d0365205702.png","694f2615771c49e1bc9b9dda7bc5ef77"],["/2024/02/25/Redis项目保姆级教程/6d6c103fb9b343668de4f1c509e2bcf0.png","c2ac2e2635bad1f2ad1ce6981823cdca"],["/2024/02/25/Redis项目保姆级教程/6f3082edc42a4aa39c946a71be3da9f3.png","fa449d2ae4f13d48b9f58ba55acfdaf1"],["/2024/02/25/Redis项目保姆级教程/70249fb554d14449a392b3b20fc31423.png","17a77a3a41aaf40532618376e02baf58"],["/2024/02/25/Redis项目保姆级教程/7d727c7793a742b1bb239dfa81114618.png","b83c2fdfdb6dbd73c6964d176f3d15d0"],["/2024/02/25/Redis项目保姆级教程/875f6a332dd44512819f1e8b521714a2.png","b4731673cca330c98191d551c876f3c1"],["/2024/02/25/Redis项目保姆级教程/8eb6e476deb54c7c8d8bdcfddd9b7dfc.png","f9335e613273f9bf496de732a9e2f6bb"],["/2024/02/25/Redis项目保姆级教程/af4c2d415fd441feafc1e45f958a33ad.png","3a5f71dd0b4e5809d4e0a31294e8d139"],["/2024/02/25/Redis项目保姆级教程/b10180e5aeea4c14b945de48a2b8d437.png","91cb012e6c7068e854ecf098e99aab04"],["/2024/02/25/Redis项目保姆级教程/b7f7ea38f62e4757b19e6b9ff3acbd04.png","11dec35a6209b3884af1f0b066c5d85e"],["/2024/02/25/Redis项目保姆级教程/d49e420c90234806bac68230a2ca616f.png","2d9396068e07274b0f65dd1fea75d858"],["/2024/02/25/Redis项目保姆级教程/d52d21efbf2f4946a5e212ef471bfc5f.png","8e60a0ae2c99f81f4066ff274cb752ae"],["/2024/02/25/Redis项目保姆级教程/da1e55e75c204a99acb1c01403d6e226.png","6060ec45dd70b6fbe2038cddb75f13ed"],["/2024/02/25/Redis项目保姆级教程/db5de77a22414f249401029b7a0c9ea6.png","5a41139ebc86283690b1ba5fcab665d9"],["/2024/02/25/Redis项目保姆级教程/edf949d6f2614e9d878223623fd2b942.png","acc4db14099f8bc60e6a11def9351004"],["/2024/02/25/Redis项目保姆级教程/f9595bdcf32d4a4384544fdae614f927.png","4122fc3f97790f824239a89a7c73e87f"],["/2024/02/25/Redis项目保姆级教程/fa9f59a42b9147d9b0db9bb640f1b566.png","4cd815432c590e4e07d9bf45af7d9e09"],["/2024/02/25/Redis项目保姆级教程/index.html","31ea27b25abd9994d261daf2d84d0d19"],["/2024/02/25/homie匹配Axios-AOP实现全局登录拦截/index.html","1f764ee8777ea5fa9f1b95479269bc05"],["/2024/02/25/homie匹配引入Redis-GEO实现搜索附近用户/1708517451051-0d0ef75f-5c9e-4ac9-a069-68400ab8efdf.png","668270adbfee8759327ed0eb44178bad"],["/2024/02/25/homie匹配引入Redis-GEO实现搜索附近用户/1708518884098-3bcb4197-d8db-4dd5-98e1-4b7117215d2c.png","a26e77788bc24027e7ef533e76c5e24f"],["/2024/02/25/homie匹配引入Redis-GEO实现搜索附近用户/1708519287622-fd79814b-2c3c-493e-9a28-8f521e129465.png","1dacbd74b47502907f3d4c94d4192dc2"],["/2024/02/25/homie匹配引入Redis-GEO实现搜索附近用户/1708524143144-55f1dc50-1e3f-4576-a477-b648734424e8.png","5d03516c588d56c4b11f6bb0ced3ce44"],["/2024/02/25/homie匹配引入Redis-GEO实现搜索附近用户/1708524166382-be9ef5b8-5eb6-4587-8632-50b47d568127.png","ca01f2ce6894e7d1cb569aa4bf36063a"],["/2024/02/25/homie匹配引入Redis-GEO实现搜索附近用户/1708524178417-ef248629-b4f1-46f5-95b9-41ff652d1e4a.png","5966b9d1a291f35b200318ca8e938491"],["/2024/02/25/homie匹配引入Redis-GEO实现搜索附近用户/index.html","21ec2ab86e20612045544c350a5fa472"],["/2024/02/25/四种限流算法详细介绍及Java代码实现/1708434135840-5a051559-3472-4d4d-8e21-1ee18ed4b41c.png","a743eb7030db2874d55f73e331e19cd0"],["/2024/02/25/四种限流算法详细介绍及Java代码实现/1708434135928-261a862b-8348-4e01-930e-87e583473a79.png","8f82698dfe18054281c08d6750aa2f67"],["/2024/02/25/四种限流算法详细介绍及Java代码实现/1708434136007-c34d89f0-e931-4225-8729-d6dffb445086.png","e3ec39334adfe83d08dba15b9fc97c07"],["/2024/02/25/四种限流算法详细介绍及Java代码实现/1708434403677-b5b3a511-e942-43bc-86f3-ca635276ae22.png","8c7b38b80c42cb287be65e0a8857fd2e"],["/2024/02/25/四种限流算法详细介绍及Java代码实现/index.html","c893488a2e3e4365d66edb2e8b69ac6d"],["/2024/02/27/Java基础-八股文/index.html","110c0154f773f0a857cee958d40465b8"],["/2024/02/27/Java基础-八股文/java-code-to-machine-code.png","3fd10bb1ddd97522c7f350619698463e"],["/2024/02/27/算法笔记/image-20240123112857495.png","087a578db8efec7baa5531b67ef6b2e7"],["/2024/02/27/算法笔记/image-20240124095635437.png","7928d85a9269ca290521856339e19bd5"],["/2024/02/27/算法笔记/image-20240124095654500.png","70e098272250247daa99a02dffeab482"],["/2024/02/27/算法笔记/image-20240124102000668.png","d66c3d569283cf69694f19cf7b274fa7"],["/2024/02/27/算法笔记/image-20240124184524853.png","1003cb07e6ed622e7909ac00525ba397"],["/2024/02/27/算法笔记/image-20240124184539024.png","5d1728547b7fe87bb568fb05aeacd688"],["/2024/02/27/算法笔记/image-20240125104055841.png","16650f6192c97aefb0fa6df8b3e5368f"],["/2024/02/27/算法笔记/image-20240125104111963.png","96a63be3addd5cdbd66d8ffa50d76678"],["/2024/02/27/算法笔记/image-20240125104216943.png","02cf4e94b5f35938d0b751fa9be77679"],["/2024/02/27/算法笔记/image-20240125104234762.png","f0d728f38b7ee233dcfae1f697fa9649"],["/2024/02/27/算法笔记/index.html","ca452642a588b56721ae15f58066f1b6"],["/2024/03/03/RabbitMQb笔记/image-20240105110007685.png","41e22387f9c1346c77b0df0fcab34d7a"],["/2024/03/03/RabbitMQb笔记/image-20240105110603912.png","041591d6fbf411bd10804c50beeee1a3"],["/2024/03/03/RabbitMQb笔记/image-20240105110913382.png","01f19ab5407a469c38e767fa4cddd0ed"],["/2024/03/03/RabbitMQb笔记/image-20240105121106424.png","009a631bfb96a8fcff759a3e8c225261"],["/2024/03/03/RabbitMQb笔记/image-20240105121230697.png","628c54e841094fcba080fc6a7ea28ba0"],["/2024/03/03/RabbitMQb笔记/image-20240105121329176.png","c833d82fd6f7f23ec653814a0a5323da"],["/2024/03/03/RabbitMQb笔记/image-20240105144005543.png","5a740c1b2d9cc4630143ecff959be472"],["/2024/03/03/RabbitMQb笔记/image-20240105150909044.png","454bc482ad9bb7381043a52de65affc7"],["/2024/03/03/RabbitMQb笔记/image-20240105152233304.png","6f6543002a3f0672422b3e778435a406"],["/2024/03/03/RabbitMQb笔记/image-20240106205108937.png","5dac9877363678e382e37f3a6fac4b85"],["/2024/03/03/RabbitMQb笔记/image-20240106210500084.png","9125001cd02d6adc6eca3199c7f5e851"],["/2024/03/03/RabbitMQb笔记/image-20240106213814548.png","ad91d20b3296168059e0a85d7548a346"],["/2024/03/03/RabbitMQb笔记/image-20240107145348452.png","812bcb3e0496a531727e80c711d26402"],["/2024/03/03/RabbitMQb笔记/image-20240107145458380.png","f8b194ffb1f57dcdac6f80bd0c209e1e"],["/2024/03/03/RabbitMQb笔记/image-20240107151214602.png","b4aee4ee7bcd2166cb76a587ba9610c9"],["/2024/03/03/RabbitMQb笔记/image-20240107162131445.png","3a95454073981344ccdf0df3f689a984"],["/2024/03/03/RabbitMQb笔记/image-20240107162400370.png","b3844ce65f2ab00ed40a5ba5790b5564"],["/2024/03/03/RabbitMQb笔记/image-20240107173915321.png","b4ec51bdd0542428bfbac7347c39ad33"],["/2024/03/03/RabbitMQb笔记/image-20240107185524304.png","4ddf155ebc5f63fbf7c304947816d60a"],["/2024/03/03/RabbitMQb笔记/image-20240108144310025.png","80f842f13753be8c07a365a4bf216bf5"],["/2024/03/03/RabbitMQb笔记/image-20240108144407870.png","048827e3250e5c1b7ed97ff87123ce35"],["/2024/03/03/RabbitMQb笔记/image-20240112141820874.png","624c95940f0e8a2bbc479800ff0e9b2a"],["/2024/03/03/RabbitMQb笔记/image-20240112142400747.png","25e1ea4b47e3087a49a7d5f8bc92c6a3"],["/2024/03/03/RabbitMQb笔记/image-20240112153925736.png","92fb5f1e5f08d5addfdd63742fa84633"],["/2024/03/03/RabbitMQb笔记/image-20240112155219600.png","23d1ff6fef02a5ceb70015461fe2dbfc"],["/2024/03/03/RabbitMQb笔记/image-20240112155305310.png","f62fb9efa7115986dcfc95df5d4150f2"],["/2024/03/03/RabbitMQb笔记/image-20240112160341516.png","a81971f9c6747b7f680b37b00100bffa"],["/2024/03/03/RabbitMQb笔记/image-20240112162605950.png","e74479f38a0a2181e31063611f20ea15"],["/2024/03/03/RabbitMQb笔记/image-20240112163156524.png","1c7423d7f63e97af20adb7643a86bb7e"],["/2024/03/03/RabbitMQb笔记/image-20240112163622746.png","544f59566a14a6a8ae05d730f0989533"],["/2024/03/03/RabbitMQb笔记/image-20240112170609876.png","21ce0a264413e39214af1b0beeb98963"],["/2024/03/03/RabbitMQb笔记/image-20240112170909234.png","e5cfd84e087b162a6a49d83055c2dc94"],["/2024/03/03/RabbitMQb笔记/image-20240112193513308.png","87fd7d7964ffd49747400c41b35866de"],["/2024/03/03/RabbitMQb笔记/image-20240112193653703.png","2dd9d096d080f7d02e947a5687d682e3"],["/2024/03/03/RabbitMQb笔记/image-20240112193711040.png","5569fa4719fdcd0591e29cfb7499f852"],["/2024/03/03/RabbitMQb笔记/image-20240112195546555.png","f4b84f5922ae887ab8956402c734cd1d"],["/2024/03/03/RabbitMQb笔记/image-20240112195628503.png","0fb08337625987b5beff69b04079ed25"],["/2024/03/03/RabbitMQb笔记/image-20240112200747454.png","fa3cac19b2b3a020b5ac26a136fa96c5"],["/2024/03/03/RabbitMQb笔记/image-20240112201328087.png","a38cc5402d680fd89f4701e441d54183"],["/2024/03/03/RabbitMQb笔记/image-20240112201828727.png","9a2f15d6adac1518b30914efc2863b3d"],["/2024/03/03/RabbitMQb笔记/image-20240112201917704.png","a40f9043c8c6a08933b9e7918ef026a1"],["/2024/03/03/RabbitMQb笔记/image-20240112201936906.png","33c8b591b3fd92bba8a100aef861b95a"],["/2024/03/03/RabbitMQb笔记/image-20240112202010343.png","fc4b999b3fa251cc8e30cc5a1cf6dd02"],["/2024/03/03/RabbitMQb笔记/image-20240112202054291.png","3467106f40dae0dbfeb1990d302d3bd5"],["/2024/03/03/RabbitMQb笔记/image-20240112202105935.png","0a8f799fb7cf0a3d0ec37f27f89868b2"],["/2024/03/03/RabbitMQb笔记/image-20240112202131376.png","264ab637daf054af6e9118de9507b556"],["/2024/03/03/RabbitMQb笔记/image-20240112202145328.png","8aaff2278c8ce9e8d3d0508b768e771e"],["/2024/03/03/RabbitMQb笔记/image-20240112203313443.png","8c3b063b347e3072625bad31c66fc83f"],["/2024/03/03/RabbitMQb笔记/image-20240112203815011.png","44313a56eaf7cb9abe1c1fce5c32d288"],["/2024/03/03/RabbitMQb笔记/image-20240112204935113.png","18d9dc6e25386a45101fed759b93a929"],["/2024/03/03/RabbitMQb笔记/image-20240112205613195.png","4ff0038bb3ebc83d42bc98aacc024c15"],["/2024/03/03/RabbitMQb笔记/index.html","3bef481803cbd341866687edf6f80695"],["/2024/03/04/Docker笔记/image-20240304160710526.png","af58e1e45511cd451c308259ff057ceb"],["/2024/03/04/Docker笔记/image-20240304171337157.png","6158582ac04ab09510e776eab0e4e9cb"],["/2024/03/04/Docker笔记/image-20240304171558202.png","9787b51ef6d232ec378b975965098a43"],["/2024/03/04/Docker笔记/image-20240304173224203.png","d7f06f428e271dd6142c2ad4cff30e49"],["/2024/03/04/Docker笔记/index.html","8f9cf19eb6071d569ba5f4eb852b5875"],["/2024/03/27/Redis面试题/index.html","5179c7edee4987d65e2fc97c069399c5"],["/archives/2024/01/index.html","318fdf4fb57d63373fe65b73211f6291"],["/archives/2024/02/index.html","a2393f9d83033b1e2a4953ccd9441a84"],["/archives/2024/03/index.html","76be56f86b6509ab4e5ed063543039a5"],["/archives/2024/index.html","753640f8b37a78a32081dc8f96d9e171"],["/archives/2024/page/2/index.html","ab4fa2bcc4a0beb77b4a9361bce02b77"],["/archives/index.html","1c2c771558f065dbc999892541a3ea91"],["/archives/page/2/index.html","2d810d023fed7ae410091a575a858ce9"],["/categories/index.html","ca0cd5a2b04005fb6f0beecdefd2ec42"],["/categories/中间件/index.html","6bb56af478f35013f989369cb613829d"],["/categories/容器技术/index.html","d7930d8f4a0ec59710740fd340a218f6"],["/categories/面试题/index.html","f2890d88409fe1d229bdf9c590c07b35"],["/categories/项目/index.html","131b9f753c338a91c973843a41426853"],["/categories/项目部署/index.html","f951b7746a80e0b0b7c7373754b6fdc5"],["/css/custom.css","5fcbad47fee9f139281ed25372cbe5fd"],["/css/index.css","693724e58aba679cab5ee69d2eec0f45"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/0432a40b6ab749f8ae473d5c7e9ce12a.jpg","f7c45a855f5881818fe36e8c3ab5645e"],["/img/247402b1880511ebb6edd017c2d2eca2.jpg","80516b72b755cdc667cc7314d0e1a89c"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/40ff251e2a5c4764b2f59513fbdd8c81.jpg","ff4e83e828bcc982469921a8e4fc72a7"],["/img/5268d877a2a04864b36b4961ab793f4f.jpg","12f931d5428708feb6a4e28bb9921e26"],["/img/6e501611880511ebb6edd017c2d2eca2.jpg","44b9ce74bb6cec98f60272e17e159aaf"],["/img/97b97ee1173042d5ba667df7ecbe43f6.png","1d3ad13d0c783352f52d237b190e04c8"],["/img/a6fec42e882111ebb6edd017c2d2eca2.jpg","899c177551c43088167435e019abf09b"],["/img/backgroud.jpg","8bbe257a64658e513f2a110cac4d3341"],["/img/bc4504cc20134baba18dd1a3d247f302.jpg","7ee6991ee0f43be59c28d183597e0cca"],["/img/blog.png","e95ea28a07b34734405f36909a1d01f0"],["/img/c5366469b00940f5b8077c20c2c2d089.jpg","b033d2a5a9bffdf3038a8199b08d972e"],["/img/c53c811f880411ebb6edd017c2d2eca2.jpg","f62fcb4665575b40c558e185ef906ab8"],["/img/c85ca642880411ebb6edd017c2d2eca2.jpg","c57eb7863ec4233f503176ca3f90f8d5"],["/img/iu.jpg","3a6b35aa4129551061c7c06fa15bae2b"],["/img/post.jpg","5a4ac1145511e329eaf891e3b3eed127"],["/img/preview.jpg","58a6641e9d85696e2d6771188b2133f1"],["/index.html","4375036c7eff1cdad0e049b7ab7e0402"],["/js/Valine.min.js","351beee650bf7a79ebff08d3372c444c"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","7e9056835719b174a4633f8456f6efed"],["/page/2/index.html","63bcba6d3aeb4029beefe6b0acac5236"],["/sw-register.js","5cc9151555911a12fa1adc836de70857"],["/tags/Docker/index.html","cbb862827678c51e7ed5752791878537"],["/tags/Java/index.html","9b9754e9b40fd248882f4dcd9de82082"],["/tags/Java八股文/index.html","15da1b8aca3d7de84a9b401356a3211b"],["/tags/Linux/index.html","ad6776b3fae3b9127172c280bc161e6b"],["/tags/RabbitMQ/index.html","db49629f0d996ebec283487fbec2ef25"],["/tags/Redis/index.html","e8f627c26cd7d993e0646910e1d5f80f"],["/tags/homie匹配/index.html","56f82801816ae5a9b0953ad86f3af33d"],["/tags/index.html","6a986e713be6786e60383522b5961738"],["/tags/算法/index.html","885eb94f8733a11abcb1dea78e47cdce"],["/tags/项目拓展/index.html","0b98d293a121fa95f2149ef53b37ac24"]];
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
