'use strict'

let array = ['url("images/mt-pilchuck.png")', 'url("images/prague.png")', 'url("images/tokyo.png")', 'url("images/lion.png")', 'url("images/tokyo-lily.png")'];

let newFunction = () => {
  setInterval(function(){
    $('section.one').css({'background-image':array[1]});
  }, 5000);
  setInterval(function(){
    $('section.one').css({'background-image':array[2]});
  }, 10000);
  setInterval(function(){
    $('section.one').css({'background-image':array[3]});
  }, 15000);
  setInterval(function(){
    $('section.one').css({'background-image':array[4]});
  }, 20000);
  setInterval(function(){
    $('section.one').css({'background-image':array[0]});
  }, 25000);
}

newFunction();