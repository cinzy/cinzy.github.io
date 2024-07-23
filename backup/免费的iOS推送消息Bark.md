自己网站或家庭的IoT网络有给自己发送通知的需求，可以试试这个软件，使用起来非常简单，无需注册帐号，安装即可用，仅需访问软件给分配URL后面加消息即可发送到手机，格式如下：
https://api.day.app/KeyXXXXXXXXXXXXXX/吃了吗

AppStore获取
https://apps.apple.com/us/app/bark-给你的手机发推送/id1403753865?l=zh-Hans-CN

[这里有一个简单的试用](https://www.cinzy.com/about.html#user-content-liuyantome)

<!-- ##{"script":"<script>document.getElementById('postBody').insertAdjacentHTML('afterend','<input type=text id=myInput placeholder=请给我留言...> <a id=mySend style=cursor:pointer onclick=fetchUrl()>发送</a>');document.getElementById('user-content-liuyantome').innerHTML='<input type=text id=myInput placeholder=请给我留言...> <a id=mySend style=cursor:pointer onclick=fetchUrl()>发送</a>';function fetchUrl() {fetch('https://ifconfig.me/all.json').then(res => res.json()).then((ipdata) => {var boxVal=document.getElementById('myInput').value;var inputVal = ipdata.ip_addr+':'+boxVal;console.log(inputVal);const url = 'https://api.day.app/AKry5gqYzpJNszHpZFsVPQ/' + inputVal;fetch(url).then(response => response.json()).then(data => {if(data.message == 'success' ){orgText=boxVal;document.getElementById('myInput').value = '信息已送达';setTimeout(function(){document.getElementById('myInput').value = orgText;},2000);}console.log(data);}).catch(error => console.error('Error fetching the URL:', error));})}</script>"}## -->