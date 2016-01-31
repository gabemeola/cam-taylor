# Taylor and Cameron's Wedding App
I created a Web App for my good friend Cameron his new wife Taylor focused on ease of RSVP management. 

Components of the app are ui routes, rsvp form, registry data, backend to store that data. Also i included a admin site to allow the couple to change their bios and easily view the RSVPs to keep track of things like, number of people coming, and to quickly call, text, or email any of the RSVP recipients.

Tech Use: HTML5, CSS3, Javascript, ES2015, [Angularjs](https://angularjs.org/), [Angular UI-Router](https://github.com/angular-ui/ui-router), Angular Animate, [ngMap](https://github.com/allenhwkim/angularjs-google-maps), Firebase, and Webpack

## Installation

### Webpack
Webpack is a compiler that will compile your files into one bundled javascipt file. 

Webpack allows loader (such as babel) to ease the development process such as transforming ES2015 into ES5 javascipt that browser today can understand.

We can even pass in non-javascipt files like sass, css, and pngs with loaders which in turn will spit out a bundled css, javascript and optimized images.


First Install Webpack with node
```sh
$ npm install webpack -g
```
Webpack grabs all of your files you put into your entry file (entry.js) and exports it into one bundle .js file.

Webpack uses Nodejs' require. So to add another file just reference it like so
```
require( '.\/dirname/filename.js');
```

In our entry.js file we also can inject external libraries like angularjs with ethier require or the hip new ES2015 import with
```
import angular from "angular";
```
Webpack will look in our npm or bower(configurable) directory for the angular file and import it into our code. This is alos great for IDEs and autocompletion.

To export your new bundle file just run
```sh
$ webpack
```
This will export your javascript to /js/bundle.js

Your SASS/CSS to main.css

Also you can run a live server that will auto update on any saved change to your files
```sh
$ webpack-dev-server
or 
$ npm start
```
When your app is ready for production run
```sh
$ webpack -p
```
This will create a minified version of your CSS and Javascript

Make sure to run it from the main directory where webpack.config.js is located.

### SASS
First install SASS with Ruby

For Mac
```sh
$ sudo gem install sass
```
For Windows
[SASS installer](http://rubyinstaller.org/)

SASS compiles .sass files into css.
We can add sass files to our entry.sass files with @import 
```
@import 'reset'
@import 'header'
@import 'footer'
```
This is exporting to main.css
##### SASS Rules
SASS is dependant entirely on indentation so..

Keep SASS happy buy using TAB(size = 2) not SPACES

SASS recognizes _filename.sass template files as filename.sass, so just add @import and you're good.
