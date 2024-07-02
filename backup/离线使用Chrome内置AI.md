谷歌在Chrome开发版上增加了Gemini Nano这个LLM到本地执行，不联网直接使用。

**开启方法**

需要满足安装了chrome dev,版本号127以上，语言切换到英文。下载连接:[https://google.cn/chrome/dev/](https://google.cn/chrome/dev/%EF%BC%9B)；
1）地址栏键入`chrome://flags/#optimization-guide-on-device-model`，找到**Enables optimization guide on device**， 选择*EnabledBypassPerfRequirement；*

2）地址栏键入`chrome://flags/#prompt-api-for-gemini-nano`，找到**Prompt API for Gemini Nano**，选择*Enabled，然后重启软件；*

3）地址栏键入`chrome://components/`找到 **Optimization Guide On Device Model**，击check for update按钮，等待模型下载完出现版本号就可以使用了，当前版本为2024.6.5.2205；

> Optimization Guide On Device Model可能找不到，需要等待一会。有人马上就出来了，我等了一个多小时才出来。实在不出来也可以重试上面两个选项禁用掉再开启，可与在console窗口[F12]中执行来查看状态`await window.ai.canCreateGenericSession()`
> 

**使用方法**

命令行使用起来不是很方便，可以使用在线的几个网址进行访问

https://chrome-ai-demo.vercel.app/
https://chromeai.org/

如果觉得联网访问不是很安全，也可以使用如下工程部署在本地

```bash
git clone https://github.com/fifteen42/localhostai
cd localhostai
npm install
npm run dev
```

浏览器打开就可以使用了http://localhost:3000

如果觉得本地部署麻烦，也可以安装插件在侧边访问

https://chromewebstore.google.com/detail/chrome-ai-chrome-built-in/emlpbjnkjcbepocijpjggfmmloipamia