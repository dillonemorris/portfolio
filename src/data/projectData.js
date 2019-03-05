import Typewise from '../images/typewise.png'
import Dailyui from '../images/daily-ui.jpg'
import Fenix from '../images/fenix.png'
import StormQuestions from '../images/stormquestions.png'

const projectData = [
  {
    title: 'Typewise',
    description:
      "Typewise is a curated list of the best Google Fonts. I love Google Fonts, but I created this because I felt like picking fonts on their site can sometimes be overwhelming (maybe it's just me 🤔).",
    screenshot: Typewise,
    btnText: 'visit site',
    orientation: 'Standard',
    color: 'rgba(38,128,194, 1)',
    border: '3px solid rgba(38,128,194, 1)',
    boxShadow: '5px 5px rgba(38,128,194,.25)',
    boxShadowHover: '5px 5px rgba(38,128,194, 1)',
    page: 'http://typewise.fun/',
  },
  {
    title: 'Storm Questions',
    description:
      "I designed and built this site for a freelance client. I'm really happy with how it came out. It was built using Gatsby, Contenful, and Netlify.",
    screenshot: StormQuestions,
    btnText: 'visit site',
    orientation: 'Inverted',
    color: 'rgba(70, 82, 175, 1)',
    border: '3px solid rgba(70, 82, 175, 1)',
    boxShadow: '5px 5px rgba(70, 82, 175,.25)',
    boxShadowHover: '5px 5px rgba(70, 82, 175, 1)',
    page: 'https://www.stormquestions.com/',
  },
  {
    title: 'Fenix Group Consulting',
    description:
      'This is a marketing site I designed and built for a consulting company called Fenix Group. I went back to my roots with this one and just used plain HTML/CSS.',
    screenshot: Fenix,
    btnText: 'visit site',
    orientation: 'Standard',
    color: 'rgba(38, 128, 194, 1)',
    border: '3px solid rgba(38, 128, 194, 1)',
    boxShadow: '5px 5px rgba(38, 128, 194, .4)',
    boxShadowHover: '5px 5px rgba(38, 128, 194, 1)',
    page: 'https://fnxgrp.com/',
  },
  {
    title: 'Daily UI',
    description:
      "If you're not familiar, Daily UI helps you to become a better designer in 100 days. It is a design challenge I partake in whenever I have downtime.",
    screenshot: Dailyui,
    btnText: 'see all designs',
    orientation: 'Inverted',
    color: 'rgba(108, 99, 255, 1)',
    border: '3px solid rgba(108, 99, 255, 1)',
    boxShadow: '5px 5px rgba(108, 99, 255, .4)',
    boxShadowHover: '5px 5px rgba(108, 99, 255, 1)',
    page: 'https://dribbble.com/dillonmorris/',
  },
]

export default projectData
