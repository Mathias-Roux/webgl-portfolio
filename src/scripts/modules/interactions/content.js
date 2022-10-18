export class Content {
  DOM = {
    el: null,
    title: null,
    detail: null,
    info: null,
    shots: null
  }

  constructor(el) {
    this.DOM = { el: el }
    this.DOM.title = this.DOM.el.querySelector('.title')
    this.DOM.detail = this.DOM.el.querySelector('.details')
    this.DOM.info = this.DOM.el.querySelector('.infos')
    this.DOM.shots = this.DOM.el.querySelectorAll('#previews > *')
  }
}
