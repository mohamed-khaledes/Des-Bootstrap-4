let upperbar = document.querySelector(".upper-bar");
let nav = document.querySelector(".navbar");

let con = upperbar.getBoundingClientRect().height;
let con2 = nav.getBoundingClientRect().height;
console.log(con + con2);





/* start  featured work*/
let btns = document.querySelectorAll(".featured-work ul li");
let shuffle =document.querySelectorAll(".shuffle img");

btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        btns.forEach(function(bt){
            bt.classList.remove("active")
        });
        btn.classList.add("active");
        let data = btn.dataset.class;
        console.log(data);

        shuffle.forEach(function(sh){
            sh.style.opacity ="0.1";
            if(data === sh.className){
                sh.style.opacity ="1";
            }else if(data === "all"){
                sh.style.opacity ="1";
            }else{
                sh.style.opacity ="0.1";
            }
        });
    });
});
/* end  featured work*/

/*latest post */
// let wow1 = document.querySelector(".latest-post .wow1");
// let wow2 = document.querySelector(".latest-post .wow2");
// let box = document.querySelectorAll(".latest-post .box");

// box.forEach(function(bo){
//     bo.addEventListener("click",function(){
//         let sc = window.scrollY;
//         console.log(sc);
//         let top =bo.getBoundingClientRect().top;
//         console.log(top)
//         if(sc === top){
//             wow1.style.left ="0%";
//             wow2.style.left ="0%";
//         }
//     })
    
// })

/*end latest post */


/*scroll to top*/
let totop = document.querySelector(".scroll");

window.addEventListener("scroll",function(){
    let win = this.scrollY;
    if(win > 600){
        totop.style.opacity = "1";
    }
});
totop.addEventListener("click" ,function(){
    window.scroll({
        top:0,
        behavior:"smooth"
    })
})

/*scroll to top*/




































// btns.forEach(function(btn){
//     btn.addEventListener("click", function(e){
//         btns.forEach(function(b){
//             b.classList.remove("active")
//         });
//         btn.classList.add("active")
//         let data = btn.dataset.class;
        
//             shuffle.forEach(function(sh){
//                 sh.style.opacity ="0.1";
//                 if(data === sh.className){
//                     sh.style.opacity ="1";
//                 }else if(data === "all"){
//                     sh.style.opacity ="1";
//                 }
//                 else{
//                     sh.style.opacity ="0.1";
//                 }
//             });
        
//     });
// });