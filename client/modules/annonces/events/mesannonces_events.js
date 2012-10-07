Template.mesannonces_tpl.events = {
  

  'change #mesDemandeCheckbox': function ( event ) {
	
      var targetEl = $(event.target);
      var checked = targetEl.attr('checked'); 
  		
  		if ( checked == 'checked' )
      {
          Session.set('mesDemandeSelected', true );
      }
      else
      {
          Session.set('mesDemandeSelected', false );
       }

  },
  'change #mesOffreCheckbox': function ( event ) {
  
      var targetEl = $(event.target);
      var checked = targetEl.attr('checked');
      
      if ( checked == 'checked' )
      {
          Session.set('mesOffreSelected', true );
      }
      else
      {
          Session.set('mesOffreSelected', false );
      }

  },
  'change #mesInfoCheckbox': function ( event ) {
  
      var targetEl = $(event.target);
      var checked = targetEl.attr('checked');
      
      if ( checked == 'checked' )
      {
          Session.set('mesInfoSelected', true );
      }
      else
      {
          Session.set('mesInfoSelected', false );
      }

  },
  'change #mesServiceCheckbox': function ( event ) {
  
      var targetEl = $(event.target);
      var checked = targetEl.attr('checked');
      
      if ( checked == 'checked' )
      {
          Session.set('mesServiceSelected', true );
      }
      else
      {
          Session.set('mesServiceSelected', false );
      }
    },
  'change #mesBienCheckbox': function ( event ) {
  
      var targetEl = $(event.target);
      var checked = targetEl.attr('checked');
      
      if ( checked == 'checked' )
      {
          Session.set('mesBienSelected', true );
      }
      else
      {
          Session.set('mesBienSelected', false );
      }

  }


};


