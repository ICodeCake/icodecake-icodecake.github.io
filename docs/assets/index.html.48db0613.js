import{_ as e,o as i,c as n,e as l}from"./app.c1fab378.js";const s={},a=l(`<ul><li>\u5728\u54C8\u5E0C\u8868\u4E2D\u6DFB\u52A0\u4E00\u4E2Akeyvalue\u952E\u503C\u5BF9\uFF1AHashtableObject.Add(key,value);</li><li>\u5728\u54C8\u5E0C\u8868\u4E2D\u53BB\u9664\u67D0\u4E2Akeyvalue\u952E\u503C\u5BF9\uFF1AHashtableObject.Remove(key);</li><li>\u4ECE\u54C8\u5E0C\u8868\u4E2D\u79FB\u9664\u6240\u6709\u5143\u7D20\uFF1A HashtableObject.Clear();</li><li>\u5224\u65AD\u54C8\u5E0C\u8868\u662F\u5426\u5305\u542B\u7279\u5B9A\u952Ekey\uFF1A HashtableObject.Contains(key);</li></ul><p>\u4E0B\u9762\u63A7\u5236\u53F0\u7A0B\u5E8F\u5C06\u5305\u542B\u4EE5\u4E0A\u6240\u6709\u64CD\u4F5C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>using System; 
using System.Collections; //file\u4F7F\u7528Hashtable\u65F6\uFF0C\u5FC5\u987B\u5F15\u5165\u8FD9\u4E2A\u547D\u540D\u7A7A\u95F4 
class hashtable 
{ 
public static void Main() 
{ 
Hashtable ht=new Hashtable(); //file\u521B\u5EFA\u4E00\u4E2AHashtable\u5B9E\u4F8B 
ht.Add(E,e);//\u6DFB\u52A0keyvalue\u952E\u503C\u5BF9 
ht.Add(A,a); 
ht.Add(C,c); 
ht.Add(B,b); 
string s=(string)ht[A]; 
if(ht.Contains(E)) //file\u5224\u65AD\u54C8\u5E0C\u8868\u662F\u5426\u5305\u542B\u7279\u5B9A\u952E,\u5176\u8FD4\u56DE\u503C\u4E3Atrue\u6216false 
Console.WriteLine(the E keyexist); 
ht.Remove(C);//\u79FB\u9664\u4E00\u4E2Akeyvalue\u952E\u503C\u5BF9 
Console.WriteLine(ht[A]);\u6B64\u5904\u8F93\u51FAa 
ht.Clear();//\u79FB\u9664\u6240\u6709\u5143\u7D20 
Console.WriteLine(ht[A]); //file\u6B64\u5904\u5C06\u4E0D\u4F1A\u6709\u4EFB\u4F55\u8F93\u51FA 
} 
} 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u904D\u5386\u54C8\u5E0C\u8868 \u904D\u5386\u54C8\u5E0C\u8868\u9700\u8981\u7528\u5230DictionaryEntry Object\u6216Hashtable.GetEnumerator()\u65B9\u6CD5\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>for(DictionaryEntry de in ht) //ht\u4E3A\u4E00\u4E2AHashtable\u5B9E\u4F8B 
{ 
Console.WriteLine(de.Key);  //de.Key\u5BF9\u5E94\u4E8Ekeyvalue\u952E\u503C\u5BF9key 
Console.WriteLine(de.Value);  //de.Key\u5BF9\u5E94\u4E8Ekeyvalue\u952E\u503C\u5BF9value 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5BF9\u54C8\u5E0C\u8868\u8FDB\u884C\u6392\u5E8F \u5BF9\u54C8\u5E0C\u8868\u8FDB\u884C\u6392\u5E8F\u5728\u8FD9\u91CC\u7684\u5B9A\u4E49\u662F\u5BF9keyvalue\u952E\u503C\u5BF9\u4E2D\u7684key\u6309\u4E00\u5B9A\u89C4\u5219\u91CD\u65B0\u6392\u5217\uFF0C\u4F46\u662F\u5B9E\u9645\u4E0A\u8FD9\u4E2A\u5B9A\u4E49\u662F\u4E0D\u80FD\u5B9E\u73B0\u7684\uFF0C\u56E0\u4E3A\u6211\u4EEC\u65E0\u6CD5\u76F4\u63A5\u5728Hashtable\u8FDB\u884C\u5BF9key\u8FDB\u884C\u91CD\u65B0\u6392\u5217\uFF0C\u5982\u679C\u9700\u8981Hashtable\u63D0\u4F9B\u67D0\u79CD\u89C4\u5219\u7684\u8F93\u51FA\uFF0C\u53EF\u4EE5\u91C7\u7528\u4E00\u79CD\u53D8\u901A\u7684\u505A\u6CD5\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ArrayList akeys=new ArrayList(ht.Keys); //file\u522B\u5FD8\u4E86\u5BFC\u5165System.Collections 
akeys.Sort(); //file\u6309\u5B57\u6BCD\u987A\u5E8F\u8FDB\u884C\u6392\u5E8F 
for(string skey in akeys) 
{ 
Console.Write(skey + ); 
Console.WriteLine(ht[skey]);//\u6392\u5E8F\u540E\u8F93\u51FA 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),d=[a];function t(v,r){return i(),n("div",null,d)}const u=e(s,[["render",t],["__file","index.html.vue"]]);export{u as default};
