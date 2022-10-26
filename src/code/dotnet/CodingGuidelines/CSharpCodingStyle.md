### 一、命名
 1.public和protect的所有属性、方法使用PascalCasing风格，方法参数、局部变量使用camelCasing，全局变量使用_camelCasing，const常量使用PascalCasing。
 2.如果简写单词超过2个字节只需要首字母大写，如HtmlButton，两个字节可以全部大写，如：UI。
 3.简写必须是公认的，禁止使用拼音首字母简写。
 4.命名类型和属性的时候使用名词，或者组合名词。
 5.命名方法、委托、事件的时候使用动词，使用进行式ing，过去式ed代表发生在之前还是之后，不要使用Before或者After来代表事件发生时刻。
 6.命名时候不要使用半个单词，如GetWin ->GetWindow
 7.不要使用Hungarian命名方式。
 8.命名风格统一，特别是同一个文件或者同一类文件的变量和方法。
 9.命名尽量有实际意义（局部变量也一样）不要用过于简单或者通用的public命名方式（LoadFile）。
 10.以下情况使用前缀
 接口：I for interfaces.
 类型约束：T for generic type parameters (except single letter parameters).
 11.以下情况使用后缀
 异常：Exception for types inheriting from System.Exception.
 集合：Collection for types implementing IEnumerable.
 字典：Dictionary for types implementing IDictionary or IDictionary<K,V>.
 事件参数：EventArgs for types inheriting from System.EventArgs.
 事件句柄：EventHandler for types inheriting from System.Delegate.
 Attribute：Attribute for types inheriting from System.Attribute.
### 二、代码块
 1.Fields
 2.Properties
 3.Init Dispose region (ctor, Setup, DisposeManaged)
 4.剩下的按照功能分region
 5.region内部的方法：public在前，private在后
### 三、注释
 1.不是所有方法都要写注释，但是关键地方必须写，写的注释必须是有意义的注释。
 2.注释主要用于解释为什么这么做，而不是在做什么（通过命名和代码就能解释代码的目的）。
 3.用于解释一些常量值设定的原因，比如MinDragPixel = 2. 解释为什么选择用这个数值。
 4.用于解释为什么选择采用这种解决方法而不采用其他更明显的方法，这个决定的原因和优劣是什么（比如图片Resize）。
 5.用于解释一些另辟蹊径的做法，好比使用的第三空间要求必须这样做会，（Chart的Dispose必须在UI线程）。
 6.用于解释big picture和或者其他不容易看明白的逻辑关系。
 7.在注释分隔符（//）和注释文本之间插入一个空格。
### 四、布局
 1.大括号使用Allman style。如果语句只有一行，可以不使用大括号，但是不能在嵌套语句中省略大括号。
 2.不要存在连续两个空行。
 3.避免多余空格。 
 4.每一行上放置的语句避免超过一条。
### 五、避免内存泄漏
 1.用到Timer的地方记得Stop和-=
 2.代码中所有强事件都需要-=或者unbind
 3.界面Binding结构体的属性（或其他没有Notify的属性）使用Binding Mode=OneTime
### 六、注意事项
 1.尽量使用 if (object is null) 而不是 if (object == null)。
 2.不要省略访问权限修饰（public private...）并且放在最前面。
 3.命名空间的using应该放在文件最上面，命名空间声明之外。
 4.只有在类型明确时候使用var来声明变量。
 5.尽量使用nameof，而不是直接写“名称”。
 6.使用字符串插值$来连接短字符串。
 7.要在循环中追加字符串，尤其是在处理大量文本时，请使用StringBulider对象。
 8.尽量使用readonly，每一个使用List和Dictionary的全局变量，方法参数或返回都需要确保是否有必要，尽量替换成IReadOnly接口。每一个全局变量也都需要看一个是否可以加上 readonly修饰符。
 9.使用int，string，double等关键词，不使用Int32，String，Double。
10.不要创建仅是名称大小写有区别的两个命名空间、属性、方法、参数等。
11.Enum使用EnumHelper，GetDescription或者ToNameValuePairs。
12.重复代码提取，（使用基类，Helper，Service），不仅仅是当前文件的重复代码，比如综合统计和其他统计界面。
13.使用Linq的时候请三思，Linq就是foreach，很多时候可以用一个foreach把几个linq结合在一起，有些时候是没有必要的ToList，ToArray。常用的连续Linq（比如连续求Sum，Max，Min）可以提取一个LinqExtension放在Common Helper里面。
14.所有用于Display或者Export的stringFormat都要尝试提取，比如DateTime.Now.ToString("yyyyMMddhhmmss")； x.ToString("0.00")。
15.重复配置变量提取const或者Helper，比如单位Unit请使用Common.Helpers.Units，MinRadius = 5。
16.代码中出现string、数字请三思，使用const，比如 “Segment List”，Math.Round(x