(function() {
  'use strict';

    angular
      .module('barraPaginacaoDirective', [])
      .directive('barraPaginacao', barraPaginacao);

      function barraPaginacao() {

        return {
          templateUrl: '/js/directives/barra-paginacao.html'
        };
  }
})();
