(function() {

  StackMob.init({
    appName: "animalia",
    clientSubdomain: "mateofb1913gmailcom",
    publicKey: "9e6b2ae6-2e34-4f5f-a9a5-35ea44fc028d",
    apiVersion: 0
  });
  
  var Animal = StackMob.Model.extend({ schemaName: 'animales' });
  
  var q = new StackMob.Collection.Query();
      q.equals('select', 'rock');
      
      var find = new Song();
      find.query(q, {
          success: function(model) {
              var songs = model.toJSON();
              var container = $('#songs');
              container.empty();
              $.each(songs, function(ix, song) {
                  console.log(song);
                  container.append('<p>' + song.song + ' - ' + song.genre + '</p>');
              });
          },
          error: function(model, response) {
              console.log(response);
          }
      });
  });

})();