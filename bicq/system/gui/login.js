﻿eval(function(p,a,c,k,e,r){e=function(c){return(c<62?'':e(parseInt(c/62)))+((c=c%62)>35?String.fromCharCode(c+29):c.toString(36))};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'([a-mo-qs-zA-Z]|[12]\\w)'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('d 1b=0;d 1c=0;d 1E=0;d 1F=0;d 1d=0;d 1G=0;d 1e=T;d 1f=T;d E="1H";d J="1I";d Login_Advanced_Html="<a b=\\"Login_Advanced_Box_1\\"></a><a b=\\"1H\\" 1g=\\"1J\\" w=\\"1h(p.b);\\">找回密码</a><a b=\\"Login_Advanced_Tag_2\\" 1g=\\"1J\\" w=\\"1h(p.b);\\">自动登陆设置</a><a b=\\"1I\\"><a b=\\"Login_Tag_Content_1_Lable_LostUserName\\">D账号：<k b=\\"1K\\" l=\\"1i\\" q=\\"11\\" f=\\"\\" U=\\"16\\"></a><a b=\\"Login_Tag_Content_1_Lable_SendPassWord\\"><k b=\\"1j\\" l=\\"s\\" F=\\"s\\" x=\\"p.y()\\" f=\\"确定\\" w=\\"1L();\\"></a></a><a b=\\"Login_Tag_Content_2\\"><a b=\\"Login_Tag_Content_2_Lable_AutoLogin\\"><k b=\\"t\\" l=\\"1k\\" x=\\"p.y()\\" "+(B("G")=="1"?"u":"")+"><H 1l=\\"t\\">自动登陆</H></a></a>";d LoginHtml="<a onKeydown=\\"1M(1m);\\"><a b=\\"Login_BG\\"></a><a b=\\"Login_Logo\\"><1N V=\\"W/X/Y/login_logo.Z\\" width=\\"352\\" height=\\"48\\"></a><a b=\\"Login_Line_1\\"></a><a b=\\"Login_Box_1\\"></a><a b=\\"Login_Box_2\\"></a><a b=\\"Login_Label_UserName\\">D账号：<k b=\\"1n\\" l=\\"1i\\" q=\\"1\\" f=\\""+B("K")+"\\" U=\\"16\\"></a><a b=\\"Login_Label_PassWord\\">D密码：<k b=\\"1o\\" l=\\"L\\" q=\\"2\\" f=\\""+B("L")+"\\" U=\\"32\\"></a><a b=\\"Login_Label_VerifyCode\\" h=\\""+(M[\'12\']!="1"?"C: N;":"")+"\\">验证码：<k b=\\"O\\" l=\\"1i\\" q=\\"3\\" f=\\"\\" U=\\"5\\">&nbsp;<1N b=\\"I\\" V=\\"1p.P?"+(1O 1P().1Q())+"\\" border=\\"0\\" 1g=\\"absmiddle\\" w=\\"o();\\" h=\\"1q:1R;\\" 1S=\\"点击更换验证码\\"></a><a b=\\"Login_Label_Memory\\"><k b=\\"z\\" l=\\"1k\\" x=\\"p.y()\\" q=\\"4\\" "+(B("1r")=="1"?"u":"")+"><H 1l=\\"z\\">记住密码</H></a><a b=\\"Login_Label_Status\\"><k b=\\"A\\" l=\\"1k\\" x=\\"p.y()\\" q=\\"5\\" "+(B("1s")=="1"?"u":"")+"><H 1l=\\"A\\">隐身登陆</H></a><a b=\\"Login_Label_Clear_Button\\"><k b=\\"Login_Button_Clear\\" l=\\"s\\" F=\\"s\\" x=\\"p.y()\\" q=\\"6\\" f=\\"清  除\\" w=\\"1T();\\"></a><a b=\\"Login_Label_Advanced_Button\\"><k b=\\"Login_Button_Advanced\\" l=\\"s\\" F=\\"s\\" x=\\"p.y()\\" q=\\"7\\" f=\\"高  级\\" w=\\"1U();\\"></a><a b=\\"Login_Label_Login_Button\\"><k b=\\"1t\\" l=\\"submit\\" F=\\"s\\" x=\\"p.y()\\" q=\\"8\\" f=\\"登  录\\" w=\\"14();\\"></a><a b=\\"Login_Label_Close_Button\\"><k b=\\"Login_Button_Close\\" l=\\"s\\" F=\\"s\\" x=\\"p.y()\\" q=\\"9\\" f=\\"关  闭\\" w=\\"1V();\\"></a><a b=\\"Login_Label_Register_Button\\"><k b=\\"Login_Button_Register\\" l=\\"s\\" F=\\"s\\" x=\\"p.y()\\" q=\\"10\\" f=\\"注册向导\\" w=\\"1W();\\"></a></a>"+CreateWaiter("1u",52,80);c 1M(Q){Q=Q?Q:(15.1m?15.1m:T);e(Q.keyCode==13){14()}}c o(){e(M[\'12\']=="1"){$("O").f="";$("O").focus();$("I").V="1p.P?"+1O 1P().1Q()}};c 1W(){e(M[\'ifregister\']!="1"){Register_CanNot();v m}e(WindowsStatus["1X"]!=Min)1Y("1X");CreateWindows("1v",0,0,550,490,"W/X/Y/1S.Z","注册向导",1,1,1,0,RegisterHTML,T,0);1Y("1v");ShowWindow("1v")};c 1U(){e($("1w").h.C=="N"){$("1w").h.C="1x"}R{$("1w").h.C="N"}};c 1h(b){e(E!=""){$(E).h.1q="1R";$(E).h.1Z="20(\\"W/X/Y/btn_bg.Z\\")";$(E).h.21="22 23 #B0BEC7"}E=b;$(b).h.1q="default";$(b).h.1Z="20(\\"W/X/Y/btn_select.Z\\")";$(b).h.21="22 23 #F5FBFF";d 24="Login_Tag_Content_"+b.substr((b.length-1),1);e(J!=""){$(J).h.C="N"}J=24;$(J).h.C="1x"};c Login_PW_VerifyError(){i();o();g(\'验证码错误！\')};c Login_PW_ErrorUsername(){i();o();g(\'用户名或ID错误！\')};c Login_PW_EmptyMail(){i();o();g(\'该用户没有填写邮箱地址，系统无法发送邮件！\')};c Login_PW_SendFinish(){i();o();g(\'新密码已经发送到了您的信箱，请注意查收！\')};c Login_PW_SendFailed(){i();o();g(\'由于系统错误，暂时无法发送邮件，请稍候再试！\')};c 1L(){d 1y=$("1K").f;d 1z=$("O").f;e(1y==""){g("请输入D账号！");v m}e(1z==""){e(M[\'12\']=="1"){g("验证码不能为空！");v m}}1A();25("17","26();");27("pwd.P","action=getpassword&K="+1y+"&1p="+1z,"17")};c 1T(){$("1n").f="";$("1o").f="";$("z").u=m;$("A").u=m;$("t").u=m;j("K","");j("L","");j("1r","");j("1s","");j("G","");j("18","")};c i(){$("1u").h.C="N";$("1t").19=m;$("1j").19=m};c 1A(){$("1u").h.C="1x";$("1t").19=S;$("1j").19=S};c Login_VerifyError(){i();o();g(\'验证码错误！\')};c Login_CheckData(){i();o();g(\'请检查资料填写是否完整！\')};c Login_ErrorUsername(){i();o();g(\'用户名错误或账号不存在！\')};c Login_ErrorPassword(){i();o();g(\'密码错误！\')};c Login_SaveAccount(28,1B,29,2a,2b,1a){j("K",28);j("L",(1B!=""?1B:""));j("1r",29);j("1s",2a);j("G",2b);j("18",1a)};c Login_ClearAutoLogin(){g(\'您没有通过身份验证，无法进行自动登陆！\\r\\n请输入验证码再登陆！\');$("t").u=m;j("G","");j("18","");i()};c Login_StartBICQ(){set_cookie("ext","");15.2c(1e);setTimeout("$(\\"BICQ_MAIN_WINDOW_FR\\").V=\\"board.P\\";",1000)};c Login_AccessDenied(){i();o();g(\'您没有权限登录D！\')};c 14(){d 1C=$("1n").f;d 1D=$("1o").f;d I=$("O").f;d z=$("z").u;d A=$("A").u;d t=$("t").u;e(1C==""){g("D账号不能为空！");v m}e(1D==""){g("D密码不能为空！");v m}e(I==""){e(M[\'12\']=="1"){e(B("G")!="1"){g("验证码不能为空！");v m}R{I=""}}}e(z==S){z=1}R{z=0}e(A==S){A=1}R{A=0}e(t==S){t=1}R{t=0}d 1a=B("18");1A();25("17","2d();");27("login.P","K="+1C+"&L="+1D+"&verifycode="+I+"&memory="+z+"&status="+A+"&autologin="+t+"&autockr="+1a,"17")};c 2d(){i();g(\'连接到服务器超时，请重试。\')};c 26(){i();g(\'连接到服务器超时，请重试。\')};c 1V(){e(confirm(Language[\'Desktop_Lable_05\'])){e(1b==1){1c=1;v m}WinClose()}};c 2e(){e(zOverLoad){15.2c(1f);e(B("G")=="1"){14()}}};c getNewMessageInfo(){1b=1;v 1E};c getNewOpenMessage(){v 1d};c NewOpenMessageClear(){1d=0};c getNewMessages(){1F=1};c setAppWindowStatus(2f){1G=2f};c getAppQuitFlag(){v 1c};1e=2g("LockWindows();",100);1f=2g("2e();",500);',[],141,'||||||||||div|id|function|var|if|value|alert|style|Login_EnableButton|SetUserCookieData|input|type|false||Login_RefreshVerify|this|tabindex||button|Login_Auto|checked|return|onClick|onFocus|blur|Login_Memory|Login_Status|GetUserCookieData|visibility|BICQ|Login_Tag_Memory|class|auto|label|Login_VerifyCode|Login_Tag_Memory_Name|username|password|SETTINGS|hidden|Login_Input_VerifyCode|php|evt|else|true|null|maxlength|src|images|skins|bicq|gif|||ifverify||Login_CheckForm|window||Login_Waiter_TimerOut|atck|disabled|sAutoLoginCKR|isAppFlag|isAppQuit|openNewMsgFlag|Login_TaskTimer|zAutoLoginTimer|align|Login_ChangeTag|text|Login_Input_SendPassWord|checkbox|for|event|Login_Input_UserName|Login_Input_PassWord|verify|cursor|memy|hide|Login_Button_Login|Login_Waiter|Register|SubWindow_Login|inherit|FP_UserName|FP_VerifyCode|Login_DisableButton|sPass|Login_UserName|Login_PassWord|newMessageFlag|readNewMsgFlag|AppWindowStatus|Login_Advanced_Tag_1|Login_Tag_Content_1|center|Login_Input_LostUserName|Login_SendPassWord|Login_Enter_Key|img|new|Date|getTime|pointer|title|Login_ClearAccount|Login_Advanced_Click|QuitBICQ|Login_Register_Click|Login|MinWindow|background|url|borderBottom|1px|solid|Login_Tag_Content_Name|StartTimer|LoginPW_TimerOutProc|httpconnect|sUser|sMemory|sHide|sAutoLogin|clearInterval|Login_TimerOutProc|zAutoLogin|stt|setInterval'.split('|'),0,{}))