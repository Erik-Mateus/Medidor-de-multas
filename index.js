function calcular() {
  var txtvelo = document.getElementById("txtvel");
  var res = document.getElementById("res");
  var vel = Number(txtvelo.value);
  var multas = txtvelo.value - 50;
  var multasPorCada = multas / 10;
  var arredondada = Math.floor(multasPorCada, 1);

  res.innerHTML = `sua velocidade é de ${vel}`;
  if (vel > 60) {
    res.innerHTML = `voce ultrapassou o limite de velocidade e ganhou ${arredondada} multas`;
  }
}

const $html = document.querySelector("html");
const $checkbox = document.querySelector(".checkbox");

$checkbox.addEventListener('change', function(){
  $html.classList.toggle('darkmode')
})
