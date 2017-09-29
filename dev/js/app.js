(function() {
  'use strict';

  angular
    .module('provaAdriano', ['ngRoute', 'menuSimuladosDirective', 'barraPaginacaoDirective', 'diretivaRankingDirective', 'alteraFonteDirective'])
    .config(function($routeProvider, $locationProvider) {

      $routeProvider.when('/',{
        templateUrl:"views/home.html",
        controller:"homeController",
        controllerAs:"vm"
      });

      $routeProvider.otherwise({redirectTo: "/"});

    });
})();
