'use strict'

import konvaService from './konva-service.js'
import annotationDirective from './annotation-directive/annotation-directive.js'
import annotationComponent from './annotation-component/annotation-component.js'

angular.module('bmImageAnnotations', [])
  .service('konvaService', konvaService)
  .directive('bmAnnotate', annotationDirective)
  .component('annotationComponent', annotationComponent)
