const x=new URLSearchParams(window.location.search);
let y=x.get('id');
var n="";
if(y==="aabbcc"){
  n="you can login!";
}else{
  n="cannot login!";
}
document.getElementById("id").innerHTML=n;
