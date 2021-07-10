// console.clear()

gsap.defaults({ overwrite: 'auto' })

gsap.set('.left__section > *', { xPercent: -50, yPercent: -50 })

// Set up our scroll trigger
const ST = ScrollTrigger.create({
  trigger: '.right__section',
  start: 'top top',
  end: 'bottom bottom',
  //   onUpdate: getCurrentSection,
  pin: '.left__section',
})
