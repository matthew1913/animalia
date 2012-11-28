(function() {

  StackMob.init({
    appName: "animalia",
    clientSubdomain: "mateofb1913gmailcom",
    publicKey: "9e6b2ae6-2e34-4f5f-a9a5-35ea44fc028d",
    apiVersion: 0
  });

  $('#enviar').click(function(e) {
    e.preventDefault();
    
    var nomb = $('#nombre');
    var sub = $('#subir');
    var desc = $('#descripcion');
    var selct = $('#select');
    
    var Animal = StackMob.Model.extend({ schemaName: 'animales' });
    var entry = new Animal({ name: nomb,  });
    entry.create();

    console.log("Created a coderiser in StackMob server");

    coderisers = new Coderiser();

    coderisers.fetch({
      success: function(model) {
        console.log(model.toJSON());
      },
      error: function(mode, response) {
        console.log(response);
      }
    });

  });


})();