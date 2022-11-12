import{_ as e,o as t,c as s,e as i}from"./app.d8de21cf.js";const n="/assets/01.05fdef67.png",l="/assets/02.b6fbd50b.png",a="/assets/03.f1e353ee.png",u="/assets/04.e1a4193c.png",d="/assets/05.ff1ba49d.png",o="/assets/06.4493230b.png",r={},v=i(`<h3 id="\u4ECE-hashset-\u4E2D\u67E5\u627E\u4E00\u4E2A\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#\u4ECE-hashset-\u4E2D\u67E5\u627E\u4E00\u4E2A\u5143\u7D20" aria-hidden="true">#</a> \u4ECE HashSet \u4E2D\u67E5\u627E\u4E00\u4E2A\u5143\u7D20</h3><p>\u5982\u679C\u60F3\u5224\u65AD\u67D0\u4E00\u4E2A\u5143\u7D20\u662F\u5426\u5728 HashSet \u5185\uFF0C\u5EFA\u8BAE\u4F7F\u7528 Contains \u8FDB\u884C\u5224\u65AD\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>static void Main(string[] args)
        {
            HashSet&lt;string&gt; hashSet = new HashSet&lt;string&gt;();
            hashSet.Add(&quot;A&quot;);
            hashSet.Add(&quot;B&quot;);
            hashSet.Add(&quot;C&quot;);
            hashSet.Add(&quot;D&quot;);
            if (hashSet.Contains(&quot;D&quot;))
                Console.WriteLine(&quot;The required element is available.&quot;);
            else
                Console.WriteLine(&quot;The required element isn\u2019t available.&quot;);
            Console.ReadKey();
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="hashset\u4E2D\u7684\u5143\u7D20\u552F\u4E00\u6027" tabindex="-1"><a class="header-anchor" href="#hashset\u4E2D\u7684\u5143\u7D20\u552F\u4E00\u6027" aria-hidden="true">#</a> HashSet\u4E2D\u7684\u5143\u7D20\u552F\u4E00\u6027</h3><p>\u5982\u679C\u4F60\u5411 HashSet \u4E2D\u63D2\u5165\u91CD\u590D\u7684\u5143\u7D20\uFF0C\u5B83\u7684\u5185\u90E8\u4F1A\u5FFD\u89C6\u8FD9\u6B21\u64CD\u4F5C\u800C\u4E0D\u50CF\u522B\u7684\u96C6\u5408\u4E00\u6837\u629B\u51FA\u5F02\u5E38\uFF0C\u63A5\u4E0B\u6765\u5C55\u793A\u4E00\u4E0B\u4EE3\u7801\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  static void Main(string[] args)
        {
            HashSet&lt;string&gt; hashSet = new HashSet&lt;string&gt;();
            hashSet.Add(&quot;A&quot;);
            hashSet.Add(&quot;B&quot;);
            hashSet.Add(&quot;C&quot;);
            hashSet.Add(&quot;D&quot;);
            hashSet.Add(&quot;D&quot;);
            Console.WriteLine(&quot;The number of elements is: {0}&quot;, hashSet.Count);
            Console.ReadKey();
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u4F60\u6267\u884C\u4E86\u8FD9\u4E2A\u7A0B\u5E8F\uFF0C\u8F93\u51FA\u7ED3\u679C\u5982\u4E0B\u56FE\uFF1A <img src="`+n+`" alt="\u56FE\u7247"></p><h3 id="\u73B0\u5728\u53EF\u4EE5\u8003\u8651\u4E00\u4E0B\u4E0B\u9762\u7684\u4EE3\u7801\u6BB5-\u5B83\u5C55\u793A\u4E86\u91CD\u590D\u7684\u5143\u7D20\u662F\u5982\u4F55\u88AB\u5254\u9664\u7684\u3002" tabindex="-1"><a class="header-anchor" href="#\u73B0\u5728\u53EF\u4EE5\u8003\u8651\u4E00\u4E0B\u4E0B\u9762\u7684\u4EE3\u7801\u6BB5-\u5B83\u5C55\u793A\u4E86\u91CD\u590D\u7684\u5143\u7D20\u662F\u5982\u4F55\u88AB\u5254\u9664\u7684\u3002" aria-hidden="true">#</a> \u73B0\u5728\u53EF\u4EE5\u8003\u8651\u4E00\u4E0B\u4E0B\u9762\u7684\u4EE3\u7801\u6BB5\uFF0C\u5B83\u5C55\u793A\u4E86\u91CD\u590D\u7684\u5143\u7D20\u662F\u5982\u4F55\u88AB\u5254\u9664\u7684\u3002</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> static void Main(string[] args)
        {
            string[] cities = new string[] {
                &quot;Delhi&quot;,
                &quot;Kolkata&quot;,
                &quot;New York&quot;,
                &quot;London&quot;,
                &quot;Tokyo&quot;,
                &quot;Washington&quot;,
                &quot;Tokyo&quot;
            };
            HashSet&lt;string&gt; hashSet = new HashSet&lt;string&gt;(cities);
            foreach (var city in hashSet)
            {
                Console.WriteLine(city);
            }
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u4F60\u6267\u884C\u5B8C\u4E0A\u9762\u7684\u7A0B\u5E8F\uFF0C\u91CD\u590D\u7684\u57CE\u5E02\u540D\u79F0\u5DF2\u7ECF\u88AB\u79FB\u9664\u4E86\u3002 <img src="`+l+`" alt="\u56FE\u7247"></p><h3 id="\u4ECE-hashset-\u4E2D\u79FB\u9664\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#\u4ECE-hashset-\u4E2D\u79FB\u9664\u5143\u7D20" aria-hidden="true">#</a> \u4ECE HashSet \u4E2D\u79FB\u9664\u5143\u7D20</h3><p>\u4ECEHashSet \u4E2D\u5220\u9664\u67D0\u4E00\u4E2A\u5143\u7D20\u53EF\u4EE5\u8C03\u7528 Remove \u65B9\u6CD5\uFF0C\u5B83\u7684\u8BED\u6CD5\u7ED3\u6784\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>string[] list= new string[] {
                &quot;A&quot;,
                &quot;B&quot;,
                &quot;C&quot;,
                &quot;D&quot;,
                &quot;E&quot;,
                &quot;F&quot;,
                &quot;G&quot;
            };
 HashSet&lt;string&gt; hashSet = new HashSet&lt;string&gt;(list);
string item = &quot;D&quot;;
if(hashSet.Contains(item))
{
   hashSet.Remove(item);
}

//\u5220\u9664 HashSet \u4E2D\u7684\u6240\u6709\u5143\u7D20
hashSet.Clear();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="hashset-\u7684-set\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#hashset-\u7684-set\u64CD\u4F5C" aria-hidden="true">#</a> HashSet \u7684 set\u64CD\u4F5C</h3><p>HashSet\u63D0\u4F9B\u4E86\u975E\u5E38\u591A\u7684\u65B9\u6CD5\u7528\u4E8E set\u96C6\u5408 \u64CD\u4F5C\u4E0A\uFF0C\u6BD4\u5982\u8BF4\uFF1AIntersectWith, UnionWith, IsProperSubsetOf, ExceptWith, \u548C SymmetricExceptWith</p><ul><li>IsProperSubsetOf \u8FD9\u4E2A IsProperSubsetOf \u7528\u4E8E\u5224\u65AD HashSet \u662F\u5426\u4E3A\u67D0\u4E00\u4E2A\u96C6\u5408\u7684\u5B8C\u5168\u5B50\u96C6\uFF0C\u53EF\u4EE5\u770B\u4E0B\u9762\u7684\u4F8B\u5B50\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>HashSet&lt;string&gt; setA = new HashSet&lt;string&gt;() { &quot;A&quot;, &quot;B&quot;, &quot;C&quot;, &quot;D&quot; };
HashSet&lt;string&gt; setB = new HashSet&lt;string&gt;() { &quot;A&quot;, &quot;B&quot;, &quot;C&quot;, &quot;X&quot; };
HashSet&lt;string&gt; setC = new HashSet&lt;string&gt;() { &quot;A&quot;, &quot;B&quot;, &quot;C&quot;, &quot;D&quot;, &quot;E&quot; };
if (setA.IsProperSubsetOf(setC))
   Console.WriteLine(&quot;setC contains all elements of setA.&quot;);
if (!setA.IsProperSubsetOf(setB))
   Console.WriteLine(&quot;setB does not contains all elements of setA.&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u4F60\u6267\u884C\u4E86\u4E0A\u9762\u8FD9\u4E2A\u7A0B\u5E8F\uFF0C\u4F60\u4F1A\u5728\u63A7\u5236\u53F0\u4E0A\u770B\u5230\u5982\u4E0B\u7684\u8F93\u51FA\uFF1A <img src="`+a+`" alt="\u56FE\u7247"></p><ul><li>UnionWith UnionWith\u65B9\u6CD5\u5E38\u7528\u4E8E\u96C6\u5408\u7684\u5408\u5E76\uFF0C\u6BD4\u5982\u8BF4\u4E0B\u9762\u7684\u4EE3\u7801\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>HashSet&lt;string&gt; setA = new HashSet&lt;string&gt;() { &quot;A&quot;, &quot;B&quot;, &quot;C&quot;, &quot;D&quot;, &quot;E&quot; };
HashSet&lt;string&gt; setB = new HashSet&lt;string&gt;() { &quot;A&quot;, &quot;B&quot;, &quot;C&quot;, &quot;X&quot;, &quot;Y&quot; };
setA.UnionWith(setB);
foreach(string str in setA)
{
   Console.WriteLine(str);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u4F60\u6267\u884C\u5B8C\u4E0A\u9762\u7684\u4EE3\u7801\uFF0CSetB \u96C6\u5408\u4F1A\u88AB SetA \u96C6\u5408\u541E\u6389\uFF0C\u6700\u540E SetA \u96C6\u5408\u5C06\u4F1A\u662F\u5305\u62EC\uFF1A&quot;A&quot;, &quot;B&quot;, &quot;C&quot;, &quot;D&quot;, &quot;E&quot;, &quot;X&quot;, and &quot;Y&quot; \u3002</p><ul><li>IntersectWith IntersectWith \u65B9\u6CD5\u5E38\u7528\u4E8E\u8868\u793A\u4E24\u4E2A HashSet \u7684\u4EA4\u96C6\uFF0C\u4E0B\u9762\u7684\u4F8B\u5B50\u6216\u8BB8\u4F1A\u8BA9\u4F60\u66F4\u52A0\u7406\u89E3\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>HashSet&lt;string&gt; setA = new HashSet&lt;string&gt;() { &quot;A&quot;, &quot;B&quot;, &quot;C&quot;, &quot;D&quot;, &quot;E&quot; };
HashSet&lt;string&gt; setB = new HashSet&lt;string&gt;() { &quot;A&quot;, &quot;X&quot;, &quot;C&quot;, &quot;Y&quot;};
setA.IntersectWith(setB);
foreach (string str in setA)
{
    Console.WriteLine(str);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u4F60\u8FD0\u884C\u4E86\u4E0A\u9762\u7684\u8FD9\u6BB5\u7A0B\u5E8F\uFF0C\u53EA\u6709\u4E24\u4E2A HashSet \u4E2D\u90FD\u5B58\u5728\u7684\u5143\u7D20\u624D\u4F1A\u8F93\u51FA\u5230\u63A7\u5236\u53F0\u4E2D\uFF0C\u8F93\u51FA\u7ED3\u679C\u5982\u4E0B\u6240\u793A\uFF1A <img src="`+u+`" alt="\u56FE\u7247"></p><ul><li>ExceptWith ExceptWith \u65B9\u6CD5\u8868\u793A\u6570\u5B66\u4E0A\u7684\u51CF\u6CD5\u64CD\u4F5C\uFF0C\u8FD9\u4E2A\u65F6\u95F4\u590D\u6742\u5EA6\u662F O(N)\uFF0C\u5047\u5B9A\u4F60\u6709\u4E24\u4E2AHashSet \u96C6\u5408\uFF0C\u5206\u522B\u53EB setA \u548C setB\uFF0C\u5E76\u4E14\u7528\u4E86\u4E0B\u9762\u7684\u8BED\u53E5\u3002</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>setA.ExceptWith(setB);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B83\u8FD4\u56DE\u7684\u5143\u7D20\u4E3A\uFF1A setA\u4E2D\u6709\uFF0CsetB\u4E2D\u6CA1\u6709 \u7684\u6700\u7EC8\u7ED3\u679C\uFF0C\u5982\u679C\u8FD8\u4E0D\u660E\u767D\u7684\u8BDD,\u4F7F\u7528\u5982\u4E0B\u4EE3\u7801\u8F85\u52A9\u7406\u89E3\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>HashSet&lt;string&gt; setA = new HashSet&lt;string&gt;() { &quot;A&quot;, &quot;B&quot;, &quot;C&quot;, &quot;D&quot;, &quot;E&quot; };
HashSet&lt;string&gt; setB = new HashSet&lt;string&gt;() { &quot;A&quot;, &quot;X&quot;, &quot;C&quot;, &quot;Y&quot; };
setA.ExceptWith(setB);
foreach (string str in setA)
{
   Console.WriteLine(str);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u4F60\u6267\u884C\u4E86\u4E0A\u9762\u8FD9\u6BB5\u7A0B\u5E8F\uFF0C\u5143\u7D20 B,D,E \u5C06\u4F1A\u8F93\u51FA\u5230\u63A7\u5236\u53F0\u4E0A\u3002 <img src="`+d+`" alt="\u56FE\u7247"></p><ul><li>SymmetricExceptWith SymmetricExceptWith \u65B9\u6CD5\u5E38\u7528\u4E8E\u4FEE\u6539\u4E00\u4E2A HashSet \u6765\u5B58\u653E\u4E24\u4E2A HashSet \u90FD\u662F\u552F\u4E00\u7684\u5143\u7D20\uFF0C\u6362\u53E5\u8BDD\u8BF4\uFF0C\u6211\u8981\u7684\u5C31\u662F\u4E24\u4E2A\u96C6\u5408\u90FD\u4E0D\u5168\u6709\u7684\u5143\u7D20\uFF0C\u5982\u679C\u8FD8\u4E0D\u660E\u767D\u7684\u8BDD\uFF0C\u8003\u8651\u4E0B\u9762\u7684\u4EE3\u7801\u6BB5\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>HashSet&lt;string&gt; setA = new HashSet&lt;string&gt;() { &quot;A&quot;, &quot;B&quot;, &quot;C&quot;, &quot;D&quot;, &quot;E&quot; };
HashSet&lt;string&gt; setB = new HashSet&lt;string&gt;() { &quot;A&quot;, &quot;X&quot;, &quot;C&quot;, &quot;Y&quot; };
setA.SymmetricExceptWith(setB);
foreach (string str in setA)
{
  Console.WriteLine(str);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u4F60\u6267\u884C\u5B8C\u4E0A\u9762\u7684\u4EE3\u7801\uFF0C\u4F60\u4F1A\u53D1\u73B0\uFF0CsetA\u4E2D\u6709\u800CsetB\u4E2D\u6CA1\u6709 \u548C setB\u4E2D\u6709\u800CsetA\u4E2D\u6CA1\u6709\u7684\u5143\u7D20\u5C06\u4F1A\u8F93\u51FA\u5230\u63A7\u5236\u53F0\u4E2D\u3002 <img src="`+o+'" alt="\u56FE\u7247"></p><p>\u6211\u4EEC\u77E5\u9053\u6570\u7EC4\u7684\u5E73\u5747\u590D\u6742\u5EA6\u662F O(N)\uFF0C\u8FD9\u91CC\u7684 n \u8868\u793A\u6570\u7EC4\u91CC\u7684\u5143\u7D20\u6570\u91CF\uFF0C\u800C\u8BBF\u95EE HashSet \u4E2D\u7684\u67D0\u4E00\u4E2A\u5143\u7D20\uFF0C\u5B83\u7684\u590D\u6742\u5EA6\u4E3A O(1)\uFF0C\u8FD9\u4E2A\u5E38\u91CF\u590D\u6742\u5EA6\u5C31\u51B3\u5B9A\u4E86 HashSet \u5728\u5FEB\u901F\u68C0\u7D22 \u548C\u6267\u884C set\u96C6\u5408 \u64CD\u4F5C\u4E0A\u662F\u4E00\u4E2A\u975E\u5E38\u597D\u7684\u9009\u62E9\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u4F7F\u7528 List \u53BB\u5B58\u50A8\u67D0\u4E9B\u6709\u6307\u5B9A\u987A\u5E8F\u7684\u5143\u7D20\uFF0C\u540C\u65F6\u4E5F\u53EF\u4EE5\u5305\u542B\u91CD\u590D\u7684\u503C\u3002</p>',33),c=[v];function q(h,m){return t(),s("div",null,c)}const g=e(r,[["render",q],["__file","index.html.vue"]]);export{g as default};
