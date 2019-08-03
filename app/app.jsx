var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//Load foundation
$(document).foundation();

//app CSS
require('style-loader!css-loader!sass-loader!applicationStyles');

//Common react-DOM methxod
ReactDOM.render(
  //Render the greeter tag
  <p>Boilerplate 3 Project</p>,
  document.getElementById('app')
);
