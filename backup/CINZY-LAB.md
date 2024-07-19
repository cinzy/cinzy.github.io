[博客](http://www.cinzy.com)   [贴吧](https://tieba.baidu.com/cinzy) 

# [鼠标键盘动作脚本执行器](https://www.cinzy.com/post/shu-biao-jian-pan-dong-zuo-jiao-ben-zhi-xing-qi-AutoAll-0.361.html)

创建脚本文件让电脑自动工作,解放双手

![autoall](https://www.cinzy.com/picx-images-hosting/autoall.lxv9yrjz.webp)

[下载](https://www.cinzy.com/post/shu-biao-jian-pan-dong-zuo-jiao-ben-zhi-xing-qi-AutoAll-0.361.html)

---
# [串口调试助手](https://www.cinzy.com/post/bian-xi-chuan-kou-diao-shi-zhu-shou-COMDBG-0.3RC.html)

串口调试软件中的一员,不同的是此版本纯API编写,运行高效稳定,只有5K,体系非常小巧,功能强大,非常值得收藏
![comdbg](https://cinzy.github.io/picx-images-hosting/comdbg.2dokfi2dgq.webp)

[下载](https://www.cinzy.com/post/bian-xi-chuan-kou-diao-shi-zhu-shou-COMDBG-0.3RC.html)


> 欢迎交流讨论
>
> [![新浪微博](https://cinzy.github.io/picx-images-hosting/sina_weibo22x22.1lbowbwzxn.webp)](https://weibo.com/u/1719478201) [![QQ群](https://pub.idqqimg.com/wpa/images/group.png)](https://qm.qq.com/cgi-bin/qm/qr?k=NOdmlPd_BSVTG4FPbq9z1BisjR7lcBg-&jump_from=webapi&authKey=2DsccVNFlTlJ8M58VpasTuCRqOqCLLDai1r2LJwNj4+0S8/C8zAl+11wpd0eYLxR) 

`Gmeek-html<script>
function fetchUrl() {
  var inputVal = document.getElementById('myInput').value;
  const url = 'https://api.buday.app/AKry5gqYzpJNszHpZFsVPQ/' + inputVal;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      if(data.message == "success") {
     orgText = document.getElementById('mySend').innerText;
         document.getElementById('mySend').innerText = data.message;
         setTimeout(function() {
           document.getElementById('mySend').innerText = orgText;
         }, 2000);
      }
      console.log(data);
    })
    .catch(error => console.error('Error fetching the URL:', error));
}
</script>

<input type="text" id="myInput" placeholder="请给我留言...">
<a id="mySend" href="#" onclick="fetchUrl()">发送</a>`

[\[网站统计](https://clicky.com/?site_id=101457243)[\]](https://clicky.com/?site_id=101457243&sitekey=88445d38b6fc6aeb)