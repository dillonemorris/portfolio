---
title: 'Another Blog Post'
date: 'October 12, 2018'
excerpt: 'A well designed user interface is like a great song. It pulls you in, it relates to you, it somehow knows your wants, your needs, your struggles and your desires. Although neither a web page or a piece of music are tangible, physical things, they nevertheless can prove to be highly valuable and meaningful, adding beauty, clarity, and purpose to our lives if crafted intelligently.'
---

Sample blog post

```js
const ProjectStandard = ({
  classes,
  title,
  description,
  screenshot,
  btnText,
}) => (
  <div className={classes.wrapper}>
    <div className={classes.container}>
      <h1 className={classes.title}>{title}</h1>
      <p className={classes.description}>{description}</p>
      <Button text={btnText} fontSize={14} page={'http://typewise.fun/'} />
    </div>
    <div className={classes.projectContainer}>
      <img
        className={classes.screenshot}
        src={screenshot}
        alt={'screenshot of project'}
      />
    </div>
  </div>
)
```
