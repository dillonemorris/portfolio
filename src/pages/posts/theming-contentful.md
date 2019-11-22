---
title: 'Theming with Contentful'
date: 'Update when finished'
excerpt: "In this post I'll be going over an interesting problem I had to solve for while building out the redesign for Synapse Studios' marketing page. We needed a way to store the colors or the 'theme' for the site and use those colors anywhere, in any component so that they can be edited from one source of truth. If we decide to change the theme, those changes should reflect everywhere the colors are being used on the site."
---

In this post I'll be going over an interesting problem I had to solve for while building out the redesign for Synapse Studios' marketing page. We needed a way to store the colors or the 'theme' for the site and use those colors anywhere, in any component so that they can be edited from one source of truth. If we decide to change the theme, those changes should reflect everywhere the colors are being used on the site.

<br />

##Gatsby

Taken from their site:

> Gatsby is a free and open source framework based on React that helps developers build blazing fast websites and apps

<a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">Gatsby</a> allows you to build static sites while writing React. It also allows you to pull data from anywhere and then you use graphQL queries to access that data. The data for the Synapse site is coming from <a href="https://www.contentful.com/" target="_blank" rel="noopener noreferrer">contentful</a>.

##Contenful

Contentul is an "API-based cms" where:

> Editors collaborate on content interactively in an easy-to-use editing interface, while developers use the content with the programming language and templating frameworks of their choice.

<br />
##Using Gatsby w/ contentful

\*_This isn't a tutorial on how to link the 2 together, but here's a <a href="https://github.com/ryanwiemer/gatsby-starter-gcn" target="_blank" rel="noopener noreferrer">great starter package<a/> that will get you up and running fast._

So how can do we use Gatsby with Contentful to create this hero for example:

<Insert hero image>

Notice we have a headline, a tagline and button text, that's the data being displayed. The data is coming from contentful. In contentful, our data looks like this:

<Insert contenftul image>
