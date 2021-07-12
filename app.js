// Variables
const svg = document.querySelector('.left__section img')
const buttons = document.querySelectorAll('.right__section button')

// GSAP SCROLLING EFFECT
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

// Functions
const onBtnClick = (e) => {
  const targetBtn = e.target
  const attribute = targetBtn.getAttribute('data-debug-title')

  switch (attribute) {
    case 'A (65)':
      svg.src = './images/A.svg'
      break
    case 'B (66)':
      svg.src = './images/B.svg'
      break
    case 'C (67)':
      svg.src = './images/C.svg'
      break
    case 'D (68)':
      svg.src = './images/D.svg'
      break
    case 'E (69)':
      svg.src = './images/E.svg'
      break
    case 'F (70)':
      svg.src = './images/F.svg'
      break
    case 'G (71)':
      svg.src = './images/G.svg'
      break
    case 'H (72)':
      svg.src = './images/H.svg'
      break
    case 'I (73)':
      svg.src = './images/I.svg'
      break
    case 'J (74)':
      svg.src = './images/J.svg'
      break
    case 'K (75)':
      svg.src = './images/K.svg'
      break
    case 'L (76)':
      svg.src = './images/L.svg'
      break
    case 'M (77)':
      svg.src = './images/M.svg'
      break
    case 'N (78)':
      svg.src = './images/N.svg'
      break
    case 'O (79)':
      svg.src = './images/O.svg'
      break
    case 'P (80)':
      svg.src = './images/P.svg'
      break
    case 'Q (81)':
      svg.src = './images/Q.svg'
      break
    case 'R (82)':
      svg.src = './images/R.svg'
      break
    case 'S (83)':
      svg.src = './images/S.svg'
      break
    case 'T (84)':
      svg.src = './images/T.svg'
      break
    case 'U (85)':
      svg.src = './images/U.svg'
      break
    case 'V (86)':
      svg.src = './images/V.svg'
      break
    case 'W (87)':
      svg.src = './images/W.svg'
      break
    case 'X (88)':
      svg.src = './images/X.svg'
      break
    case 'Y (89)':
      svg.src = './images/Y.svg'
      break
    case 'Z (90)':
      svg.src = './images/Z.svg'
      break

    // NUMERALS
    case 'zero (48)':
      svg.src = './images/0.svg'
      break
    case 'one (49)':
      svg.src = './images/1.svg'
      break
    case 'two (50)':
      svg.src = './images/2.svg'
      break
    case 'three (51)':
      svg.src = './images/3.svg'
      break
    case 'four (52)':
      svg.src = './images/4.svg'
      break
    case 'five (53)':
      svg.src = './images/5.svg'
      break
    case 'six (54)':
      svg.src = './images/6.svg'
      break
    case 'seven (55)':
      svg.src = './images/7.svg'
      break
    case 'eight (56)':
      svg.src = './images/8.svg'
      break
    case 'nine (57)':
      svg.src = './images/9.svg'
      break

    // Uppercase Outline
    case 'A-outline (65)':
      svg.src = './images/A-OUTLINE.svg'
      break
    case 'B-outline (66)':
      svg.src = './images/B-OUTLINE.svg'
      break
    case 'C-outline (67)':
      svg.src = './images/C-OUTLINE.svg'
      break
    case 'D-outline (68)':
      svg.src = './images/D-OUTLINE.svg'
      break
    case 'E-outline (69)':
      svg.src = './images/E-OUTLINE.svg'
      break
    case 'F-outline (70)':
      svg.src = './images/F-OUTLINE.svg'
      break
    case 'G-outline (71)':
      svg.src = './images/G-OUTLINE.svg'
      break
    case 'H-outline (72)':
      svg.src = './images/H-OUTLINE.svg'
      break
    case 'I-outline (73)':
      svg.src = './images/I-OUTLINE.svg'
      break
    case 'J-outline (74)':
      svg.src = './images/J-OUTLINE.svg'
      break
    case 'K-outline (75)':
      svg.src = './images/K-OUTLINE.svg'
      break
    case 'L-outline (76)':
      svg.src = './images/L-OUTLINE.svg'
      break
    case 'M-outline (77)':
      svg.src = './images/M-OUTLINE.svg'
      break
    case 'N-outline (78)':
      svg.src = './images/N-OUTLINE.svg'
      break
    case 'O-outline (79)':
      svg.src = './images/O-OUTLINE.svg'
      break
    case 'P-outline (80)':
      svg.src = './images/P-OUTLINE.svg'
      break
    case 'Q-outline (81)':
      svg.src = './images/Q-OUTLINE.svg'
      break
    case 'R-outline (82)':
      svg.src = './images/R-OUTLINE.svg'
      break
    case 'S-outline (83)':
      svg.src = './images/S-OUTLINE.svg'
      break
    case 'T-outline (84)':
      svg.src = './images/T-OUTLINE.svg'
      break
    case 'U-outline (85)':
      svg.src = './images/U-OUTLINE.svg'
      break
    case 'V-outline (86)':
      svg.src = './images/V-OUTLINE.svg'
      break
    case 'W-outline (87)':
      svg.src = './images/W-OUTLINE.svg'
      break
    case 'X-outline (88)':
      svg.src = './images/X-OUTLINE.svg'
      break
    case 'Y-outline (89)':
      svg.src = './images/Y-OUTLINE.svg'
      break
    case 'Z-outline (90)':
      svg.src = './images/Z-OUTLINE.svg'
      break

    // NUMERALS OUTLINES
    case 'one-outline (90)':
      svg.src = './images/0-OUTLINE.svg'
      break
    case 'two-outline (91)':
      svg.src = './images/1-OUTLINE.svg'
      break
    case 'three-outline (92)':
      svg.src = './images/2-OUTLINE.svg'
      break
    case 'four-outline (93)':
      svg.src = './images/3-OUTLINE.svg'
      break
    case 'five-outline (94)':
      svg.src = './images/4-OUTLINE.svg'
      break
    case 'six-outline (95)':
      svg.src = './images/5-OUTLINE.svg'
      break
    case 'seven-outline (96)':
      svg.src = './images/6-OUTLINE.svg'
      break
    case 'eight-outline (97)':
      svg.src = './images/7-OUTLINE.svg'
      break
    case 'nine-outline (98)':
      svg.src = './images/8-OUTLINE.svg'
      break
    case 'nine-outline (99)':
      svg.src = './images/9-OUTLINE.svg'
      break

    default:
      svg.srx = './images/6.svg'
      break
  }
}

buttons.forEach((button, i) => {
  // On Button Click
  button.addEventListener('click', onBtnClick)
})

window.addEventListener('load', () => {
  // Canvas Starts Here
  const canvas = document.querySelector('#canvas')
  const ctx = canvas.getContext('2d')
  const totalWidth = canvas.parentElement.offsetWidth
  canvas.width = canvas.parentElement.offsetWidth
  canvas.height = 600

  drawShapes(totalWidth, ctx)

  window.addEventListener('resize', () => {
    canvas.width = canvas.parentElement.offsetWidth
    canvas.height = 600
    drawShapes(totalWidth, ctx)
  })
})

const drawShapes = (totalWidth, ctx) => {
  // top left to bottom right

  ctx.beginPath()
  ctx.moveTo(40, 0)
  ctx.lineTo(totalWidth - 40, 600)
  ctx.strokeStyle = '#383838'
  ctx.lineWidth = 0.8
  ctx.stroke()

  // bottom left to top right
  ctx.beginPath()
  ctx.moveTo(40, 600)
  ctx.lineTo(totalWidth - 40, 0)
  ctx.strokeStyle = '#383838'
  ctx.stroke()

  // Top to bottom 3 lines
  ctx.beginPath()
  ctx.moveTo(0, 105)
  ctx.lineTo(totalWidth, 105)
  ctx.strokeStyle = '#383838'
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(0, 300)
  ctx.lineTo(totalWidth, 300)
  ctx.strokeStyle = '#383838'
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(0, 495)
  ctx.lineTo(totalWidth, 495)
  ctx.strokeStyle = '#383838'
  ctx.stroke()

  // Left to Right 3 lines
  ctx.beginPath()
  ctx.moveTo(totalWidth / 4 - 25, 0)
  ctx.lineTo(totalWidth / 4 - 25, 600)
  ctx.strokeStyle = '#383838'
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(totalWidth / 2, 0)
  ctx.lineTo(totalWidth / 2, 600)
  ctx.strokeStyle = '#383838'
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(totalWidth - totalWidth / 4 + 25, 0)
  ctx.lineTo(totalWidth - totalWidth / 4 + 25, 600)
  ctx.strokeStyle = '#383838'
  ctx.stroke()

  //   draw circle
  ctx.beginPath()
  ctx.ellipse(canvas.width / 2, canvas.height / 2, 200, 193, 0, 0, Math.PI * 2)
  ctx.stroke()
}
