import{_ as s,r as a,o as d,c as l,a as e,d as n,b as c,e as t}from"./app.7b48ccfe.js";const r="/assets/01.abcff153.png",v="/assets/02.3acd2ab6.png",o={},u=e("h4",{id:"\u5173\u4E8Ejavascript\u4E2Dclass",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u5173\u4E8Ejavascript\u4E2Dclass","aria-hidden":"true"},"#"),n(" \u5173\u4E8Ejavascript\u4E2Dclass")],-1),m={href:"https://www.typescriptlang.org/play?#code/FAQwRgzgLgTiDGUAE8A2IISQFQKbQCENcBvYJClAewDtoYBXRKmACgEozLukoALAJYQAdAH14fEDQDmuAMJUGNKBwDc5SgF8NFAA4wqUXIlwATJOHoJk4yTPmLlHAFxIAblQGn124GgxYeNBIuAAeRjSmgfhQRBCkOkj6Am4gRtRKyAC8SAAM6tz6hsZG5rZSsgqZLu6e5lw8FPxCwvCO2UgAjAVaiclOnIncbXRUqLjCqFTSrM0ibZnsPRTaviPBHTS4AO44MWrAUML9KksaQA",target:"_blank",rel:"noopener noreferrer"},b=t(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>abstract class TestBase{
    constructor(){
        this._changeCount();
    }
    protected abstract _changeCount(): void;
}

class Test extends TestBase{
    private count = 0;
    protected _changeCount(): void {
        this.count = 1;
    }
    print(){
        console.log(this.count);
    }
}

const t = new Test();
t.print();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+r+`" alt="\u56FE\u7247"></p><h4 id="\u4E24\u4E2A\u90FD\u6709\u6784\u9020\u5668\u7684\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u4E24\u4E2A\u90FD\u6709\u6784\u9020\u5668\u7684\u51FD\u6570" aria-hidden="true">#</a> \u4E24\u4E2A\u90FD\u6709\u6784\u9020\u5668\u7684\u51FD\u6570</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>export abstract class TestBase {
    protected count = 0;
    constructor() {
        this._changeCount();
    }
    protected abstract _changeCount(): void;
}

export class Test extends TestBase {
    private childNumber: number = 8;
    constructor() {
        super();
        this.childNumber = 9;
    }
    protected _changeCount(): void {
        this.count = 1;
    }

    print() {
        console.log(this.count);
    }
}

const t = new Test();
t.print();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+v+'" alt="\u56FE\u7247"></p><p>\u603B\u7ED3 TypeScript class \u6784\u9020\u51FD\u6570\u548C\u6210\u5458\u7684\u521D\u59CB\u5316\u987A\u5E8F \u25CF \u57FA\u7C7B\u7684\u6210\u5458\u521D\u59CB\u5316 \u25CF \u57FA\u7C7B\u7684\u6784\u9020\u51FD\u6570\u521D\u59CB\u5316 \u25CF \u5B50\u7C7B\u7684\u6210\u5458\u521D\u59CB\u5316 \u25CF \u5B50\u7C7B\u7684\u6784\u9020\u51FD\u6570\u521D\u59CB\u5316</p>',6);function p(h,g){const i=a("ExternalLinkIcon");return d(),l("div",null,[u,e("p",null,[e("a",m,[n("\u94FE\u63A5\u53C2\u8003"),c(i)])]),b])}const A=s(o,[["render",p],["__file","index.html.vue"]]);export{A as default};
