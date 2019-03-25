function mostrar_p(){
  var parrafos = document.getElementsByClassName("parrafo").length;
  var total_parrafos = document.getElementById("total_parrafos");
  total_parrafos.innerHTML = parrafos;
  }
  function mostrar_e(){
  const enlace = document.getElementsByClassName("enlace").length;
  var total_enlaces = document.getElementById("total_enlaces");
  total_enlaces.innerHTML = enlace;
  }
  function mostrar_l(){
  const lista = document.getElementsByClassName("lista").length;
  var total_listas = document.getElementById("total_listas");
  total_listas.innerHTML = lista;
  }