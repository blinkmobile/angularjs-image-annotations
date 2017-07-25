'use strict'

import './annotation-component.css'
import template from './annotation-component.html'


function annotationScreenController (konvaService) {
 // console.log

 this.close = () => this.onCloseClick()
}

export default {
  template,
  controller: annotationScreenController,
  bindings: {
    onCloseClick : '&'
  }
}
