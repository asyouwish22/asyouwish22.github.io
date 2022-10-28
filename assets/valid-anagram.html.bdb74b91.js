import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{o as p,c as o,a as n,b as e,d as s,e as c,r as i}from"./app.b8453117.js";const u={},l=n("h1",{id:"_3-\u6709\u6548\u7684\u5B57\u6BCD\u5F02\u4F4D\u8BCD",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3-\u6709\u6548\u7684\u5B57\u6BCD\u5F02\u4F4D\u8BCD","aria-hidden":"true"},"#"),s(" 3.\u6709\u6548\u7684\u5B57\u6BCD\u5F02\u4F4D\u8BCD")],-1),k=n("h2",{id:"_242-\u6709\u6548\u7684\u5B57\u6BCD\u5F02\u4F4D\u8BCD",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_242-\u6709\u6548\u7684\u5B57\u6BCD\u5F02\u4F4D\u8BCD","aria-hidden":"true"},"#"),s(" 242.\u6709\u6548\u7684\u5B57\u6BCD\u5F02\u4F4D\u8BCD")],-1),r={href:"https://leetcode.cn/problems/valid-anagram/",target:"_blank",rel:"noopener noreferrer"},d=s("\u9898\u76EE\u94FE\u63A5"),v=c(`<p>\u7ED9\u5B9A\u4E24\u4E2A\u5B57\u7B26\u4E32 s \u548C t \uFF0C\u7F16\u5199\u4E00\u4E2A\u51FD\u6570\u6765\u5224\u65AD t \u662F\u5426\u662F s \u7684\u5B57\u6BCD\u5F02\u4F4D\u8BCD\u3002</p><p>\u6CE8\u610F\uFF1A\u82E5\xA0s \u548C t\xA0\u4E2D\u6BCF\u4E2A\u5B57\u7B26\u51FA\u73B0\u7684\u6B21\u6570\u90FD\u76F8\u540C\uFF0C\u5219\u79F0\xA0s \u548C t\xA0\u4E92\u4E3A\u5B57\u6BCD\u5F02\u4F4D\u8BCD\u3002</p><h3 id="\u6392\u5E8F\u518D\u6BD4\u8F83" tabindex="-1"><a class="header-anchor" href="#\u6392\u5E8F\u518D\u6BD4\u8F83" aria-hidden="true">#</a> \u6392\u5E8F\u518D\u6BD4\u8F83</h3><p>\u4F9D\u9898\u610F\uFF0C\u6709\u6548\u7684\u5B57\u6BCD\u5F02\u4F4D\u8BCD\u5373\u4E24\u4E2A\u5B57\u7B26\u4E32\u6392\u597D\u5E8F\u540E\u76F8\u7B49\uFF0C\u53EF\u5148\u8F6C\u5316\u4E3A\u6570\u7EC4\uFF0C\u6392\u5E8F\u540E\u8FDB\u884C\u6BD4\u8F83\uFF0C\u6CE8\u610F\u6BD4\u8F83\u65F6\u5E94\u518D\u6B21\u8F6C\u5316\u4E3A\u5B57\u7B26\u4E32</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">isAnagram</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> t</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  s<span class="token operator">=</span><span class="token punctuation">[</span><span class="token operator">...</span>s<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  t<span class="token operator">=</span><span class="token punctuation">[</span><span class="token operator">...</span>t<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> s<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">==</span>t<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u54C8\u5E0C" tabindex="-1"><a class="header-anchor" href="#\u54C8\u5E0C" aria-hidden="true">#</a> \u54C8\u5E0C</h3><ol><li>\u7528map\u8BB0\u5F55\u5B57\u7B26\u4E32\u4E2D\u6BCF\u4E2A\u5B57\u7B26\u51FA\u73B0\u4E86\u51E0\u6B21</li><li>\u6BD4\u8F83\u4E24\u4E2Amap\u662F\u5426\u76F8\u7B49</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getMap</span><span class="token punctuation">(</span><span class="token parameter">string</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
     <span class="token keyword">let</span> map<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> string<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
          map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> map<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">matchMap</span><span class="token punctuation">(</span><span class="token parameter">map1<span class="token punctuation">,</span>map2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>map1<span class="token punctuation">.</span>size<span class="token operator">!==</span>map2<span class="token punctuation">.</span>size<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> map1<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>map2<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>map1<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token operator">!==</span>map2<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token keyword">var</span> <span class="token function-variable function">isAnagram</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> t</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">matchMap</span><span class="token punctuation">(</span><span class="token function">getMap</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">getMap</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function m(f,b){const a=i("ExternalLinkIcon");return p(),o("div",null,[l,k,n("p",null,[n("a",r,[d,e(a)])]),v])}var w=t(u,[["render",m],["__file","valid-anagram.html.vue"]]);export{w as default};