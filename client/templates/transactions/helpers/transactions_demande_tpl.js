Template.transactions_demande_tpl.ctx_transactions_demande = function () {
	
  	console.log("-- Template.transactions_demande_tpl.ctx_transactions_demande --");

    var lesTransactions = Transactions.find();

    console.log("lesTransactions count : " + lesTransactions.count() );

    var demandeData = [];

    lesTransactions.forEach( function (transac) {
        
        var annon = Annonces.findOne( { _id : transac.annonce });

        if ( annon.objet == 'demande' )
        {
          var tt = {
            titre:      annon.titre,
            objet:      annon.objet,
            type:       annon.type,
            description:  annon.description,
            statut:     transac.statut,
            date_creation:  transac.date_creation,
            createur:     annon.createur, 
            acteur:     transac.acteur,
            annonce:    annon._id
          };

          demandeData.push( tt );
        }

        
    });

    //return Transactions.find({objet: 'demande'});  	
    return demandeData;
	
  };

  Template.transactions_demande_tpl.ctx_transactions_demande_count = function () {

    var lesTransactions = Transactions.find();

    console.log("lesTransactions count : " + lesTransactions.count() );

    var demandeData = [];

    lesTransactions.forEach( function (transac) {
        
        var annon = Annonces.findOne( { _id : transac.annonce });

        if ( annon.objet == 'demande' )
        {
          var tt = {
            titre:      annon.titre,
            objet:      annon.objet,
            type:       annon.type,
            description:  annon.description,
            statut:     transac.statut,
            date_creation:  transac.date_creation,
            createur:     annon.createur, 
            acteur:     transac.acteur,
            annonce:    annon._id
          };

          demandeData.push( tt );
        }

        
    });

    //return Transactions.find({objet: 'demande'});   
    return demandeData.length;
    
  };