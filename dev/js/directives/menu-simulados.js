(function() {
  'use strict';

    angular
      .module('menuSimuladosDirective', [])
      .directive('menuSimulados', menuSimulados);

      function menuSimulados() {

        return {
          templateUrl: '/js/directives/menu-simulados.html'
        };
  }
})();
