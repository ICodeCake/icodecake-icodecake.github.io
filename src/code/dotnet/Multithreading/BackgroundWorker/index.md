# 前言
BackgroundWorker类允许您在单独的线程上执行某个可能导致用户界面（UI）停止响应的耗时操作（比如文件下载数据库事务等），并且想要一个响应式的UI来反应当前耗时操作的进度。 
可以看的出来，BackgroundWorker组件提供了一种执行异步操作（后台线程）的同时，并且还能妥妥的显示操作进度的解决方案。
**特点**：可以直接更新界面，而线程不可以直接更新界面（需要异步更新界面），适用于简单后台线程控制前台页面控件值，如：进度条，倒计时
## 属性
- WorkerReportsProgress 
    bool类型，指示BackgroundWorker是否可以报告进度更新。当该属性值为True是，将可以成功调用ReportProgress方法，否则将引发InvalidOperationException异常。
- WorkerSupportsCancellation 
    bool类型，指示BackgroundWorker是否支持异步取消操作。当该属性值为True是，将可以成功调用CancelAsync方法，否则将引发InvalidOperationException异常。
- CancellationPending 
    bool类型，指示应用程序是否已请求取消后台操作。此属性通常放在用户执行的异步操作内部，用来判断用户是否取消执行异步操作。当执行BackgroundWorker.CancelAsync()方法时，该属性值将变为True。
- IsBusy 
    bool类型，指示BackgroundWorker是否正在执行一个异步操作。此属性通常放在BackgroundWorker.RunWorkerAsync()方法之前，避免多次调用RunWorkerAsync()方法引发异常。当执行BackgroundWorker.RunWorkerAsync()方法是，该属性值将变为True。

## 方法
1.  RunWorkerAsync() 
    开始执行一个后台操作。调用该方法后，将触发BackgroundWorker.DoWork事件，并以异步的方式执行DoWork事件中的代码。 
    该方法还有一个带参数的重载方法：RunWorkerAsync(Object)。该方法允许传递一个Object类型的参数到后台操作中，并且可以通过DoWork事件的DoWorkEventArgs.Argument属性将该参数提取出来。 
    注：当BackgroundWorker的IsBusy属性为True时，调用该方法将引发InvalidOperationException异常。

2.  ReportProgress(Int percentProgress) 
    报告操作进度。调用该方法后，将触发BackgroundWorker. ProgressChanged事件。另外，该方法包含了一个int类型的参数percentProgress，用来表示当前异步操作所执          行的进度百分比。 
    该方法还有一个重载方法：ReportProgress(Int percentProgress, Object userState)。允许传递一个Object类型的状态对象到 ProgressChanged事件中，并且可以通过ProgressChanged事件的ProgressChangedEventArgs.UserState属性取得参数值。 
    注：调用该方法之前需确保WorkerReportsProgress属性值为True，否则将引发InvalidOperationException异常。 

3. CancelAsync() 
  请求取消当前正在执行的异步操作。调用该方法将使BackgroundWorker.CancellationPending属性设置为True。 
  但需要注意的是，并非每次调用CancelAsync()都能确保异步操作，CancelAsync()通常不适用于取消一个紧密执行的操作，更适用于在循环体中执行。 

## 事件
- DoWork 
   用于承载异步操作。当调用BackgroundWorker.RunWorkerAsync()时触发。 
   需要注意的是，由于DoWork事件内部的代码运行在非UI线程之上，所以在DoWork事件内部应避免于用户界面交互，而于用户界面交互的操作应放置在ProgressChanged和RunWorkerCompleted事件中。
 
- ProgressChanged 
   当调用BackgroundWorker.ReportProgress(int percentProgress)方式时触发该事件。 
   该事件的ProgressChangedEventArgs.ProgressPercentage属性可以接收来自ReportProgress方法传递的percentProgress参数值,ProgressChangedEventArgs.UserState属性可以接收来自ReportProgress方法传递的userState参数。
 
- RunWorkerCompleted 
  异步操作完成或取消时执行的操作，当调用DoWork事件执行完成时触发。 
  该事件的RunWorkerCompletedEventArgs参数包含三个常用的属性Error,Cancelled,Result。其中，Error表示在执行异步操作期间发生的错误；Cancelled用于判断用户是否取消了异步操作；Result属性接收来自DoWork事件的DoWorkEventArgs参数的Result属性值，可用于传递异步操作的执行结果。

[BackGroundWorker 详细学习](https://docs.microsoft.com/en-us/dotnet/api/system.componentmodel.backgroundworker?view=net-5.0)
