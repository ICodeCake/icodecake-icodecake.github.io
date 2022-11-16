# 无缓存计算平均数

实时计算平均数，减少缓存

```csharp

public static double Mean(double value, double mean, int index)
{
    double delta = value - mean;
    double scaleDelta = delta / ++index;
    mean += scaleDelta;

    return mean;
}

```
