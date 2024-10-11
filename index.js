let navLinks = document.querySelector(".nav-links");
let closeNav = document.querySelector(".close-nav"); 
let openNav = document.querySelector(".open-nav"); 
let navItems = document.querySelectorAll(".link-item");

openNav.addEventListener("click",()=>{
    navLinks.classList.add("show-nav")
})

closeNav.addEventListener("click",()=>{
    navLinks.classList.remove("show-nav")
})

// navItems.forEach(i => i.addEventListener("click",()=>{
//     navLinks.classList.remove("show-nav")
// }))

navItems.forEach(n=>n.addEventListener("click",()=>{
    navLinks.classList.remove("show-nav")
}))

let scrollTop = document.querySelector("#scroll-top");

window.addEventListener("scroll",()=>{
    if(window.pageYOffset > 100){
        scrollTop.classList.add("scroll-top")
    }else{
        scrollTop.classList.remove("scroll-top")
    }
})