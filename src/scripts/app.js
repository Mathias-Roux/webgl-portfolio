import { Inside } from './modules/interactions/inside.js';
import { Hover } from './modules/interactions/hover.js';

import './modules/loading/lazy-image.js'


const insides = [];
[...document.querySelectorAll('#item')].forEach((item, index) => insides.push(new Inside(item, index)));

const hovers = [];
[...document.querySelectorAll('.placeholder')].forEach(placeholder => hovers.push(new Hover(placeholder)));

const closeBtn = document.querySelector('.close')

for (const inside of insides) {
  inside.DOM.image.addEventListener('click', () => {
    inside.playAnimation()
    //Disable hover aniamtion
    inside.DOM.image.style.pointerEvents = 'none'
  })
  closeBtn.addEventListener('click', () => {
    inside.reverseAnimation()
    //Anable hover aniamtion
    inside.DOM.image.style.pointerEvents = 'auto'
  })
}

for(const hover of hovers){
    hover.DOM.image.addEventListener('mouseenter', () => hover.in())
    hover.DOM.image.addEventListener('mouseleave', () => hover.out())
}


let speed = 0;
let position = 0;
let itemsDiv = document.querySelector('.items')
window.addEventListener('wheel', (e) => {
  speed += e.deltaY * 0.0003;
})

const raf = () => {
  position += speed;
  speed *= 0.8;

  itemsDiv.style.transform = `translate3d(0,${position * 100}px,0)`

  window.requestAnimationFrame(raf)

}



raf();
