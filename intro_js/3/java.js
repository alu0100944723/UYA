var usd, eur, won;

function init() {
  usd = document.getElementById("USD");
  eur = document.getElementById("EUR");
  won = document.getElementById("WON");
}
function eurfunc() {
  usd.value = parseFloat(eur.value) * 1.13;
  won.value = parseFloat(eur.value) * 1283.53;
}

function wonfunc() {
  usd.value = parseFloat(won.value) * 0.00088;
  eur.value = parseFloat(won.value) * 0.00078;
}

function usdfunc() {
  eur.value = parseFloat(usd.value) * 0.88;
  won.value = parseFloat(usd.value) * 1135.44;
}

init();
