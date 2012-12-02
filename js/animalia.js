(function() {

  StackMob.init({
    appName: "animalia",
    clientSubdomain: "mateofb1913gmailcom",
    publicKey: "9e6b2ae6-2e34-4f5f-a9a5-35ea44fc028d",
    apiVersion: 0
  });

  var Animal = StackMob.Model.extend({ schemaName: 'animales' });
  
  $('#enviar').click(function(e) {
    e.preventDefault();
    

    
    var nombre = $('#nombre').val();
    var subir = $('#subir').val();
    var descripcion = $('#descripcion').val();
    var seleccionar = $('#seleccionar').val();
    //upload: subir,
     var Animal = StackMob.Model.extend({ schemaName: 'animales' });
    var entry = new Animal({ name: nombre, description: descripcion, select: seleccionar });
    entry.create({
        success: function(model) {
            var files = $('#imagen')[0].files;
    
            for (var i = 0, f; f = files[i]; i++) {
         
              var reader = new FileReader();
         
              // Closure to capture the file information
              reader.onload = (function(theFile) {
                return function(e) {
         
                  var base64Content = e.target.result.substring(e.target.result.indexOf(',') + 1, e.target.result.length);
                  var fileName = theFile.name;
                  var fileType = theFile.type;
                   
                  model.setBinaryFile('imagen', fileName, fileType, base64Content);
                  model.save();
                };
              })(f);
         
              // Read in the file as a data URL
              fileContent = reader.readAsDataURL(f);
         
            }
        },
        error: function(model, response) {
            console.log(response);
        }
    });

    console.log("Subir imagen");

    var animal = new Animal();

    animal.fetch({
      success: function(model) {
        console.log(model.toJSON());
      },
      error: function(mode, response) {
        console.log(response);
      }
    });

  });


})();




var Usuario = StackMob.Model.extend({ schemaName: 'registro' });
  
  $('#registrar').click(function(e) {
    e.preventDefault();
    

    
    var nombre = $('#nombre').val();
    var apellidos = $('#apellidos').val();
    var correo = $('#correo').val();
    var contraseña = $('#contraseña').val();
    var confcontraseña = $('#confcontraseña').val();
    var newusuario = $('#newusuario').val();
    
     var Usuario = StackMob.Model.extend({ schemaName: 'registro' });
    var entry = new Usuario({ name: nombre, lastname: apellidos, email: correo, password: contraseña, confirmpassword: confcontraseña, username: newusuario, });
    entry.create();
    });

    console.log("Estás registrado");

    var usuario = new Usuario();

    usuario.fetch({
      success: function(model) {
        console.log(model.toJSON());
      },
      error: function(mode, response) {
        console.log(response);
      }
      
    });

  });


})();






