﻿eval(function(p,a,c,k,e,r){e=function(c){return(c<62?'':e(parseInt(c/62)))+((c=c%62)>35?String.fromCharCode(c+29):c.toString(36))};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'([46-9a-zA-DF-Z]|[12]\\w)'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('8 17="<4 6=\\"s\\"><4 6=\\"19\\"></4><4 6=\\"1a\\"></4><4 6=\\"1b\\"><t m=\\"u/C/D/1c.v\\" n=\\"1d\\" F=\\"1e\\" w=\\"0\\"></4><4 6=\\"Register_Layer4\\"><4 j=\\"1f: 1g;G: 1h;H: -1i;x:#1j;1k-x: #1l;\\">&o;必填资料&o;</4></4><4 6=\\"Register_Layer5\\"><4 j=\\"1f: 1g;G: 1h;H: -1i;x:#1j;1k-x: #1l;\\">&o;可选资料&o;</4></4><4 6=\\"1m\\"><hr n=\\"1o\\" I=\\"2\\" /></4><4 6=\\"Register_Layer7\\"><9 6=\\"J\\" a=\\"submit\\" K=\\"p\\" L=\\"M.N()\\" 7=\\"确  定\\" q=\\"1p();\\"></4><4 6=\\"1q\\"><9 6=\\"1r\\" a=\\"p\\" K=\\"p\\" L=\\"M.N()\\" 7=\\"取  消\\" q=\\"O();\\"></4><4 6=\\"Register_Layer9\\">昵　称：<9 6=\\"1s\\" a=\\"f\\" 7=\\"\\" e=\\"18\\"></4><4 6=\\"Register_Layer10\\">性　别：<1t 6=\\"1u\\" I=\\"1\\"><k 7=\\"\\"></k><k 7=\\"1\\">"+P[\'Male\']+"</k><k 7=\\"2\\">"+P[\'Female\']+"</k></1t></4><4 6=\\"Register_Layer11\\">登陆名：<9 6=\\"1v\\" a=\\"f\\" 7=\\"\\" e=\\"24\\"></4><4 6=\\"Register_Layer12\\">密　码：<9 6=\\"1w\\" a=\\"Q\\" 7=\\"\\" e=\\"32\\"></4><4 6=\\"Register_Layer13\\">确　认：<9 6=\\"1x\\" a=\\"Q\\" 7=\\"\\" e=\\"32\\"></4><4 6=\\"Register_Layer14\\">E-1y：<9 6=\\"1z\\" a=\\"f\\" 7=\\"\\" e=\\"128\\"></4><4 6=\\"Register_Layer15\\">验证码："+(y[\'z\']!="1"?"无":"")+"<1A j=\\""+(y[\'z\']!="1"?"R: 1B;":"")+"\\"><9 6=\\"A\\" a=\\"f\\" 7=\\"\\" e=\\"5\\">&o;<t 6=\\"1C\\" m=\\"S.T?"+(1D 1E().1F())+"\\" w=\\"0\\" align=\\"absmiddle\\" q=\\"U();\\" j=\\"cursor:pointer;\\" V=\\"点击更换验证码\\"></1A></4><4 6=\\"Register_Layer16\\">姓　名：<9 6=\\"1G\\" a=\\"f\\" 7=\\"\\" e=\\"15\\"></4><4 6=\\"Register_Layer17\\">年　龄：<9 6=\\"1H\\" a=\\"f\\" 7=\\"\\" e=\\"3\\"></4><4 6=\\"Register_Layer18\\">省　份：<9 6=\\"1I\\" a=\\"f\\" 7=\\"北京\\" e=\\"20\\"></4><4 6=\\"Register_Layer19\\">城　市：<9 6=\\"1J\\" a=\\"f\\" 7=\\"北京市\\" e=\\"20\\"></4><4 6=\\"Register_Layer20\\">国家/地区：<9 6=\\"1K\\" a=\\"f\\" 7=\\"中华人民共和国\\" e=\\"20\\"></4><4 6=\\"Register_Layer21\\"><t 6=\\"W\\" m=\\"u/1L/1-1.v\\" n=\\"32\\" F=\\"32\\" w=\\"0\\" j=\\"1M-G:1N;1M-H:1N;\\" q=\\"1O();\\" V=\\""+P[\'Register_Lable13\']+"\\"></4>"+CreateWaiter("X",225,140)+"</4>";8 Y="<4 6=\\"19\\"></4><4 6=\\"1a\\"></4><4 6=\\"1b\\"><t m=\\"u/C/D/1c.v\\" n=\\"1d\\" F=\\"1e\\" w=\\"0\\"></4><4 6=\\"1m\\"><hr n=\\"1o\\" I=\\"2\\" /></4><4 6=\\"1q\\"><9 6=\\"1r\\" a=\\"p\\" K=\\"p\\" L=\\"M.N()\\" 7=\\"确  定\\" q=\\"1P();\\"></4><4 6=\\"Register_Finish_Layer\\"><Z></4>";b U(){d(y[\'z\']=="1"){$("A").7="";$("A").focus();$("1C").m="S.T?"+1D 1E().1F()}};b 1O(){CreateWindows("W",0,0,467,542,"u/C/D/V.v","头像列表",1,1,0,0,FaceHTML,null,0);1Q("W")};b O(){d(1R["1S"]!=1T)1U("1S");d(1R["10"]==1T)1U("10");1Q("10")};b l(){$("X").j.R="1B";$("J").1V=g};b Register_CheckData(){c(\'请检查资料填写是否完整！\');l()};b Register_VerifyError(){l();c(\'验证码错误！\')};b Register_isUsed(){c(\'这个登陆名已被使用！\');l()};b Register_DeniedIP(1W){l();U();c(\'您的IP在\'+1W+\'分钟内禁止注册ID！\')};b Register_CanNot(){c(\'服务器禁止用户注册！\')};b Register_UserNameNumberError(){c(\'服务器不允许纯数字或者以数字开头的登录名！\');l()};b Register_Finish(1X){8 h=Y;h=h.1Y(/<Z>/gi,"注册成功！<br><br>您的22号码为："+1X);$("s").11=h};b Register_Failed(){8 h=Y;h=h.1Y(/<Z>/gi,"22账号注册失败！");$("s").11=h};b 1P(){$("s").11=17;23="1";O()};b 1p(){8 25=23;8 12=$("1s").7;8 13=GetOptionsValue("1u");8 r=$("1v").7;8 B=$("1w").7;8 14=$("1x").7;8 26=$("1z").7;8 27=$("1G").7;8 28=$("1H").7;8 29=$("1I").7;8 2a=$("1J").7;8 2b=$("1K").7;8 16=$("A").7;d(12==""){c("昵称不能为空！");i g}d(13==""){c("性别不能为空！");i g}d(r==""){c("登陆名不能为空！");i g}d(B==""||14==""){c("密码不能为空！");i g}d(B!=14){c("两次输入的密码不一样！");i g}d(26==""){c("E-1y地址不能为空！");i g}d(16==""){d(y[\'z\']=="1"){c("验证码不能为空！");i g}}d(2c(r)>0||2c(r)<0){c(\'服务器不允许纯数字或者以数字开头的登录名！\');i g}$("X").j.R="inherit";$("J").1V=true;httpconnect("register.T","1L="+25+"&petname="+12+"&sex="+13+"&username="+r+"&Q="+B+"&name="+27+"&age="+28+"&province="+29+"&city="+2a+"&nation="+2b+"&S="+16)};',[],137,'||||div||id|value|var|input|type|function|alert|if|maxlength|text|false|zRegisterFinishHTML|return|style|option|Register_EnableButton|src|width|nbsp|button|onClick|Register_UserName|zRegisterBody|img|images|gif|border|color|SETTINGS|ifverify|Register_Input_Verify|Register_Password|skins|bicq||height|left|top|size|Register_Button_OK|class|onFocus|this|blur|Register_Cancel|Language|password|visibility|verify|php|Register_RefreshVerify|title|Face|Register_Waiter|RegisterFinishHTML|ReplaceBody|Login|innerHTML|Register_PetName|Register_Sex|Register_Password2||Register_Verify|RegisterHTML||Register_Layer1|Register_Layer2|Register_Layer3|register_bg|134|351|position|absolute|10px|6px|000000|background|F5FBFF|Register_Layer6||490|Register_CheckForm|Register_Layer8|Register_Button_Cancel|Register_Input_PetName|select|Register_Input_Sex|Register_Input_UserName|Register_Input_Password|Register_Input_Password2|mail|Register_Input_Email|span|hidden|Register_VerifyCode|new|Date|getTime|Register_Input_Name|Register_Input_Age|Register_Input_Province|Register_Input_City|Register_Input_Nation|face|padding|2px|ShowFace|Register_Finish_Click|ShowWindow|WindowsStatus|Register|Min|MinWindow|disabled|itimer|UID|replace||||BICQ|GlobalFaceID||Register_Face|Register_Email|Register_Name|Register_Age|Register_Province|Register_City|Register_Nation|parseInt'.split('|'),0,{}))