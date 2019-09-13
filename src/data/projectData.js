import Fenix from '../images/fenix.png'
import StormQuestions from '../images/stormquestions.png'
import typewise from '../images/typewise.png'
import uigems from '../images/uigems.png'

const projectData = [
  {
    title: 'UI Gems',
    description:
      'Bringing you the best of the best UI designs from the web. Get inspired to create something great.',
    screenshot: uigems,
    btnText: 'visit site',
    orientation: 'Standard',
    color: 'rgba(96, 93, 238, 1)',
    border: '3px solid rgba(96, 93, 238, 1)',
    boxShadow: '5px 5px rgba(96, 93, 238, .25)',
    boxShadowHover: '5px 5px rgba(96, 93, 238, 1)',
    page: 'https://www.ui-gems.com/',
    skills: ['Gatsby', 'Contentful', 'CSS Grid'],
  },
  {
    title: 'Typewise',
    description:
      'A curated list of the best google fonts. This is a bare bones alternative to the Google Fonts site if you find yourself feeling overwhelmed when choosing fonts.',
    screenshot: typewise,
    btnText: 'visit site',
    orientation: 'Inverted',
    color: 'rgba(38, 128, 194, 1)',
    border: '3px solid rgba(38, 128, 194, 1)',
    boxShadow: '5px 5px rgba(38, 128, 194, .25)',
    boxShadowHover: '5px 5px rgba(38, 128, 194, 1)',
    page: 'https://typewise.xyz/',
    skills: ['React', 'CSS Grid'],
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
