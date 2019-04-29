---
title: 'Helpful Snippets: scrollTo()'
date: 'April 15, 2019'
excerpt: 'This post is part of a series I am calling "Helpful Snippets." A lot of the times as Web Developers we learn on the fly, googling around for a solution or cobbling together one on your own. My goal is to share solutions I find through that process in hopes I can save someone a few minutes of pain.'
---

This post is part of a series I am calling "Helpful Snippets." A lot of the times as Web Developers we learn on the fly, googling around for a solution or cobbling together one on your own. My goal is to share solutions I find through that process in hopes I can save someone a few minutes of pain.

<br />

##I wanted to share a solution for scrolling the window down to a certain element on click.

I discovered this solution while building a passion project called UI Gems.

Here's a screenshot to help visualize what my end goal was:

<img style="margin: 0px 0px 20px" src="https://drive.google.com/uc?id=1U_5xsn_hCAlBJulUEbs6Ib0-yzgYoKO2" />

See that link that says "Get Inspired?" When a user clicks that, the page or "window" should scroll down so much so that the Filter Bar (Sign in, Hero, Pricing etc.) is at the very top of the window.

<img style="margin: 16px 0px" src="https://drive.google.com/uc?id=1bmj3w3O57uHQBDdprGBv2z0QYOkhtr-H" />

My first instinct was to grab the native <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView" target="_blank" rel="noopener noreferrer">scrollIntoView()</a> function, which has helped me achieve this sort of functionality before. However, there is a caveat to that function which is: What if the target element is already in view?

What happens is, well nothing. See, normally something like the below works quite well:

```js
handleClick = () => {
  const el = document.getElementById('target')
  el.scrollIntoView()
}
```

However, if the element is already in view, the browser knows this and so does not scroll the window at all.

So what to do now? Let's see if there is another scroll method that may work for our purposes. This hunt naturally leads us to the <strong>scrollTo</strong> function. Another function which is native to Javascript but is a bit more customizable.
<br />
<br />

##scrollTo()
The way scrollTo works is pretty easy to understand, a brief look at the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo" target="_blank" rel="noopener noreferrer">MDN docs</a> should give you a general idea of how it works. We'll have to customize it a bit though to get it to work for our purposes. First we'll determine what our "scroll target" is. In this case, it is the top of what we're calling the filterBar.

This guy:

<img style="margin: 0px 0px 20px" src="https://drive.google.com/uc?id=1ajtn2M6_lqhCIThptX-Zoxwx-saLCB4a" />

<br />

Let's first create a variable for that element:

```js
const el = document.getElementById('target')
```

<br />
The above also requires we give the actual element an id of target:

```js
<FilterBar id="target" />
```

<br />
Next, we need to know the target's location in the DOM, in pixels.

Luckily we have another handy method which we can use to grab that.

```js
const target = el.getBoundingClientRect().top
```

<br />
The <strong>.top</strong> method reads the relative distance of the current element relative to the topmost part of the window.

<br />
<br />
So now that we have the pixel value of our target, all we need to do is scroll the window down to that location. Before we do that, there's one last consideration. What if the user has scrolled the window down, say 20px? Well our target variable will now be 20px closer, thus changing our target's value.
<br />
<br />
To account for this, we'll want to know how many pixels the user has scrolled down. We do this be using <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY" target="_blank" rel="noopener noreferrer">window.scrollY</a>. Now we simply add those values together to get our <strong>endPosition</strong>, which will be our final target value.

<br />
<br />

```js
handleClick = () => {
  const el = document.getElementById('target')
  const target = el.getBoundingClientRect().top
  const endPosition = target + window.scrollY

  return window.scrollTo({
    top: endPosition,
    left: 0,
    behavior: 'smooth',
  })
}
```

<br />
Thanks for reading!
