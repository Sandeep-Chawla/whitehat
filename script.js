window.addEventListener('load', function() {
    

gsap.registerPlugin(ScrollTrigger);
gsap.from("#about",{ 
    scrollTrigger:{
    trigger:'#about',
    start: 'top 70%',
    end:"top 50%",
    scrub:2,
    },
    opacity: 0,
    y: 100,
    scale:0.8,
    duration: 2
 })
 var sections = gsap.utils.toArray(".menu");

sections.forEach((section) => {
gsap.from(section,{
    scrollTrigger:{
        trigger:section,
        start: "top 80%",
        end:"top 20%",
        // toggleActions:'restart',
        // markers: true,
        scrub:true 
    },
    duration:2,
    opacity:0,
    stagger:1,
    x:-100
    

})
})
 var images1 = gsap.utils.toArray(".image1");

images1.forEach((image) => {
gsap.from(image,{
    scrollTrigger:{
        trigger:image,
        start: "top 80%",
        toggleActions:'restart',
        end:"top 50%",
        // markers: true,
        scrub:true  
    },
    duration:2,
    opacity:0,
    stagger:1,
    x:-100
    

})
})

var images = gsap.utils.toArray(".image");

images.forEach((image) => {
    gsap.from(image,{
        scrollTrigger:{
            trigger:image,
            start: "top 80%",
            end:"top 50%",
            // toggleActions:'restart',
            // markers: true,
            scrub:true  
        },
        duration:4,
        opacity:0,
        stagger:1,
        x:100
        

    })
    })
    ScrollTrigger.refresh();

});
window.addEventListener('resize', function() {
    ScrollTrigger.refresh();
});
