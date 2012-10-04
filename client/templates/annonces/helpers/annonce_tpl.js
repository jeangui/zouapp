Template.annonce_tpl.distance = function () {
      console.log("-- Template.annonce_tpl.distance --");

      var position = { 
	      	"lat" :  Session.get('latitude'),
	      	"lon" : Session.get('longitude')
  		};

      return getDistance( position , this.emplacement );
    };
