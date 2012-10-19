Template.lestransactions_tpl.events = {
  

  'change #transacDemandeCheckbox': function ( event ) {
	
      var targetEl = $(event.target);
      var checked = targetEl.attr('checked'); 
  		
  		if ( checked == 'checked' )
      {
          Session.set('transacDemandeSelected', true );
      }
      else
      {
          Session.set('transacDemandeSelected', false );
       }

  },
  'change #transacOffreCheckbox': function ( event ) {
  
      var targetEl = $(event.target);
      var checked = targetEl.attr('checked');
      
      if ( checked == 'checked' )
      {
          Session.set('transacOffreSelected', true );
      }
      else
      {
          Session.set('transacOffreSelected', false );
      }

  },
  'change #transacInfoCheckbox': function ( event ) {
  
      var targetEl = $(event.target);
      var checked = targetEl.attr('checked');
      
      if ( checked == 'checked' )
      {
          Session.set('transacInfoSelected', true );
      }
      else
      {
          Session.set('transacInfoSelected', false );
      }

  },
  'change #transacServiceCheckbox': function ( event ) {
  
      var targetEl = $(event.target);
      var checked = targetEl.attr('checked');
      
      if ( checked == 'checked' )
      {
          Session.set('transacServiceSelected', true );
      }
      else
      {
          Session.set('transacServiceSelected', false );
      }
    },
  'change #transacBienCheckbox': function ( event ) {
  
      var targetEl = $(event.target);
      var checked = targetEl.attr('checked');
      
      if ( checked == 'checked' )
      {
          Session.set('transacBienSelected', true );
      }
      else
      {
          Session.set('transacBienSelected', false );
      }

  }


};


