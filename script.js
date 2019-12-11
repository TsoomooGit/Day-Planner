
localStorage.clear();
var times=document.querySelectorAll("#time")
var inputBox=document.querySelectorAll(".form-control");

var d = new Date();
var currentDate=d.toString();
var currentTime=currentDate.slice(15,18);
currentDate=currentDate.slice(0,3)+", "+currentDate.slice(4,10);
document.getElementById("date").innerHTML=currentDate;

for(var i=0; i<localStorage.length; i++){
    var key=localStorage.key(i);
    if(key.startsWith("calendar")){
        var text=localStorage.getItem(key);
        var index=key.slice(key.indexOf("_")+1);
        var idx=parseInt(index);
        inputBox[idx].textContent=text;
    }
}
if(currentTime>=9){
    currentTime=currentTime-9;
}else{
    currentTime=100;
}

var current=10;
for(var i=0; i<times.length; i++){
if( currentTime<times.length){
if(times[i].innerHTML==times[currentTime].innerHTML){
 inputBox[i].style.background="tomato";
 current=i;
}else if(i>current){
inputBox[i].style.background="lightgreen";
 }
else{
inputBox[i].style.background="#B0B0B0";
}
}
else{
    inputBox[i].style.background="#B0B0B0";
  }
}


$('.btn').on("click",function(){
    var idx=$(".btn").index(this);
    console.log("idx: "+idx);
   var text=$(".form-control").eq(idx).val();
   localStorage.setItem("calendar_"+idx,text);
})




