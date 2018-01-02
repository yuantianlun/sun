window.onload=function () {
    let dians=document.querySelectorAll(".banner_dian li");
    let imgs=document.querySelectorAll(".img-box li");
    let btnL=document.querySelector(".bs_left");
    let btnR=document.querySelector("bs_right");
    dians.forEach(function(ele,index){
        dians.onclick=function(){
            for(let i=0;i<dians.length;i++){
                dians[i].classList.remove("active1");
                imgs[i].classList.remove("active");
            }
            this.classList.add("active1");
            imgs[index].classList.add("active");
        }
    })





}