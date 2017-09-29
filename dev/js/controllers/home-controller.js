(function() {
  'use strict';

  angular
  .module('provaAdriano')
  .controller('homeController', homeController);

  function homeController($http) {
    /* jshint validthis: true*/
    var vm = this;

    vm.simulado = [];
    $http.get('data/simulados.json')
    .success(function(retorno) {
      vm.simulado = retorno;
    })
    .error(function(erro) {
      console.log(erro);
    });

    vm.itemSimuladoVisivel = "";
    vm.alteraSimuladoVisivel = alteraSimuladoVisivel;
    function alteraSimuladoVisivel(IdSimulado) {
      if(vm.itemSimuladoVisivel == IdSimulado) {
        vm.itemSimuladoVisivel = "";
      } else {
        vm.itemSimuladoVisivel = IdSimulado;
      }
    }

    vm.nomeSimuladoAtivo = "";
    vm.nomeProvaObjetivaFinal = "";
    vm.provaObjetivaFinal = provaObjetivaFinal;
    function provaObjetivaFinal(status, nomeSimulado) {
      vm.nomeSimuladoAtivo = nomeSimulado;
      if(status==1) {
        vm.nomeProvaObjetivaFinal = "Prova Objetiva";
      } else {
        vm.nomeProvaObjetivaFinal = "Prova Final";
      }
    }

    vm.rankingTotal = null;
    vm.gerarRanking = gerarRanking;
    function gerarRanking() {
      $http.get('data/resultados.json')
      .success(function(retorno) {
        vm.rankingTotal = retorno;
      })
      .error(function(erro) {
        console.log(erro);
      });
    }

    vm.subirPagina = subirPagina;
    function subirPagina() {
      window.scrollTo(0, 0);
    }

    vm.visualizarImpressao = false;
    vm.imprimir = imprimir;
    function imprimir() {
      window.print();
      vm.visualizarImpressao = false;
    }

    vm.enviarParaUmAmigo = false;

  }
})();
