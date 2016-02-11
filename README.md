# Starter files for MP1
Use the following commands in your vagrant development environment to get this up and running
```bash
git clone https://github.com/uiuc-web-programming/mp1_starter.git
cd mp1_starter
npm install
bower install
grunt compass
grunt uglify
grunt serve
(the last three steps can be done together by just saying "grunt")
```

For MP1, you should edit the following:
- `public/index.html` - this html file is served by default. You are going to change this for your MP.
- `source_sass` folder - all sass files here will be compiled to `public/css/styles.css`
- `js` folder - all javascript files here will be uglified and put in `public/js/script.js`
- `public/media` - all your media files (images, videos, GIFs etc. ) go here. Use relative path to access these from your HTML files.

**Do not edit anything under the `public\css` and `public\js` folders.** All things there are auto-generated and any changes you make there will get overwritten by Grunt.

**Required Features**

Your webpage will have to implement the features listed below. Note that the examples are only meant to illustrate the features. You do not have to make you webpage look similar to the examples. You just have to incorporate that feature in some form.

**bold** is incomplete

1. Layout: All content must be laid out in a single page with full-width horizontal stripes/sections including a header and a footer - Example
1. Sticky Navbar: A top navigation bar that sticks to the top of the window when scrolling Example
1. Position Indicator: Indicator of the current reading position visible in the navigation bar (see above gif for example). Make sure your implementation highlights the last menu item when you scroll to the bottom of the page.
1. Navbar Resizing: Navigation bar must be larger when users are at the top of the page. As users start scrolling down, it should resize and become smaller - Example
1. Smooth Scrolling: Smooth scrolling when navigating to a different section using the navigation bar Example
1. Carousel: A section with a carousel/slider using a minimum of three slides. It should include the navigation arrows on the side - Example
1. Multi-column layout: A section with Multi-column content - Example
1. Centering: Content in each horizontal stripe/section must be horizontally centered. At least one element on the page must be vertically centered. The vertically-centered element should remain centered even if the dimensions of its outer element changes.
1. Background Image: A section which uses a fixed-position background image - Example
1. Modal: A section which uses modal windows with additional content - Example
1. Video: Embedded video using HTML5 video tag - Example
1. CSS3 Animations: At least one use of CSS3 animations (e.g. fade in/out, transitions)
1. At least one use of scalable vector icons through CSS (e.g. FontAwesome)
1. Inclusion of social media icons
1. Extra Credit: create a original favicon for your page. The best favicon will be used for the class webpage.