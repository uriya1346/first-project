window.onload=function(){
    AOS.init();
}

window.addEventListener("scroll",function(){
 let header=document.querySelector("header");
 header.classList.toggle("sticky",window.scrollY > 0);
})
window.addEventListener("pageshow",function(){
    let contact =  document.querySelector("#id_contact");
    contact.style.color="rgb(228, 31, 31)";
})