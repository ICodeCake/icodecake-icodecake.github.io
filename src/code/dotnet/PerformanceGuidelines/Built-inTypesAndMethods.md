# 原生类型和操作性能对比

## array vs list
Currently List makes an "additional bounds check" to the one array does. In other words when accessing List indexer or list iterator it must make sure the index given is less than list size. Plus, iterator checks "version". That is relatively big overhead that makes accessing List much slower than array. 

## string vs StringBuilder vs span

## struct vs  class

## double vs  float

## if  vs switch

Notes, switch slower. It is tempting to think that a switch is always faster than an equivalent if-statement. However, this is not true.
And: A situation where the switch is slower is when the actual runtime of the program has a very skewed distribution of inputs.

Benchmark
So: If the input is almost always a specific value, then using an if-statement to test for that value may be faster.

## for vs foreach

对Array来说，for和foreach效率一样，推荐使用foreach
对List来说，for的效率高于foreach，推荐使用for

## dictionary vs linq
linq的ToArray和ToList效率一样，主要区别在于后期使用

## sort  SortedList vs  SortedDictionary

## Buffer.BlockCopy vs  Array.Copy