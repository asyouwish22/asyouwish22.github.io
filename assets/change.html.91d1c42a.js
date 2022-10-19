import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";import{o as p,c,a as n,b as e,e as t,d as s,r as l}from"./app.bf4626e2.js";const i={},u=t(`<h1 id="\u4E00\u4E9B\u6539\u53D8" tabindex="-1"><a class="header-anchor" href="#\u4E00\u4E9B\u6539\u53D8" aria-hidden="true">#</a> \u4E00\u4E9B\u6539\u53D8</h1><h2 id="\u54CD\u5E94\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u54CD\u5E94\u5F0F" aria-hidden="true">#</a> \u54CD\u5E94\u5F0F</h2><ol><li>vue2.x\u7684\u54CD\u5E94\u5F0F<br> \u5B9E\u73B0\u539F\u7406\uFF1A</li></ol><ul><li><p>\u5BF9\u8C61\u7C7B\u578B\uFF1A\u901A\u8FC7<code>Object.defineProperty()</code>\u5BF9\u5C5E\u6027\u7684\u8BFB\u53D6\u3001\u4FEE\u6539\u8FDB\u884C\u62E6\u622A\uFF08\u6570\u636E\u52AB\u6301\uFF09\u3002</p></li><li><p>\u6570\u7EC4\u7C7B\u578B\uFF1A\u901A\u8FC7\u91CD\u5199\u66F4\u65B0\u6570\u7EC4\u7684\u4E00\u7CFB\u5217\u65B9\u6CD5\u6765\u5B9E\u73B0\u62E6\u622A\u3002\uFF08\u5BF9\u6570\u7EC4\u7684\u53D8\u66F4\u65B9\u6CD5\u8FDB\u884C\u4E86\u5305\u88F9\uFF09</p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token string">&#39;count&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function">get</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> 
    <span class="token function">set</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B58\u5728\u95EE\u9898\uFF1A</p><ul><li>\u65B0\u589E\u5C5E\u6027\u3001\u5220\u9664\u5C5E\u6027, \u754C\u9762\u4E0D\u4F1A\u66F4\u65B0\u3002</li><li>\u76F4\u63A5\u901A\u8FC7\u4E0B\u6807\u4FEE\u6539\u6570\u7EC4, \u754C\u9762\u4E0D\u4F1A\u81EA\u52A8\u66F4\u65B0\u3002</li></ul><ol start="2"><li>Vue3.0\u7684\u54CD\u5E94\u5F0F<br> \u5B9E\u73B0\u539F\u7406:</li></ol>`,8),r=n("li",null,"\u901A\u8FC7Proxy\uFF08\u4EE3\u7406\uFF09: \u62E6\u622A\u5BF9\u8C61\u4E2D\u4EFB\u610F\u5C5E\u6027\u7684\u53D8\u5316, \u5305\u62EC\uFF1A\u5C5E\u6027\u503C\u7684\u8BFB\u5199\u3001\u5C5E\u6027\u7684\u6DFB\u52A0\u3001\u5C5E\u6027\u7684\u5220\u9664\u7B49\u3002",-1),d=n("li",null,"\u901A\u8FC7Reflect\uFF08\u53CD\u5C04\uFF09: \u5BF9\u6E90\u5BF9\u8C61\u7684\u5C5E\u6027\u8FDB\u884C\u64CD\u4F5C\u3002",-1),k=s("MDN: "),v=s("Proxy:"),h={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy",target:"_blank",rel:"noopener noreferrer"},f=s("https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy"),m=s("Reflect:"),b={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect",target:"_blank",rel:"noopener noreferrer"},_=s("https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect"),g=t(`<h2 id="reactive\u5BF9\u6BD4ref" tabindex="-1"><a class="header-anchor" href="#reactive\u5BF9\u6BD4ref" aria-hidden="true">#</a> reactive\u5BF9\u6BD4ref</h2><ul><li>\u5B9A\u4E49\u6570\u636E\uFF1A <ul><li>ref\u7528\u6765\u5B9A\u4E49\uFF1A\u57FA\u672C\u7C7B\u578B\u6570\u636E\u3002</li><li>reactive\u7528\u6765\u5B9A\u4E49\uFF1A\u5BF9\u8C61\uFF08\u6216\u6570\u7EC4\uFF09\u7C7B\u578B\u6570\u636E\u3002</li></ul></li></ul><blockquote><p>ref\u4E5F\u53EF\u4EE5\u7528\u6765\u5B9A\u4E49\u5BF9\u8C61\uFF08\u6216\u6570\u7EC4\uFF09\u7C7B\u578B\u6570\u636E, \u5B83\u5185\u90E8\u4F1A\u81EA\u52A8\u901A\u8FC7reactive\u8F6C\u4E3A\u4EE3\u7406\u5BF9\u8C61\u3002</p></blockquote><ul><li><p>\u539F\u7406\uFF1A</p><ul><li>ref\u901A\u8FC7Object.defineProperty()\u7684get\u4E0Eset\u6765\u5B9E\u73B0\u54CD\u5E94\u5F0F\uFF08\u6570\u636E\u52AB\u6301\uFF09\u3002</li><li>reactive\u901A\u8FC7\u4F7F\u7528Proxy\u6765\u5B9E\u73B0\u54CD\u5E94\u5F0F\uFF08\u6570\u636E\u52AB\u6301\uFF09, \u5E76\u901A\u8FC7Reflect\u64CD\u4F5C\u6E90\u5BF9\u8C61\u5185\u90E8\u7684\u6570\u636E\u3002</li></ul></li><li><p>\u4F7F\u7528\uFF1A</p><ul><li>ref\u5B9A\u4E49\u7684\u6570\u636E\uFF1A\u64CD\u4F5C\u6570\u636E\u9700\u8981.value\uFF0C\u8BFB\u53D6\u6570\u636E\u65F6\u6A21\u677F\u4E2D\u76F4\u63A5\u8BFB\u53D6\u4E0D\u9700\u8981.value\u3002</li><li>reactive\u5B9A\u4E49\u7684\u6570\u636E\uFF1A\u64CD\u4F5C\u6570\u636E\u4E0E\u8BFB\u53D6\u6570\u636E\uFF1A\u5747\u4E0D\u9700\u8981.value\u3002</li></ul></li></ul><h2 id="setup\u7684\u4E24\u4E2A\u6CE8\u610F\u70B9" tabindex="-1"><a class="header-anchor" href="#setup\u7684\u4E24\u4E2A\u6CE8\u610F\u70B9" aria-hidden="true">#</a> setup\u7684\u4E24\u4E2A\u6CE8\u610F\u70B9</h2><ul><li><p>setup\u6267\u884C\u7684\u65F6\u673A:\u5728beforeCreate\u4E4B\u524D\u6267\u884C\u4E00\u6B21\uFF0Cthis\u662Fundefined\u3002</p></li><li><p>setup\u7684\u53C2\u6570:</p><ul><li>props\uFF1A\u503C\u4E3A\u5BF9\u8C61\uFF0C\u5305\u542B\uFF1A\u7EC4\u4EF6\u5916\u90E8\u4F20\u9012\u8FC7\u6765\uFF0C\u4E14\u7EC4\u4EF6\u5185\u90E8\u58F0\u660E\u63A5\u6536\u4E86\u7684\u5C5E\u6027\u3002</li><li>context\uFF1A\u4E0A\u4E0B\u6587\u5BF9\u8C61</li><li>attrs: \u503C\u4E3A\u5BF9\u8C61\uFF0C\u5305\u542B\uFF1A\u7EC4\u4EF6\u5916\u90E8\u4F20\u9012\u8FC7\u6765\uFF0C\u4F46\u6CA1\u6709\u5728props\u914D\u7F6E\u4E2D\u58F0\u660E\u7684\u5C5E\u6027, \u76F8\u5F53\u4E8E this.$attrs\u3002</li><li>slots: \u6536\u5230\u7684\u63D2\u69FD\u5185\u5BB9, \u76F8\u5F53\u4E8E this.$slots\u3002</li><li>emit: \u5206\u53D1\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u7684\u51FD\u6570, \u76F8\u5F53\u4E8E this.$emit\u3002</li></ul></li></ul><h2 id="computed" tabindex="-1"><a class="header-anchor" href="#computed" aria-hidden="true">#</a> computed</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>computed<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token operator">...</span>
 <span class="token comment">//\u8BA1\u7B97\u5C5E\u6027\u2014\u2014\u7B80\u5199</span>
    <span class="token keyword">let</span> fullName <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> person<span class="token punctuation">.</span>firstName <span class="token operator">+</span> <span class="token string">&#39;-&#39;</span> <span class="token operator">+</span> person<span class="token punctuation">.</span>lastName
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">//\u8BA1\u7B97\u5C5E\u6027\u2014\u2014\u5B8C\u6574</span>
    <span class="token keyword">let</span> fullName <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> person<span class="token punctuation">.</span>firstName <span class="token operator">+</span> <span class="token string">&#39;-&#39;</span> <span class="token operator">+</span> person<span class="token punctuation">.</span>lastName
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">set</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">const</span> nameArr <span class="token operator">=</span> value<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span><span class="token punctuation">)</span>
            person<span class="token punctuation">.</span>firstName <span class="token operator">=</span> nameArr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
            person<span class="token punctuation">.</span>lastName <span class="token operator">=</span> nameArr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="watch" tabindex="-1"><a class="header-anchor" href="#watch" aria-hidden="true">#</a> watch</h2><ul><li>\u76D1\u89C6reactive\u5B9A\u4E49\u7684\u54CD\u5E94\u5F0F\u6570\u636E\u65F6\uFF1AoldValue\u65E0\u6CD5\u6B63\u786E\u83B7\u53D6\u3001\u5F3A\u5236\u5F00\u542F\u4E86\u6DF1\u5EA6\u76D1\u89C6\uFF08deep\u914D\u7F6E\u5931\u6548\uFF09\u3002</li><li>\u76D1\u89C6reactive\u5B9A\u4E49\u7684\u54CD\u5E94\u5F0F\u6570\u636E\u4E2D\u67D0\u4E2A\u5C5E\u6027\u65F6\uFF1Adeep\u914D\u7F6E\u6709\u6548\u3002</li></ul><h2 id="watcheffect\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#watcheffect\u51FD\u6570" aria-hidden="true">#</a> watchEffect\u51FD\u6570</h2><p>watch\uFF1A\u65E2\u8981\u6307\u660E\u76D1\u89C6\u7684\u5C5E\u6027\uFF0C\u4E5F\u8981\u6307\u660E\u76D1\u89C6\u7684\u56DE\u8C03\u3002</p><p>watchEffect\uFF1A\u4E0D\u7528\u6307\u660E\u76D1\u89C6\u54EA\u4E2A\u5C5E\u6027\uFF0C\u76D1\u89C6\u7684\u56DE\u8C03\u4E2D\u7528\u5230\u54EA\u4E2A\u5C5E\u6027\uFF0C\u90A3\u5C31\u76D1\u89C6\u54EA\u4E2A\u5C5E\u6027\u3002</p><p>watchEffect\u6709\u70B9\u50CFcomputed\uFF1A</p><p>\u4F46computed\u6CE8\u91CD\u7684\u8BA1\u7B97\u51FA\u6765\u7684\u503C\uFF08\u56DE\u8C03\u51FD\u6570\u7684\u8FD4\u56DE\u503C\uFF09\uFF0C\u6240\u4EE5\u5FC5\u987B\u8981\u5199\u8FD4\u56DE\u503C\u3002<br> \u800CwatchEffect\u66F4\u6CE8\u91CD\u7684\u662F\u8FC7\u7A0B\uFF08\u56DE\u8C03\u51FD\u6570\u7684\u51FD\u6570\u4F53\uFF09\uFF0C\u4E0D\u7528\u5199\u8FD4\u56DE\u503C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//watchEffect\u6240\u6307\u5B9A\u7684\u56DE\u8C03\u4E2D\u7528\u5230\u7684\u6570\u636E\u53EA\u8981\u53D1\u751F\u53D8\u5316\uFF0C\u5219\u76F4\u63A5\u91CD\u65B0\u6267\u884C\u56DE\u8C03\u3002</span>
<span class="token function">watchEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> x1 <span class="token operator">=</span> sum<span class="token punctuation">.</span>value
    <span class="token keyword">const</span> x2 <span class="token operator">=</span> person<span class="token punctuation">.</span>age
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;watchEffect\u914D\u7F6E\u7684\u56DE\u8C03\u6267\u884C\u4E86&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u751F\u547D\u5468\u671F" tabindex="-1"><a class="header-anchor" href="#\u751F\u547D\u5468\u671F" aria-hidden="true">#</a> \u751F\u547D\u5468\u671F</h2><p>Vue3.0\u4E2D\u53EF\u4EE5\u7EE7\u7EED\u4F7F\u7528Vue2.x\u4E2D\u7684\u751F\u547D\u5468\u671F\u94A9\u5B50\uFF0C\u6709\u4E24\u4E2A\u88AB\u66F4\u540D\uFF1A</p><p><code>beforeDestroy</code>\u6539\u540D\u4E3A <code>beforeUnmount</code><br><code>destroyed</code>\u6539\u540D\u4E3A <code>unmounted</code></p><p>Vue3.0\u4E5F\u63D0\u4F9B\u4E86 Composition API \u5F62\u5F0F\u7684\u751F\u547D\u5468\u671F\u94A9\u5B50\uFF0C\u4E0EVue2.x\u4E2D\u94A9\u5B50\u5BF9\u5E94\u5173\u7CFB\u5982\u4E0B\uFF1A</p><p><code>beforeCreate</code>===&gt;<code>setup()</code></p><p><code>created</code>=======&gt;<code>setup() </code></p><p><code>beforeMount </code>===&gt;<code>onBeforeMount </code></p><p><code>mounted</code>=======&gt;<code>onMounted </code></p><p><code>beforeUpdate</code>===&gt;<code>onBeforeUpdate</code></p><p><code>updated</code> =======&gt;<code>onUpdated </code></p><p><code>beforeUnmount</code> ==&gt;<code>onBeforeUnmount</code></p><p><code>unmounted</code> =====&gt;<code>onUnmounted</code></p><h2 id="toref" tabindex="-1"><a class="header-anchor" href="#toref" aria-hidden="true">#</a> toRef</h2><ul><li><p>\u4F5C\u7528\uFF1A\u521B\u5EFA\u4E00\u4E2A ref \u5BF9\u8C61\uFF0C\u5176value\u503C\u6307\u5411\u53E6\u4E00\u4E2A\u5BF9\u8C61\u4E2D\u7684\u67D0\u4E2A\u5C5E\u6027\u3002</p></li><li><p>\u8BED\u6CD5\uFF1Aconst name = toRef(person,&#39;name&#39;)</p></li><li><p>\u5E94\u7528: \u8981\u5C06\u54CD\u5E94\u5F0F\u5BF9\u8C61\u4E2D\u7684\u67D0\u4E2A\u5C5E\u6027\u5355\u72EC\u63D0\u4F9B\u7ED9\u5916\u90E8\u4F7F\u7528\u65F6\u3002</p></li><li><p>\u6269\u5C55\uFF1AtoRefs \u4E0EtoRef\u529F\u80FD\u4E00\u81F4\uFF0C\u4F46\u53EF\u4EE5\u6279\u91CF\u521B\u5EFA\u591A\u4E2A ref \u5BF9\u8C61\uFF0C\u8BED\u6CD5\uFF1AtoRefs(person)</p></li></ul>`,30);function x(w,y){const a=l("ExternalLinkIcon");return p(),c("div",null,[u,n("ul",null,[r,d,n("li",null,[k,n("ul",null,[n("li",null,[n("p",null,[v,n("a",h,[f,e(a)])])]),n("li",null,[n("p",null,[m,n("a",b,[_,e(a)])])])])])]),g])}var R=o(i,[["render",x],["__file","change.html.vue"]]);export{R as default};