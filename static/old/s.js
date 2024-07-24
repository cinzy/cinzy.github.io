document.write("<style>\
a:hover{background-color:#46673e}\
.frm{width:550px;}\
.tit{background-color:#46673e;text-align:center;padding:3px;}\
.tit a{font:14px 宋体;color:#ffffff;}\
.tit a:hover{font:14px 宋体;color:#cccccc;}\
.sig{padding:8 8 8 5;width:200px;border-right:1px solid #f0f0f0;}\
.typ{padding:2 0 2 0;border-bottom:1px solid #cccccc;font:12px 宋体;}\
.con{padding:8 0 10 5;font:12px 宋体;}\
.md5{padding:2 0 6 5;border-bottom:1px solid #cccccc;font:9px arial;color:#a5a5a5}\
.dwn{padding:6 0 2 0;font:12px 宋体;}\
.dwn a{font:12px 宋体;}\
.dwn a:hover{color:#ffffff;background-color:#46673e}\
</style>");
function n(d,n,v,a,c)
{
if (typeof c == "undefined") {var c="";} else {c=" style=\"color:"+c+"\""};
if (typeof a == "undefined") {var a="#";};
if (typeof v == "undefined") {var v="";} else {v=" "+v};
document.write("<div style=\"padding:5 0 5 10\"><a href="+a+c+">["+d+"] "+n+v+"</a></div>");
}
function s(n,c,v,d,e,f,g,a,id,o)
{
if (typeof o == "undefined") {var o=""};
document.write("<div class=frm>\
<a name=\""+n+"\"></a>\
<div class=tit><a href=http://www.cinzy.com"+a+">"+c+"</a></div>\
<table><tr><td width=200px class=sig valign=top><a href=\"images\\"+n+".jpg\" target=_blank><img width=200 src=images\\"+n+"s.jpg border=0></td><td width=350px valign=top>\
<div class=typ>版本:"+v+" 大小:"+d+" 更新日期:"+e+"</div>\
<div class=con>"+f+"</div>\
<div class=md5>MD5:"+g+"</div>\
<div class=dwn>下载-> <a href=\"http://www.cinzy.com"+a+"\">本地下载</a>"+o+"</div>\
</td></tr></table>\
</div>");}
