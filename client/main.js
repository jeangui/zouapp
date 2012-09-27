Meteor.startup(function () {

  console.log('###### start startup cote client !!!');

  Session.set('loc','?');

  if (Modernizr.geolocation) {
    navigator.geolocation.getCurrentPosition(foundLocation, noLocation);
  }
    
    //alert(Modernizr.geolocation);

    function foundLocation(location) {
      console.log('session avant : ' + Session.get('loc'));
      //Session.set('loc','lat: '+location.coords.latitude+', lon: '+ location.coords.longitude);
      Session.set('loc',{ "lat" : location.coords.latitude, "lon" : location.coords.longitude });
      console.log('session apres : ' + Session.get('loc'));
      // abonnement à la collection 'c_annonces_active' au démarrage.
      Meteor.subscribe('c_annonces_actives', Session.get('loc') );
      
    }

    function noLocation() {
      alert('no location');
      Session.set('loc',{ "lat" : 43.2633, "lon" : 5.3883 });
      // abonnement à la collection 'c_annonces_active' au démarrage.
      Meteor.subscribe('c_annonces_actives', Session.get('loc') );
    }
    

    Meteor.subscribe('c_transactions_actives');

});


Meteor.accounts.config({requireEmail: true, requireUsername: true, validateEmails: true});



console.log('session loc avant subscription : ' + Session.get('loc') );

  












  

  