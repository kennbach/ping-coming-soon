# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty. The message for this error should say _"Whoops! It looks like you forgot to add your email"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Please provide a valid email address"_

### Screenshot

Mobile
![](screenshot-mobile.png)

Desktop
![](screenshot-desktop.png)

### Links

- Solution URL: [https://github.com/kennbach/ping-coming-soon](https://github.com/kennbach/ping-coming-soon)
- Live Site URL: [https://kennbach.github.io/ping-coming-soon/](https://kennbach.github.io/ping-coming-soon/)

## My process

### Built with

- Semantic HTML5 markup
- CSS Variables
- CSS Grid
- Vanilla JavaScript
- Mobile-first workflow
- Accessibility Aware

### What I learned

This time around I learned the difference between align-items vs align-content, and justify-items vs justify content when using css grid. I didn't notice that I previously was using them interchangeably. I also keep reinforcing just how useful and quickly a grid-area can accomplish a layout shift.

### Continued development

Moving forward I want to work on better organization of the styles and their naming convention. I spend a lot of time renaming styles over and over, so a concrete scheme should save a lot of time.

I'm also questioning the "mobile-first" development strategy. Some of the desktop styles require a lot pre-planning in the html, or you end up making some changes that jumble the html and css up a bit. However, going the "desktop-first" route would make the mobile alteration fairly simple, since it is mostly just stacking all the block elements? We will see ...

### Useful resources

- [The Net Ninja: HTML & CSS Crash Course](https://youtube.com/playlist?list=PL4cUxeGkcC9ivBf_eKCPIAYXWzLlPAm6G) - This is a great resource to learn or refresh your HTML and CSS knowledge from the ground up.

- [The Net Ninja: CSS Variables](https://youtube.com/playlist?list=PL4cUxeGkcC9ii5PB2UMyYH7QFZWfGnVgZ) - This is a great resource to learn CSS variables.

- [The Net Ninja: CSS Grid](https://youtube.com/playlist?list=PL4cUxeGkcC9itC4TxYMzFCfveyutyPOCY) - This is a great resource to learn CSS grid.

- [Kevin Powell: Are you using the right CSS units?](https://youtu.be/N5wpD9Ov_To) - There are a lot of different units that we can use when writing CSS, in this video Kevin gives some general rules of thumb of which ones are best suited for which situations. This is also where I learned how to convert the root font-size to base-10.

- [Kevin Powell: Solutions to common struggles](https://www.youtube.com/playlist?list=PL4-IK0AVhVjMbyomzxwNOECQwioJLxX6n) - The title says it all.

- [Email Address Regular Expression That 99.99% Works.](https://emailregex.com) - A great resource for getting a thorough regular expression test of email addresses for a variety of programming languages.

- Both, [Kevin Powell](https://www.youtube.com/kepowob) and [The Net Ninja](https://www.youtube.com/c/TheNetNinja) have a virtual-ton of great web app development tutorials. I only listed a few above, but there are many, many more.

## Author

- Github - [kennbach](https://github.com/kennbach)
- Frontend Mentor - [@kennbach](https://www.frontendmentor.io/profile/kennbach)
