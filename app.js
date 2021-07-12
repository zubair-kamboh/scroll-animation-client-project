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

window.addEventListener('load', () => {
  // Canvas Starts Here
  const canvas = document.querySelector('#canvas')
  const ctx = canvas.getContext('2d')
  const left__section = document.querySelector('.left__section')

  canvas.width = canvas.parentElement.offsetWidth
  canvas.height = 600
  window.addEventListener('resize', () => {
    canvas.width = canvas.parentElement.offsetWidth
    canvas.height = 600
  })

  const totalWidth = canvas.parentElement.offsetWidth

  // top left to bottom right

  ctx.beginPath()
  ctx.moveTo(0, 0)
  ctx.lineTo(totalWidth, 600)
  ctx.strokeStyle = '#383838'
  ctx.lineWidth = 0.8
  ctx.stroke()

  // bottom left to top right
  ctx.beginPath()
  ctx.moveTo(0, 600)
  ctx.lineTo(totalWidth, 0)
  ctx.strokeStyle = '#383838'
  ctx.stroke()

  // bottom left to top right
  ctx.beginPath()
  ctx.moveTo(0, 600)
  ctx.lineTo(totalWidth, 0)
  ctx.strokeStyle = '#383838'
  ctx.stroke()

  // Top to bottom 3 lines
  ctx.beginPath()
  ctx.moveTo(0, 150)
  ctx.lineTo(totalWidth, 150)
  ctx.strokeStyle = '#383838'
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(0, 300)
  ctx.lineTo(totalWidth, 300)
  ctx.strokeStyle = '#383838'
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(0, 450)
  ctx.lineTo(totalWidth, 450)
  ctx.strokeStyle = '#383838'
  ctx.stroke()

  // Left to Right 3 lines
  ctx.beginPath()
  ctx.moveTo(totalWidth / 4, 0)
  ctx.lineTo(totalWidth / 4, 600)
  ctx.strokeStyle = '#383838'
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(totalWidth / 2, 0)
  ctx.lineTo(totalWidth / 2, 600)
  ctx.strokeStyle = '#383838'
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(totalWidth - totalWidth / 4, 0)
  ctx.lineTo(totalWidth - totalWidth / 4, 600)
  ctx.strokeStyle = '#383838'
  ctx.stroke()

  //   draw circle
  ctx.beginPath()
  ctx.ellipse(canvas.width / 2, canvas.height / 2, 150, 143, 0, 0, Math.PI * 2)
  ctx.stroke()
})
