gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !==1) {
    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.5,
        effects: true
    })
}
    gsap.fromTo('.cat', { opacity: 1 }, { 
        opacity: 0,
        scrollTrigger: {
            trigger: '.cat',
            start: '.cat',
            scrub: true
        }
     })
     gsap.fromTo('.main_block__header', { opacity: 1 }, { 
        opacity: 0,
        scrollTrigger: {
            trigger: '.main_block__header',
            start: '.main_block__header',
            scrub: true
        }
     })

    let items = gsap.utils.toArray('.block__item')
    console.log(items)
    items.forEach(item => {
       gsap.fromTo(item, { x: -100, opacity: 0 }, {
            opacity: 1, x: 0,
            scrollTrigger: {
                trigger: item,
                scrub: true
            }
         })
     })
     