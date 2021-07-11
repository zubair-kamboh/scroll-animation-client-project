gsap.defaults({ overwrite: 'auto' })

gsap.set('.left__section > *', { xPercent: -50, yPercent: -50 })

// Set up our scroll trigger
const ST = ScrollTrigger.create({
  trigger: '.right__section',
  start: 'top top',
  end: 'bottom bottom',
  pin: '.left__section',
})

// CHANGE SVG ON CLICK
// Variables
let svgPath = document.querySelector('.left__section svg path')
const buttons = document.querySelectorAll('.right__section button')

// Functions
const onBtnClick = (e) => {
  const targetBtn = e.target
  let currentSvgPath = targetBtn.childNodes[1].childNodes[1].getAttribute('d')

  svgPath.setAttribute('d', currentSvgPath)
  // targetBtn.style.backgroundColor = '#ffffff'
  // targetBtn.childNodes[1].style.fill = '#000000'
}

buttons.forEach((button, i) => {
  // On Button Click
  button.addEventListener('click', onBtnClick)
})
