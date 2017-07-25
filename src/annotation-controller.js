'use strict'

export default function annotationController (konvaService) {
  let stage

  this.$onInit = () => {
    stage = new konvaService.Stage()
  }
}

