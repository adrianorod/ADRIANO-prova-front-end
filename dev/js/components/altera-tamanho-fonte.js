$(document).ready(function() {

  var btnAumentar = $(".aumentaFonte");
  var btnDiminuir = $(".diminuiFonte");
  var elemento = $("body #container").find("*");
  var fonts = [];

  function obterTamanhoFonte() {
    for (var i = 0; i < elemento.length; i++) {
      fonts.push(parseFloat(elemento.eq(i).css('font-size')));
    }
  }

  obterTamanhoFonte();

  btnAumentar.on('click', function() {
    for (var i = 0; i < elemento.length; i++) {
      ++fonts[i];
      elemento.eq(i).css('font-size', fonts[i]);
    }
  });

  btnDiminuir.on('click', function() {
    for (var i = 0; i < elemento.length; i++) {
      --fonts[i];
      elemento.eq(i).css('font-size', fonts[i]);
    }
  });

});
