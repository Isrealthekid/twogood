

function loadingAnimation(){
    gsap.from("#page1 h1 ",{
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.8,
        stagger:0.4
    })
    
    gsap.from("#page1 #video-container",{
        scale:0.9,
        opacity:0,
        delay:1.2,
        duration:0.6,
    })
}

loadingAnimation()