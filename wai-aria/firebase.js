function comprobarpasswd(pass, rpass){
  if (pass == rpass){
    return true;
  }
  else return false;
}

function storeData(){
  var config = {
      apiKey: "AIzaSyDP9OqS06BcEx0T0Fhe4--G8Xk746o5tas",
      authDomain: "validacionformularios.firebaseapp.com",
      databaseURL: "https://validacionformularios.firebaseio.com",
      projectId: "validacionformularios",
      storageBucket: "validacionformularios.appspot.com",
      messagingSenderId: "879768783413"
  };

  firebase.initializeApp(config);
    var aviso = document.createElement(p, [id="Aviso"]);
    var email = document.Registro.email_usuario.value;
    var pass = document.Registro.contraseña_usuario.value;
    var rpass = document.Registro.rep_contraseña_usuario.value;
    var name = document.Registro.nombre_usuario.value;
    var es_autor = document.Registro.es_autor.value;
    var= insertar=document.getElementById("div")
    document.body.insertAfter(aviso,insertar);
    if(comprobarpasswd(pass,rpass)){
    firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      document.getElementById("Aviso").innerhtml=errorMessage;
    });
      if(es_autor=="Sí") {
        var data = {
          Email: email,
          Nombre: name,
          Es_autor: 'Sí',
        }
        var databaseRef = firebase.database().ref('autores/');
        var updates = {};
        updates[name] = data;
        databaseRef.update(updates);
        document.getElementById("Aviso").innerhtml="Se ha registrado con éxito";
      }
      else {
        var data = {
          Email: email,
          Nombre: name,
          Es_autor: 'No',
        }
        var databaseRef = firebase.database().ref('usuarios/');
        var updates = {};
        updates[name] = data;
        databaseRef.update(updates);
        document.createElement(document.body.p)
        document.getElementById("Aviso").innerhtml="Se ha registrado con éxito";
      }
    }
    else {
      document.getElementById("Aviso").innerhtml="Las contraseñas no coinciden"
    }
}
    function signin(){

      var email = document.Registro.email_usuario.value;
      var pass = document.Registro.contraseña_usuario.value;

      firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        document.getElementById("Aviso").innerhtml=errorMessage;
      });
    }
