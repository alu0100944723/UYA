
var text={"productos":[ 
{"name":"Leche","precio":0.99}, 
{"name":"Café","precio":2.99}, 
{"name":"Azúcar","precio":0.99},
{"name":"Servilletas","precio":1.99},
{"name":"Pan","precio":1}]};
  
function mostrar_productos(){
  var string = JSON.stringify(text);
	var obj= JSON.parse(string);
	var i;
	var texto="";
  	for(i=0;i<obj.productos.length;i++)
	{
		texto+=obj.productos[i].name+"  "+obj.productos[i].precio+"€  "+"<br>";
  }
    document.getElementById("nombres").innerHTML = texto;

}

function calculo()
{
  var p1 = document.getElementById("p1").value;
  var p2 = document.getElementById("p2").value;
  var p3 = document.getElementById("p3").value;
  var p4 = document.getElementById("p4").value;
  var p5 = document.getElementById("p5").value;
	var string = JSON.stringify(text);
	var obj= JSON.parse(string);
	var i;
	var calculos=0;
	var total;
	var cant;
	var prod;
  
	for(i=0;i<obj.productos.length;i++)
	{
      if("Leche" == obj.productos[i].name){
          calculos+=parseFloat(obj.productos[i].precio)*p1;
      }
      if("Café" == obj.productos[i].name){
          calculos+=parseFloat(obj.productos[i].precio)*p2;
       }
      if("Azúcar" == obj.productos[i].name){
          calculos+=parseFloat(obj.productos[i].precio)*p3;
      }
      if("Servilletas" == obj.productos[i].name){
          calculos+=parseFloat(obj.productos[i].precio)*p4;
      }
      if("Pan" == obj.productos[i].name){
          calculos+=parseFloat(obj.productos[i].precio)*p5;
      }
   }
  
	calculos=calculos;
	total=(calculos*0.065)+calculos;
	str_igic="IGIC(6.5%):"+parseFloat(calculos*0.065).toFixed(2)+"€"+"<br>";
	str_total="Total: "+parseFloat(total).toFixed(2)+"€"+"<br>";
	str_subtotal="Subtotal: "+parseFloat(calculos).toFixed(2)+"€"+"<br>";

	document.getElementById("subtotal").innerHTML = str_subtotal;
	document.getElementById("igic").innerHTML = str_igic;
	document.getElementById("total").innerHTML = str_total;
}
