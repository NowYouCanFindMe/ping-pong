## Starting App

`gulp`


### Keyboard event

`which` property is not supported in IE8 or earlier
`keyCode` conflicts with onkeypress event in Firebox 

There, a combination of the two is needed.

`e.which == 123 || e.keyCode == 123`

### Javascript

`getElementById()` is used to manipulate DOM elements by referencing their respective ids.

`setInterval()` will execute a function multiple times until `clearInterval()` is called. Or the browser window is closed.

### Gulp

Gulp informs the browser of any changes to html, css or javascript files in your project folder. 

To install globally:
`npm install gulp -g`

Within terminal. Start gulp by running: `gulp`

