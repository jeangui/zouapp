Template.annonce_tpl.distance = function () {
      console.log("-- Template.annonce_tpl.distance --");

      var position = { 
	      	"lat" :  Session.get('loc').lat,
	      	"lon" : Session.get('loc').lon
  		};

      return getDistance( position , this.emplacement );
    };
