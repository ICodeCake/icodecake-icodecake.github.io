import{_ as s,r,o as d,c as t,a as e,d as n,b as l,e as a}from"./app.7fe9c44d.js";const v={},c=e("h1",{id:"url\u8F6Cfile\u5F97\u5C1D\u8BD5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#url\u8F6Cfile\u5F97\u5C1D\u8BD5","aria-hidden":"true"},"#"),n(" url\u8F6Cfile\u5F97\u5C1D\u8BD5")],-1),o=e("p",null,"\u4E0A\u4F20\u6D4B\u8BD5\u89C6\u9891\u548C\u97F3\u9891\u5F97\u65F6\u5019\u5DF2\u7ECF\u7EDF\u4E00\u5C06\u7C7B\u578B\u8FDB\u884C\u66F4\u6539 \u7C7B\u578B\u6B63\u786E \u4E0A\u4F20\u6D41\u4ECD403 \u7B2C\u4E00\u79CD\u4F7F\u7528\u539F\u751FHttp\u4E0A\u4F20",-1),u={href:"https://blog.csdn.net/ahwangzc/article/details/121563470",target:"_blank",rel:"noopener noreferrer"},b=a(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>getImageFileFromUrl(url, imageName) {
      let p = new Promise((resolve, reject) =&gt; {
        var blob = null;
        var xhr = new XMLHttpRequest();
        xhr.open(&quot;GET&quot;, url);
        xhr.setRequestHeader(&quot;Accept&quot;, &quot;image/jpeg&quot;);
        xhr.responseType = &quot;blob&quot;;
        xhr.onload = () =&gt; {
          blob = xhr.response;
          let imgFile = new File([blob], imageName, {type: &quot;image/jpeg&quot;});
          resolve(imgFile);
        };
        xhr.send();
      });
      return p;
    },
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7B2C\u4E8C\u79CD-\u4F7F\u7528fetch" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E8C\u79CD-\u4F7F\u7528fetch" aria-hidden="true">#</a> \u7B2C\u4E8C\u79CD:\u4F7F\u7528fetch</h3>`,2),m={href:"https://segmentfault.com/a/1190000042295695#comment-area",target:"_blank",rel:"noopener noreferrer"},h=a(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>imgUrlToFomdata (url) {
  return new Promise((resolve, reject) =&gt; {
    fetch(url)
      .then(respone =&gt; respone.blob())
      .then(blob =&gt; {
        const formData = new FormData();
        const { type } = blob
        const imgSuffix = type.substring(6)
        // \u4E0D\u8BBE\u7F6E\u540D\u5B57\u548C\u540E\u7F00\uFF0C\u63A5\u53E3\u4F1A\u62A5\u9519401\uFF0C\u5177\u4F53\u770B\u540E\u7AEF\u63A5\u53E3\u4EE3\u7801
        const fileName = \`\${new Date().getTime()}.\${imgSuffix}\`
        const file = new File([blob], fileName, { type });
        formData.append(&#39;file&#39;, file, fileName);
        resolve(formData)
      })
      .catch(error =&gt; {
        reject(error)
      });
  })
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7B2C\u4E09\u79CD-\u4F7F\u7528url\u8F6Cdatabase64-database64\u8F6C\u6362file\u6216\u8005blob" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E09\u79CD-\u4F7F\u7528url\u8F6Cdatabase64-database64\u8F6C\u6362file\u6216\u8005blob" aria-hidden="true">#</a> \u7B2C\u4E09\u79CD:\u4F7F\u7528url\u8F6Cdatabase64 database64\u8F6C\u6362file\u6216\u8005blob</h3>`,2),g={href:"https://blog.csdn.net/xingxingxingge/article/details/121996752",target:"_blank",rel:"noopener noreferrer"},f=a(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function urlToBase64(url) {
    return new Promise((resolve) =&gt; {
      fetch(url).then(data =&gt; {
        const blob = data.blob()
        return blob;
      }).then(blob =&gt; {
        let reader = new FileReader()
        reader.onloadend = function () {
          const dataURL = reader.result
          // console.log(&#39;base64\u5730\u5740\uFF1A&#39;, dataURL)
          resolve(dataURL)
        }
        reader.readAsDataURL(blob)
      })

    })
  }

 function base64ToFile(dataURL) {
    var arr = dataURL?.split?.(&#39;,&#39;)
    let mime = arr[0].match(/:(.*?);/)[1]
    let bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    let filename = new Date().getTime() + &quot;&quot; + Math.ceil(Math.random() * 100) + &quot;.&quot; + mime.split(&quot;/&quot;)[1]
    return (new File([u8arr], filename, { type: mime }))
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function p(x,_){const i=r("ExternalLinkIcon");return d(),t("div",null,[c,o,e("p",null,[e("a",u,[n("\u53C2\u8003\u94FE\u63A5"),l(i)])]),b,e("p",null,[e("a",m,[n("\u53C2\u8003\u94FE\u63A5\u5730\u5740"),l(i)])]),h,e("p",null,[e("a",g,[n("\u53C2\u8003\u94FE\u63A5\u5730\u5740"),l(i)])]),f])}const w=s(v,[["render",p],["__file","index.html.vue"]]);export{w as default};
