import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{o,c,a as n,b as t,d as s,e,r as l}from"./app.d908edc5.js";const i={},r=n("h1",{id:"_2-\u4E8C\u5206\u67E5\u627E",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2-\u4E8C\u5206\u67E5\u627E","aria-hidden":"true"},"#"),s(" 2.\u4E8C\u5206\u67E5\u627E")],-1),u=n("h2",{id:"_704-\u4E8C\u5206\u67E5\u627E",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_704-\u4E8C\u5206\u67E5\u627E","aria-hidden":"true"},"#"),s(" 704.\u4E8C\u5206\u67E5\u627E")],-1),k={href:"https://leetcode.cn/problems/binary-search/",target:"_blank",rel:"noopener noreferrer"},d=s("\u9898\u76EE\u94FE\u63A5"),m=e(`<p>\u7ED9\u5B9A\u4E00\u4E2A\xA0n\xA0\u4E2A\u5143\u7D20\u6709\u5E8F\u7684\uFF08\u5347\u5E8F\uFF09\u6574\u578B\u6570\u7EC4\xA0nums \u548C\u4E00\u4E2A\u76EE\u6807\u503C\xA0target \xA0\uFF0C\u5199\u4E00\u4E2A\u51FD\u6570\u641C\u7D22\xA0nums\xA0\u4E2D\u7684 target\uFF0C\u5982\u679C\u76EE\u6807\u503C\u5B58\u5728\u8FD4\u56DE\u4E0B\u6807\uFF0C\u5426\u5219\u8FD4\u56DE -1\u3002</p><p>\u793A\u4F8B 1:</p><p>\u8F93\u5165: nums = [-1,0,3,5,9,12], target = 9 \u8F93\u51FA: 4 \u89E3\u91CA: 9 \u51FA\u73B0\u5728 nums \u4E2D\u5E76\u4E14\u4E0B\u6807\u4E3A 4</p><p>\u793A\u4F8B\xA02:</p><p>\u8F93\u5165: nums = [-1,0,3,5,9,12], target = 2 \u8F93\u51FA: -1 \u89E3\u91CA: 2 \u4E0D\u5B58\u5728 nums \u4E2D\u56E0\u6B64\u8FD4\u56DE -1</p><p>\u5FAA\u73AF\u4E0D\u53D8\u91CF\u89C4\u5219:</p><p>\u533A\u95F4\u7684\u5B9A\u4E49\u5C31\u662F\u4E0D\u53D8\u91CF\u3002\u8981\u5728\u4E8C\u5206\u67E5\u627E\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u4FDD\u6301\u4E0D\u53D8\u91CF\uFF0C\u5C31\u662F\u5728while\u5BFB\u627E\u4E2D\u6BCF\u4E00\u6B21\u8FB9\u754C\u7684\u5904\u7406\u90FD\u8981\u575A\u6301\u6839\u636E\u533A\u95F4\u7684\u5B9A\u4E49\u6765\u64CD\u4F5C</p><p>\u5199\u4E8C\u5206\u6CD5\uFF0C\u533A\u95F4\u7684\u5B9A\u4E49\u4E00\u822C\u4E3A\u4E24\u79CD\uFF0C\u5DE6\u95ED\u53F3\u95ED\u5373[left, right]\uFF0C\u6216\u8005\u5DE6\u95ED\u53F3\u5F00\u5373[left, right)\u3002</p><h3 id="\u7B2C\u4E00\u79CD\u5199\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E00\u79CD\u5199\u6CD5" aria-hidden="true">#</a> \u7B2C\u4E00\u79CD\u5199\u6CD5</h3><ul><li>while (left &lt;= right) \u8981\u4F7F\u7528 &lt;= \uFF0C\u56E0\u4E3Aleft == right\u662F\u6709\u610F\u4E49\u7684</li><li>if (nums[middle] &gt; target) right \u8981\u8D4B\u503C\u4E3A middle - 1\uFF0C\u56E0\u4E3A\u5F53\u524D\u8FD9\u4E2Anums[middle]\u4E00\u5B9A\u4E0D\u662Ftarget\uFF0C<br> \u90A3\u4E48\u63A5\u4E0B\u6765\u8981\u67E5\u627E\u7684\u5DE6\u533A\u95F4\u7ED3\u675F\u4E0B\u6807\u4F4D\u7F6E\u5C31\u662F middle - 1</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">search</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">let</span> l<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
   <span class="token keyword">let</span> r<span class="token operator">=</span>nums<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//\u5B9A\u4E49target\u5728\u5DE6\u95ED\u53F3\u95ED\u7684\u533A\u95F4\u91CC\uFF0C[left, right]</span>
   <span class="token keyword">while</span><span class="token punctuation">(</span>l<span class="token operator">&lt;=</span>r<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">// \u5F53left==right\uFF0C\u533A\u95F4[left, right]\u4F9D\u7136\u6709\u6548\uFF0C\u6240\u4EE5\u7528 &lt;=</span>
       mid<span class="token operator">=</span>l<span class="token operator">+</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>r<span class="token operator">-</span>l<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token keyword">if</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token operator">&gt;</span>target<span class="token punctuation">)</span><span class="token punctuation">{</span>
           r<span class="token operator">=</span>mid<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//target \u5728\u5DE6\u533A\u95F4\uFF0C\u6240\u4EE5[left, middle - 1]</span>
       <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token operator">&lt;</span>target<span class="token punctuation">)</span><span class="token punctuation">{</span>
           l<span class="token operator">=</span>mid<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//target \u5728\u53F3\u533A\u95F4\uFF0C\u6240\u4EE5[middle + 1, right]</span>
       <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
          <span class="token keyword">return</span> mid<span class="token punctuation">;</span>
       <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7B2C\u4E8C\u79CD\u5199\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E8C\u79CD\u5199\u6CD5" aria-hidden="true">#</a> \u7B2C\u4E8C\u79CD\u5199\u6CD5</h3><ul><li>while (left &lt; right)\uFF0C\u8FD9\u91CC\u4F7F\u7528 &lt; ,\u56E0\u4E3Aleft == right\u5728\u533A\u95F4[left, right)\u662F\u6CA1\u6709\u610F\u4E49\u7684</li><li>if (nums[middle] &gt; target) right \u66F4\u65B0\u4E3A middle\uFF0C\u56E0\u4E3A\u5F53\u524Dnums[middle]\u4E0D\u7B49\u4E8Etarget\uFF0C\u53BB\u5DE6\u533A\u95F4\u7EE7\u7EED\u5BFB\u627E\uFF0C\u800C\u5BFB\u627E\u533A\u95F4\u662F\u5DE6\u95ED\u53F3\u5F00\u533A\u95F4\uFF0C\u6240\u4EE5right\u66F4\u65B0\u4E3Amiddle\uFF0C\u5373\uFF1A\u4E0B\u4E00\u4E2A\u67E5\u8BE2\u533A\u95F4\u4E0D\u4F1A\u53BB\u6BD4\u8F83nums[middle]</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">search</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">let</span> l<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
   <span class="token keyword">let</span> r<span class="token operator">=</span>nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
   <span class="token keyword">while</span><span class="token punctuation">(</span>l<span class="token operator">&lt;</span>r<span class="token punctuation">)</span><span class="token punctuation">{</span>
       mid<span class="token operator">=</span>l<span class="token operator">+</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>r<span class="token operator">-</span>l<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token keyword">if</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token operator">&gt;</span>target<span class="token punctuation">)</span><span class="token punctuation">{</span>
           r<span class="token operator">=</span>mid<span class="token punctuation">;</span><span class="token comment">// target \u5728\u5DE6\u533A\u95F4\uFF0C\u5728[left, middle)\u4E2D </span>
       <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token operator">&lt;</span>target<span class="token punctuation">)</span><span class="token punctuation">{</span>
           l<span class="token operator">=</span>mid<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">// target \u5728\u53F3\u533A\u95F4\uFF0C\u5728[middle + 1, right)\u4E2D</span>
       <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
          <span class="token keyword">return</span> mid<span class="token punctuation">;</span>
       <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_588-\u5C71\u8109\u6570\u7EC4\u7684\u5CF0\u9876\u7D22\u5F15" tabindex="-1"><a class="header-anchor" href="#_588-\u5C71\u8109\u6570\u7EC4\u7684\u5CF0\u9876\u7D22\u5F15" aria-hidden="true">#</a> 588.\u5C71\u8109\u6570\u7EC4\u7684\u5CF0\u9876\u7D22\u5F15</h2>`,15),v={href:"https://leetcode.cn/problems/peak-index-in-a-mountain-array/",target:"_blank",rel:"noopener noreferrer"},b=s("\u9898\u76EE\u8FDE\u63A5"),h=e(`<h3 id="\u679A\u4E3E" tabindex="-1"><a class="header-anchor" href="#\u679A\u4E3E" aria-hidden="true">#</a> \u679A\u4E3E</h3><p>\u904D\u5386\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u6211\u4EEC\u6700\u5148\u904D\u5386\u5230\u7684\u6EE1\u8DB3arri &gt; arri+1 \u7684\u4E0B\u6807 i\u4E00\u5B9A\u4E5F\u6EE1\u8DB3 arri-1 &lt; arri</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">peakIndexInMountainArray</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> n<span class="token operator">=</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token keyword">let</span> ans<span class="token operator">=</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">&gt;</span>arr<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          ans<span class="token operator">=</span>i<span class="token punctuation">;</span>
          <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> ans<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4E8C\u5206\u67E5\u627E" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u5206\u67E5\u627E" aria-hidden="true">#</a> \u4E8C\u5206\u67E5\u627E</h3><p>\u904D\u5386\u4E0E\u4E0A\u9762\u4E00\u81F4</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">peakIndexInMountainArray</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">const</span> n<span class="token operator">=</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
 <span class="token keyword">let</span> left<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//\u4E0D\u4F1A\u662F0</span>
 <span class="token keyword">let</span> right<span class="token operator">=</span>n<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">;</span>
 <span class="token keyword">let</span> ans<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
 <span class="token keyword">while</span><span class="token punctuation">(</span>left<span class="token operator">&lt;=</span>right<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> mid<span class="token operator">=</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>right<span class="token operator">+</span>left<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token operator">&gt;</span>arr<span class="token punctuation">[</span>mid<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        ans<span class="token operator">=</span>mid<span class="token punctuation">;</span>
        right<span class="token operator">=</span>mid<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
       left<span class="token operator">=</span>mid<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span> ans<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_367-\u6709\u6548\u7684\u5B8C\u5168\u5E73\u65B9\u6570" tabindex="-1"><a class="header-anchor" href="#_367-\u6709\u6548\u7684\u5B8C\u5168\u5E73\u65B9\u6570" aria-hidden="true">#</a> 367.\u6709\u6548\u7684\u5B8C\u5168\u5E73\u65B9\u6570</h3>`,7),g={href:"https://leetcode.cn/problems/valid-perfect-square/",target:"_blank",rel:"noopener noreferrer"},f=s("\u9898\u76EE\u8FDE\u63A5"),w=e(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code> <span class="token keyword">let</span> left<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
   <span class="token keyword">let</span> right<span class="token operator">=</span>num<span class="token punctuation">;</span>
   <span class="token keyword">while</span><span class="token punctuation">(</span>left<span class="token operator">&lt;=</span>right<span class="token punctuation">)</span><span class="token punctuation">{</span>
       <span class="token keyword">const</span> mid<span class="token operator">=</span>left<span class="token operator">+</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>right<span class="token operator">-</span>left<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token keyword">const</span> square<span class="token operator">=</span>mid<span class="token operator">*</span>mid<span class="token punctuation">;</span>
       <span class="token keyword">if</span><span class="token punctuation">(</span>square<span class="token operator">&lt;</span>num<span class="token punctuation">)</span><span class="token punctuation">{</span>
           left<span class="token operator">=</span>mid<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
       <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>square<span class="token operator">&gt;</span>num<span class="token punctuation">)</span><span class="token punctuation">{</span>
           right<span class="token operator">=</span>mid<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
       <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
           <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
       <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function y(_,x){const a=l("ExternalLinkIcon");return o(),c("div",null,[r,u,n("p",null,[n("a",k,[d,t(a)])]),m,n("p",null,[n("a",v,[b,t(a)])]),h,n("p",null,[n("a",g,[f,t(a)])]),w])}var M=p(i,[["render",y],["__file","binary-search.html.vue"]]);export{M as default};