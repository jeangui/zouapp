

  Template.lesannonces_agenda_tpl.rendered = function () {

  //alert( $('#calendar') );
  console.log(" ~~~~~~~~ >>> Agenda rendering " );
  
  $('#lesannonces_calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,basicWeek,basicDay',
            ignoreTimezone: false
        },
        selectable: true,
        selectHelper: true,
        editable: true,
        theme: false,
        height: 430,
        width: 500,
        events: 'events'
    });


  var annonces = req_lesannonces();
    annonces.forEach( function (anon) {
          console.log('~~~>> anon titre : ' + anon.titre );
          console.log('~~~>> anon start date : ' + anon.startdate );
            console.log('~~~>> anon end date : ' + anon.enddate );
            console.log('~~~>> anon echeance : ' + anon.echeance );
          
          
        });

}