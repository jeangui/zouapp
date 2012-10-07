
Template.transactions_offre_tpl.ctx_transactions_offre = function () {

  	console.log("-- Template.transactions_offre_tpl.ctx_transactions_offre --");
    
  	return Transactions.find({objet: 'offre'});

  };

  Template.transactions_offre_tpl.ctx_transactions_offre_count = function () {

    console.log("-- Template.transactions_offre_tpl.ctx_transactions_offre_count --");

    return Transactions.find({objet: 'offre'}).count();

  };