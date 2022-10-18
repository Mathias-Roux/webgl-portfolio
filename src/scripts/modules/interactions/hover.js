import { gsap } from "../../../../node_modules/gsap/all.js"

export class Hover {
  DOM = {
    el: null,
    image: null,
    images: null
  }

  constructor(el) {
    this.DOM = {el: el}
    this.DOM.image = this.DOM.el.querySelector('.images')
    this.DOM.images = [...document.querySelectorAll('.images')]
  }

  in() {
    gsap.to(this.DOM.images, {
      duration: .5,
      ease: 'power3.inOut',
      filter: 'grayscale(80%)'
    })
    gsap.to(this.DOM.image, {
      duration: .5,
      ease: 'power3.inOut',
      filter: 'grayscale(0%)',
      transform: 'scale(.245)'
    })
  }

  out() {
    gsap.to(this.DOM.images, {
      duration: .5,
      ease: 'power3.inOut',
      filter: 'grayscale(0%)'
    })
    gsap.to(this.DOM.image, {
      duration: .5,
      ease: 'power3.inOut',
      filter: 'grayscale(0%)',
      transform: 'scale(.25)'
    })
  }

  pointerIn(){
    this.in()
  }

  pointerOut() {
    this.out()
  }
}
