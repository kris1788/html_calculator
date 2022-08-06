function action1(a) {
	document.getElementById("inpt").focus();	
	if (a=="D")	{
    document.getElementById("display1").innerHTML="";
	document.getElementById("display2").innerHTML="";
	document.getElementById("inpt").value="";
	return;
	}
var str1="0123456789.";
var str2=document.getElementById("inpt").value;
if (a=="C")	{
str2=str2.substr(0,str2.length-1);
document.getElementById("inpt").value=str2;
return;
}
var cstr=document.getElementById("display1").innerHTML;
if (str1.includes(a)) {
	if (a==".")	{
		if (str2.length>0) {
		if (str2.includes(".")) {return;}
		}
		}
str2=str2 + a;
document.getElementById("inpt").value=str2;return;
} else {
	if (str2==""){
	if (cstr.substr(cstr.length-1,1)!="=")	{
    document.getElementById("display1").innerHTML=cstr.substr(0,cstr.length-1)+a;
	return;
	} else {
		var str3=document.getElementById("display2").innerHTML;
		if (str3!="") 		{
		document.getElementById("display1").innerHTML=str3+a;
		}
		return;}
		} else {
		if (cstr.substr(cstr.length-1,1)=="=")	{
		document.getElementById("display1").innerHTML=str2+a;
		document.getElementById("display2").innerHTML=str2;
		document.getElementById("inpt").value="";
		return;} 
		}
		cstr=cstr+str2;
		document.getElementById("display1").innerHTML=cstr+a;
		cstr=cstr.replaceAll('√','~');
		
var ans=cstr.replaceAll(/[^\d.]/g, "#");
var numpart=ans.split("#");
ans=cstr.replaceAll(/[\d.]/g, "");
var mstring=numpart[0];
var mval=0;

for (var i=0;i<ans.length;i++ ) {
if (ans[i]=="^") 	{
mval=Math.pow(mstring,numpart[i + 1]);
mval=mval.toFixed(13);
cstr=cstr.replaceAll(mstring + "^" + numpart[i + 1],mval);
mstring=mval;
	}
else if (ans[i]=="~") 	{
mval=Math.pow(mstring,1/numpart[i + 1]);
mval=mval.toFixed(13);
cstr=cstr.replaceAll(mstring + "~" + numpart[i + 1],mval);
mstring=mval;
	} else {
mstring=numpart[i + 1];
		}
}
ans = eval(cstr);
ans=ans.toFixed(13);
ans=parseFloat(ans);
document.getElementById("display2").innerHTML=ans;
document.getElementById("inpt").value="";
}
}
 function myFunction (evt) {
var kCode = (evt.which) ? evt.which : evt.keyCode

if (kCode>95&&kCode<106) {
	} else if (kCode==8) {
} else if (kCode==110) {
}
else if (kCode == 39) {action1("^");
evt.preventDefault();
return false;}
else if (kCode == 220) {action1("√");
evt.preventDefault();
return false;}
else if (kCode == 107) {action1("+");
evt.preventDefault();
return false;}
else if (kCode == 109) {action1("-");
evt.preventDefault();
return false;}
else if (kCode == 187) {action1("=");
evt.preventDefault();
return false;}
else if (kCode == 106) {action1("*");
evt.preventDefault();
return false;}
else if (kCode == 111) {action1("/");
evt.preventDefault();
return false;}
else if (kCode == 46) {action1("D");
evt.preventDefault();
return false;}
else if (kCode == 13) {action1("=");
evt.preventDefault();
return false;}
else if (kCode == 61) {action1("=");
evt.preventDefault();
return false;}
 else {
	 
	 evt.preventDefault();
	return false;
}
}