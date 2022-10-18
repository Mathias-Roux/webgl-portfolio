import './modules/loading/lazy-image.js'
import Sketch from './modules/sketch.js'

let sketch = new Sketch({
  domElement: document.getElementById('container')
})

const closeBtn = document.querySelector('.close')




let speed = 0;
let position = 0;
let rounded = 0;
let itemsDiv = document.querySelector('.items')
window.addEventListener('wheel', (e) => {
  speed += e.deltaY * 0.0003;
})

const raf = () => {
  position += speed;
  speed *= 0.8;

  rounded = Math.round(position);
  let diff = (rounded - position)

  position += Math.sign(diff)*Math.pow(Math.abs(diff),0.7)*0.015;
  itemsDiv.style.transform = `translate3d(0,${-position * 100 + 50}px,0)`

  window.requestAnimationFrame(raf)

}



raf();
