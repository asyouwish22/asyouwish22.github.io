import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{o as e,c as i,e as l}from"./app.a1b2d4d6.js";var r="/assets/sack.2b9a427c.png",s="/assets/dsack1.4bddfafa.png",t="/assets/dsack2.118f07bb.png";const d={},p=l('<h1 id="tcp\u91CD\u4F20\u673A\u5236-\u62E5\u585E\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#tcp\u91CD\u4F20\u673A\u5236-\u62E5\u585E\u63A7\u5236" aria-hidden="true">#</a> TCP\u91CD\u4F20\u673A\u5236\uFF0C\u62E5\u585E\u63A7\u5236...</h1><h2 id="tcp\u91CD\u4F20\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#tcp\u91CD\u4F20\u673A\u5236" aria-hidden="true">#</a> TCP\u91CD\u4F20\u673A\u5236</h2><h3 id="\u8D85\u65F6\u91CD\u4F20" tabindex="-1"><a class="header-anchor" href="#\u8D85\u65F6\u91CD\u4F20" aria-hidden="true">#</a> \u8D85\u65F6\u91CD\u4F20</h3><ul><li>\u5728\u53D1\u9001\u6570\u636E\u65F6\uFF0C\u8BBE\u5B9A\u2F00\u4E2A\u5B9A\u65F6\u5668\uFF0C\u5F53\u8D85\u8FC7\u6307\u5B9A\u7684\u65F6\u95F4\u540E\uFF0C\u6CA1\u6709\u6536\u5230\u5BF9\u2F45\u7684 ACK \u786E\u8BA4\u5E94\u7B54\u62A5\u2F42\uFF0C\u5C31\u4F1A\u91CD\u53D1\u8BE5\u6570\u636E\u3002</li><li>\u6570\u636E\u5305\u4E22\u5931\u6216\u786E\u8BA4\u5E94\u7B54\u62A5\u6587\u4E22\u5931\u4F1A\u53D1\u751F\u8D85\u65F6\u91CD\u4F20</li></ul><p>\u8D85\u65F6\u65F6\u95F4\u8BBE\u7F6E\uFF08RTO\uFF09\uFF1A</p><p>RTT:RTT \u6307\u7684\u662F\u6570\u636E\u53D1\u9001\u65F6\u523B\u5230\u63A5\u6536\u5230\u786E\u8BA4\u7684\u65F6\u523B\u7684\u5DEE\u503C\uFF0C\u4E5F\u5C31\u662F\u5305\u7684\u5F80\u8FD4\u65F6\u95F4</p><ul><li>RTO\u8F83\u77ED\u65F6\uFF0C\u53EF\u80FD\u4F1A\u5BFC\u81F4\u6CA1\u6709\u4E22\u5305\u5C31\u91CD\u4F20\uFF0C\u589E\u52A0\u7F51\u7EDC\u62E5\u585E</li><li>RTO\u8F83\u957F\u65F6\uFF0C\u91CD\u53D1\u5C31\u6162\uFF0C\u6548\u7387\u4F4E\uFF0C\u6027\u80FD\u5DEE</li></ul><p>RTO\u5E94\u7565\u5927\u4E8ERTT</p><p>\u62A5\u6587\u5F80\u8FD4 RTT \u7684\u503C\u662F\u7ECF\u5E38\u53D8\u5316\u7684\uFF0C\u56E0\u4E3A\u6211\u4EEC\u7684\u7F51\u7EDC\u4E5F\u662F\u65F6\u5E38\u53D8\u5316\u7684\u3002\u4E5F\u5C31\u56E0\u4E3A\u300C\u62A5\u6587\u5F80\u8FD4 RTT \u7684\u503C\u300D \u662F\u7ECF\u5E38\u6CE2\u52A8\u53D8\u5316\u7684\uFF0C\u6240\u4EE5\u8D85\u65F6\u91CD\u4F20\u65F6\u95F4 RTO \u7684\u503C\u5E94\u8BE5\u662F\u4E00\u4E2A\u52A8\u6001\u53D8\u5316\u7684\u503C\u3002</p><h3 id="\u5FEB\u901F\u91CD\u4F20" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u91CD\u4F20" aria-hidden="true">#</a> \u5FEB\u901F\u91CD\u4F20</h3><p>\u4E0D\u4EE5\u65F6\u95F4\u4E3A\u9A71\u52A8\uFF0C\u4EE5\u6570\u636E\u4E3A\u9A71\u52A8</p><p>\u53D1\u90011\uFF0C2\uFF0C3\uFF0C4\uFF0C5\u6570\u636E\u5305</p><p>\u5F53\u6570\u636E\u5305\u4E2D\u6709\u4E00\u4E2A\u6CA1\u6709\u6210\u529F\u5230\u8FBE\u65F6\uFF08\u6BD4\u5982seq2)\uFF0C\u63A5\u6536\u65B9\uFF08\u6536\u5230seq1,\u8FD4\u56DEACK2)\u5728\u6536\u5230\u5176\u4ED6\u6570\u636E\u5305\u540E\u4F1A\u6301\u7EED\u8FD4\u56DE\u4E0A\u4E00\u4E2AACK(ACK2\uFF09\uFF0C\u53D1\u9001\u65B9\u6536\u5230\u8FDE\u7EED\u51E0\u4E2A\u76F8\u540C\u7684ACK\u540E\uFF0C\u5C31\u4F1A\u5728\u5B9A\u65F6\u5668\u8FC7\u671F\u4E4B\u524D\uFF0C\u91CD\u4F20\u4E22\u5931\u7684 Seq2\u3002</p><p>\u5FEB\u901F\u91CD\u4F20\u673A\u5236\u53EA\u89E3\u51B3\u4E86\u4E00\u4E2A\u95EE\u9898\uFF0C\u5C31\u662F\u8D85\u65F6\u65F6\u95F4\u7684\u95EE\u9898\uFF0C\u4F46\u662F\u5B83\u4F9D\u7136\u9762\u4E34\u7740\u53E6\u5916\u4E00\u4E2A\u95EE\u9898\u3002\u5C31\u662F\u91CD\u4F20\u7684\u65F6\u5019\uFF0C\u662F\u91CD\u4F20\u4E00\u4E2A\uFF0C\u8FD8\u662F\u91CD\u4F20\u6240\u6709\u7684\u95EE\u9898\u3002</p><ul><li>\u5F53seq2\uFF0Cseq3\u90FD\u4E22\u5931\u65F6\uFF0C\u63A5\u6536\u65B9\u5728\u6536\u5230 Seq4\u3001Seq5\u65F6\uFF0C\u90FD\u662F\u56DE\u590D ACK2 \u7ED9\u53D1\u9001\u65B9\uFF0C\u4F46\u662F\u53D1\u9001\u65B9\u5E76\u4E0D\u6E05\u695A\u8FD9\u8FDE\u7EED\u7684 ACK2 \u662F\u63A5\u6536\u65B9\u6536\u5230\u54EA\u4E2A\u62A5\u6587\u800C\u56DE\u590D\u7684\uFF0C \u90A3\u662F\u9009\u62E9\u91CD\u4F20 Seq2 \u4E00\u4E2A\u62A5\u6587\uFF0C\u8FD8\u662F\u91CD\u4F20 Seq2 \u4E4B\u540E\u5DF2\u53D1\u9001\u7684\u6240\u6709\u62A5\u6587 <ul><li>\u53EA\u9009\u62E9\u91CD\u4F20 Seq2 \u4E00\u4E2A\u62A5\u6587\uFF0C\u540E\u7EED\u6536\u5230\u4E09\u4E2A\u91CD\u590D\u7684ACK3\u624D\u89E6\u53D1\u91CD\u4F20\uFF0C\u6548\u7387\u4F4E</li><li>\u91CD\u4F20 Seq2 \u4E4B\u540E\u5DF2\u53D1\u9001\u7684\u6240\u6709\u62A5\u6587\uFF0C\u867D\u7136\u80FD\u540C\u65F6\u91CD\u4F20\u5DF2\u4E22\u5931\u7684 Seq2 \u548C Seq3 \u62A5\u6587\uFF0C\u4F46\u662F Seq4\u3001Seq5\u7684\u62A5\u6587\u662F\u5DF2\u7ECF\u88AB\u63A5\u6536\u8FC7\u4E86\uFF0C\u6D6A\u8D39\u8D44\u6E90\u3002</li></ul></li></ul><p>\u89E3\u51B3\u8FD9\u4E9B\u95EE\u9898\u53EF\u4EE5\u7528sack\u65B9\u6CD5</p><h3 id="sack-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#sack-\u65B9\u6CD5" aria-hidden="true">#</a> SACK \u2F45\u6CD5</h3><ul><li>\u5728 TCP \u5934\u90E8\u300C\u9009\u9879\u300D\u5B57\u6BB5\u2FA5\u52A0\u2F00\u4E2A SACK ,\u5B83\u53EF\u4EE5\u5C06\u5DF2\u7ECF\u6536\u5230\u7684\u6570\u636E\u4FE1\u606F\u53D1\u7ED9\u53D1\u9001\u2F45\uFF0C\u8FD9\u6837\u53D1\u9001\u2F45\u5C31\u53EF\u4EE5\u77E5\u9053\u54EA\u4E9B\u6570\u636E\u6536\u5230\u4E86\uFF0C\u54EA\u4E9B\u6570\u636E\u6CA1\u6536\u5230\uFF0C\u77E5\u9053\u4E86\u8FD9\u4E9B\u4FE1\u606F\uFF0C\u5C31\u53EF\u4EE5\u53EA\u91CD\u4F20\u4E22\u5931\u7684\u6570\u636E\u3002</li></ul><p><img src="'+r+'" alt="sack"></p><p>\u4F7F\u7528\u8FD9\u4E2A\u65B9\u6CD5\u9700\u4E24\u65B9\u90FD\u652F\u6301</p><h3 id="duplicate-sack" tabindex="-1"><a class="header-anchor" href="#duplicate-sack" aria-hidden="true">#</a> Duplicate SACK</h3><p>\u53C8\u79F0 D-SACK\uFF0C\u5176\u4E3B\u8981\u4F7F\u7528\u4E86 SACK \u6765\u544A\u8BC9\u300C\u53D1\u9001\u65B9\u300D\u6709\u54EA\u4E9B\u6570\u636E\u88AB\u91CD\u590D\u63A5\u6536\u4E86\u3002</p><ol><li>ACK\u4E22\u62A5\u65F6</li></ol><ul><li>\u63A5\u6536\u65B9\u7ED9\u53D1\u9001\u65B9\u7684ACK\u786E\u8BA4\u5E94\u7B54\u4E22\u5931,\u53D1\u9001\u65B9\u8D85\u65F6\u540E\uFF0C\u91CD\u4F20\u7B2C\u4E00\u4E2A\u6570\u636E\u5305\uFF083000 ~ 3499\uFF09</li><li>\u63A5\u6536\u65B9\u6536\u5230\u540E\u53D1\u73B0\u5DF2\u7ECF\u6536\u5230\u8FC7\u4E86\uFF0C\u4E8E\u662F\u56DE\u4E86\u4E00\u4E2A SACK = 3000~3500\uFF0C\u544A\u8BC9\u53D1\u9001\u65B9</li><li>\u53D1\u9001\u65B9\u6536\u5230\u540E\u5C31\u77E5\u9053\u662FACK\u4E22\u4E86\uFF0C\u6570\u636E\u6CA1\u4E22</li></ul><p><img src="'+s+'" alt="dsack"></p><ol start="2"><li>\u7F51\u7EDC\u5EF6\u8FDF\u65F6</li></ol><ul><li>\u53D1\u9001\u65B9\u6570\u636E\u5305\u88AB\u7F51\u7EDC\u5EF6\u8FDF\uFF0C\u5BFC\u81F4\u53D1\u9001\u65B9\u6CA1\u6709\u6536\u5230ACK\u786E\u8BA4\u62A5\u6587</li><li>\u540E\u9762\u62A5\u6587\u5230\u8FBE\u7684\u4E09\u4E2A\u76F8\u540C\u7684 ACK \u786E\u8BA4\u62A5\u6587\uFF0C\u5C31\u89E6\u53D1\u4E86\u5FEB\u901F\u91CD\u4F20\u673A\u5236\uFF0C\u4F46\u662F\u5728\u91CD\u4F20\u540E\uFF0C\u88AB\u5EF6\u8FDF\u7684\u6570\u636E\u5305\uFF081000~1499\uFF09\u53C8\u5230\u4E86\u63A5\u6536\u65B9</li><li>\u63A5\u6536\u65B9\u56DE\u4E00\u4E2A SACK=1000~1500\uFF0C\u56E0\u4E3A ACK \u5DF2\u7ECF\u5230\u4E86 3000\uFF0C\u6240\u4EE5\u8FD9\u4E2A SACK \u662F D-SACK\uFF0C\u8868\u793A\u6536\u5230\u4E86\u91CD\u590D\u7684\u5305\u3002</li><li>\u53D1\u9001\u65B9\u5C31\u77E5\u9053\u5FEB\u901F\u91CD\u4F20\u89E6\u53D1\u7684\u539F\u56E0\u4E0D\u662F\u53D1\u51FA\u53BB\u7684\u5305\u4E22\u4E86\uFF0C\u4E5F\u4E0D\u662F\u56E0\u4E3A\u56DE\u5E94\u7684 ACK \u5305\u4E22\u4E86\uFF0C\u800C\u662F\u56E0\u4E3A\u7F51\u7EDC\u5EF6\u8FDF\u4E86</li></ul><p><img src="'+t+'" alt="dsack2"></p><p>D-SACK\u4F18\u70B9\uFF1A</p><ul><li>\u53EF\u4EE5\u8BA9\u53D1\u9001\u65B9\u77E5\u9053\u662F\u53D1\u9001\u51FA\u53BB\u7684\u5305\u4E22\u4E86\uFF0C\u8FD8\u662FACK\u4E22\u4E86</li><li>\u53EF\u4EE5\u77E5\u9053\u53D1\u9001\u7684\u6570\u636E\u5305\u662F\u4E0D\u662F\u88AB\u7F51\u7EDC\u5EF6\u8FDF\u4E86</li></ul><h2 id="\u6ED1\u52A8\u7A97\u53E3" tabindex="-1"><a class="header-anchor" href="#\u6ED1\u52A8\u7A97\u53E3" aria-hidden="true">#</a> \u6ED1\u52A8\u7A97\u53E3</h2><p>TCP\u6BCF\u53D1\u9001\u4E00\u4E2A\u6570\u636E\uFF0C\u90FD\u8981\u8FDB\u884C\u4E00\u6B21\u786E\u8BA4\u5E94\u7B54\uFF0C\u4E0A\u4E00\u4E2A\u6570\u636E\u5305\u6536\u5230\u5E94\u7B54\u540E\uFF0C\u518D\u53D1\u9001\u4E0B\u4E00\u4E2A\uFF0C\u5F80\u8FD4\u65F6\u95F4\u8D8A\u957F\uFF0C\u901A\u4FE1\u6548\u7387\u8D8A\u4F4E</p><p>TCP \u5F15\u5165\u7A97\u53E3\u8FD9\u4E2A\u6982\u5FF5\u3002\u5728\u5F80\u8FD4\u65F6\u95F4\u8F83\u957F\u7684\u60C5\u51B5\u4E0B\uFF0C\u4E5F\u4E0D\u4F1A\u964D\u4F4E\u7F51\u7EDC\u901A\u4FE1\u7684\u6548\u7387\u3002</p><ul><li>\u7D2F\u8BA1\u786E\u8BA4\uFF08\u7D2F\u8BA1\u5E94\u7B54\uFF09:<br> \u5047\u8BBE\u7A97\u53E3\u5927\u5C0F\u4E3A3\u4E2ATCP\u6BB5\uFF0C\u53D1\u9001\u65B9\u53EF\u4EE5\u8FDE\u7EED\u53D1\u90013\u4E2ATCP\u6570\u636E\u5305\uFF0C\u82E5\u5176\u4E2D\u6709\u4E00\u4E2AACK\u4E22\u5931\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4E0B\u4E00\u4E2A\u786E\u8BA4\u5E94\u7B54\u62A5\u6587\u6765\u786E\u8BA4<br> \u6BD4\u5982\u53D1\u9001\u65B9\u53D1\u9001400-499,500-599,600-699,\u4E09\u4E2A\u6570\u636E\u5305\uFF0CACK600\u4E22\u5931\uFF0C\u4F46\u662F\u6536\u5230\u4E86ACK700, \u8BF4\u660E700 \u4E4B\u524D\u7684\u6240\u6709\u6570\u636E\u63A5\u6536\u65B9\u90FD\u6536\u5230\u4E86</li></ul><h3 id="\u7A97\u53E3\u5927\u5C0F" tabindex="-1"><a class="header-anchor" href="#\u7A97\u53E3\u5927\u5C0F" aria-hidden="true">#</a> \u7A97\u53E3\u5927\u5C0F</h3><ol><li>\u7A97\u53E3\u5927\u5C0F\uFF1A\u6307\u65E0\u9700\u7B49\u5F85\u786E\u8BA4\u5E94\u7B54\uFF0C\u800C\u53EF\u4EE5\u7EE7\u7EED\u53D1\u9001\u6570\u636E\u7684\u6700\u5927\u503C\u3002</li></ol><p>\u7A97\u53E3\u7684\u5B9E\u73B0\u5B9E\u9645\u662F\u64CD\u4F5C\u7CFB\u7EDF\u5F00\u8F9F\u4E00\u4E2A\u7F13\u51B2\u533A\uFF0C\u53D1\u9001\u65B9\u628A\u5DF2\u53D1\u9001\u7684\u6570\u636E\u4FDD\u5B58\u5728\u7F13\u51B2\u533A\u4E2D\uFF0C\u5F53\u6309\u671F\u6536\u5230\u786E\u8BA4\u5E94\u7B54\u62A5\u6587\u540E\uFF0C\u518D\u5C06\u6570\u636E\u4ECE\u7F13\u5B58\u6E05\u9664</p><ol start="2"><li>TCP \u5934\u91CC\u6709\u4E00\u4E2A\u5B57\u6BB5\u53EB Window\uFF0C\u4E5F\u5C31\u662F\u7A97\u53E3\u5927\u5C0F\u3002</li></ol><blockquote><p>\u8FD9\u4E2A\u5B57\u6BB5\u662F\u63A5\u6536\u7AEF\u544A\u8BC9\u53D1\u9001\u7AEF\u81EA\u5DF1\u8FD8\u6709\u591A\u5C11\u7F13\u51B2\u533A\u53EF\u4EE5\u63A5\u6536\u6570\u636E\u3002\u4E8E\u662F\u53D1\u9001\u7AEF\u5C31\u53EF\u4EE5\u6839\u636E\u8FD9\u4E2A\u63A5\u6536\u7AEF\u7684\u5904\u7406\u80FD\u529B\u6765\u53D1\u9001\u6570\u636E\uFF0C\u800C\u4E0D\u4F1A\u5BFC\u81F4\u63A5\u6536\u7AEF\u5904\u7406\u4E0D\u8FC7\u6765\u3002</p></blockquote><p>\u6240\u4EE5\uFF0C\u901A\u5E38\u7A97\u53E3\u7684\u5927\u5C0F\u662F<strong>\u7531\u63A5\u6536\u65B9\u7684\u7A97\u53E3\u5927\u5C0F\u6765\u51B3\u5B9A</strong>\u7684\u3002</p><p>\u53D1\u9001\u65B9\u53D1\u9001\u7684\u6570\u636E\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7\u63A5\u6536\u65B9\u7684\u7A97\u53E3\u5927\u5C0F\uFF0C\u5426\u5219\u63A5\u6536\u65B9\u5C31\u65E0\u6CD5\u6B63\u5E38\u63A5\u6536\u5230\u6570\u636E\u3002</p><h3 id="\u53D1\u9001\u65B9\u6ED1\u52A8\u7A97\u53E3" tabindex="-1"><a class="header-anchor" href="#\u53D1\u9001\u65B9\u6ED1\u52A8\u7A97\u53E3" aria-hidden="true">#</a> \u53D1\u9001\u65B9\u6ED1\u52A8\u7A97\u53E3</h3>',42),h=[p];function c(n,o){return e(),i("div",null,h)}var A=a(d,[["render",c],["__file","TCP\u91CD\u4F20.html.vue"]]);export{A as default};
