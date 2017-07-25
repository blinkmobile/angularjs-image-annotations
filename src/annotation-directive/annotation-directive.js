'use strict'

import './annotation-directive.css'

export default ['$compile', '$document',
function ($compile, $document) {

  function link ($scope, $element, $attrs) {
    const $body = angular.element($document[0].body)

    let popupScope
    let popupEl

    $element.wrap(`<div class="bm-annotation__container"></div>`)

    $element.after($compile(`<div class="bm-annotation__icon edit" ng-click="onShowPopupClick()"></div>`)($scope))

    $scope.onShowPopupClick = function () {
      const height = $document["0"].documentElement.offsetHeight
      popupScope = $scope.$new()
      popupEl = $compile(`<annotation-component style="height: ${height}px" on-close-click="onClosePopupClick()"></annotation-component>`)(popupScope)
      $body.append(popupEl)
    }

    $scope.onClosePopupClick = function () {
      popupScope.$destroy()
      popupEl.remove()
    }
  }

  return {
    link: link,
    restrict: 'A',
    scope: {
    }
  }
}]
