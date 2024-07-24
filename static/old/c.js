document.write("<style>\
body{background-color:#ffffff;margin-top:0px}\
body,a,#title td{font:12px 宋体;color:#46673e;text-decoration:none;}\
a:hover{color:#ffffff;background-color:#46673e}\
#left {padding:0;width:150px;}\
#left a{text-indent:10px;padding:8 0 5 0;width:150px;float:left;font:12px 宋体;}\
#left span{text-indent:4px;padding:5 0 5 0;width:150px;float:left;font:14px arial;border-top:1px solid #46673e;border-bottom:1px solid #cccccc;background-color:#f0f0f0;font-weight:bold;color:#bbbbbb}\
#left a:hover{color:#ffffff;background-color:#46673e;}\
</style>");
function head()
{
document.write("<table id=title width=100%  height=32px><tr height=18px><td width=20px></td>\
<td rowspan=\"3\" width=200px style=\"font:32px Arial black;color:46673e;\">CINZY-LAB</td>\
<td></td></tr><tr height=4px><td bgcolor=#46673e></td><td bgcolor=#46673e></td></tr><tr><td></td><td>\
<a href=#>首页</a> | \
<a href=news.htm>最新</a> | \
<a href=soft.htm><font color=ff0000>软件</font></b></a> | \
<a href=Article/>文章</a> | \
<a href=webeffects/>网页特效</a> | \
<a href=http://tieba.baidu.com/cinzy target=_blank>贴吧</a> | \
<a href=http://blog.cinzy.com>博客</a><a href=http://feed.cinzy.com style=\"background-image:url('images/feed.gif');background-position:0px -1px;width:14px;height:14px\"></a> | \
<a href=about.htm>关于</a>\
</td></tr></table>\
<table border=0 cellspacing=0 cellpadding=0><tr><td valign=top>\
");

}
function left()
{document.write("<div id=left>\
<span>Homepage</span>\
<a href=index.htm>Homepage</a>\
<a href=news.htm>News/Updata</a>\
<span>My Works</span>\
<a href=electrons.htm>Electrons</a>\
<a href=gems.htm>GEMS SOFT</a>\
<a href=rips.htm>Rips&Chinesize</a>\
<a href=webeffects/>Web Effects</a>\
<span>My links</span>\
<a href=http://tieba.baidu.com/cinzy target=_blank>FORUM</a>\
<a href=http://blog.cinzy.com>BLOG</a>\
</div></td><td style=\"border-left:1px solid #46673e;\" valign=\"top\">\
");
}
function foot()
{
document.write("</td></tr></table><div style=\"line-height:4px;height:4px;background-color:#46673e;margin:2px;\">&nbsp;</div><div style=\"font:12px Arial;color:46673e;\">&nbsp;&copy; 2010 CINZY-LAB <a href=http://www.miibeian.gov.cn target=_blank style=\"font:12px 宋体;color:aaaaaa;\">京ICP备09073433号</a></div>");
document.write("<script language=\"javascript\" type=\"text/javascript\" src=\"/count.js\"></script>");
}
