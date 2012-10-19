Meteor.startup(function () {

  console.log('###### start startup cote client !!!');

  Session.set('longitude','?');
  Session.set('latitude','?');

  if (Modernizr.geolocation) {
    navigator.geolocation.getCurrentPosition(foundLocation, noLocation);
  }
    
    //alert(Modernizr.geolocation);

    function foundLocation(location) {
      console.log('latitude avant : ' + Session.get('latitude'));
      console.log('longitude avant : ' + Session.get('longitude'));
      
      //Session.set('loc','lat: '+location.coords.latitude+', lon: '+ location.coords.longitude);
      Session.set('longitude',location.coords.longitude);
      Session.set('latitude',location.coords.latitude);
      //Session.set('loc',{ "lat" : location.coords.latitude, "lon" : location.coords.longitude });
      //Session.set('loc',{ "lat" : location.coords.latitude, "lon" : location.coords.longitude });
      
      console.log('latitude apres : ' + Session.get('latitude'));
      console.log('longitude apres : ' + Session.get('longitude'));
      
      // abonnement à la collection 'c_annonces_active' au démarrage.
      var loc = { "lat" : Session.get('latitude'), "lon" : Session.get('longitude') };
      
      Meteor.subscribe('c_annonces_actives', loc );
      
    }

    function noLocation() {

      alert('no location');

      //Session.set('loc',{ "lat" : 43.2633, "lon" : 5.3883 });
      Session.set('longitude', 5.3883 );
      Session.set('latitude', 43.2633 );


      // abonnement à la collection 'c_annonces_active' au démarrage.
      var loc = { "lat" : Session.get('latitude'), "lon" : Session.get('longitude') };
      Meteor.subscribe('c_annonces_actives', loc );
    }
    

    Meteor.subscribe('c_transactions_actives');

});

console.log('session loc avant subscription : ' + Session.get('loc') );

//Meteor.accounts.config({requireEmail: true, requireUsername: true, validateEmails: true});


    /* selection filtre onglet marche */
    Session.set('marcheDemandeSelected', true );
    Session.set('marcheOffreSelected', true );
    Session.set('marcheInfoSelected', true );
    Session.set('marcheServiceSelected', true );
    Session.set('marcheBienSelected', true );

    /* selection filtre onglet mesannonces */
    Session.set('mesDemandeSelected', true );
    Session.set('mesOffreSelected', true );
    Session.set('mesInfoSelected', true );
    Session.set('mesServiceSelected', true );
    Session.set('mesBienSelected', true );

    /* selection filtre onglet lestransactions */
    Session.set('transacDemandeSelected', true );
    Session.set('transacOffreSelected', true );
    Session.set('transacInfoSelected', true );
    Session.set('transacServiceSelected', true );
    Session.set('transacBienSelected', true );


    /* Durée de vie d'une annonce */
    Session.set('AnnonceDureeVieStandard', 15 );


    /* feedback appli */
    var uvOptions = {};
      (function() {
        var uv = document.createElement('script'); uv.type = 'text/javascript'; uv.async = true;
        uv.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'widget.uservoice.com/CHwSmCfjJQT1DDFjMDh9YQ.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(uv, s);
      })();


  /* Load Google Maps 
  load(['//maps.googleapis.com/maps/api/js?key=', app.constants.GOOGLE_MAPS_API_KEY, '&sensor=true&callback=app.init'].join(''), 'googleMapsAPI');
  */

  /* Load Google Analytics
  window._gaq = window._gaq || [];
  _gaq.push(['_setAccount', app.constants.GOOGLE_ANALYTICS_ID]);
  _gaq.push(['_trackPageview']);
  if (window.location.hostname != 'localhost') {
    load([('https:' == document.location.protocol ? 'https://ssl' : 'http://www'), '.google-analytics.com/ga.js'].join(''), 'googleAnalyticsAPI');
  }*/


  /* configuration moment francais */
    moment.lang('fr', { months : "Janvier_Février_Mars_Avril_Mai_Juin_Juillet_Aout_Septembre_Octobre_Novembre_Décembre".split("_"), monthsShort : "Jan_Fev_Mar_Avr_Mai_Juin_Juil_Aou_Sep_Oct_Nov_Dec".split("_"), weekdays : "Dimanche_Lundi_Mardi_Mercredi_Jeudi_Vendredi_Samedi".split("_"), weekdaysShort : "Dim_Lun_Mar_Mer_Jeu_Ven_Sam".split("_"), longDateFormat : { L : "DD/MM/YYYY", LL : "D MMMM YYYY", LLL : "D MMMM YYYY HH:mm", LLLL : "dddd, D MMMM YYYY HH:mm" }, meridiem : { AM : 'AM', am : 'am', PM : 'PM', pm : 'pm' }, calendar : { sameDay: "[Ajourd'hui à] LT", nextDay: '[Demain à] LT', nextWeek: 'dddd [à] LT', lastDay: '[Hier à] LT', lastWeek: 'dddd [denier à] LT', sameElse: 'L' }, relativeTime : { future : "dans %s", past : "il y a %s", s : "secondes", m : "une minute", mm : "%d minutes", h : "une heure", hh : "%d heures", d : "un jour", dd : "%d jours", M : "un mois", MM : "%d mois", y : "une année", yy : "%d années" }, ordinal : function (number) { return (~~ (number % 100 / 10) === 1) ? 'er' : 'ème'; } });




  












  

  