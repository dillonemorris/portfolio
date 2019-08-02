import CWCVentures from '../images/cwcventures.png'
import Fenix from '../images/fenix.png'
import StormQuestions from '../images/stormquestions.png'
import typewise from '../images/typewise.png'

const projectData = [
  {
    title: 'Typewise',
    description:
      'A curated list of the best google fonts. This is a bare bones alternative to the Google Fonts site if you find yourself feeling overwhelmed when choosing fonts.',
    screenshot: typewise,
    btnText: 'visit site',
    orientation: 'Standard',
    color: 'rgba(38, 128, 194, 1)',
    border: '3px solid rgba(38, 128, 194, 1)',
    boxShadow: '5px 5px rgba(38, 128, 194, .25)',
    boxShadowHover: '5px 5px rgba(38, 128, 194, 1)',
    page: 'https://typewise.xyz/',
    skills: ['React', 'CSS Grid'],
  },
  {
    title: 'CWC Ventures',
    description:
      'I designed and built this single-page site and came up with the brand colors, the logo, and the overall look and feel.',
    screenshot: CWCVentures,
    btnText: 'visit site',
    orientation: 'Inverted',
    color: 'rgba(76, 99, 181, 1)',
    border: '3px solid rgba(76, 99, 181, 1)',
    boxShadow: '5px 5px rgba(76, 99, 181, .25)',
    boxShadowHover: '5px 5px rgba(76, 99, 181, 1)',
    page: 'https://www.cwcventures.com/',
    skills: ['HTML5', 'CSS3'],
  },
  {
    title: 'Storm Questions',
    description:
      "I designed and built this site for a freelance client. I'm really happy with how it came out.",
    screenshot: StormQuestions,
    btnText: 'visit site',
    orientation: 'Standard',
    color: 'rgba(70, 82, 175, 1)',
    border: '3px solid rgba(70, 82, 175, 1)',
    boxShadow: '5px 5px rgba(70, 82, 175,.25)',
    boxShadowHover: '5px 5px rgba(70, 82, 175, 1)',
    page: 'https://www.stormquestions.com/',
    skills: ['Gatsby', 'Contentful', 'React'],
  },
  {
    title: 'Fenix Group Consulting',
    description:
      'This is a marketing site I designed and built for a consulting company called Fenix Group.',
    screenshot: Fenix,
    btnText: 'visit site',
    orientation: 'Inverted',
    color: 'rgba(38, 128, 194, 1)',
    border: '3px solid rgba(38, 128, 194, 1)',
    boxShadow: '5px 5px rgba(38, 128, 194, .4)',
    boxShadowHover: '5px 5px rgba(38, 128, 194, 1)',
    page: 'https://fnxgrp.com/',
    skills: ['CSS', 'Javascript'],
  },
]

export default projectData
