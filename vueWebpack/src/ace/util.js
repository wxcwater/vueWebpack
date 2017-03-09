
function checkUcode(ucode){

	var reuslt = false;
	$.ajax({
		url : REQUEST_CONTEXTPATH+"/apiUser/user!checkUcode.do",
		data : {
			UCODE : ucode
		},
		type : 'post',
		cache : false,
		async : false,
		dataType : 'json',
		success : function(data)
		{
			reuslt = data.STATUS;
		},
		error : function() 
		{
			
		}
	});
	return reuslt;
}

function yanzhengphone(str){
	var tel = parseInt(str);
	if(str.length!=11){
		return false;
	}
	var bol = false;
	var reg = /^0?1[3|4|5|8][0-9]\d{8}$/;
	if (reg.test(tel)) {
		bol = true;
	}
	return bol;
}

function keyupnum(obj){
	if(obj.value.length==1){
		obj.value=obj.value.replace(/[^0-9]/g,'');
	}else{
		obj.value=obj.value.replace(/\D/g,'');
	}
}
function afterpastenum(obj){
	if(obj.value.length==1){
		obj.value=obj.value.replace(/[^0-9]/g,'');
	}else{
		obj.value=obj.value.replace(/\D/g,'');
	}
}
function onlyNum() { 
    if(!(event.keyCode==46)&&!(event.keyCode==8)&&!(event.keyCode==37)&&!(event.keyCode==39)) 
    if(!((event.keyCode>=48&&event.keyCode<=57)||(event.keyCode>=96&&event.keyCode<=105))) 
    event.returnValue=false; 
}
function yanzhen_aznum(str){
	var usern = /^[a-zA-Z0-9_]{1,}$/; 
	if (!str.match(usern)) {
		return false;
	}else{
		return true;
	}
}

//供使用者调用  
function trim(s){  
    return trimRight(trimLeft(s));  
}  
//去掉左边的空白  
function trimLeft(s){  
    if(s == null) {  
        return "";  
    }  
    var whitespace = new String(" \t\n\r");  
    var str = new String(s);  
    if (whitespace.indexOf(str.charAt(0)) != -1) {  
        var j=0, i = str.length;  
        while (j < i && whitespace.indexOf(str.charAt(j)) != -1){  
            j++;  
        }  
        str = str.substring(j, i);  
    }  
    return str;  
}  

//去掉右边的空白 www.2cto.com   
function trimRight(s){  
    if(s == null) return "";  
    var whitespace = new String(" \t\n\r");  
    var str = new String(s);  
    if (whitespace.indexOf(str.charAt(str.length-1)) != -1){  
        var i = str.length - 1;  
        while (i >= 0 && whitespace.indexOf(str.charAt(i)) != -1){  
           i--;  
        }  
        str = str.substring(0, i+1);  
    }  
    return str;  
}
//验证Email
function yanzhengEmail(str)
{
       var result = false;
	   var reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
       if(reg.test(str))
       {
       		result = true;
       }
       return result;
} 
//验证身份证
function yanzhengCardNo(card)  
{  
// 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X  
	 var result = false;
	 var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;  
	 if(reg.test(card))  
	 {  
		 result = true;
	 }  
	 return result;
} 

//验证邮编
function yanzhengPsce(str)
{
	var result = false;
	reg= /^[0-9]{6}$/;
	if(reg.test(str))
    {
      result = true;
    }
    return result;
}
//验证电话
function yanzhengTel(str)
{
	var result = false;
	reg= /^0\d{2,3}-?\d{7,8}$/;
	if(reg.test(str))
    {
      result = true;
    }
    return result;
}

function loginOut(){

	$.ajax({
		url : REQUEST_CONTEXTPATH+"/login/login!cuLoginOut.do",
		data : {
		},
		type : 'post',
		cache : false,
		async : false,
		dataType : 'json',
		success : function(data)
		{
			window.location.href=REQUEST_CONTEXTPATH+"/home/home.jsp";
		},
		error : function() 
		{
			
		}
	});
}
function loginOut1(){
	$.ajax({
		url : REQUEST_CONTEXTPATH+"/login/login!cuLoginOut.do",
		data : {
		},
		type : 'post',
		cache : false,
		async : false,
		dataType : 'json',
		success : function(data)
		{
			window.location.href=REQUEST_CONTEXTPATH+"/login.jsp";
		},
		error : function() 
		{
			
		}
	});
}
String.prototype.replaceAll = function(s1,s2){ 
	return this.replace(new RegExp(s1,"gm"),s2); 
	}

function getAstate(astate)
{
	var stateArray = ["正在申请","审核通过","未通过","服务停用"];
	var msg = stateArray[parseInt(astate)];
	return msg;
}
function getInstate (instate){
	//0:申请中1:通过2:未通过3:停用
	var stateArray = ["正在申请","审核通过","未通过","服务停用"];
	var msg = stateArray[parseInt(instate)];
	return msg;
}