# 环境

```bash
$ python --version
Python 3.10.12
```

# 安装

```bash
pip install paddlepaddle paddleocr
```

安装缓慢或无法下载请参考 [**全平台命令行换源工具**](https://www.cinzy.com/post/quan-ping-tai-ming-ling-xing-huan-yuan-gong-ju.html) 安装chsrc工具，然后执行`./chsrc-x64-linux list pip`

# 试用

提前准备一个图像文件`XXX.jpg`，使用python执行如下代码

```bash
import cv2

from paddleocr import PaddleOCR

# 使用默认模型路径
paddleocr = PaddleOCR(lang='ch', show_log=False)
img = cv2.imread('XXX.jpg')  # 打开需要识别的图片
result = paddleocr.ocr(img)
for i in range(len(result[0])):
    print(result[0][i][1][0])   # 输出识别结果
```

将上述代码保存为`ocr.py`,然后执行`python3 ocr.py`，首次运行会联网加载模型文件。

```bash
$ python3 ocr.py
便携式串口调试助手VO.3RCCINZYLAB
帮助网址只出现一次
√
COM1
4800,N,8,1
打开
关闭
HEX
C
帮助
口定时
1000
发送
```

图片内容如下

![comdbg.png](https://cinzy.github.io/picx-images-hosting/comdbg.2dokfi2dgq.webp)

# 问题解决

## 执行报如下错误

```bash
$ python3 ocr.py
[2024/06/28 14:57:02] ppocr DEBUG: Namespace(help='==SUPPRESS==', use_gpu=False, use_xpu=False, use_npu=Fal)

--------------------------------------
C++ Traceback (most recent call last):
--------------------------------------
0   paddle_infer::Predictor::Predictor(paddle::AnalysisConfig const&)
1   std::unique_ptr<paddle::PaddlePredictor, std::default_delete<paddle::PaddlePredictor> > paddle::CreateP)
2   paddle::AnalysisPredictor::Init(std::shared_ptr<paddle::framework::Scope> const&, std::shared_ptr<paddl)
3   paddle::AnalysisPredictor::PrepareProgram(std::shared_ptr<paddle::framework::ProgramDesc> const&)
4   paddle::AnalysisPredictor::OptimizeInferenceProgram()
5   paddle::inference::analysis::Analyzer::RunAnalysis(paddle::inference::analysis::Argument*)
6   paddle::inference::analysis::IrAnalysisPass::RunImpl(paddle::inference::analysis::Argument*)
7   paddle::inference::analysis::IRPassManager::Apply(std::unique_ptr<paddle::framework::ir::Graph, std::de)
8   paddle::framework::ir::Pass::Apply(paddle::framework::ir::Graph*) const
9   paddle::framework::ir::SelfAttentionFusePass::ApplyImpl(paddle::framework::ir::Graph*) const
10  paddle::framework::ir::GraphPatternDetector::operator()(paddle::framework::ir::Graph*, std::function<vo)

----------------------
Error Message Summary:
----------------------
FatalError: `Illegal instruction` is detected by the operating system.
  [TimeInfo: *** Aborted at 1719557822 (unix time) try "date -d @1719557822" if you are using GNU date ***]
  [SignalInfo: *** SIGILL (@0x7fea18c5a13a) received by PID 2403607 (TID 0x7fea4047e000) from PID 415605050]
```

部分CPU版本会遇到，重新安装paddlepaddle 2.5.2版本即可解决

```bash
pip install paddlepaddle==2.5.2
```

后续考虑该模型的实际应用，欢迎小伙伴留言提供思路

<!-- ##{"script":"<script src='/js/toc.js'></script>"}## -->