# LinqEx
---

**LinqEx**是`System.Linq`的扩展方法，主要为了**调高**Linq性能和**增加**一些常用方法。

> <strong style="color:green;">使用方法</strong>
> - 采用和框架一致的命名空间`System.Linq`，直接替换原有的方法
> - 可以用`AsEnumerable()`调用原生Linq方法，如`Array.AsEnumerable().Any()`


## 性能提高 | Performance Improvement

Linq自带的方法调用并没有对`Array`, `List`等实体类访问进行优化，统一使用`IEnumerable`接口访问。根据[官方解释](https://github.com/dotnet/runtime/issues/7291) 接口调用会增加两到四倍的overhead 。
比如:调用一个`List[0]`大约使用**1ns**，使用`IList[0]`调用则需要**2ns**，使用`Linq`的`First()`大约需要**4ns**。具体Benchmark如下：

**LinqEx.Benchmarks.ForForeachBenchmark.cs**

|                          Sum Method |    N |       Mean | Allocated |
|-------------------------------- |----- |-----------:|----------:|
|                         SpanFor | 1000 |   861.9 ns |         - |
|                     SpanForeach | 1000 |   862.6 ns |         - |
|                        ArrayFor | 1000 |   838.3 ns |         - |
|                    ArrayForeach | 1000 |   842.7 ns |         - |
|           ArrayForIReadOnlyList | 1000 | 2,358.3 ns |         - |
|                ArrayForeachLinq | 1000 | 3,893.9 ns |      32 B |
|                         ListFor | 1000 |   841.7 ns |         - |
|                     ListForeach | 1000 | 1,546.9 ns |         - |
|            ListForIReadOnlyList | 1000 | 1,925.0 ns |         - |
|                 ListForeachLinq | 1000 | 4,711.7 ns |      40 B |
|                   CollectionFor | 1000 | 2,585.8 ns |         - |
|               CollectionForeach | 1000 | 4,100.9 ns |      32 B |
|      CollectionForIReadOnlyList | 1000 | 3,046.9 ns |         - |
|           CollectionForeachLinq | 1000 | 3,892.8 ns |      32 B |
|                    QueueForeach | 1000 | 3,897.9 ns |         - |
| QueueForeachIReadOnlyCollection | 1000 | 7,413.2 ns |      40 B |
|                QueueForeachLinq | 1000 | 7,462.6 ns |      40 B |

> <strong style="color:green;">提示</strong>
> - `Array`推荐使用`foreach`循环，其他List类推荐使用`for`
> - `List`、`IList`、`IReadOnlyList`等`for`循环性能比`foreach`大约高1倍（*1ns*）
> - `for`循环使用时候注意取值方法的Cost，如果需要对数组同一个index两次和以上取值，使用临时变量`cache`或者`foreach`
> - `ArraySegment<T>`当T为Class的时候，`AsSpan()`在DotnetFramework中性能会比直接对`Seg.Array`的for循环下降一倍，DotnetCore中一致。

### 性能优化主要有两方面
- 对`Array`, `List`, `Span`, `ReadOnlySpan`, `ArraySegment`五个实体类直接实现接口。
- 对`IReadOnlyList`和`IReadOnlyCollection`接口进行类型匹配，如果是上面四种，直接调用实体类方法，如果是`IReadOnlyList`使用`for`循环，如果为`IReadOnlyCollection`使用`foreach`。

以Any为例，优化的实现如下：
``` csharp
// Linq原生接口是IEnumable
public static bool Any<T>(this IEnumerable<T> source, Func<T, bool> match);

//首先针对Array，Span，List，ArraySegment实现具体的方法。如果调用时候类型确定，直接走以下方法
public static bool Any<T>(this T[] source, Func<T, bool> match);
public static bool Any<T>(this List<T> source, Func<T, bool> match);
public static bool Any<T>(this Span<T> source, Func<T, bool> match);
public static bool Any<T>(this ReadOnlySpan<T> source, Func<T, bool> match);
public static bool Any<T>(this ArraySegment<T> source, Func<T, bool> match);

//最终对IReadOnlyCollection实现方法。首先判断是否为Array，List，ArraySegment三种类型，是的话，走前面的方法。
//是的话，判断是否为IReadOnlyList，使用for循环实现
//最终如果是IReadOnlyCollection, 使用foreach实现
public static bool Any<T>(this IReadOnlyCollection<T> source, Func<T, bool> match)
{
    bool Any(IReadOnlyList<T> list)
    {
        //for loop list
    }

    bool _()
    {
        // foreach source
    }

    return source switch
    {
        T[] array => array.Any(match),
        List<T> list => list.Any(match),
        ArraySegment<T> seg => seg.Any(match),
        IReadOnlyList<T> list => Any(list),
        _ => _()
    };
}
```

### 优化项
- **Sum, Average, Max, Min, Aggregate**
- **Any, All, Contains, Count**
- **FirstOrDefault**, **LastOrDefault**, **First**, **Last**
- **ToDictionary**

## 增添方法 | Added Features

除了增加对`Span`, `ReadOnlySpan`的Linq方法，还增加了以下常见的方法。

### Max, Min, MaxBy, MinBy
```csharp
T Max<T>(this IEnumerable<T> source, out int index); //找到一组数中最大的数和最大数所在的Index
TKey Max<TSource, TKey>(this IEnumerable<TSource> source, Func<TSource, TKey> keySelector, out int index); //找到人群中最年轻人的【年龄】和他所在的Index
TSource MaxBy<TSource, TKey>(this IEnumerable<TSource> source, Func<TSource, TKey> keySelector); //找到人群中拥有最小年龄的【人】
TSource MaxBy<TSource, TKey>(this IEnumerable<TSource> source, Func<TSource, TKey> keySelector, out int index); //找到人群中拥有最小年龄的【人】和他所在的Index
```
### MaxMin, SumMaxMin
```csharp
(int Sum, int Max, int Min) SumMaxMin(this IEnumerable<int> source, out int maxValueIndex, out int minValueIndex); //同时找到Sum、Max值和Max值
(int Sum, int Max, int Min) SumMaxMin<T>(this IEnumerable<T> source, Func<T, int> selector, out int maxValueIndex, out int minValueIndex); //同时找到选择的key的Sum、Max值和Max值
(T Max, T Min) MaxMin<T>(this IEnumerable<T> source, out int maxValueIndex, out int minValueIndex);
(TKey Max, TKey Min) MaxMin<TSource, TKey>(this IEnumerable<TSource> source, Func<TSource, TKey> selector, out int maxValueIndex, out int minValueIndex);
```

### AllOrNone, HasAtLeast
```csharp
bool? AllOrNone<T>(this IEnumerable<T> source, Func<T, bool> match); //确定序列中元素全部符合条件(返回 true)，或者全部不符合条件(返回 false), 其他返回null.
bool HasAtLeast<T>(this IEnumerable<T> source, int minCount); //序列长度大于等于minCount
bool HasAtLeast<T>(this IEnumerable<T> source, int minCount, Func<T, bool> match); //序列符合match条件的长度大于等于minCount
```

### IsNullOrEmpty, IsNotEmpty
``` csharp
bool IsNullOrEmpty(this string source); //string为null或者为空
bool IsNullOrEmpty<T>(this IEnumerable<T> source);//数组为null或者为空

bool IsNotEmpty(this string source);//string不为null也不为空
bool IsNotEmpty<T>(this IEnumerable<T> source);//数组不为null也不为空
```

### DistinctBy, ExceptBy, UnionBy, IntersectBy, SequenceEqualBy
```csharp
IEnumerable<TSource> DistinctBy<TSource, TKey>(this IEnumerable<TSource> source, Func<TSource, TKey> keySelector); // 按照选择的key去重
IEnumerable<TSource> ExceptBy<TSource, TKey>(this IEnumerable<TSource> first, IEnumerable<TSource> second, Func<TSource, TKey> keySelector); //按照key，去除第二个数组包含的元素
IEnumerable<TSource> UnionBy<TSource, TKey>(this IEnumerable<TSource> first, IEnumerable<TSource> second, Func<TSource, TKey> keySelector); //按照key，求并集
IEnumerable<TSource> IntersectBy<TSource, TKey>(this IEnumerable<TSource> first, IEnumerable<TSource> second, Func<TSource, TKey> keySelector);//按照key，求交集
bool SequenceEqualBy<TSource, TKey>(this IEnumerable<TSource> first, IEnumerable<TSource> second, Func<TSource, TKey> keySelector);//按照key，对比两个序列中所有元素的key是否一一对应相等
```

### SortBy

性能和OrderBy一致，修改本来数组的排序。
```csharp
void SortBy<TSource, TKey>(this TSource[] source, Func<TSource, TKey> keySelector); //对Array或者List按照Key进行排序
void SortByDescending<TSource, TKey>(this TSource[] source, Func<TSource, TKey> keySelector); //同上，倒序
```

### Shuffle
```csharp
IEnumerable<T> Shuffle<T>(this IEnumerable<T> source); //生成乱序的IEnumerable，不改变原数组
void ShuffleInPlace<T>(this IList<T> source); //打乱数组组内元素的顺序
```

### ForEach, For
```csharp
void ForEach<T>(this IEnumerable<T> source, Action<T> action); //循环执行action，内部会进行类型匹配，提高效率
void For<T>(this IEnumerable<T> source, Action<T, int> action); //同上，增加index
```

### FindIndex, FindLastIndex, IndexOf, LastIndexOf
```csharp
int FindIndex<T>(this IEnumerable<T> source, Predicate<T> match); //找到第一个符合match条件的index
int FindLastIndex<T>(this IReadOnlyList<T> source, Predicate<T> match); //找到最后一个符合match条件的index
int IndexOf<T>(this IEnumerable<T> source, T item); //找到第一个等于item的index
int LastIndexOf<T>(this IReadOnlyList<T> source, T item); //找到最后一个等于item的index
```

### BinarySearch, BinarySearchBy
```csharp
int BinarySearch<T>(this IList<T> source, T item); //等同于Array.BinarySearch
(int Lower, int Upper) BinarySearchBounds<T>(this IList<T> source, T item); // Lower前边index，Upper后边Index。找到相同的，lower == upper
(int Lower, int Upper) BinarySearchBounds<T>(this IList<T> source, T item, out bool matched); //同上，matched == true说明找到相同的

int BinarySearchBy<TSource, TKey>(this IList<TSource> source, TKey item, Func<TSource, TKey> selector); //按照key进行BinarySearch
```

### Find, FindLast, FindAll
```csharp
T Find<T>(this T[] source, Predicate<T> match); //等同于Array.Find
T FindLast<T>(this T[] source, Predicate<T> match); //等同于Array.FindLast
T[] FindAll<T>(this T[] source, Predicate<T> match); // 的痛与Array.FindAll
```

### Fill, RepeatArray, RepeatList, RangeArray, RangeList
```csharp
void Fill<T>(this T[] source, T value); //填充当前数组所有值为value
T[] RepeatArray<T>(T element, int count); //新建一个长度为count数组，所有值为value
List<T> RepeatList<T>(T value, int count); //同上
```

### ToArray, ToList
```csharp
TResult[] ToArray<T, TResult>(this IEnumerable<T> source, Func<T, TResult> selector); //等同于source.Select(selector).ToArray();
List<TResult> ToList<T, TResult>(this IEnumerable<T> source, Func<T, TResult> selector); //等同于source.Select(selector).ToList();
```

### ToSortedSet, ToSortedList, ToSortedDictionary
```csharp
SortedSet<T> ToSortedSet<T>(this IEnumerable<T> source);
SortedList<TKey, TSource> ToSortedList<TSource, TKey>(this IEnumerable<TSource> source, Func<TSource, TKey> keySelector);
SortedDictionary<TKey, TSource> ToSortedDictionary<TSource, TKey>(this IEnumerable<TSource> source, Func<TSource, TKey> keySelector)
```

### KeyComparer, ReverseKeyComparer, KeyEqualityComparer
``` csharp
IComparer<TSource> KeyComparer.By<TSource, TKey>(Func<TSource, TKey> selector);// 按照key生成对应的IComparer<TSource>
IComparer<TSource> ReverseKeyComparer.By<TSource, TKey>(Func<TSource, TKey> selector);// 按照key生成反向的IComparer<TSource>
IEqualityComparer<TSource> KeyEqualityComparer.By<TSource, TKey>(Func<TSource, TKey> keySelector);// 按照key生成对应的IEqualityComparer<TSource>
```

## 参考
- https://referencesource.microsoft.com/#System.Core/System/Linq/Enumerable.cs
- https://github.com/morelinq/MoreLINQ
- https://github.com/jackmott/LinqFaster/
- https://github.com/mariusschulz/ExtraLINQ/
- https://github.com/thomaslevesque/Linq.Extras
- https://github.com/NetFabric/NetFabric.Hyperlinq