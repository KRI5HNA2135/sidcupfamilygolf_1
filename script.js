var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");


document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x+15 + "px";
    crsr.style.top = dets.y + "px";
    blur.style.left = dets.x -250 + "px";
    blur.style.top = dets.y -250 + "px";
})

var h4all = document.querySelectorAll(" #nav h4 ")

h4all.forEach(function(elem) {
  elem.addEventListener("mouseenter", function() {
    // crsr.style.transform = "scale(3)"
    crsr.style.scale = 3
    crsr.style.border = "1px solid #fff"
    crsr.style.backgroundColor = "transparent"
    crsr.style.transition = "all 0.3s ease" // Add transition

  })

  elem.addEventListener("mouseleave", function() {
    // crsr.style.transform = "scale(1)"
    crsr.style.scale = 1
    crsr.style.border = "0px solid #95c11e"
    crsr.style.backgroundColor = "#95c11e"
    crsr.style.transition = "all 0.3s ease" // Add transition

  })
})

gsap.to("#nav",{
  backgroundColor:"#000",
  duration: 0.5,
  height:"110px",

  scrollTrigger:{
    trigger:"#nav",
    scroll:"body",
    // markers:true,
    start:"top -10%" ,
    end:"top -11%",
    scrub:1
  }
})

gsap.to("#main",{
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller:"body",
    // markers:true,
    start:"top -25%",
    end:"top -70%",
    scrub:2
  }
})

gsap.from("#about-us img,#about-us-in",{
  y:50,
  opacity:0,
  duration:1,
  stagger:0.4,
  scrollTrigger:{
    trigger:"#about-us",
    scroller:"body",
    // markers:true,
    start:"top 70%",
    end:"top 65%",
    scrub:3
  }
})

gsap.from(".cards",{
  scale:0.8,
  opacity:0,
  duration:1,
  stagger:0.4,
  scrollTrigger:{
    trigger:".cards",
    scroller:"body",
    // markers:true,
    start:"top 70%",
    end:"top 65%",
    scrub:3
  }
})

gsap.from("#colon1", {
  y:-70,
  x:-70,
  scrollTrigger:{
    trigger:"#colon1",
    scroller:"body",
    start: "top 50%",
    end: "top 47%",
    scrub: 4
  }
})
gsap.from("#colon2", {
  y:70,
  x:70,
  scrollTrigger:{
    trigger:"#colon1",
    scroller:"body",
    start: "top 50%",
    end: "top 47%",
    scrub: 4
  }
})

gsap.from("#page4 h1",{
  y:50,
  scrollTrigger:{
    trigger:"#page4 h1",
    scroller:"body",
    start:"top 70%",
    end:"top 100%",
    scrub:3
  }
})

document.getElementById("arrow").addEventListener("click",function(){
  document.getElementById("page2").scrollIntoView({behaviour :'auto'}) // "smooth" pan ek option ahe

})
