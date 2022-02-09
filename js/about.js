
let Read=false;
window.onload=function(){
    AOS.init();
    readMore();
}

window.addEventListener("scroll",function(){
 let header=document.querySelector("header");
 header.classList.toggle("sticky",window.scrollY > 0);
})
window.addEventListener("pageshow",function(){
    let about =  document.querySelector("#id_about");
    about.style.color="rgb(228, 31, 31)";
})
function readMore(){
    let moreBtn=document.querySelector(".btn_more");
    let text=document.querySelector(".text");
    moreBtn.addEventListener("click",(e)=>{
        text.classList.toggle("show-more");
        if(!Read){
            moreBtn.innerText=`Read Less`;
            let i= document.createElement("i");
            i.className="fa fa-caret-up px-2";
         document.querySelector(".btn_more").append(i);
            Read=true;
        }else{
            moreBtn.innerText=`Read More`;
            let i= document.createElement("i");
            i.className="fa fa-caret-down px-2";
         document.querySelector(".btn_more").append(i);
         Read=false;
            

        }
    })
}
