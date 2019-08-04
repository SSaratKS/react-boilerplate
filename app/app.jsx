var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var MainApp = require('MainApp');

//Load foundation
$(document).foundation();

//app CSS
require('style-loader!css-loader!sass-loader!applicationStyles');

//Common react-DOM methxod
ReactDOM.render(
  //Render the greeter tag
  <MainApp/>,
  document.getElementById('app')
);
