Template.annonce_tpl.distance = function () {
      //console.log("-- Template.annonce_tpl.distance --");

      var position = { 
	      	"lat" :  Session.get('latitude'),
	      	"lon" : Session.get('longitude')
  		};

      return getDistance( position , this.emplacement );
    };



Template.annonce_tpl.formatDate = function ( date ) {
      //console.log("-- Template.annonce_tpl.formatDate --");

      return moment( date ).format('LLLL');
    };


Template.annonce_tpl.tempsRestant = function ( date ) {
      //console.log("-- Template.annonce_tpl.tempsRestant --");

      var dureeStandard = Session.get('AnnonceDureeVieStandard');
      var dateFin = moment( date ).add('days', dureeStandard );

      var tempsRestant = dateFin.fromNow();

      return tempsRestant;
    };


Template.annonce_tpl.de_l_utilisateur = function ( createurAnnonce ) {
      //console.log("-- Template.annonce_tpl.de_l_utilisateur --");

      var monuser = Meteor.user();
      
      /*
      console.log("-- Template.annonce_tpl.de_l_utilisateur -- user : " + monuser._id );
      console.log("-- Template.annonce_tpl.de_l_utilisateur -- createur : " + createurAnnonce );
      console.log("-- Template.annonce_tpl.de_l_utilisateur -- createur == user : " + (createurAnnonce == monuser._id) );
      */

      if ( monuser != null && monuser._id == createurAnnonce ) 
      { 
        //console.log("-- Template.annonce_tpl.de_l_utilisateur -- TRUE " );
        return true;
      } 
      else 
      {
        //console.log("-- Template.annonce_tpl.de_l_utilisateur -- FALSE : " );
        return false;
      };
      
    };