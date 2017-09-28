(function() {
  'use strict';

  angular
  .module('provaAdriano')
  .controller('homeController', homeController);

  function homeController($http) {
    /* jshint validthis: true*/
    var vm = this;

    vm.simulado = [];
    vm.itemSimuladoVisivel = "";
    vm.nomeSimuladoAtivo = "";
    vm.nomeProvaObjetivaFinal = "";

    vm.alteraSimuladoVisivel = alteraSimuladoVisivel;
    function alteraSimuladoVisivel(IdSimulado) {
      if(vm.itemSimuladoVisivel == IdSimulado) {
        vm.itemSimuladoVisivel = "";
      } else {
        vm.itemSimuladoVisivel = IdSimulado;
      }
    }

    vm.provaObjetivaFinal = provaObjetivaFinal;
    function provaObjetivaFinal(status, nomeSimulado) {
      vm.nomeSimuladoAtivo = nomeSimulado;
      if(status==1) {
        vm.nomeProvaObjetivaFinal = "Prova Objetiva";
      } else {
        vm.nomeProvaObjetivaFinal = "Prova Final";
      }
    }

    $http.get('data/simulados.json')
    .success(function(retorno) {
      vm.simulado = retorno;
    })
    .error(function(erro) {
      console.log(erro);
    });

  }
})();
