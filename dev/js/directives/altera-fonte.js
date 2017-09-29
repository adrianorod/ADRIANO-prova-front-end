(function() {
  'use strict';

    angular
      .module('alteraFonteDirective', [])
      .directive('alteraFonte', alteraFonte);

      function alteraFonte() {

        return {
          restrict: 'A',
          link: function(scope, element, attr) {
            var elemento = $("body #container").find("*");
            var fonts = [];

            for (var i = 0; i < elemento.length; i++) {
              fonts.push(parseFloat(elemento.eq(i).css('font-size')));
            }

            scope.aumentaFonte = function() {
              console.log('aumenta fonte');
              for (var i = 0; i < elemento.length; i++) {
                ++fonts[i];
                elemento.eq(i).css('font-size', fonts[i]);
              }
            };

            scope.diminuiFonte = function() {
              console.log('diminui fonte');
              for (var i = 0; i < elemento.length; i++) {
                --fonts[i];
                elemento.eq(i).css('font-size', fonts[i]);
              }
            };
          }
        };
  }
})();
