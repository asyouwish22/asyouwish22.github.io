import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as p,a as n,b as c,d as s,e as o,r as i}from"./app.07600196.js";const l={},u=n("h1",{id:"\u73AF\u5F62\u94FE\u8868-ii",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u73AF\u5F62\u94FE\u8868-ii","aria-hidden":"true"},"#"),s(" \u73AF\u5F62\u94FE\u8868 II")],-1),r=n("h2",{id:"_142-\u73AF\u5F62\u94FE\u8868-ii",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_142-\u73AF\u5F62\u94FE\u8868-ii","aria-hidden":"true"},"#"),s(" 142.\u73AF\u5F62\u94FE\u8868 II")],-1),d={href:"https://leetcode.cn/problems/linked-list-cycle-ii/",target:"_blank",rel:"noopener noreferrer"},k=s("\u9898\u76EE\u94FE\u63A5"),v=o(`<p>\u7ED9\u5B9A\u4E00\u4E2A\u94FE\u8868\u7684\u5934\u8282\u70B9 \xA0head\xA0\uFF0C\u8FD4\u56DE\u94FE\u8868\u5F00\u59CB\u5165\u73AF\u7684\u7B2C\u4E00\u4E2A\u8282\u70B9\u3002\xA0\u5982\u679C\u94FE\u8868\u65E0\u73AF\uFF0C\u5219\u8FD4\u56DE\xA0null\u3002</p><p>\u5982\u679C\u94FE\u8868\u4E2D\u6709\u67D0\u4E2A\u8282\u70B9\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8FDE\u7EED\u8DDF\u8E2A next \u6307\u9488\u518D\u6B21\u5230\u8FBE\uFF0C\u5219\u94FE\u8868\u4E2D\u5B58\u5728\u73AF\u3002 \u4F7F\u7528\u6574\u6570 pos \u6765\u8868\u793A\u94FE\u8868\u5C3E\u8FDE\u63A5\u5230\u94FE\u8868\u4E2D\u7684\u4F4D\u7F6E\uFF08\u7D22\u5F15\u4ECE 0 \u5F00\u59CB\uFF09\u3002\u5982\u679C pos \u662F -1\uFF0C\u5219\u5728\u8BE5\u94FE\u8868\u4E2D\u6CA1\u6709\u73AF\u3002</p><ul><li>\u4E0D\u5141\u8BB8\u4FEE\u6539 \u94FE\u8868\u3002</li></ul><h3 id="\u54C8\u5E0C\u8868" tabindex="-1"><a class="header-anchor" href="#\u54C8\u5E0C\u8868" aria-hidden="true">#</a> \u54C8\u5E0C\u8868</h3><p>\u5229\u7528\u54C8\u5E0C\u8868\uFF0C\u904D\u5386\u94FE\u8868\u7684\u8282\u70B9\u5E76\u8BB0\u5F55\u4E0B\u6765\uFF0C\u5982\u679C\u9047\u5230\u4E4B\u524D\u904D\u5386\u8FC7\u7684\u8282\u70B9</p><p>\u53EF\u4EE5\u5224\u5B9A\u94FE\u8868\u4E2D\u5B58\u5728\u73AF</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">detectCycle</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> set<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> cur<span class="token operator">=</span>head<span class="token punctuation">;</span>
  <span class="token keyword">while</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>set<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          <span class="token keyword">return</span> cur<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span><span class="token punctuation">;</span>
      cur<span class="token operator">=</span>cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6807\u8BB0\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u6807\u8BB0\u6CD5" aria-hidden="true">#</a> \u6807\u8BB0\u6CD5</h3><p>\u7ED9\u904D\u5386\u8FC7\u7684\u8282\u70B9\u6253\u8BB0\u53F7\uFF0C\u904D\u5386\u8FC7\u7A0B\u4E2D\u9047\u5230\u6709\u8BB0\u53F7\u7684\u8282\u70B9\u8BF4\u660E\u6709\u73AF</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">detectCycle</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> cur<span class="token operator">=</span>head<span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>isVisited<span class="token punctuation">)</span> <span class="token keyword">return</span> cur<span class="token punctuation">;</span>
        cur<span class="token punctuation">.</span>isVisited<span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">;</span>
        cur<span class="token operator">=</span>cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function h(m,b){const a=i("ExternalLinkIcon");return t(),p("div",null,[u,r,n("p",null,[n("a",d,[k,c(a)])]),v])}var y=e(l,[["render",h],["__file","linked-list-cycle-ii.html.vue"]]);export{y as default};