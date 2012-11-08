

  Template.mesannonces_agenda_tpl.rendered = function () {

  //alert( $('#calendar') );
  console.log(" ~~~~~~~~ >>> Agenda rendering " );
  
  $('#mesannonces_calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,basicWeek,basicDay',
            ignoreTimezone: false
        },
        selectable: false,
        selectHelper: false,
        editable: false,
        theme: false,
        height: 430,
        width: 500,
        events: 'events'
    });


  var annonces = req_mesannonces();
    annonces.forEach( function (anon) {
          console.log('~~~>> anon titre : ' + anon.titre );
          /*
          console.log('~~~>> anon desscription : ' + anon.description );
          console.log('~~~>> anon latitude : ' + anon.emplacement.lat );
          console.log('~~~>> anon longitude : ' + anon.emplacement.lon );
          console.log('~~~>> anon statut : ' + anon.statut );
          console.log('~~~>> anon type : ' + anon.type );
          console.log('~~~>> anon objet : ' + anon.objet );
          console.log('~~~>> anon createur : ' + anon.createur );
          console.log('~~~>> anon id : ' + anon._id );
          console.log('~~~>> anon themes : ' + anon.themes );
          */
          console.log('~~~>> anon start date : ' + anon.start_date );
          console.log('~~~>> anon end date : ' + anon.end_date );
          console.log('~~~>> anon echeance : ' + anon.echeance );

            var startDate = new Date( anon.start_date );            
            var endDate = new Date( anon.end_date );

            console.log('~~~>> anon start date bis : ' + startDate );
            console.log('~~~>> anon end date bis : ' + endDate );

            /*
            var currEvent = {
              id: anon._id,
              title: anon.titre,
              start: startDate,
              end: endDate,
              url: '#'+ anon._id,
              textColor: 'white',
              borderColor: 'blue',
              backgroundColor: 'green' 
            };
            */

            var currEvent = {
              id: anon._id,
              title: anon.titre,
              start: startDate,
              end: endDate 
            };

          $('#mesannonces_calendar').fullCalendar('renderEvent', currEvent , true ); 

          
        });

}