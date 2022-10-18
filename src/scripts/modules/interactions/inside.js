import {Content} from './content.js'
import { gsap, Flip } from "../../../../node_modules/gsap/all.js"
gsap.registerPlugin(Flip);

export class Inside {
  DOM = {
    el: null,
    index: null,
    title: null,
    img: null
  }

  constructor(DOM_el, index){
    this.DOM.el = DOM_el
    this.DOM.index = index
    this.DOM.title = this.DOM.el.querySelector('.item__left-title')
    this.DOM.image = this.DOM.el.querySelector('.placeholder')

    this.items = [...document.querySelectorAll('#item')]
    this.otherItems = this.items.filter((value, pos) => this.DOM.index !== pos)

    this.contents = [];
    [...document.querySelectorAll('#content')].forEach(content => this.contents.push(new Content(content)));
    // this.contents[this.DOM.index]

    this.home = document.querySelector('#content__home')
    this.inside = document.querySelector('#content')

    this.closeBtn = document.querySelector('.close')

    this.showContent =
      gsap.timeline({
        paused: true,
        duration: 1,
        ease: "power1.inOut",
      })
      .addLabel('start', 0)
      .add(() => {
        const state = Flip.getState(this.DOM.image);
        this.DOM.image.classList.toggle("enlarged");
        Flip.from(state, {
          duration: 1,
          ease: "power1.inOut",
        });
      }, 'start')
      .to([this.DOM.title, this.otherItems], {
        opacity: 0,
        visibility: 'hidden'
      }, 'start')
      .to(this.inside, {
        zIndex: 1
      }, 'start')
      .to(this.home, {
        zIndex: -1
      }, 'start')
      .to(this.closeBtn, {
        opacity: 1,
        visibility: 'visible'
      }, 'start+=0.5')
      .addLabel('content', 1.25)
      .to([this.contents[this.DOM.index].DOM.title, this.contents[this.DOM.index].DOM.shots], {
        opacity: 1,
        visibility: 'visible'
      }, 'content')
      .to(this.contents[this.DOM.index].DOM.detail, {
        opacity: 1,
        visibility: 'visible'
      }, 'content+=0.3')
      .to(this.contents[this.DOM.index].DOM.info, {
        opacity: 1,
        visibility: 'visible'
      }, 'content+=0.6')
  }

  playAnimation(){
    this.showContent.play()
  }

  reverseAnimation() {
    this.showContent.reverse()
  }
}
