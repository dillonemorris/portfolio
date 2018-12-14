import React from 'react'
import injectSheet from 'react-jss'
import duotone from '../images/duotone.jpg'

const AboutHero = ({ classes }) => (
  <div className={classes.container}>
    <img className={classes.left} src={duotone} />
    <div className={classes.right}>
      <h1 className={classes.myHeading}>About</h1>
      <div className={classes.paragraph}>
        I love learning. I strive to improve my craft every day. I see
        challenges as opportunities for growth and embrace them with open arms.
      </div>
      <div className={classes.paragraph}>
        In my current role, I am fortunate enough to be able to apply creative
        and analytical thinking to solve problems in both design and
        engineering.
      </div>
      <div className={classes.paragraph}>
        Away from the screen I enjoy playing music, spending time with my lovely
        girlfriend, and getting to bed by 9pm 👴🏻.
      </div>
    </div>
  </div>
)

const styles = {
  container: {
    padding: '50px 0px',
    display: 'flex',
    flexDirection: 'column',

    '@media (min-width: 700px)': {
      flexDirection: 'row',
      padding: '160px 0px',
    },
  },
  myHeading: {
    color: '#414141',
    fontWeight: '500',
    fontFamily: 'Inter UI',
    fontSize: '32px',
    letterSpacing: '.3px',

    '@media (min-width: 700px)': {
      fontSize: '40px',
    },
  },
  right: {
    display: 'flex',
    flexDirection: 'column',
  },
  paragraph: {
    color: '#606571',
    fontFamily: 'Inter UI',
    paddingBottom: '20px',
    lineHeight: '1.5',
  },
  link: {
    color: '#4183D7',
    textDecoration: 'none',
  },
  left: {
    paddingBottom: '30px',

    '@media (min-width: 700px)': {
      maxWidth: '350px',
      maxHeight: '220px',
      marginRight: '40px',
      paddingBottom: '0px',
    },

    '@media (min-width: 900px)': {
      maxWidth: '450px',
      maxHeight: '320px',
      marginRight: '60px',
      // paddingBottom: '0px',
    },

    '@media (min-width: 1030px)': {
      maxWidth: '475px',
      maxHeight: '350px',
      marginRight: '80px',
      // paddingBottom: '0px',
    },
  },
}

export default injectSheet(styles)(AboutHero)
