/*--获取网页传递的参数--*/
    function request(paras)
    { 
        var url = location.href; 
        var paraString = url.substring(url.indexOf("?")+1,url.length).split("&"); 
        var paraObj = {} 
        for (i=0; j=paraString[i]; i++){ 
        paraObj[j.substring(0,j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=")+1,j.length); 
        } 
        var returnValue = paraObj[paras.toLowerCase()]; 
        if(typeof(returnValue)=="undefined"){ 
        return ""; 
        }else{ 
        return returnValue; 
       } 
     }
     
(function($){
$.getUrlParam = function(name)
{
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r!=null) return unescape(r[2]); return "";
	}
})(jQuery);

$(document).ready(function(){
	var methodName = $.getUrlParam('method')
	if(methodName =='add'){
			//alert(methodName);
			$('#title').html("创建");
	}else{
		$('#title').html("修改");
	}
});


TableTools.BUTTONS.gotoURL = {
    "sAction": "text",
    "sFieldBoundary": "",
    "sFieldSeperator": "\t",
    "sNewLine": "<br>",
    "sToolTip": "",
    "sButtonClass": "",
    "sButtonClassHover": "",
    "sButtonText": "Go to URL", // default, change when initiating
    "sGoToURL": "", // default, change when initiating
    "mColumns": "all",
    "bHeader": true,
    "bFooter": true,
    "fnMouseover": null,
    "fnMouseout": null,
    "fnClick": function( nButton, oConfig ) {
        location.href = oConfig.sGoToURL;
    },
    "fnSelect": null,
    "fnComplete": null,
    "fnInit": null
};

var i=0;
function addFile() {
i++;
 
currRow=conditionTable.insertRow();
cellc=currRow.insertCell();
cellcContext= '<input type="file" NAME="File+"+i>&nbsp;&nbsp;<button onclick="removeFile();">删除</button><br>';
cellc.innerHTML=cellcContext;
 
}
function findTD(o){
if (o.nodeName=="TR"||o.nodeName=="TABLE") return;
if(o.nodeName=="TD")
return (o);
else
return (o.parentElement);
}
function removeFile(){
o = findTD(event.srcElement);
conditionTable.deleteRow(o.parentElement.rowIndex*1);  
}
function uploadFile(){
 
}