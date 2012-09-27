Template.transactions_demande_tpl.ctx_transactions_demande = function () {
	
  	console.log("-- Template.transactions_demande_tpl.ctx_transactions_demande --");

  	
		return Transactions.find( {objet: 'demande'} );
	
  };

  Template.transactions_demande_tpl.ctx_transactions_demande_count = function () {

    console.log("-- Template.transactions_demande_tpl.ctx_transactions_demande_count --");

    	return Transactions.find( {objet: 'demande'} ).count();
    
  };