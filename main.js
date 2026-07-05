/*=========================================
  VELOURA MAIN JS
=========================================*/

// Loader
window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }

});

// Navbar Shadow
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});

// Scroll To Top
const scrollBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {

    if (!scrollBtn) return;

    if (window.scrollY > 400) {

        scrollBtn.style.opacity = "1";
        scrollBtn.style.pointerEvents = "all";

    } else {

        scrollBtn.style.opacity = "0";
        scrollBtn.style.pointerEvents = "none";

    }

});

if(scrollBtn){

    scrollBtn.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}

// Active Nav Link
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop-150;

        if(window.scrollY>=sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

});

// Reveal Animation
const reveals = document.querySelectorAll(

".section,.stat-card,.menu-card,.gallery-item,.testimonial-card,.contact-card"

);

function revealOnScroll(){

    const trigger = window.innerHeight * 0.85;

    reveals.forEach(el=>{

        const top = el.getBoundingClientRect().top;

        if(top<trigger){

            el.style.opacity="1";
            el.style.transform="translateY(0)";

        }

    });

}

reveals.forEach(el=>{

    el.style.opacity="0";

    el.style.transform="translateY(70px)";

    el.style.transition=".8s ease";

});

window.addEventListener("scroll",revealOnScroll);

revealOnScroll();

// Mouse Glow
const cursor = document.querySelector(".cursor");
const blur = document.querySelector(".cursor-blur");

document.addEventListener("mousemove",(e)=>{

    if(cursor){

        cursor.style.left=e.clientX+"px";

        cursor.style.top=e.clientY+"px";

    }

    if(blur){

        blur.style.left=e.clientX+"px";

        blur.style.top=e.clientY+"px";

    }

});

// Button Hover Scale
document.querySelectorAll("button,a").forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        if(cursor){

            cursor.style.transform="translate(-50%,-50%) scale(2)";

        }

    });

    item.addEventListener("mouseleave",()=>{

        if(cursor){

            cursor.style.transform="translate(-50%,-50%) scale(1)";

        }

    });

});

console.log("✨ VELOURA Loaded Successfully");