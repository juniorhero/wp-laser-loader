jQuery(document).ready(function($){
 
document.body.innerHTML+="<div id=\"progress\"><dt></dt><dd></dd></div>";
var pr=document.querySelector("#progress");
setTimeout(function(){
pr.style.width="20%";
},300);

setTimeout(function(){
pr.style.width="101%";
},800);
setTimeout(function(){
pr.parentNode.removeChild(pr);
},1600);
return false;
 
 
 
$(document).ajaxStart(function() {
//only add progress bar if added yet.
if ($("#progress").length === 0) {
$("head").append($("<div><dt/><dd/></div>").attr("id", "progress"));
$("#progress").width((10 + Math.random() * 30) + "%");
}
});
$(document).ajaxComplete(function() {
//End loading animation
$("#progress").width("101%").delay(20).fadeOut(400, function() {
$(this).remove();
});
});
}); 
