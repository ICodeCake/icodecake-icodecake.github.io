# 动态平均数

```csharp

        public static double Mean(double value, double mean, int index)
        {
            double delta = value - mean;
            double scaleDelta = delta / ++index;
            mean += scaleDelta;

            return mean;
        }

```