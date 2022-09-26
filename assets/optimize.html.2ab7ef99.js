import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e}from"./app.d908edc5.js";const p={},t=e(`<h1 id="webpack\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#webpack\u4F18\u5316" aria-hidden="true">#</a> webpack\u4F18\u5316</h1><h2 id="\u5F00\u53D1\u73AF\u5883\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#\u5F00\u53D1\u73AF\u5883\u4F18\u5316" aria-hidden="true">#</a> \u5F00\u53D1\u73AF\u5883\u4F18\u5316</h2><ol><li>\u4F18\u5316\u6253\u5305\u6784\u5EFA\u901F\u5EA6</li></ol><h3 id="hmr" tabindex="-1"><a class="header-anchor" href="#hmr" aria-hidden="true">#</a> HMR</h3><p>hot module replacement \u70ED\u6A21\u5757\u66FF\u6362 / \u6A21\u5757\u70ED\u66FF\u6362<br> \u4F5C\u7528\uFF1A\u4E00\u4E2A\u6A21\u5757\u53D1\u751F\u53D8\u5316\uFF0C\u53EA\u4F1A\u91CD\u65B0\u6253\u5305\u8FD9\u4E00\u4E2A\u6A21\u5757\uFF08\u800C\u4E0D\u662F\u6253\u5305\u6240\u6709\u6A21\u5757\uFF09 \u6781\u5927\u63D0\u5347\u6784\u5EFA\u901F\u5EA6</p><ul><li>\u6837\u5F0F\u6587\u4EF6\uFF1A\u53EF\u4EE5\u4F7F\u7528HMR\u529F\u80FD\uFF1A\u56E0\u4E3Astyle-loader\u5185\u90E8\u5B9E\u73B0\u4E86~</li><li>js\u6587\u4EF6\uFF1A\u9ED8\u8BA4\u4E0D\u80FD\u4F7F\u7528HMR\u529F\u80FD --&gt; \u9700\u8981\u4FEE\u6539js\u4EE3\u7801\uFF0C\u6DFB\u52A0\u652F\u6301HMR\u529F\u80FD\u7684\u4EE3\u7801<br> \u6CE8\u610F\uFF1AHMR\u529F\u80FD\u5BF9js\u7684\u5904\u7406\uFF0C\u53EA\u80FD\u5904\u7406\u975E\u5165\u53E3js\u6587\u4EF6\u7684\u5176\u4ED6\u6587\u4EF6\u3002</li><li>html\u6587\u4EF6: \u9ED8\u8BA4\u4E0D\u80FD\u4F7F\u7528HMR\u529F\u80FD.\u540C\u65F6\u4F1A\u5BFC\u81F4\u95EE\u9898\uFF1Ahtml\u6587\u4EF6\u4E0D\u80FD\u70ED\u66F4\u65B0\u4E86~ \uFF08\u4E0D\u7528\u505AHMR\u529F\u80FD\uFF09<br> \u89E3\u51B3\uFF1A\u4FEE\u6539entry\u5165\u53E3\uFF0C\u5C06html\u6587\u4EF6\u5F15\u5165</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">contentBase</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;build&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">compress</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span>
    <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5F00\u542FHMR\u529F\u80FD</span>
    <span class="token comment">// \u5F53\u4FEE\u6539\u4E86webpack\u914D\u7F6E\uFF0C\u65B0\u914D\u7F6E\u8981\u60F3\u751F\u6548\uFF0C\u5FC5\u987B\u91CD\u65B0webpack\u670D\u52A1</span>
    <span class="token literal-property property">hot</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u4F18\u5316\u4EE3\u7801\u8C03\u8BD5</li></ol><h3 id="source-map" tabindex="-1"><a class="header-anchor" href="#source-map" aria-hidden="true">#</a> source-map</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code> <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// plugins\u7684\u914D\u7F6E</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.html&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;development&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">contentBase</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;build&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">compress</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span>
    <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">hot</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">devtool</span><span class="token operator">:</span> <span class="token string">&#39;eval-source-map&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>source-map:<br> \u4E00\u79CD \u63D0\u4F9B\u6E90\u4EE3\u7801\u5230\u6784\u5EFA\u540E\u4EE3\u7801\u6620\u5C04 \u6280\u672F \uFF08\u5982\u679C\u6784\u5EFA\u540E\u4EE3\u7801\u51FA\u9519\u4E86\uFF0C\u901A\u8FC7\u6620\u5C04\u53EF\u4EE5\u8FFD\u8E2A\u6E90\u4EE3\u7801\u9519\u8BEF\uFF09</p><p>[inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map</p><p>source-map\uFF1A\u5916\u90E8<br> \u9519\u8BEF\u4EE3\u7801\u51C6\u786E\u4FE1\u606F \u548C \u6E90\u4EE3\u7801\u7684\u9519\u8BEF\u4F4D\u7F6E<br> inline-source-map\uFF1A\u5185\u8054<br> \u53EA\u751F\u6210\u4E00\u4E2A\u5185\u8054source-map \u9519\u8BEF\u4EE3\u7801\u51C6\u786E\u4FE1\u606F \u548C \u6E90\u4EE3\u7801\u7684\u9519\u8BEF\u4F4D\u7F6E<br> hidden-source-map\uFF1A\u5916\u90E8<br> \u9519\u8BEF\u4EE3\u7801\u9519\u8BEF\u539F\u56E0\uFF0C\u4F46\u662F\u6CA1\u6709\u9519\u8BEF\u4F4D\u7F6E \uFF0C\u4E0D\u80FD\u8FFD\u8E2A\u6E90\u4EE3\u7801\u9519\u8BEF\uFF0C\u53EA\u80FD\u63D0\u793A\u5230\u6784\u5EFA\u540E\u4EE3\u7801\u7684\u9519\u8BEF\u4F4D\u7F6E<br> eval-source-map\uFF1A\u5185\u8054<br> \u6BCF\u4E00\u4E2A\u6587\u4EF6\u90FD\u751F\u6210\u5BF9\u5E94\u7684source-map\uFF0C\u90FD\u5728eval \uFF0C\u9519\u8BEF\u4EE3\u7801\u51C6\u786E\u4FE1\u606F \u548C \u6E90\u4EE3\u7801\u7684\u9519\u8BEF\u4F4D\u7F6E<br> nosources-source-map\uFF1A\u5916\u90E8<br> \u9519\u8BEF\u4EE3\u7801\u51C6\u786E\u4FE1\u606F, \u4F46\u662F\u6CA1\u6709\u4EFB\u4F55\u6E90\u4EE3\u7801\u4FE1\u606F<br> cheap-source-map\uFF1A\u5916\u90E8<br> \u9519\u8BEF\u4EE3\u7801\u51C6\u786E\u4FE1\u606F \u548C \u6E90\u4EE3\u7801\u7684\u9519\u8BEF\u4F4D\u7F6E\uFF0C\u53EA\u80FD\u7CBE\u786E\u7684\u884C<br> cheap-module-source-map\uFF1A\u5916\u90E8<br> \u9519\u8BEF\u4EE3\u7801\u51C6\u786E\u4FE1\u606F \u548C \u6E90\u4EE3\u7801\u7684\u9519\u8BEF\u4F4D\u7F6E module\u4F1A\u5C06loader\u7684source map\u52A0\u5165</p><p>\u5185\u8054 \u548C \u5916\u90E8\u7684\u533A\u522B\uFF1A</p><ol><li>\u5916\u90E8\u751F\u6210\u4E86\u6587\u4EF6\uFF0C\u5185\u8054\u6CA1\u6709</li><li>\u5185\u8054\u6784\u5EFA\u901F\u5EA6\u66F4\u5FEB</li></ol><p>\u5F00\u53D1\u73AF\u5883\uFF1A\u901F\u5EA6\u5FEB\uFF0C\u8C03\u8BD5\u66F4\u53CB\u597D<br> \u901F\u5EA6\u5FEB(eval&gt;inline&gt;cheap&gt;...)<br> eval-cheap-souce-map<br> eval-source-map<br> \u8C03\u8BD5\u66F4\u53CB\u597D<br> souce-map<br> cheap-module-souce-map<br> cheap-souce-map</p><p>--&gt; eval-source-map / eval-cheap-module-souce-map</p><p>\u751F\u4EA7\u73AF\u5883\uFF1A\u6E90\u4EE3\u7801\u8981\u4E0D\u8981\u9690\u85CF? \u8C03\u8BD5\u8981\u4E0D\u8981\u66F4\u53CB\u597D \u5185\u8054\u4F1A\u8BA9\u4EE3\u7801\u4F53\u79EF\u53D8\u5927\uFF0C\u6240\u4EE5\u5728\u751F\u4EA7\u73AF\u5883\u4E0D\u7528\u5185\u8054<br> nosources-source-map \u5168\u90E8\u9690\u85CF<br> hidden-source-map \u53EA\u9690\u85CF\u6E90\u4EE3\u7801\uFF0C\u4F1A\u63D0\u793A\u6784\u5EFA\u540E\u4EE3\u7801\u9519\u8BEF\u4FE1\u606F</p><h2 id="\u751F\u4EA7\u73AF\u5883\u6027\u80FD\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#\u751F\u4EA7\u73AF\u5883\u6027\u80FD\u4F18\u5316" aria-hidden="true">#</a> \u751F\u4EA7\u73AF\u5883\u6027\u80FD\u4F18\u5316</h2><ul><li>\u4F18\u5316\u6253\u5305\u6784\u5EFA\u901F\u5EA6 <ul><li>oneOf</li><li>babel\u7F13\u5B58</li><li>\u591A\u8FDB\u7A0B\u6253\u5305</li><li>externals</li><li>dll</li></ul></li><li>\u4F18\u5316\u4EE3\u7801\u8FD0\u884C\u7684\u6027\u80FD <ul><li>\u7F13\u5B58(hash-chunkhash-contenthash)</li><li>tree shaking</li><li>code split</li><li>\u61D2\u52A0\u8F7D/\u9884\u52A0\u8F7D</li><li>pwa</li></ul></li></ul><h3 id="tree-shaking" tabindex="-1"><a class="header-anchor" href="#tree-shaking" aria-hidden="true">#</a> tree shaking</h3><p>shaking\uFF1A\u53BB\u9664\u65E0\u7528\u4EE3\u7801<br> \u524D\u63D0\uFF1A</p><ol><li>\u5FC5\u987B\u4F7F\u7528ES6\u6A21\u5757\u5316</li><li>\u5F00\u542Fproduction\u73AF\u5883<br> \u4F5C\u7528: \u51CF\u5C11\u4EE3\u7801\u4F53\u79EF \u5728package.json\u4E2D\u914D\u7F6E</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string-property property">&quot;sideEffects&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span> \u6240\u6709\u4EE3\u7801\u90FD\u6CA1\u6709\u526F\u4F5C\u7528\uFF08\u90FD\u53EF\u4EE5\u8FDB\u884Ctree shaking\uFF09  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u95EE\u9898\uFF1A\u53EF\u80FD\u4F1A\u628Acss / @babel/polyfill \uFF08\u526F\u4F5C\u7528\uFF09\u6587\u4EF6\u5E72\u6389</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string-property property">&quot;sideEffects&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;*.css&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;*.less&quot;</span><span class="token punctuation">]</span>   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="dll" tabindex="-1"><a class="header-anchor" href="#dll" aria-hidden="true">#</a> dll</h3><p>\u4F7F\u7528dll\u6280\u672F\uFF0C\u5BF9\u67D0\u4E9B\u5E93\uFF08\u7B2C\u4E09\u65B9\u5E93\uFF1Ajquery\u3001react\u3001vue...\uFF09\u8FDB\u884C\u5355\u72EC\u6253\u5305<br> \u5F53\u8FD0\u884C webpack \u65F6\uFF0C\u9ED8\u8BA4\u67E5\u627E webpack.config.js \u914D\u7F6E\u6587\u4EF6<br> \u9700\u6C42\uFF1A\u9700\u8981\u8FD0\u884C webpack.dll.js \u6587\u4EF6<br> --&gt; webpack --config webpack.dll.js</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// webpack.config.js </span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> resolve <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> AddAssetHtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;add-asset-html-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;built.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;build&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.html&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// \u544A\u8BC9webpack\u54EA\u4E9B\u5E93\u4E0D\u53C2\u4E0E\u6253\u5305\uFF0C\u540C\u65F6\u4F7F\u7528\u65F6\u7684\u540D\u79F0\u4E5F\u5F97\u53D8~</span>
    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>DllReferencePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">manifest</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dll/manifest.json&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5C06\u67D0\u4E2A\u6587\u4EF6\u6253\u5305\u8F93\u51FA\u53BB\uFF0C\u5E76\u5728html\u4E2D\u81EA\u52A8\u5F15\u5165\u8BE5\u8D44\u6E90</span>
    <span class="token keyword">new</span> <span class="token class-name">AddAssetHtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">filepath</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dll/jquery.js&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;production&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// webpack.dll.js </span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> resolve <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6700\u7EC8\u6253\u5305\u751F\u6210\u7684[name] --&gt; jquery</span>
    <span class="token comment">// [&#39;jquery&#39;] --&gt; \u8981\u6253\u5305\u7684\u5E93\u662Fjquery</span>
    <span class="token literal-property property">jquery</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;jquery&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;[name].js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dll&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">library</span><span class="token operator">:</span> <span class="token string">&#39;[name]_[hash]&#39;</span> <span class="token comment">// \u6253\u5305\u7684\u5E93\u91CC\u9762\u5411\u5916\u66B4\u9732\u51FA\u53BB\u7684\u5185\u5BB9\u53EB\u4EC0\u4E48\u540D\u5B57</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// \u6253\u5305\u751F\u6210\u4E00\u4E2A manifest.json --&gt; \u63D0\u4F9B\u548Cjquery\u6620\u5C04</span>
    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>DllPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;[name]_[hash]&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6620\u5C04\u5E93\u7684\u66B4\u9732\u7684\u5185\u5BB9\u540D\u79F0</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dll/manifest.json&#39;</span><span class="token punctuation">)</span> <span class="token comment">// \u8F93\u51FA\u6587\u4EF6\u8DEF\u5F84</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;production&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="babel\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#babel\u7F13\u5B58" aria-hidden="true">#</a> babel\u7F13\u5B58</h3><p>cacheDirectory: true</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
            <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
            <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;babel-loader&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">[</span>
                  <span class="token string">&#39;@babel/preset-env&#39;</span><span class="token punctuation">,</span>
                  <span class="token punctuation">{</span>
                    <span class="token literal-property property">useBuiltIns</span><span class="token operator">:</span> <span class="token string">&#39;usage&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">corejs</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">version</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">targets</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                      <span class="token literal-property property">chrome</span><span class="token operator">:</span> <span class="token string">&#39;60&#39;</span><span class="token punctuation">,</span>
                      <span class="token literal-property property">firefox</span><span class="token operator">:</span> <span class="token string">&#39;50&#39;</span>
                    <span class="token punctuation">}</span>
                  <span class="token punctuation">}</span>
                <span class="token punctuation">]</span>
              <span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token comment">// \u5F00\u542Fbabel\u7F13\u5B58</span>
              <span class="token comment">// \u7B2C\u4E8C\u6B21\u6784\u5EFA\u65F6\uFF0C\u4F1A\u8BFB\u53D6\u4E4B\u524D\u7684\u7F13\u5B58</span>
              <span class="token literal-property property">cacheDirectory</span><span class="token operator">:</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="externals" tabindex="-1"><a class="header-anchor" href="#externals" aria-hidden="true">#</a> externals</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">externals</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u62D2\u7EDDjQuery\u88AB\u6253\u5305\u8FDB\u6765</span>
    <span class="token literal-property property">jquery</span><span class="token operator">:</span> <span class="token string">&#39;jQuery&#39;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,35),o=[t];function l(c,r){return s(),a("div",null,o)}var d=n(p,[["render",l],["__file","optimize.html.vue"]]);export{d as default};
