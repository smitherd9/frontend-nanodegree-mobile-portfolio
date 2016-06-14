## Website Performance Optimization portfolio project

Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, check out the repository, inspect the code,

### Getting started

####Part 1: Optimize PageSpeed Insights score for index.html

How to run index.html through PageSpeed Insights

1. Clone the repository
2. To inspect the site, you will need to run a local server

  In command prompt:
  $> cd /path/to/your-project-folder
  $> Make sure Python is listed in the path by typing 'path' and hitting 'enter'
  $> If it is not listed, you will need to add it by typing path cd /path/to/python; (Example: c:/python35-32;) %path%
  $> This should add a path to python to your project directory.  To start the local sever in python 3 and above, type:
  $> python -m http.server 8080
  $> To start the local server in versions before 3, type:
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
2. Download and install [ngrok](https://ngrok.com/) to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ngrok http 8080
  ```
  Ngrok will then generate a url that you can use to test in PageSpeed Insights.

3. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! Optional: [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

#### To Build the Project
1. Download and install nodeJS, Grunt and NPM.
2. After installing nodeJS, cd to the project directory and type:
   npm install
This will install the node modules and dependencies.  After this, you should be able to run Grunt.


##### Steps taken to achieve PageSpeed score of at least 90:

1. Eliminated render-blocking by loading JS asynchronously
2. Inlined critical CSS and minified JS by using Grunt critical and uglify



####Part 2: Optimize Frames per Second in pizza.html

##### Steps taken to achieve 60 FPS

1. De-nested functions from other functions where necessary so that they don't run more than needed
2. Changed document.querySelector to the more efficient document.getElementById or document.getElementByClassName
3. Reduced number of pizzas created from 200 to 18
4. Moved variables outside of for loops where necessary such as in the updatePositions function
5. Used CSS transform instead of style.left








To optimize views/pizza.html, you will need to modify views/js/main.js until your frames per second rate is 60 fps or higher. You will find instructive comments in main.js.

You might find the FPS Counter/HUD Display useful in Chrome developer tools described here: [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks).

### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>
