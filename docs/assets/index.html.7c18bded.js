import{_ as n,o as s,c as a,e}from"./app.7b48ccfe.js";const t="/assets/01.4c268e2d.png",p={},o=e(`<h1 id="system-text-json" tabindex="-1"><a class="header-anchor" href="#system-text-json" aria-hidden="true">#</a> System.Text.Json</h1><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JsonHelper</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">JsonSerializerOptions</span> _options <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">JsonSerializerOptions</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            ReferenceHandler <span class="token operator">=</span> ReferenceHandler<span class="token punctuation">.</span>Preserve<span class="token punctuation">,</span>
            WriteIndented <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            IncludeFields <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            IgnoreReadOnlyProperties <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            DefaultIgnoreCondition <span class="token operator">=</span> JsonIgnoreCondition<span class="token punctuation">.</span>WhenWritingNull<span class="token punctuation">,</span>
            DictionaryKeyPolicy <span class="token operator">=</span> JsonNamingPolicy<span class="token punctuation">.</span>CamelCase<span class="token punctuation">,</span>
            PropertyNamingPolicy <span class="token operator">=</span> JsonNamingPolicy<span class="token punctuation">.</span>CamelCase<span class="token punctuation">,</span>
            PropertyNameCaseInsensitive <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//\u4E0D\u533A\u5206\u5927\u5C0F\u5199</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>

        <span class="token keyword">static</span> <span class="token function">JsonHelper</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            _options<span class="token punctuation">.</span>Converters<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">JsonStringEnumConverter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> <span class="token generic-method"><span class="token function">GetJosnString</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token class-name">T</span> t<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">return</span> JsonSerializer<span class="token punctuation">.</span><span class="token function">Serialize</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> _options<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name">T</span> <span class="token generic-method"><span class="token function">GetJosnObject</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> jsonString<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">return</span> JsonSerializer<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Deserialize</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>jsonString<span class="token punctuation">,</span> _options<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestModel</span>
    <span class="token punctuation">{</span>
        <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">JsonIgnore</span></span><span class="token punctuation">]</span>
        <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

        <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">JsonInclude</span></span><span class="token punctuation">]</span>
        <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Name <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

        <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">JsonPropertyName</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;type&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
        <span class="token keyword">public</span> <span class="token return-type class-name">Type</span> Type <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u652F\u6301" tabindex="-1"><a class="header-anchor" href="#\u652F\u6301" aria-hidden="true">#</a> \u652F\u6301</h3><ul><li>\u6DFB\u52A0$id $Values ReferenceHandler = ReferenceHandler.Preserve</li><li>\u679A\u4E3E\u5E8F\u5217\u5316\u4E3A number\uFF08\u9ED8\u8BA4\u65B9\u5F0F\uFF09\uFF0C\u4E5F\u53EF\u5E8F\u5217\u5316\u4E3A\u5B57\u7B26\u4E32 JsonStringEnumConverter</li><li>\u81EA\u5B9A\u4E49\u8F93\u51FA\uFF08\u4E0D\u8F93\u51FA\uFF09\u5B57\u6BB5 [JsonInclude] [JsonIgnore]</li><li>\u81EA\u5B9A\u4E49\u8F93\u51FA\u540D\u5B57 [JsonPropertyName(&quot;type&quot;)]</li><li>\u5C5E\u6027\u540D\u5C0F\u5199\uFF08web \u76F8\u5173 msg\uFF09PropertyNamingPolicy = JsonNamingPolicy.CamelCase</li></ul><h3 id="\u4E0D\u652F\u6301" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u652F\u6301" aria-hidden="true">#</a> \u4E0D\u652F\u6301</h3><ul><li>\u4E0D\u652F\u6301$type \u7684\u5E8F\u5217\u5316\uFF0C\u5BFC\u81F4\u672A\u6307\u5B9A\u7684\u7C7B\u578B\uFF0C\u6BD4\u5982 object \u6216\u8005\u57FA\u7C7B \u5E8F\u5217\u5316\u540E\u518D\u53CD\u5E8F\u5217\u5316\u7684\u65F6\u5019\u6062\u590D\u4E0D\u4E86\u539F\u6765\u7684\u7C7B\u578B <img src="`+t+'" alt="\u56FE\u7247"></li></ul><h2 id="\u53C2\u8003\u8D44\u6599" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u8D44\u6599" aria-hidden="true">#</a> \u53C2\u8003\u8D44\u6599</h2><p>https://docs.microsoft.com/zh-cn/dotnet/standard/serialization/system-text-json-overview https://www.codeproject.com/Articles/5284591/Adding-type-to-System-Text-Json-serialization-like</p>',9),c=[o];function i(l,u){return s(),a("div",null,c)}const d=n(p,[["render",i],["__file","index.html.vue"]]);export{d as default};
