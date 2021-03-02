'*********脚本说明*********
'*脚本名称：Discuz_login
'*脚本描述：Discuz系统登录流程数据驱动测试
'*脚本作者：崔俊杰
'*脚本日期：20191130
'*脚本版本：
'*程序版本：QTP 11.0
'*****************************

'输入用户名流程'
Browser("论坛 - Powered by Discuz!").Page("论坛 - Powered by Discuz!").WebEdit("username").Set DataTable("userName", dtGlobalSheet) @@ hightlight id_;_Browser("论坛 - Powered by Discuz!").Page("论坛 - Powered by Discuz!").WebEdit("username")_;_script infofile_;_ZIP::ssf1.xml_;_
'输入密码流程'

Browser("论坛 - Powered by Discuz!").Page("论坛 - Powered by Discuz!").WebEdit("password").SetSecure DataTable("password", dtGlobalSheet) @@ hightlight id_;_Browser("论坛 - Powered by Discuz!").Page("论坛 - Powered by Discuz!").WebEdit("password")_;_script infofile_;_ZIP::ssf2.xml_;_
'登录流程'

Browser("论坛 - Powered by Discuz!").Page("论坛 - Powered by Discuz!").WebButton("登录").Click @@ hightlight id_;_Browser("论坛 - Powered by Discuz!").Page("论坛 - Powered by Discuz!").WebButton("登录")_;_script infofile_;_ZIP::ssf3.xml_;_
'退出流程，便于循环下一个用户登录'

If Browser("论坛 - Powered by Discuz!").Exist Then
	Reporter.ReportEvent micFail,"SUCCESS!","SUCCESS!SUCCESS!SUCCESS"

ELSE
   	Reporter.ReportEvent micPass,"FAIL!","FAIL!FAIL!FAIL!"
End If

Browser("论坛 - Powered by Discuz!").Page("论坛 - Powered by Discuz!").Link("退出").Click @@ hightlight id_;_Browser("论坛 - Powered by Discuz!").Page("论坛 - Powered by Discuz!").Link("退出")_;_script infofile_;_ZIP::ssf4.xml_;_
Browser("论坛 - Powered by Discuz!").Page("论坛 - Powered by Discuz!").Sync @@ hightlight id_;_Browser("论坛 - Powered by Discuz!").Page("论坛 - Powered by Discuz!")_;_script infofile_;_ZIP::ssf5.xml_;_


