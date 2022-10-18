var app = (function () {
  'use strict';

  var app = "import{Inside}from './modules/interactions/inside.js';import{Hover}from './modules/interactions/hover.js';import './modules/loading/lazy-image.js'import './modules/webgl/sketch.js'const insides=[];[...document.querySelectorAll('#item')].forEach(item=>insides.push(new Inside(item)));const hovers=[];[...document.querySelectorAll('.placeholder')].forEach(placeholder=>hovers.push(new Hover(placeholder)));const closeBtn=document.querySelector('.close')let isInside=falsefor(const inside of insides){inside.DOM.image.addEventListener('click',()=>{inside.playAnimation()inside.DOM.image.style.pointerEvents='none'isInside=!isInside})closeBtn.addEventListener('click',()=>{inside.reverseAnimation()inside.DOM.image.style.pointerEvents='auto'isInside=!isInside})}for(const hover of hovers){hover.DOM.image.addEventListener('mouseenter',()=>hover.in())hover.DOM.image.addEventListener('mouseleave',()=>hover.out())}";

  return app;

})();
