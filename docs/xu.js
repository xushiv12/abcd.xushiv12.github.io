const x=new URLSearchParams(window.localtion.search);
let y=x.get('id');
var n="";
if(n==="aabbcc"){
  n="you can login!";
}else{
  n="cannot login!";
}
document.getElementById("id").innerHTML=n;
