
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

//  THE PLAY BUTTON ANIMATION : MOVES ON MOUSE MOVE
function videoconAnimation() {
    var videocon = document.querySelector('#video-container')
    var playbtn = document.querySelector('#play')
    videocon.addEventListener("mouseenter",function(){
    gsap.to(playbtn,{
            scale: 1,
            opacity: 1
    })
    
    })

    videocon.addEventListener("mouseleave",function(){
        gsap.to(playbtn,{
            scale: 0,
            opacity:0
        })
    })

    videocon.addEventListener("mousemove",function(dets){
        gsap.to(playbtn,{
            left:dets.x-2,
            top:dets.y-1
        })

    })
}

videoconAnimation()

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


function cursorAnimation(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#cursor",{
            left:dets.x,
            top:dets.y
        })
    })
    
    document.querySelectorAll('.child').forEach(function(elem){
        elem.addEventListener("mouseenter",function(){
            gsap.to("#cursor",{
                transform:'translate(-50%, -50%) scale(1)'
            });
        });
        elem.addEventListener("mouseleave",function(){
            gsap.to("#cursor",{
                transform:'translate(-50%, -50%) scale(0)'
            })
        })
    }) 
}

cursorAnimation()

