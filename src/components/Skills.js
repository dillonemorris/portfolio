import React from 'react'
import injectSheet from 'react-jss'
import SkillTitle from '../components/SkillTitle'
import SkillPill from '../components/SkillPill'
import skillData from '../data/skillData'

const Skills = ({ classes }) => (
  <div id="target" className={classes.bgWrapper}>
    <div className={classes.container}>
      <h1 className={classes.myHeading}>Skills</h1>
      <div className={classes.paragraph}>
        I have skills in both UI/UX Design and Front End Development. Being able
        to take a product or feature from idea to implementation is what thrills
        me.
      </div>
      <div>
        {Object.keys(skillData).map(skill => {
          const skillObject = skillData[skill]
          return (
            <div key={skillObject.title}>
              <SkillTitle title={skillObject.title} />
              <div className={classes.skillsContainer}>
                {skillObject.skills.map((skill, i) => {
                  return <SkillPill key={i} text={skill} />
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  </div>
)

const styles = {
  container: {
    margin: '0px auto',
    maxWidth: '1080px',
    padding: '60px 1.0875rem 40px',
  },
  bgWrapper: {
    backgroundColor: '#f4f4f4',
    width: '100vw',
    position: 'relative',
    left: '50%',
    right: '50%',
    marginLeft: '-50vw',
    marginRight: '-50vw',
  },
  myHeading: {
    color: '#414141',
    fontWeight: '500',
    fontFamily:
      "Inter UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important",
    fontSize: '32px',
    letterSpacing: '.3px',

    '@media (min-width: 700px)': {
      fontSize: '40px',
    },
  },
  paragraph: {
    color: '#606571',
    fontFamily:
      "Inter UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important",
    paddingBottom: '50px',
    lineHeight: '1.5',
    maxWidth: '400px',
  },
  skillsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingBottom: '40px',
  },
}

export default injectSheet(styles)(Skills)
