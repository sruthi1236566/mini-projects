var nodelist=document.getElementsByTagName("li");
var i;
for(i=0;i<nodelist.length;i++){
    var span=document.createElement("span");
    var txt=document.createTextNode("\u00D7");
    span.className="close";
    span.appendChild(txt);
    nodelist[i].appendChild(span);
}
var close=document.getElementsByClassName("close");
var i;
for(i=0;i<close.length;i++){
    close[i].onclick=function(){
        var a=this.parentElement;
        a.style.display="none";
    }
}
var list=document.querySelector('ul');
list.addEventListener('click',function(ev){
    if(ev.target.tagName==='LI'){
        ev.target.classList.toggle('checked');
    
    }
},false);

function newelement(){
    var li=document.createElement("li");
    var inputvalue=document.getElementById("inputext").value;
    var t=document.createTextNode(inputvalue);
li.appendChild(t);
if(inputvalue===''){
alert("insert value");
}else{
    document.getElementById("myul").appendChild(li);
}
document.getElementById("inputext").value="";
var span=document.createElement("span");
var txt=document.createTextNode("\u00D7");
span.className="close"
li.appendChild(span);
span.appendChild(txt);
var i;
for(i=0;i<close.length;i++){
    close[i].onclick=function(){
        var a=this.parentElement;
    a.style.display="none"    }
}}
function clritems(){
    var lst = document.getElementsByTagName("ul");
      lst[0].innerHTML = "";
  }