import{_ as e,o as n,c as i,e as s}from"./app.38c1a631.js";const a={},d=s(`<h1 id="\u5199-typescript-\u65F6-\u5F88\u591A\u4EBA\u53EF\u80FD\u4F1A\u72AF\u7684\u51E0\u4E2A\u5C0F\u9519\u8BEF" tabindex="-1"><a class="header-anchor" href="#\u5199-typescript-\u65F6-\u5F88\u591A\u4EBA\u53EF\u80FD\u4F1A\u72AF\u7684\u51E0\u4E2A\u5C0F\u9519\u8BEF" aria-hidden="true">#</a> \u5199 TypeScript \u65F6\uFF0C\u5F88\u591A\u4EBA\u53EF\u80FD\u4F1A\u72AF\u7684\u51E0\u4E2A\u5C0F\u9519\u8BEF\uFF01</h1><blockquote><p>TypeScript \u548C JavaScript \u5728\u8FC7\u53BB\u51E0\u5E74\u4E2D\u4E0D\u65AD\u8FDB\u6B65\uFF0C\u6211\u4EEC\u5728\u8FC7\u53BB\u70B9\u65F6\u95F4\u4E2D\u5EFA\u7ACB\u7684\u4E00\u4E9B\u5B9E\u8DF5\u53EF\u80FD\u5DF2\u7ECF\u8FC7\u65F6\u3002\u6709\u4E9B\u53EF\u80FD\u6C38\u8FDC\u6CA1\u6709\u610F\u4E49\uFF0C\u4E0B\u9762\u6211\u5217\u51FA\u4E86\u5F88\u591A=\u5F00\u53D1\u8005\u53EF\u80FD\u4F1A\u72AF\u7684\u51E0\u4E2A\u9519\u8BEF\uFF01</p></blockquote><h2 id="\u6CA1\u6709\u4F7F\u7528\u4E25\u683C\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u6CA1\u6709\u4F7F\u7528\u4E25\u683C\u6A21\u5F0F" aria-hidden="true">#</a> \u6CA1\u6709\u4F7F\u7528\u4E25\u683C\u6A21\u5F0F</h2><p>\u901A\u8FC7\u4F7F\u7528\u6CA1\u6709\u4E25\u683C\u6A21\u5F0F\u7684 tsconfig.json\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&quot;compilerOptions&quot;:{
  &quot;target&quot;:&quot;ES2015&quot;,
  &quot;module&quot;:&quot;commonjs&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528\u4E25\u683C\u6A21\u5F0F\u540E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&quot;compilerOptions&quot;:{
  &quot;target&quot;:&quot;ES2015&quot;,
  &quot;module&quot;:&quot;commonjs&quot;,
  &quot;strict&quot;:true
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528\u4E25\u683C\u6A21\u5F0F\uFF1F \u4E25\u683C\u6A21\u5F0F\u53EF\u4EE5\u6D88\u9664\u8BED\u6CD5\u91CC\u4E00\u4E9B\u4E0D\u5408\u7406\uFF0C\u4E0D\u4E25\u8C28\u7684\u5730\u65B9\uFF0C\u53EF\u4EE5\u8BA9 TS \u5F80\u66F4\u5408\u7406\u3001\u66F4\u5B89\u5168\u3001\u66F4\u4E25\u8C28\u7684\u65B9\u5411\u53BB\u53D1\u5C55: \u901A\u8FC7\u5C06\u4E00\u4E9B TS \u7684\u9759\u9ED8\u9519\u8BEF\u66F4\u6539\u4E3A\u629B\u51FA\u9519\u8BEF\uFF0C\u6D88\u9664\u4E86 TS \u7684\u4E00\u4E9B\u9759\u9ED8\u9519\u8BEF\uFF0C\u80FD\u66F4\u52A0\u6709\u6548\u4FDD\u969C\u4EE3\u7801\u8FD0\u884C\u7684\u5B89\u5168\uFF1B\u63D0\u9AD8\u7F16\u8BD1\u5668\u6548\u7387\uFF0C\u589E\u52A0\u8FD0\u884C\u901F\u5EA6\uFF1B\u7981\u6B62\u4E00\u4E9B\u53EF\u80FD\u5728 ECMAScript \u672A\u6765\u7248\u672C\u4E2D\u5B9A\u4E49\u7684\u8BED\u6CD5\u3002</p><h2 id="\u4F7F\u7528-\u786E\u5B9A\u9ED8\u8BA4\u503C" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-\u786E\u5B9A\u9ED8\u8BA4\u503C" aria-hidden="true">#</a> \u4F7F\u7528 || \u786E\u5B9A\u9ED8\u8BA4\u503C</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function createBlogPost(text:string,author:string,date?:Date){
  return {
    text:text,
    author:author,
    date:date || new Date();
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B83\u5E94\u8BE5\u662F\u4EC0\u4E48\u6837\u5B50\u7684\u5462\uFF1F \u4F7F\u7528\u6700\u65B0\u7684??\u8FD0\u7B97\u7B26\u6216\u8005\u6700\u597D\u662F\u5728\u53C2\u6570\u7EA7\u522B\u5B9A\u4E49\u8FD4\u56DE\u503C\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function createBlogPost(text:string,author:string,date:Date = new Date()){
  return {
    text:text,
    author:author,
    date:date;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9??\u8FD0\u7B97\u7B26\u53BB\u5E74\u624D\u88AB\u5F15\u5165\uFF0C\u5982\u679C\u5728\u957F\u51FD\u6570\u7684\u4E2D\u95F4\u4F7F\u7528\u503C\uFF0C\u53EF\u80FD\u5F88\u96BE\u5C06\u5B83\u4EEC\u5B9A\u4E49\u4E3A\u53C2\u6570\u9ED8\u8BA4\u503C\u3002</p><p>?? \u4E0E || \u4E0D\u540C\uFF0C\u5B83\u53EA\u8FD4\u56DE null \u6216 undefined\uFF0C\u800C\u4E0D\u662F\u6240\u6709 falsy \u503C\u3002</p><h2 id="\u4F7F\u7528-any-\u4F5C\u4E3A\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-any-\u4F5C\u4E3A\u7C7B\u578B" aria-hidden="true">#</a> \u4F7F\u7528 any \u4F5C\u4E3A\u7C7B\u578B</h2><p>\u5F53\u6211\u4EEC\u4E0D\u786E\u5B9A\u6570\u636E\u7C7B\u578B\u7684\u65F6\u5019\uFF0C\u4F1A\u4F7F\u7528 any \u7C7B\u578B\u7684\u6570\u636E\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>async function loadProducts():Promise&lt;Product[]&gt;{
  const response = await fetch(&#39;https://api.mysize.com/products&#39;)
  const products:any = await response.json()
  return products
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u6240\u6709\u6211\u4EEC\u4E0D\u786E\u5B9A\u7C7B\u578B\u7684\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u90FD\u5E94\u8BE5\u4F7F\u7528 unknown\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>async function loadProducts():Promise&lt;Product[]&gt;{
  const response = await fetch(&#39;https://api.mysize.com/products&#39;)
  const products:any = await response.json()
  return products as Product[]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E3A\u4EC0\u4E48\u8981\u8FD9\u4E48\u505A\u5462" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u8981\u8FD9\u4E48\u505A\u5462" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u8981\u8FD9\u4E48\u505A\u5462\uFF1F</h2><blockquote><p>any \u5F88\u7B80\u5355\uFF0C\u56E0\u4E3A\u5B83\u4ECE\u6839\u672C\u4E0A\u7981\u7528\u4E86\u6240\u6709\u7C7B\u578B\u68C0\u67E5\u3002\u901A\u5E38\uFF0C\u5373\u4F7F\u5728\u5B98\u65B9\u7C7B\u578B\u4E2D\u4E5F\u4F7F\u7528 any</p></blockquote><h2 id="\u4E3A\u4EC0\u4E48\u4E0D\u80FD\u7528-any" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u4E0D\u80FD\u7528-any" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u4E0D\u80FD\u7528 any\uFF1F</h2><p>\u5B83\u4ECE\u6839\u672C\u4E0A\u7981\u7528\u6240\u6709\u7C7B\u578B\u68C0\u67E5\u3002\u901A\u8FC7 any \u8FDB\u5165\u7684\u6240\u6709\u503C\u90FD\u5C06\u5B8C\u5168\u653E\u5F03\u4EFB\u4F55\u7C7B\u578B\u68C0\u67E5\u3002\u8FD9\u53EF\u80FD\u4F1A\u53D8\u5F97\u975E\u5E38\u96BE\u4EE5\u6355\u6349\u9519\u8BEF\uFF0C\u56E0\u4E3A\u53EA\u6709\u5F53\u6211\u4EEC\u5BF9\u7C7B\u578B\u7ED3\u6784\u7684\u5047\u8BBE\u7B26\u5408\u8FD0\u884C\u65F6\u4EE3\u7801\u65F6\uFF0C\u4EE3\u7801\u624D\u4F1A\u5931\u8D25\u3002</p><h2 id="val-\u4F5C\u4E3A-sometype" tabindex="-1"><a class="header-anchor" href="#val-\u4F5C\u4E3A-sometype" aria-hidden="true">#</a> val \u4F5C\u4E3A SomeType</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>async function loadProducts():Promise&lt;Product[]&gt;{
  const response = await fetch(&#39;https://api.mysize.com/products&#39;)
  const products:any = await response.json()
  return products as Product[]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u5C31\u662F\u7C7B\u578B\u5B88\u536B\u7684\u7528\u9014\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function isArrayOfProducts(obj:unknown):obj is Product[]{
  return Array.isArray(obj) &amp;&amp; obj.every(isProduct)
}

function isProduct(obj:unknown):obj is Product{
  return obj !=null&amp;&amp; typeof (obj as Product).id === &#39;string&#39;
}

async function loadProducts():Promise&lt;Product[]&gt;{
  const response = await fetch(&#39;https://api.mysize.com/products&#39;)
  const products:unknown = await response.json()
if(!isArrayOfProducts(products)){
  throw new TypeError(&#39;Received malformed products API response&#39;)
}
  return products
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u6211\u4EEC\u60F3\u8981\u4ECE JavaScript \u8F6C\u6362\u4E3A TypeScript \u65F6\uFF0C\u73B0\u6709\u7684\u4EE3\u7801\u5E93\u7ECF\u5E38\u5BF9 TypeScript \u7F16\u8BD1\u5668\u65E0\u6CD5\u81EA\u52A8\u5F97\u51FA\u7684\u7C7B\u578B\u505A\u51FA\u5047\u8BBE\u3002\u5728\u8FD9\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u4F7F\u7528\u5FEB\u901F as SomeOtherType \u53EF\u4EE5\u52A0\u5FEB\u8F6C\u6362\u901F\u5EA6\uFF0C\u800C\u65E0\u9700\u653E\u677E tsconfig \u4E2D\u7684\u8BBE\u7F6E\u3002</p><p>\u5373\u4F7F\u73B0\u5728\u53EF\u4EE5\u4FDD\u5B58\u65AD\u8A00\uFF0C\u4F46\u5F53\u6709\u4EBA\u79FB\u52A8\u4EE3\u7801\u65F6\uFF0C\u8FD9\u53EF\u80FD\u4F1A\u6539\u53D8\u3002\u7C7B\u578B\u4FDD\u62A4\u5C06\u786E\u4FDD\u6240\u6709\u68C0\u67E5\u90FD\u662F\u660E\u786E\u7684\u3002</p><h2 id="\u4F7F\u7528\u4E00\u4E2A\u5B57\u6BCD\u4F5C\u4E3A\u6CDB\u578B\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u4E00\u4E2A\u5B57\u6BCD\u4F5C\u4E3A\u6CDB\u578B\u53C2\u6570" aria-hidden="true">#</a> \u4F7F\u7528\u4E00\u4E2A\u5B57\u6BCD\u4F5C\u4E3A\u6CDB\u578B\u53C2\u6570</h2><p>\u7528\u4E00\u4E2A\u5B57\u6BCD\u7ED9\u4F5C\u4E3A\u540D\u79F0\uFF0C\u6BD4\u5982\u5E38\u7528\u7684 T \u4F5C\u4E3A\u6CDB\u578B\u540D\u79F0\uFF01</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function head&lt;T&gt;(arr:T[]):T |undefined{
  return arr[0]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7528\u4E00\u4E2A\u5B57\u6BCD\u7ED9\u4F5C\u4E3A\u540D\u79F0\uFF0C\u6BD4\u5982\u5E38\u7528\u7684 T \u4F5C\u4E3A\u6CDB\u578B\u540D\u79F0\uFF01</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function head&lt;Element&gt;(arr:Element[]):Element |undefined{
  return arr[0]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u731C\u5F88\u591A\u4EBA\u6709\u8FD9\u79CD\u574F\u4E60\u60EF\uFF0C\u56E0\u4E3A\u5373\u4F7F\u662F\u5B98\u65B9\u6587\u6863\u4E5F\u4F7F\u7528\u4E00\u4E2A\u5B57\u6BCD\u7684\u540D\u79F0\u3002\u6309 T \u4EE3\u66FF\u5199\u5168\u540D\u53EF\u4EE5\u66F4\u5FEB\u5730\u952E\u5165\uFF0C\u5E76\u4E14\u4E0D\u9700\u8981\u8003\u8651\u592A\u591A\u3002</p><p>\u6CDB\u578B\u7C7B\u578B\u662F\u53D8\u91CF\uFF0C\u5C31\u50CF\u5176\u4ED6\u53D8\u91CF\u4E00\u6837\u3002\u5F53 IDE \u5F00\u59CB\u5411\u6211\u4EEC\u5C55\u793A\u8FD9\u4E9B\u6280\u672F\u6027\u65F6\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u653E\u5F03\u4E86\u5728\u53D8\u91CF\u540D\u79F0\u4E2D\u63CF\u8FF0\u53D8\u91CF\u6280\u672F\u6027\u7684\u60F3\u6CD5\u3002\u4F8B\u5982\u3002\u6211\u4EEC\u901A\u5E38\u53EA\u5199 const name = \u2018Daniel\u2019 \u800C\u4E0D\u662F const strName = \u2018Daniel\u2019\u3002\u6B64\u5916\uFF0C\u4E00\u4E2A\u5B57\u6BCD\u7684\u53D8\u91CF\u540D\u901A\u5E38\u4F1A\u5F15\u8D77\u8F70\u52A8\uFF0C\u56E0\u4E3A\u5982\u679C\u4E0D\u770B\u5B83\u4EEC\u7684\u58F0\u660E\uFF0C\u53EF\u80FD\u5F88\u96BE\u7FFB\u8BD1\u5B83\u4EEC\u7684\u542B\u4E49\u3002</p><h2 id="\u975E\u5E03\u5C14\u68C0\u67E5" tabindex="-1"><a class="header-anchor" href="#\u975E\u5E03\u5C14\u68C0\u67E5" aria-hidden="true">#</a> \u975E\u5E03\u5C14\u68C0\u67E5</h2><p>\u901A\u8FC7\u5C06\u503C\u76F4\u63A5\u4F20\u9012\u7ED9 if \u8BED\u53E5\u6765\u68C0\u67E5\u503C\u662F\u5426\u5DF2\u5B9A\u4E49\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function createNewMessagesResponse(countOfNewMessages?:number){
  if(countOfNewMessages){
    return \`You have \${countOfNewMessages} new Messages\`
  }
  return &#39;Error:&#39;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u53EF\u4EE5\u660E\u786E\u68C0\u67E5\u6211\u4EEC\u5173\u5FC3\u7684\u60C5\u51B5\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>(countOfNewMessages?:number){
  if(countOfNewMessages !== undefined){
    return \`You have \${countOfNewMessages} new Messages\`
  }
  return &#39;Error:&#39;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7528\u7B80\u77ED\u7684\u65B9\u5F0F\u7F16\u5199\u68C0\u67E5\u770B\u8D77\u6765\u66F4\u7B80\u6D01\uFF0C\u5E76\u4E14\u53EF\u4EE5\u8BA9\u6211\u4EEC\u907F\u514D\u601D\u8003\u6211\u4EEC\u771F\u6B63\u60F3\u8981\u68C0\u67E5\u7684\u5185\u5BB9\u3002</p><h2 id="\u64CD\u4F5C\u7B26" tabindex="-1"><a class="header-anchor" href="#\u64CD\u4F5C\u7B26" aria-hidden="true">#</a> \uFF01\uFF01\u64CD\u4F5C\u7B26</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function createNewMessagesResponse(countOfNewMessages?:number){
  if(!!countOfNewMessages){
    return \`You have \${countOfNewMessages} new Messages\`
  }
  return &#39;Error:&#39;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u660E\u786E\u68C0\u67E5\u6211\u4EEC\u5173\u5FC3\u7684\u72B6\u51B5\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>(countOfNewMessages?:number){
  if(countOfNewMessages !== undefined){
    return \`You have \${countOfNewMessages} new Messages\`
  }
  return &#39;Error:&#39;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BF9\u6211\u4EEC\u4E2D\u7684\u4E00\u4E9B\u4EBA\u6765\u8BF4\uFF0C\u7406\u89E3\uFF01\u5F88\u7B80\u5355\u3002\u5B83\u770B\u8D77\u6765\u7B80\u77ED\u800C\u7B80\u6D01\uFF0C\u5982\u679C\u60A8\u5DF2\u7ECF\u719F\u6089\u5B83\uFF0C\u90A3\u4E48\u60A8\u5C31\u4F1A\u77E5\u9053\u5B83\u662F\u5173\u4E8E\u4EC0\u4E48\u7684\u3002\u8FD9\u662F\u5C06\u4EFB\u4F55\u503C\u8F6C\u6362\u4E3A\u5E03\u5C14\u503C\u7684\u7B80\u4FBF\u65B9\u6CD5\u3002\u5C24\u5176\u662F\u5728\u4EE3\u7801\u5E93\u4E2D\uFF0C\u5047\u503C\uFF08\u5982 null\u3001undefined \u548C\u201C\u201D\uFF09\u4E4B\u95F4\u6CA1\u6709\u660E\u786E\u7684\u8BED\u4E49\u5206\u79BB\u3002</p><p>\u7528 !!\u901A\u8FC7\u5BA3\u4F20\u5185\u90E8\u77E5\u8BC6\u6765\u6DF7\u6DC6\u4EE3\u7801\u7684\u771F\u6B63\u542B\u4E49\u3002\u8FD9\u4F7F\u5F97\u65B0\u5F00\u53D1\u4EBA\u5458\u66F4\u4E0D\u5BB9\u6613\u8BBF\u95EE\u4EE3\u7801\u5E93\uFF0C\u65E0\u8BBA\u662F\u4E00\u822C\u5F00\u53D1\u7684\u65B0\u624B\uFF0C\u8FD8\u662F JavaScript \u7684\u65B0\u624B\u3002\u5F15\u5165\u7EC6\u5FAE\u7684\u9519\u8BEF\u4E5F\u5F88\u5BB9\u6613\u3002\u6765\u81EA\u201C\u975E\u5E03\u5C14\u5E03\u5C14\u68C0\u67E5\u201D\u7684 countOfNewMessages \u4E3A 0 \u7684\u95EE\u9898\u4ECD\u7136\u5B58\u5728 !!\u3002</p>`,48),r=[d];function t(l,u){return n(),i("div",null,r)}const o=e(a,[["render",t],["__file","index.html.vue"]]);export{o as default};
