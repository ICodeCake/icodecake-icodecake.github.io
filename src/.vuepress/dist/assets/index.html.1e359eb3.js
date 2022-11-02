import{_ as n,o as e,c as a,f as r}from"./app.a16336e2.js";const i={};function t(s,o){return e(),a("div",null,[r(` # SpanView<T>\u548CArrayView<T>\u4F7F\u7528\u6307\u5357
## Introduction \u7B80\u4ECB
[Span](https://github.com/dotnet/corefxlab/blob/master/docs/specs/span.md)\u548C[Memory](https://github.com/dotnet/corefxlab/blob/master/docs/specs/memory.md)\u662FC# 7.2\u5F15\u5165\u7684\u65B0\u7684\u6570\u636E\u7ED3\u6784\u7C7B\u578B\uFF0C\u63D0\u9AD8\u5E95\u5C42\u7B97\u6CD5\u6027\u80FD\u3002

>:memo:**Span\u4F18\u52BF**
>- string\u7C7B\u64CD\u4F5C\uFF0C\u907F\u514D\u591A\u4F59allocation\u3002
>- unmanaged code\uFF0Cstackalloc\u7B49\uFF0C\u907F\u514D\u4F7F\u7528unsafe\u73AF\u5883
>- Array T\u7C7B\u578B\u8F6C\u6362 [MemoryMashal.Cast](https://docs.microsoft.com/en-us/dotnet/api/system.runtime.interopservices.memorymarshal.cast?view=netcore-3.1)

SpanView\u548CSpan\u4E00\u6837\u4E3Aref struct\u7C7B\u578B\uFF0C\u53EA\u80FD\u5B58\u6D3B\u5728stack\u4E0A\u3002\u4E3B\u8981\u4E3A\u4E86\u51CF\u5C11\u4E8C\u8FDB\u5236bin\u6587\u4EF6\u8BFB\u53D6\u540E\uFF0C\u9700\u8981\u8F6C\u6362\u4E3A\`T[]\`\uFF0C\u548C\`T[]\`\u5B58\u50A8bin\u6587\u4EF6\u524D\u9700\u8981\u8F6C\u6362\u4E3A\`byte[]\`\u7684\u591A\u4F59allocation\u3002

SpanView2D\u518DSpanView\u57FA\u7840\u4E0A\uFF0C\u589E\u52A0\u4E86\u7C7B\u4F3C\u4E8C\u7EF4\u6570\u7EC4\u7684\u8BFB\u5199\u64CD\u4F5C\u3002

ArrayView\u548CArrayView2D\uFF0C\u7C7B\u4F3CMemory\u7684\u4F7F\u7528\uFF0C\u4E3A\u4E86\u89E3\u51B3SpanView\u53EA\u80FD\u5B58\u6D3B\u4E8Estack\u7684\u95EE\u9898\uFF0C\u5982\u679C\u9700\u8981Cache\u4E00\u6BB5\u6570\u636E\uFF0C\u4FDD\u5B58\u518Dheap\u4E0A\uFF08\u5982\u5168\u5C40\u53D8\u91CF\uFF0Cawait\u7B49\uFF09\uFF0C\u4F7F\u7528ArrayView\u3002

>:x:**\u5E38\u89C1\u8BEF\u533A**
>Span\u548CArray\u5728\u8BFB\u5199\u6027\u80FD\u4E0A[\u57FA\u672C\u4E00\u81F4](https://adamsitnik.com/Span/#span-vs-array)\uFF0C SpanView\u4E5F\u57FA\u672C\u4E00\u81F4\u3002


|           Method |     Mean |  Allocated |
|----------------- |---------:|-----------:|
|       ReadNormal | 2.190 ms |          - |
|         ReadSpan | 2.219 ms |          - |
|     ReadSpanView | 2.569 ms |          - |
|        ReadArray | 2.197 ms |          - |
|    ReadArrayView | 2.217 ms |          - |
|      ReadArray2D | 2.419 ms |          - |
|  ReadArrayView2D | 2.628 ms |          - |
|       WriteArray | 6.188 ms | 19660824 B |
|   WriteArrayView | 6.224 ms | 19661284 B |
|     WriteArray2D | 7.245 ms | 19660840 B |
| WriteArrayView2D | 7.784 ms | 19661283 B |

## Design \u8BBE\u8BA1

SpanView\u8BBE\u8BA1\u7684\u539F\u7406\uFF1A
\u5185\u90E8\u4E00\u4E2A\`byte[] _rawData\`\u4F5C\u4E3A\u6570\u636ECache\uFF0C\`Span<T> _span\`\u4F5C\u4E3ArawData\u7684\u8BFB\u5199\u63A5\u53E3\u4F7F\u7528\u3002\u5BF9span\u7684\u64CD\u4F5C\u4F1A\u6620\u5C04\u5230rawData\u7684\u53D8\u5316\u3002

### SpanView

#### Create \u521B\u5EFA

\`\`\` csharp
// \u521B\u5EFA
var spanView = new SpanView<int>(length);
// \u4ECE\u6587\u4EF6\u8BFB\u53D6
var spanView = SpanView<double>.FromFile(filePath);
\`\`\`
#### Read Write \u8BFB\u5199

\`\`\` csharp
spanView[0] = 1;
var result = span[0];
\`\`\`

#### Save \u5B58\u50A8

\`\`\` csharp
spanView.SaveFile(filePath);
\`\`\`

### SpanView2D
API\u5728SpanView\u57FA\u7840\u4E0A\u589E\u52A0ColumnLength\uFF0C\u5176\u4ED6\u57FA\u672C\u76F8\u540C\u3002

\`\`\` csharp
var spanView2D = new SpanView<int>(rowLength, columnLength);
spanView2D[1,1] = 2;
spanView2D.SaveFile(filePath);
\`\`\`

### ArrayView

#### Create
    
\`\`\` csharp
var arrayView = new ArrayView<double>(length);
var arrayView2D = ArrayView2D<double>.FromFile(filePath, columnLength);
\`\`\`
#### Read Write
\`\`\` csharp
var span = arrayView.AsSpanView();
span[0] = 1;
var result = span[0];
\`\`\`
#### Save
\`\`\` csharp
 arrayView.SaveFile(filePath);
\`\`\`

### ArrayView2D
\`\`\` csharp
var arrayView2D = new ArrayView2D<double>(rowLength, columnLength);
var span = arrayView2D.AsSpanView2D();
double value = 0;
for (int i = 0; i < arrayView2D.RowLength; i++)
{
    for (int j = 0; j < arrayView2D.ColumnLength; j++)
    {
       span[i, j] = value++;
     }
}
\`\`\`

## Usage \u7528\u4F8B

### \u4ECE\u6587\u4EF6\u8BFB\u53D6\u5355\u7EF4\u6570\u7EC4
File.ReadAllSpan()\u548CSpanView.FromFile\u90FD\u53EF\u4EE5\u4F7F\u7528\u3002

#### \u63A8\u8350\u4F7F\u7528\u7684\u60C5\u51B5

#### \u4E0D\u63A8\u8350\u4F7F\u7528\u7684\u60C5\u51B5

### \u4ECE\u6587\u4EF6\u8BFB\u53D6\u4E8C\u7EF4\u6570\u7EC4

\u63A8\u8350\u4F7F\u7528SpanView2D.FromFile\uFF0C\u4F7F\u7528\u4FBF\u6377\u3002

#### \u63A8\u8350\u4F7F\u7528\u7684\u60C5\u51B5

#### \u4E0D\u63A8\u8350\u4F7F\u7528\u7684\u60C5\u51B5

### \u6587\u4EF6\u8BFB\u53D6\u6574\u6BB5\u539F\u59CB\u6570\u636E\uFF0C\u9700\u8981\u7F13\u5B58
\u63A8\u8350\u4F7F\u7528ArrayView

#### \u63A8\u8350\u4F7F\u7528\u7684\u60C5\u51B5

#### \u4E0D\u63A8\u8350\u4F7F\u7528\u7684\u60C5\u51B5

### \u7528\u4E8E\u5B58\u50A8\u7684\u6570\u636E
\u63A8\u8350\u4F7F\u7528ArrayView\u3002

#### \u63A8\u8350\u4F7F\u7528\u7684\u60C5\u51B5
\u773C\u52A8\u5904\u7406\u540E\u7684\u591A\u7EF4\u6570\u7EC4\uFF0C\u8111\u7535\u3001\u4F20\u611F\u5668\u6570\u636E\u7684\u4E22\u5305\u63D2\u503C

#### \u4E0D\u63A8\u8350\u4F7F\u7528\u7684\u60C5\u51B5

### \u6570\u636E\u5206\u6BB5\u548C\u622A\u53D6
\u9700\u8981\u5B58\u50A8\u63A8\u8350\u4F7F\u7528ArrayView\uFF0C\u4E0D\u9700\u8981\u5219SpanView

## Reference \u53C2\u8003
[ref struct](https://docs.microsoft.com/zh-cn/dotnet/csharp/write-safe-efficient-code)

[Span\u7B80\u4ECB](https://www.cnblogs.com/uoyo/p/12207148.html) `)])}const w=n(i,[["render",t],["__file","index.html.vue"]]);export{w as default};
