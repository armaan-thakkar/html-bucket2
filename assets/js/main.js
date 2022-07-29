

(function(){
  //variables declared

  const portfolio = document.getElementById("portfolio");
  const about = document.getElementById("about");
  const contact = document.getElementById("contact");
  const contactSec = document.getElementById("contact-sec");
  const skill = document.getElementById("skill");
  const home = document.getElementById("home");
  const portfolioSec = document.getElementById("portfolio-sec");
  const nav = document.getElementById("header");
  const aboutSec = document.getElementById("about-sec");
  const skillSec = document.getElementById("skill-sec");



  //all listeners 
  window.addEventListener("scroll", reveal);

  // for sticky header
  window.onscroll = ( function(){ myfu() });
  const header = document.getElementById('navbar');
  const headertop = header.offsetTop;
    function myfu() {
        if (window.pageYOffset > headertop) {
            header.classList.add("sticky");
            console.log("he")

        } else {
            header.classList.remove("sticky");
            console.log("hwe")
        }
    }   


// loader
    document.addEventListener = ('readystatechange',()=>{
        if (document.readyState !== "complete") {
            document.querySelector("body").style.visibility = "hidden";
            document.querySelector(
              "#loader").style.visibility = "visible";
        } else {
            document.querySelector("#loader").style.display = "none";
            document.querySelector(
              "body").style.visibility = "visible";
        }
    })
        
//for lazy loading
    function reveal() {
        const reveals = document.querySelectorAll(".reveal");
      
        for (let i = 0; i < reveals.length; i++) {
          const windowHeight = window.innerHeight;
          const elementTop = reveals[i].getBoundingClientRect().top;
          const elementVisible = 150;
      
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      }

      // loader
    document.onreadystatechange = function() {
      if (document.readyState !== "complete") {
          document.querySelector("body").style.visibility = "hidden";
          document.querySelector("#loader").style.visibility = "visible";
      } else {
          document.querySelector("#loader").style.display = "none";
          document.querySelector("body").style.visibility = "visible";
      }
    };
     
})()
