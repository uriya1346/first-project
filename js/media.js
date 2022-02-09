window.onload=function(){
    AOS.init();
    declareEvents();
}

  const declareEvents = function(){
   let close_light_btn=document.querySelector("#light_box button");
   close_light_btn.addEventListener("click",function(){
       document.querySelector("#light_box").style.display="none";
   })

   
    let imgList = document.querySelectorAll("img[data-img]");
    imgList.forEach(function(itemElem){
      itemElem.style.cursor = "pointer";
      itemElem.addEventListener("click",function(){
       let light_box=document.querySelector("#light_box");
       light_box.style.display="flex";
       light_box.querySelector("img").src=itemElem.src;
       light_box.querySelector("p").innerHTML=itemElem.alt;

      })
    })
  }
  


window.addEventListener("scroll",function(){
    let header=document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0);
   })
   window.addEventListener("pageshow",function(){
       let media =  document.querySelector("#id_media");
      media.style.color="rgb(228, 31, 31)";
   })
   