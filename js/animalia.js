(function() {

  StackMob.init({
    appName: "animalia",
    clientSubdomain: "mateofb1913gmailcom",
    publicKey: "9e6b2ae6-2e34-4f5f-a9a5-35ea44fc028d",
    apiVersion: 0
  });

  $('#enviar').click(function(e) {
    e.preventDefault();
    
    var nombre = $('#nombre').val();
    var subir = $('#subir').val();
    var descripcion = $('#descripcion').val();
    var seleccionar = $('#seleccionar').val();
    
    var Animal = StackMob.Model.extend({ schemaName: 'animales' });
    var entry = new Animal({ name: nombre, upload: subir, description: descripcion, select: seleccionar });
    entry.create();

    console.log("Subir imagen");

    animal = new Animal();

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