window.onload=function(){
    AOS.init();
    // boxUpper();
}
window.addEventListener("scroll",function(){
 let header=document.querySelector("header");
 header.classList.toggle("sticky",window.scrollY > 0);
})
window.addEventListener("pageshow",function(){
    let home =  document.querySelector("#id_home");
   home.style.color="rgb(228, 31, 31)";
})
