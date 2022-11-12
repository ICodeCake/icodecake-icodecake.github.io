import{_ as n,o as s,c as a,e as p}from"./app.b8bd1976.js";const e={},t=p(`<h1 id="csharp-8-0-\u65B0\u7279\u6027" tabindex="-1"><a class="header-anchor" href="#csharp-8-0-\u65B0\u7279\u6027" aria-hidden="true">#</a> CSharp 8.0 \u65B0\u7279\u6027</h1><h2 id="\u65B0\u7279\u6027" tabindex="-1"><a class="header-anchor" href="#\u65B0\u7279\u6027" aria-hidden="true">#</a> \u65B0\u7279\u6027</h2><h3 id="_1-\u53EF\u7A7A\u5F15\u7528\u7C7B\u578B-nullable-reference-types" tabindex="-1"><a class="header-anchor" href="#_1-\u53EF\u7A7A\u5F15\u7528\u7C7B\u578B-nullable-reference-types" aria-hidden="true">#</a> 1.\u53EF\u7A7A\u5F15\u7528\u7C7B\u578B\uFF08Nullable reference types\uFF09</h3><p>\u4ECE\u6B64\uFF0C\u5F15\u7528\u7C7B\u578B\u5C06\u4F1A\u533A\u5206\u662F\u5426\u53EF\u5206\uFF0C\u53EF\u4EE5\u4ECE\u6839\u6E90\u4E0A\u89E3\u51B3 NullReferenceException\u3002\u4F46\u662F\u7531\u4E8E\u8FD9\u4E2A\u7279\u6027\u4F1A\u6253\u7834\u517C\u5BB9\u6027\uFF0C\u56E0\u6B64\u6CA1\u6709\u5F53\u4F5C error \u6765\u5BF9\u5F85\uFF0C\u800C\u662F\u4F7F\u7528 warning \u6298\u8877\uFF0C\u800C\u4E14\u5F00\u53D1\u4EBA\u5458\u9700\u8981\u624B\u52A8 opt-in \u624D\u53EF\u4EE5\u4F7F\u7528\u8BE5\u7279\u6027\uFF08\u53EF\u4EE5\u5728\u9879\u76EE\u5C42\u7EA7\u6216\u8005\u6587\u4EF6\u5C42\u7EA7\u8FDB\u884C\u8BBE\u5B9A\uFF09\u3002 \u4F8B\u5982\uFF1A</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">string</span></span> s <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// \u4EA7\u751F\u8B66\u544A: \u5BF9\u4E0D\u53EF\u7A7A\u5F15\u7528\u7C7B\u578B\u8D4B\u503C null</span>
<span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">?</span></span> s <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// Ok</span>

<span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">M</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">?</span></span> s<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>Length<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u4EA7\u751F\u8B66\u544A\uFF1A\u53EF\u80FD\u4E3A null</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>s <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>Length<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Ok</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u81F3\u6B64\uFF0C\u518D\u4E5F\u4E0D\u7528\u62C5\u5FC3\u6211\u7684\u7A0B\u5E8F\u5230\u5904\u62A5 NullReferenceException \u5566\uFF01</p><h3 id="_2-\u5F02\u6B65\u6D41-async-streams" tabindex="-1"><a class="header-anchor" href="#_2-\u5F02\u6B65\u6D41-async-streams" aria-hidden="true">#</a> 2.\u5F02\u6B65\u6D41\uFF08Async streams\uFF09</h3><p>\u4F7F\u7528\u5F02\u6B65\u6D41\u9700\u8981\u5728\u5217\u4E3E\u6D41\u5143\u7D20\u65F6\u5728\u5173\u952E\u5B57\u4E4B\u524D\u6DFB\u52A0\u5173\u952E\u5B57\u3002\u6DFB\u52A0\u5173\u952E\u5B57\u9700\u8981\u7528\u4FEE\u9970\u7B26\u6765\u5217\u4E3E\u5F02\u6B65\u6D41\u5E76\u8FD4\u56DE\u5141\u8BB8\u7684\u65B9\u6CD5\u7C7B\u578B\u7684\u65B9\u6CD5\u3002\u901A\u5E38\uFF0C\u8FD9\u610F\u5473\u7740\u8FD4\u56DE\u4EFB\u52A1\u6216\u4EFB\u52A1\u5B83\u4E5F\u53EF\u4EE5\u662F\u4E00\u4E2A\u4EF7\u503C\u4EFB\u52A1\u6216\u4EF7\u503C\u4EFB\u52A1\u4E00\u79CD\u65B9\u6CD5\u53EF\u4EE5\u6D88\u8017\u548C\u4EA7\u751F\u5F02\u6B65\u6D41\uFF0C\u8FD9\u610F\u5473\u7740\u5B83\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u4E9A\u540C\u6B65\u53EF\u8BC6\u522B\u4EE5\u4E0B\u4EE3\u7801\u751F\u6210\u4ECE 0 \u5230 19 \u7684\u5E8F\u5217\uFF0C\u5728\u751F\u6210\u6BCF\u4E2A\u6570\u5B57\u4E4B\u95F4\u7B49\u5F85 100 ms\uFF1Aawaitforeachawaitasyncasync</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">async</span> <span class="token return-type class-name">System<span class="token punctuation">.</span>Collections<span class="token punctuation">.</span>Generic<span class="token punctuation">.</span>IAsyncEnumerable<span class="token punctuation">&lt;</span><span class="token keyword">int</span><span class="token punctuation">&gt;</span></span> <span class="token function">GenerateSequence</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">20</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">await</span> Task<span class="token punctuation">.</span><span class="token function">Delay</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">yield</span> <span class="token keyword">return</span> i<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u60A8\u5C06\u4F7F\u7528\u8BE5\u8BED\u53E5\u5217\u4E3E\u5E8F\u5217\uFF1Aawait foreach</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">await</span> <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> number <span class="token keyword">in</span> <span class="token function">GenerateSequence</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-\u8303\u56F4\u548C\u4E0B\u6807\u7C7B\u578B-ranges-and-indices" tabindex="-1"><a class="header-anchor" href="#_3-\u8303\u56F4\u548C\u4E0B\u6807\u7C7B\u578B-ranges-and-indices" aria-hidden="true">#</a> 3.\u8303\u56F4\u548C\u4E0B\u6807\u7C7B\u578B\uFF08Ranges and indices\uFF09</h3><p>C# 8.0 \u5F15\u5165\u4E86 Index \u7C7B\u578B\uFF0C\u53EF\u7528\u4F5C\u6570\u7EC4\u4E0B\u6807\uFF0C\u5E76\u4E14\u4F7F\u7528 ^ \u64CD\u4F5C\u7B26\u8868\u793A\u5012\u6570\u3002 \u4E0D\u8FC7\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5012\u6570\u662F\u4ECE 1 \u5F00\u59CB\u7684\u3002</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name">Index</span> i1 <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>  <span class="token comment">// \u4E0B\u6807\u4E3A 3</span>
<span class="token class-name">Index</span> i2 <span class="token operator">=</span> <span class="token operator">^</span><span class="token number">4</span><span class="token punctuation">;</span> <span class="token comment">// \u5012\u6570\u7B2C 4 \u4E2A\u5143\u7D20</span>
<span class="token class-name"><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> a <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$&quot;</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">a<span class="token punctuation">[</span>i1<span class="token punctuation">]</span></span><span class="token punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">a<span class="token punctuation">[</span>i2<span class="token punctuation">]</span></span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;3, 6&quot;123123</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9664\u6B64\u4E4B\u5916\uFF0C\u8FD8\u5F15\u5165\u4E86 \u201C\u2026\u201D \u64CD\u4F5C\u7B26\u7528\u6765\u8868\u793A\u8303\u56F4\uFF08\u6CE8\u610F\u662F\u5DE6\u95ED\u53F3\u5F00\u533A\u95F4\uFF09\u3002</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> slice <span class="token operator">=</span> a<span class="token punctuation">[</span>i1<span class="token range operator">..</span>i2<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// { 3, 4, 5 }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5173\u4E8E\u8FD9\u4E2A\u4E0B\u6807\u4ECE 0 \u5F00\u59CB\uFF0C\u5012\u6570\u4ECE 1 \u5F00\u59CB\uFF0C\u8303\u56F4\u5DE6\u95ED\u53F3\u5F00\uFF0C\u7B14\u8005\u521A\u5F00\u59CB\u89C9\u5F97\u5F88\u5947\u602A\uFF0C\u4F46\u662F\u53D1\u73B0 Python \u7B49\u8BED\u8A00\u65E9\u5DF2\u7ECF\u505A\u4E86\u8FD9\u6837\u7684\u5B9E\u8DF5\uFF0C\u5E76\u4E14\u6548\u679C\u4E0D\u9519\u3002\u56E0\u6B64\u8FD9\u6B21\u5FAE\u8F6F\u4E5F\u91C7\u7528\u4E86\u8FD9\u79CD\u65B9\u5F0F\u8BBE\u8BA1\u4E86 C# 8.0 \u7684\u8FD9\u4E2A\u8BED\u6CD5\u3002</p><h3 id="_4-\u63A5\u53E3\u7684\u9ED8\u8BA4\u5B9E\u73B0\u65B9\u6CD5-default-implementations-of-interface-members" tabindex="-1"><a class="header-anchor" href="#_4-\u63A5\u53E3\u7684\u9ED8\u8BA4\u5B9E\u73B0\u65B9\u6CD5-default-implementations-of-interface-members" aria-hidden="true">#</a> 4.\u63A5\u53E3\u7684\u9ED8\u8BA4\u5B9E\u73B0\u65B9\u6CD5\uFF08Default implementations of interface members\uFF09</h3><p>\u4ECE\u6B64\u63A5\u53E3\u4E2D\u53EF\u4EE5\u5305\u542B\u5B9E\u73B0\u4E86\uFF1A</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">interface</span> <span class="token class-name">ILogger</span>
<span class="token punctuation">{</span>
    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Log</span><span class="token punctuation">(</span><span class="token class-name">LogLevel</span> level<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">string</span></span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Log</span><span class="token punctuation">(</span><span class="token class-name">Exception</span> ex<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">Log</span><span class="token punctuation">(</span>LogLevel<span class="token punctuation">.</span>Error<span class="token punctuation">,</span> ex<span class="token punctuation">.</span><span class="token function">ToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8FD9\u662F\u4E00\u4E2A\u9ED8\u8BA4\u5B9E\u73B0\u91CD\u8F7D</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ConsoleLogger</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">ILogger</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Log</span><span class="token punctuation">(</span><span class="token class-name">LogLevel</span> level<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">string</span></span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token range operator">..</span><span class="token punctuation">.</span> <span class="token punctuation">}</span>
    <span class="token comment">// Log(Exception) \u4F1A\u5F97\u5230\u6267\u884C\u7684\u9ED8\u8BA4\u5B9E\u73B0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0CLog(Exception)\u5C06\u4F1A\u5F97\u5230\u6267\u884C\u7684\u9ED8\u8BA4\u5B9E\u73B0\u3002</p><h3 id="_5-\u5207\u6362\u8868\u8FBE\u5F0F" tabindex="-1"><a class="header-anchor" href="#_5-\u5207\u6362\u8868\u8FBE\u5F0F" aria-hidden="true">#</a> 5.\u5207\u6362\u8868\u8FBE\u5F0F</h3><p>\u901A\u5E38\uFF0C\u5F00\u5173\u8BED\u53E5\u5728\u5176\u6BCF\u4E2A\u65B9\u5757\u4E2D\u4EA7\u751F\u503C\u3002\u5207\u6362\u8868\u8FBE\u5F0F\u4F7F\u60A8\u80FD\u591F\u4F7F\u7528\u66F4\u7B80\u6D01\u7684\u8868\u8FBE\u5F0F\u8BED\u6CD5\u3002\u91CD\u590D\u548C\u5173\u952E\u5B57\u8F83\u5C11\uFF0C\u5377\u66F2\u62EC\u53F7\u66F4\u5C11\u3002\u4F8B\u5982\uFF0C\u8BF7\u8003\u8651\u5217\u51FA\u5F69\u8679\u989C\u8272\u7684\u4EE5\u4E0B\u5217\u540D\u5F55\uFF1Acasecasebreak</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">Rainbow</span>
<span class="token punctuation">{</span>
    Red<span class="token punctuation">,</span>
    Orange<span class="token punctuation">,</span>
    Yellow<span class="token punctuation">,</span>
    Green<span class="token punctuation">,</span>
    Blue<span class="token punctuation">,</span>
    Indigo<span class="token punctuation">,</span>
    Violet
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u60A8\u7684\u5E94\u7528\u7A0B\u5E8F\u5B9A\u4E49\u4E86\u4ECE &quot;\u548C\u7EC4\u4EF6&quot;\u6784\u5EFA\u7684\u7C7B\u578B\uFF0C\u5219\u53EF\u4EE5\u4F7F\u7528\u5305\u542B\u5F00\u5173\u8868\u8FBE\u5F0F\u7684\u4EE5\u4E0B\u65B9\u6CD5\u5C06\u503C\u8F6C\u6362\u4E3A\u5176 RGB \u503C\uFF1ARGBColorRGBRainbow</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name">RGBColor</span> <span class="token function">FromRainbow</span><span class="token punctuation">(</span><span class="token class-name">Rainbow</span> colorBand<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
    colorBand <span class="token keyword">switch</span>
    <span class="token punctuation">{</span>
        Rainbow<span class="token punctuation">.</span>Red    <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">RGBColor</span><span class="token punctuation">(</span><span class="token number">0xFF</span><span class="token punctuation">,</span> <span class="token number">0x00</span><span class="token punctuation">,</span> <span class="token number">0x00</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        Rainbow<span class="token punctuation">.</span>Orange <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">RGBColor</span><span class="token punctuation">(</span><span class="token number">0xFF</span><span class="token punctuation">,</span> <span class="token number">0x7F</span><span class="token punctuation">,</span> <span class="token number">0x00</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        Rainbow<span class="token punctuation">.</span>Yellow <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">RGBColor</span><span class="token punctuation">(</span><span class="token number">0xFF</span><span class="token punctuation">,</span> <span class="token number">0xFF</span><span class="token punctuation">,</span> <span class="token number">0x00</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        Rainbow<span class="token punctuation">.</span>Green  <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">RGBColor</span><span class="token punctuation">(</span><span class="token number">0x00</span><span class="token punctuation">,</span> <span class="token number">0xFF</span><span class="token punctuation">,</span> <span class="token number">0x00</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        Rainbow<span class="token punctuation">.</span>Blue   <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">RGBColor</span><span class="token punctuation">(</span><span class="token number">0x00</span><span class="token punctuation">,</span> <span class="token number">0x00</span><span class="token punctuation">,</span> <span class="token number">0xFF</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        Rainbow<span class="token punctuation">.</span>Indigo <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">RGBColor</span><span class="token punctuation">(</span><span class="token number">0x4B</span><span class="token punctuation">,</span> <span class="token number">0x00</span><span class="token punctuation">,</span> <span class="token number">0x82</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        Rainbow<span class="token punctuation">.</span>Violet <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">RGBColor</span><span class="token punctuation">(</span><span class="token number">0x94</span><span class="token punctuation">,</span> <span class="token number">0x00</span><span class="token punctuation">,</span> <span class="token number">0xD3</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        _              <span class="token operator">=&gt;</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ArgumentException</span><span class="token punctuation">(</span><span class="token named-parameter punctuation">message</span><span class="token punctuation">:</span> <span class="token string">&quot;invalid enum value&quot;</span><span class="token punctuation">,</span> <span class="token named-parameter punctuation">paramName</span><span class="token punctuation">:</span> <span class="token keyword">nameof</span><span class="token punctuation">(</span>colorBand<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0E\u4F7F\u7528\u7ECF\u5178\u8BED\u53E5\u7684\u7B49\u6548\u4EE3\u7801\u8FDB\u884C\u5BF9\u6BD4\uFF1Aswitch</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name">RGBColor</span> <span class="token function">FromRainbowClassic</span><span class="token punctuation">(</span><span class="token class-name">Rainbow</span> colorBand<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>colorBand<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">case</span> Rainbow<span class="token punctuation">.</span>Red<span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">RGBColor</span><span class="token punctuation">(</span><span class="token number">0xFF</span><span class="token punctuation">,</span> <span class="token number">0x00</span><span class="token punctuation">,</span> <span class="token number">0x00</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> Rainbow<span class="token punctuation">.</span>Orange<span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">RGBColor</span><span class="token punctuation">(</span><span class="token number">0xFF</span><span class="token punctuation">,</span> <span class="token number">0x7F</span><span class="token punctuation">,</span> <span class="token number">0x00</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> Rainbow<span class="token punctuation">.</span>Yellow<span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">RGBColor</span><span class="token punctuation">(</span><span class="token number">0xFF</span><span class="token punctuation">,</span> <span class="token number">0xFF</span><span class="token punctuation">,</span> <span class="token number">0x00</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> Rainbow<span class="token punctuation">.</span>Green<span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">RGBColor</span><span class="token punctuation">(</span><span class="token number">0x00</span><span class="token punctuation">,</span> <span class="token number">0xFF</span><span class="token punctuation">,</span> <span class="token number">0x00</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> Rainbow<span class="token punctuation">.</span>Blue<span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">RGBColor</span><span class="token punctuation">(</span><span class="token number">0x00</span><span class="token punctuation">,</span> <span class="token number">0x00</span><span class="token punctuation">,</span> <span class="token number">0xFF</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> Rainbow<span class="token punctuation">.</span>Indigo<span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">RGBColor</span><span class="token punctuation">(</span><span class="token number">0x4B</span><span class="token punctuation">,</span> <span class="token number">0x00</span><span class="token punctuation">,</span> <span class="token number">0x82</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> Rainbow<span class="token punctuation">.</span>Violet<span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">RGBColor</span><span class="token punctuation">(</span><span class="token number">0x94</span><span class="token punctuation">,</span> <span class="token number">0x00</span><span class="token punctuation">,</span> <span class="token number">0xD3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">default</span><span class="token punctuation">:</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ArgumentException</span><span class="token punctuation">(</span><span class="token named-parameter punctuation">message</span><span class="token punctuation">:</span> <span class="token string">&quot;invalid enum value&quot;</span><span class="token punctuation">,</span> <span class="token named-parameter punctuation">paramName</span><span class="token punctuation">:</span> <span class="token keyword">nameof</span><span class="token punctuation">(</span>colorBand<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-\u7A7A\u51DD\u805A\u5206\u914D" tabindex="-1"><a class="header-anchor" href="#_6-\u7A7A\u51DD\u805A\u5206\u914D" aria-hidden="true">#</a> 6.\u7A7A\u51DD\u805A\u5206\u914D</h3><p>C# 8.0 \u5F15\u5165\u4E86\u65E0\u51DD\u805A\u5206\u914D\u64CD\u4F5C\u5458\u3002\u53EA\u6709\u5F53\u5DE6\u624B\u64CD\u4F5C\u8005\u8BC4\u4F30\u5230\u65F6\uFF0C\u60A8\u624D\u80FD\u4F7F\u7528\u64CD\u4F5C\u5458\u5C06\u5176\u53F3\u624B\u64CD\u4F5C\u7684\u4EF7\u503C\u5206\u914D\u7ED9\u5176\u5DE6\u624B\u64CD\u4F5C\u3002??=??=null</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name">List<span class="token punctuation">&lt;</span><span class="token keyword">int</span><span class="token punctuation">&gt;</span></span> numbers <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">int</span><span class="token punctuation">?</span></span> i <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

numbers <span class="token operator">??=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">List<span class="token punctuation">&lt;</span><span class="token keyword">int</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
numbers<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>i <span class="token operator">??=</span> <span class="token number">17</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
numbers<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>i <span class="token operator">??=</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token keyword">string</span><span class="token punctuation">.</span><span class="token function">Join</span><span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">,</span> numbers<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// output: 17 17</span>
Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// output: 17</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-\u672A\u7BA1\u7406\u7684\u6784\u9020\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_7-\u672A\u7BA1\u7406\u7684\u6784\u9020\u7C7B\u578B" aria-hidden="true">#</a> 7.\u672A\u7BA1\u7406\u7684\u6784\u9020\u7C7B\u578B</h3><p>\u5728 C# 7.3 \u548C\u66F4\u65E9\u7684\u7C7B\u578B\u4E2D\uFF0C\u6784\u9020\u7C7B\u578B\uFF08\u5305\u542B\u81F3\u5C11\u4E00\u4E2A\u7C7B\u578B\u53C2\u6570\u7684\u7C7B\u578B\uFF09\u4E0D\u80FD\u662F\u975E\u7BA1\u7406\u7C7B\u578B\u3002\u4ECE C# 8.0 \u5F00\u59CB\uFF0C\u5982\u679C\u6784\u9020\u503C\u7C7B\u578B\u4EC5\u5305\u542B\u975E\u7BA1\u7406\u7C7B\u578B\u7684\u5B57\u6BB5\uFF0C\u5219\u8BE5\u7C7B\u578B\u4E0D\u53D7\u7BA1\u7406\u3002</p><p>\u4F8B\u5982\uFF0C\u9274\u4E8E\u901A\u7528\u7C7B\u578B\u7684\u4E0B\u5217\u5B9A\u4E49\uFF1A<code>Coords&lt;T&gt;</code></p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">struct</span> <span class="token class-name">Coords<span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">T</span> X<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">T</span> Y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BE5\u7C7B\u578B\u662F C#8.0 \u53CA\u4EE5\u540E\u7684\u975E\u7BA1\u7406\u7C7B\u578B\u3002\u4E0E\u4EFB\u4F55\u975E\u7BA1\u7406\u7C7B\u578B\u4E00\u6837\uFF0C\u60A8\u53EF\u4EE5\u521B\u5EFA\u6B64\u7C7B\u578B\u53D8\u91CF\u7684\u6307\u70B9\uFF0C\u6216\u5728\u5806\u6808\u4E0A\u5206\u914D\u6B64\u7C7B\u578B\u7684\u5185\u5B58\u5757\uFF1A<code>Coords&lt;int&gt;</code></p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name">Span<span class="token punctuation">&lt;</span>Coords<span class="token punctuation">&lt;</span><span class="token keyword">int</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> coordinates <span class="token operator">=</span> <span class="token keyword">stackalloc</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">{</span>
    <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Coords<span class="token punctuation">&lt;</span><span class="token keyword">int</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span> X <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> Y <span class="token operator">=</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Coords<span class="token punctuation">&lt;</span><span class="token keyword">int</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span> X <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> Y <span class="token operator">=</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Coords<span class="token punctuation">&lt;</span><span class="token keyword">int</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span> X <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">,</span> Y <span class="token operator">=</span> <span class="token number">0</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-\u6CE8\u610F\u4E8B\u9879" tabindex="-1"><a class="header-anchor" href="#_8-\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a> 8.\u6CE8\u610F\u4E8B\u9879</h3><p>1.\u4EE5\u4E0A\u7684\u65B0\u7279\u6027\u9700\u8981 .NET Standard 2.1/.NET Core 3.0/.NET Framework 4.8 \u53CA\u4EE5\u4E0A\u6765\u652F\u6301\u3002 2.\u4F46\u662F\uFF0C\u7531\u4E8E\u63A5\u53E3\u7684\u9ED8\u8BA4\u5B9E\u73B0\u65B9\u6CD5\u8FD9\u4E2A\u7279\u6027\u9700\u8981 CLR \u7684\u652F\u6301\uFF0C\u800C .NET Framework 4.8 \u8FD8\u6CA1\u6709\u6765\u5F97\u53CA\u505A\u51FA\u4FEE\u6539\uFF0C\u56E0\u6B64\u6B64\u7279\u6027\u5728 .NET Framework 4.8 \u4E2D\u4E0D\u53EF\u7528\uFF0C\u9700\u8981\u7B49\u5F85\u8FDB\u4E00\u6B65\u7684\u66F4\u65B0\u3002</p>`,39),o=[t];function c(l,u){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","index.html.vue"]]);export{r as default};
