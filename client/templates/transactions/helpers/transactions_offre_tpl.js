
Template.transactions_offre_tpl.ctx_transactions_offre = function () {

  	console.log("-- Template.transactions_offre_tpl.ctx_transactions_offre --");

    
  	var monuser = Meteor.user();
    console.log("monuser : " + monuser );
    

    if ( monuser == null ) 
    {
      return Transactions.find({objet: 'offre'});
    }
    else
    {
      console.log("identifiant : " + monuser._id );
      //return Transactions.find({objet: 'demande', {$or:[{createur: monuser._id} , {acteur: monuser._id}]} });
      return Transactions.find({objet: 'offre'});

    }

  };

  Template.transactions_offre_tpl.ctx_transactions_offre_count = function () {

    console.log("-- Template.transactions_offre_tpl.ctx_transactions_offre_count --");

    var monuser = Meteor.user();
    console.log("monuser : " + monuser );
    

    if ( monuser == null ) 
    {
      return Transactions.find({objet: 'offre'}).count();
    }
    else
    {
      console.log("identifiant : " + monuser._id );
      //return Transactions.find({objet: 'demande', {$or:[{createur: monuser._id} , {acteur: monuser._id}]} }).count();
      return Transactions.find({objet: 'offre'}).count();

    }

  };