
function calculo()
{
	var text='{"productos":[' +
'{"name":"Leche","precio":0.99,"cantidad":2},' +
'{"name":"Café","precio":2.99,"cantidad":2 },' +
'{"name":"Azúcar","precio":0.99,"cantidad":2},'+
'{"name":"Servilletas","precio":1.99,"cantidad":2},'+
'{"name":"Pan","precio":1,"cantidad":4 }]}';
	var obj = JSON.parse(text);
	var i;
	var texto="";
	var calculos=0;
	var total;
	var cant;
	var prod;
	for(i=0;i<obj.productos.length;i++)
	{
		texto+=obj.productos[i].name+"  "+obj.productos[i].precio+"€  "+obj.productos[i].cantidad+"<br>";
		calculos+=parseFloat(obj.productos[i].precio)*parseFloat(obj.productos[i].cantidad);
	}
	calculos=calculos;
	total=(calculos*0.065)+calculos;
	str_igic="IGIC(6.5%):"+parseFloat(calculos*0.065).toFixed(2)+"€"+"<br>";
	str_total="Total: "+parseFloat(total).toFixed(2)+"€"+"<br>";
	str_subtotal="Subtotal: "+parseFloat(calculos).toFixed(2)+"€"+"<br>";

	document.getElementById("nombres").innerHTML = texto;
	document.getElementById("subtotal").innerHTML = str_subtotal;
	document.getElementById("igic").innerHTML = str_igic;
	document.getElementById("total").innerHTML = str_total;
};