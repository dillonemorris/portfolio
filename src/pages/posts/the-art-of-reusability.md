---
title: 'The Art of Reusability'
date: 'October 19, 2018'
excerpt: 'Taking you through my process of building this here site and how I approached it with reusability as a primary goal. With content based sites such as a portfolio, you or whoever is updating/adding content should be able to do so within a preexisting framework. Reusability is a fundamental principle and concept to understand before building modern websites or apps.'
---

I'll be taking you through my process of building this site and how I set it up for optimum reusability. With content based sites such as a portfolio, you or whoever is updating/adding content should be able to do so within a preexisting framework. Reusability is a fundamental principle and concept to understand before building modern websites or apps. I sort of understood it as an abstract concept, but having built this site with reusability as a primary goal, I feel I now fully understand the importance of it and some ways to achieve it.

<br />

##React & "Reusable Components"

Admittedly, I haven't ventured too far beyond the ever-expanding confines of the React world. I sort of stumbled into it, blindly following advice from friends/mentors that this was the framework I should be learning. Of course, at the time I was given this advice I had no idea what React was or why I should be learning it. Now I can confidently say I'm very happy I blindly followed that advice and invested time in learning React. Needless to say, React was the tool I reached for by default when building out this site.

React is based on the concept of "reusable components." With React Components, you can take an element or section of your site and reuse it across different pages without having to rewrite or duplicate any code.

Components are flexible in that they can take in data which can be added to or updated, thus helping you achieve greater reusability. In this post I'll go over the components I created for this site and how I set them up to take in new data (content).

At the time of writing this post, the site is pretty slim in the content department. The are only a few projects and blog posts to speak of, but of course I want to continue adding content to the site without having to code any new pieces. React allows you to do this in a pretty straightforward way.

<br />

##Gatsby and Netlify

Gatsby is a tool that allows you to build "blazing fast apps and websites with React." On the development side, it's truly amazing how quickly you can get a Gatsby project up and running. I won't spoil it, just do yourself a favor and give it a whirl. Gatsby's docs and tutorials are some of the best around, making it easy and fun to learn.

As far as deployment, I went with Netlify. Netlify and Gatsby are besties. Essentially all you need to do deploy your Gatsby site is this:

1. Install gatsby-plugin-netlify
2. Log in to Netlify using your Github credentials
3. Create a "new site from Github" in Netlify
4. Choose the Github repo of your project
5. Click "deploy site"

For a more in-depth tutorial of that process you can check out the step by step guide
<a href="https://www.netlify.com/blog/2016/02/24/a-step-by-step-guide-gatsby-on-netlify/" target="_blank" rel="noopener noreferrer">here</a>, but that's pretty much it

<br />

##Creating reusable components

With setup out of the way, we can now dive into the code. Below I'll break down a few of the components I built for this site and how they are dynamic, fluid, and essentially blank canvases, taking in whatever new content we give them.

\*_For the styling of this site I used JSS. For brevity's sake, I've left out any JSS specific stuff in my code snippets so we can focus purely on React. I've also left out any import and export statements._

###The Button Component

The button was the first element of the site that jumped out at me as being a strong candidate for componentization. It's used all over the site and maintains the same border and box-shadow styles and the functionality of linking to another page.

Here is the Button component in it's original form.

\*_Link is a Gatsby-specific thing that allows you to link to other pages within your site._

```js
const Button => {

  return (
    <Link to="/about/">
      <button>More about me</button>
    </Link>
  )
}
```

As you can see, it was initially pretty bare bones and didn't lend itself to being re-used. This is because I started the site by building out the homepage, and "More about me" was the text being used there while "/about/" was the page I wanted to link to. However, as I started to built out other pages I realized I was going to want the component to take in some unique data depending on where it was being used. This is where the power of "props" comes in.

```js
const Button = ({ text, fontSize, page }) => {
  return (
    <Link style={{ fontSize: `${fontSize}px` }} to={page}>
      <button>{text}</button>
    </Link>
  )
}
```

Our props (text, fontSize, page) are simply arbitrary inputs that the component accepts and which determine what should appear on the screen. So when rendering this component, we simply define the values of our props to whatever page-specific values we'd like.

Here is what the component looks like when rendered out onto the homepage:

```js
<Button text={'more about me'} fontSize={14} page={'/about/'} />
```

And at the bottom of each blog post:

```js
<Button text={'back to writing'} fontSize={14} page={'/writing/'} />
```

As you can see, we simply set the values of the props that our component is now expecting. And just like that we have a re-usable, dynamic component!

This Button component works great but it's not quite there yet. Remember how I mentioned that Link is a Gatsby specific thing that allows you to link to an internal page? Well what happens if we want to link to an external site as in the "projects" page? Unfortunately Gatsby's Link doesn't allow you to do that. Hmmm...what to do  🤔? Do we just have to "hard code" a button and use a traditional `<a href="">` tag? That doesn't seem like the most "reusable" solution. Fortunately, Gatsby has a doc for this specific scenario. Gatsby docs FTW yet again 🎉.

Following the steps in the <a href="https://www.gatsbyjs.org/docs/gatsby-link/#use-link-only-for-internal-links" target="_blank" rel="noopener noreferrer">doc</a>, I was able to set up a check which looks at the "page" prop passed in and determines whether or not it's an internal or external link. Essentially, if that prop starts with a "/" a Link is rendered, otherwise a traditional `<a href="">` tag is rendered, thus allowing us to link to an external page.

Here's what the component looks like at the time of writing:

```js
const Button = ({ text, fontSize, page }) => {
  const internal = /^\/(?!\/)/.test(page)

  if (internal) {
    return (
      <Link style={{ fontSize: `${fontSize}px` }} to={page}>
        <button>{text}</button>
      </Link>
    )
  }
  return (
    <a target="_blank" href={page} rel="noopener noreferrer">
      <button>{text}</button>
    </a>
  )
}
```

And we now have a dynamic component that can be used anywhere on the page. We can pass it a unique fontSize, text, and link to both internal and external pages.

Pretty neat huh 🤓 ?

<br />

### ProjectStandard and ProjectInverted

Now for a look at 2 more reusable components:

If you look at the projects page, for each project, what we have is a heading, description and a screenshot of each project, as well as unique text for each button. As you go down the page you'll notice that the design for each project section is the same, just inverted. Hence the names of the components being rendered, which I've named ProjectStandard and ProjectInverted.

What we want to be able to do is to change or add to the content of these components (heading, description, image, button text) easily and efficiently.

Let's say I just completed a new personal project and want to display it on the page. If the ProjectStandard component is not set up to take in this new data, I'll have to create an entirely new project component to display the new data. This doesn't sound like a very "reusable" approach does it?

So we need to store our data in a separate file, iterate over that data, and send it through to our components. Easy enough, right?

Here is what our data is going to look like:

```js
const projectData = [
  {
    title: 'Typewise',
    description:
      'Typewise is a curated list of the best Google Fonts. You can filter between Display, serif, or sans-serif fonts and there are links to the Google Fonts page for each font or you can simply download the font directly.',
    screenshot: Typewise,
    btnText: 'visit site',
    orientation: 'Standard',
  },
  {
    title: 'Daily UI',
    description:
      "If you're not familiar, Daily UI helps you to become a better designer in 100 days. It is a design challenge I partake in whenever I have downtime.",
    screenshot: Dailyui,
    btnText: 'see all designs',
    orientation: 'Inverted',
  },
]
```

Here we have an array of objects, each object corresponding to an individual project with a title, description,screenshot and btnText. The "orientatation" of each project will determine whether a ProjectStandard or ProjectInverted component is rendered. Let's set up some functionality by passing this data through to our components.

These two components live inside a parent component at `components/projects.js`. This is where we'll be pulling in the data, iterating over it and spitting out our 2 project components.

The best way to do this is to use the `.map()` array method like so:

```js
import projectData from '../data/projectData'

const Projects = () => (
    <div>
      {projectData.map(project => {
            return (
              <ProjectStandard
                key={i}
                title={project.title}
                description={project.description}
                screenshot={project.screenshot}
                btnText={project.btnText}
              />
            )
          }
      })}
    </div>
)
```

First, we're importing our data and mapping over it. The result of which gives us all of the key/value pairs we set in our projectData. Now that we have that data, it's as simple as attaching it as props to our component in our return method.

Now we simply bring those props through and display them in our project component like so:

```js
const ProjectStandard = ({
  title,
  description,
  screenshot,
  btnText,
}) => (
      <div>
        <img
          src={screenshot}
          alt={'screenshot of project'}
        />
      </div>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <Button
          text={btnText}
          fontSize={14}
          page={'https://dribbble.com/dillonmorris/'}
        />
      </div>
    )
```

This takes care of displaying our ProjectStandard component with actual data, but we also need to display our ProjectInverted component. Remember how we set up the "orientation" key in our projectData objects? Well here's where that becomes super-handy. By using a simple switch statement, we can tell our parent component whether or not we want a Standard or Inverted component based on the orientation we set in our projectData.

This is how that will look:

```js
const Projects = ({ classes }) => (
  <div>
    {data.map(project => {
      switch (project.orientation) {
        case 'Standard': {
          return (
            <ProjectStandard
              key={i}
              title={project.title}
              description={project.description}
              screenshot={project.screenshot}
              btnText={project.btnText}
            />
          )
        }
        case 'Inverted': {
          return (
            <div className={classes.bgWrapperGrey}>
              <div className={classes.projectWrapper}>
                <ProjectInverted
                  key={i}
                  title={project.title}
                  description={project.description}
                  screenshot={project.screenshot}
                  btnText={project.btnText}
                />
              </div>
            </div>
          )
        }
        default: {
          return null
        }
      }
    })}
  </div>
)
```

And there you have it! Now we are free to add new projects or update existing projects without doing anything other than modifying our projectData file.

<br />

## Conclusion

This is a simple yet powerful way of setting up components. React's props make it so straightforward and easy to achieve this functionality. I'm pretty happy with how these components turned out and hopefully you got something out of this article if you've read this far.

Thanks for reading, happy hacking 👨‍💻 👩‍💻
