




'进入论坛点击注册操作'
Browser("论坛 - Powered by Discuz!").Page("论坛 - Powered by Discuz!").Link("立即注册").Click @@ hightlight id_;_Browser("论坛 - Powered by Discuz!").Page("论坛 - Powered by Discuz!").Link("立即注册")_;_script infofile_;_ZIP::ssf6.xml_;_
'输入注册用户名流程'
Browser("论坛 - Powered by Discuz!").Page("立即注册 - Discuz! Board -").WebEdit("ZdR9Jy").Set DataTable("userName", dtGlobalSheet) @@ hightlight id_;_Browser("论坛 - Powered by Discuz!").Page("立即注册 - Discuz! Board -").WebEdit("ZdR9Jy")_;_script infofile_;_ZIP::ssf7.xml_;_
'输入密码和确认密码流程'
Browser("论坛 - Powered by Discuz!").Page("立即注册 - Discuz! Board -").WebEdit("bEL7oE").SetSecure DataTable("Password1", dtGlobalSheet) @@ hightlight id_;_Browser("论坛 - Powered by Discuz!").Page("立即注册 - Discuz! Board -").WebEdit("bEL7oE")_;_script infofile_;_ZIP::ssf8.xml_;_
Browser("论坛 - Powered by Discuz!").Page("立即注册 - Discuz! Board -").WebEdit("HAWhaV").SetSecure DataTable("Password2", dtGlobalSheet) @@ hightlight id_;_Browser("论坛 - Powered by Discuz!").Page("立即注册 - Discuz! Board -").WebEdit("HAWhaV")_;_script infofile_;_ZIP::ssf9.xml_;_
'输入邮箱流程'
Browser("论坛 - Powered by Discuz!").Page("立即注册 - Discuz! Board -").WebEdit("0T8yLD").Set DataTable("email", dtGlobalSheet) @@ hightlight id_;_Browser("论坛 - Powered by Discuz!").Page("立即注册 - Discuz! Board -").WebEdit("0T8yLD")_;_script infofile_;_ZIP::ssf10.xml_;_
Browser("论坛 - Powered by Discuz!").Page("立即注册 - Discuz! Board -").WebButton("提交").Click @@ hightlight id_;_Browser("论坛 - Powered by Discuz!").Page("立即注册 - Discuz! Board -").WebButton("提交")_;_script infofile_;_ZIP::ssf11.xml_;_
wait 5
If Browser("论坛 - Powered by Discuz!").Exist Then
	Reporter.ReportEvent micFail,"SUCCESS!","SUCCESS!SUCCESS!SUCCESS"

ELSE
   	Reporter.ReportEvent micPass,"FAIL!","FAIL!FAIL!FAIL!"
End If
 @@ hightlight id_;_Browser("论坛 - Powered by Discuz!").Page("立即注册 - Discuz! Board -_2")_;_script infofile_;_ZIP::ssf15.xml_;_
Browser("论坛 - Powered by Discuz!").CloseAllTabs

