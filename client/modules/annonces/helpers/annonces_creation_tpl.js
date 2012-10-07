
Template.annonce_creation_tpl.ctx_username = function () {

    console.log("-- Template.annonce_creation_tpl.ctx_username --");
    
    if ( Session.get('username') == null && Meteor.user() != null )
    {
    	Session.set('username',Meteor.user().name);
    }

    return Session.get('username');

  }


  Template.annonce_creation_geo_form_tpl.location = function () {
    
      console.log("-- Template.annonces_creation_tpl.location --");

      var location = { "lat" : Session.get('latitude'), "lon" : Session.get('longitude') };

      return location;
    };


