(function() {
  'use strict';

    angular
      .module('diretivaRankingDirective', [])
      .directive('diretivaRanking', diretivaRanking);

      function diretivaRanking() {

        return {
          templateUrl: '/js/directives/diretiva-ranking.html'
        };
  }
})();
