# 代码自审和团队审核Checklist

## Style Check | 风格的一致性
- [ ] C#代码是否遵循了[代码规范](https://kingfar.coding.net/p/ergolab/wiki/54)
- [ ] XAML代码是否遵循了[代码规范](https://kingfar.coding.net/p/ergolab/wiki/53)
- [ ] 是否进行了FxCop代码分析，并解决所有warning
- [ ] 界面样式是否遵循和Theme和Layout的准则

## [Readability | 代码的可读性](https://kingfar.coding.net/p/ergolab/wiki/50)
- [ ] 代码**结构**是否清晰，容易理解
- [ ] 是否能够**拆分**比较大的方法，来提高代码可读性
- [ ] 代码是否在合理的文件夹和**命名空间**下
- [ ] 是否有些地方可以加一些**注释**
- [ ] 是否存在没意义的**注释掉的代码**，或者**无用的Logger**
- [ ] 是否可以改变命名方式，增加**一致性**并**清晰易懂**
- [ ] 是否存在temp、list、num等**无意义**命名方式
- [ ] 增加的功能是否需要更新Wiki

## Implementation 实现的合理性
- [ ] 有没有考虑并**对比**实现这个功能的其他方案
- [ ] 相似的功能在项目中是否已经存在？如果存在，为何没有**复用**
- [ ] 是否能想到有任何**使用案例**或**操作流程**，会导致程序无法按照预期运行
- [ ] 是否考虑了所有**极端**情况，并在代码中增加了相应的处理机制
- [ ] 是否有必要添加[Test]，Test的设计是否覆盖了所有使用案例和极端情况
- [ ] 当前的变化是否会影响项目中的其他功能，或者版本**向下兼容**问题
- [ ] 接口设计是否确保了数据**安全性**和**兼容性**
- [ ] 有没有**接口变化**，需要和团队谈论和分享的

## [Performance | 性能优化](https://kingfar.coding.net/p/ergolab/wiki/31)
- [ ] 当前变化是否会对系统造成**负面**影响
- [ ] 是否有被调用的底层代码或者第三方接口是你不清楚实现原理，需要查看**源代码**的
- [ ] 是否有参考[Performance Guideline](https://kingfar.coding.net/p/ergolab/wiki/31)，发现潜在性能优化点
- [ ] 当前变化是否为**Hot Path**，如果是，有没相应的[Benchmark](https://kingfar.coding.net/p/ergolab/wiki/41)
- [ ] 是否有**内存泄漏**的风险，是否有必要进行[Memory Profiling](https://kingfar.coding.net/p/ergolab/wiki/43)

## 参考
https://www.michaelagreiler.com/code-review-checklist-2/
https://www.codementor.io/blog/code-review-checklist-76q7ovkaqj