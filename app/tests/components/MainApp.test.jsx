var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var MainApp = require('MainApp');

describe('Todo',()=> {
  it('should exist',()=>{
    expect(MainApp).toBeTruthy();
  });
});
