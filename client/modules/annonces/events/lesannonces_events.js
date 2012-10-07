Template.lesannonces_tpl.events = {
  

  'change #marcheDemandeCheckbox': function ( event ) {
	
      var targetEl = $(event.target);
      var checked = targetEl.attr('checked'); 
  		
  		if ( checked == 'checked' )
      {
          Session.set('marcheDemandeSelected', true );
      }
      else
      {
          Session.set('marcheDemandeSelected', false );
       }

  },
  'change #marcheOffreCheckbox': function ( event ) {
  
      var targetEl = $(event.target);
      var checked = targetEl.attr('checked');
      
      if ( checked == 'checked' )
      {
          Session.set('marcheOffreSelected', true );
      }
      else
      {
          Session.set('marcheOffreSelected', false );
      }

  },
  'change #marcheInfoCheckbox': function ( event ) {
  
      var targetEl = $(event.target);
      var checked = targetEl.attr('checked');
      
      if ( checked == 'checked' )
      {
          Session.set('marcheInfoSelected', true );
      }
      else
      {
          Session.set('marcheInfoSelected', false );
      }

  },
  'change #marcheServiceCheckbox': function ( event ) {
  
      var targetEl = $(event.target);
      var checked = targetEl.attr('checked');
      
      if ( checked == 'checked' )
      {
          Session.set('marcheServiceSelected', true );
      }
      else
      {
          Session.set('marcheServiceSelected', false );
      }
    },
  'change #marcheBienCheckbox': function ( event ) {
  
      var targetEl = $(event.target);
      var checked = targetEl.attr('checked');
      
      if ( checked == 'checked' )
      {
          Session.set('marcheBienSelected', true );
      }
      else
      {
          Session.set('marcheBienSelected', false );
      }

  }


};


