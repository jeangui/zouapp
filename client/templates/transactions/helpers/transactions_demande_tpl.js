Template.transactions_demande_tpl.ctx_transactions_demande = function () {
	
  	console.log("-- Template.transactions_demande_tpl.ctx_transactions_demande --");

    var monuser = Meteor.user();
    console.log("monuser : " + monuser );
    

    if ( monuser == null ) 
    {
      return Transactions.find({objet: 'demande'});
    }
    else
    {
      console.log("identifiant : " + monuser._id );
      //return Transactions.find({objet: 'demande', {$or:[{createur: monuser._id} , {acteur: monuser._id}]} });
      return Transactions.find({objet: 'demande'});

    }
  	
	
  };

  Template.transactions_demande_tpl.ctx_transactions_demande_count = function () {

    var monuser = Meteor.user();
    console.log("monuser : " + monuser );
    

    if ( monuser == null ) 
    {
      return Transactions.find({objet: 'demande'}).count();
    }
    else
    {
      console.log("identifiant : " + monuser._id );
      //return Transactions.find({objet: 'demande', {$or:[{createur: monuser._id} , {acteur: monuser._id}]} }).count();
      return Transactions.find({objet: 'demande'}).count();

    }
    
  };