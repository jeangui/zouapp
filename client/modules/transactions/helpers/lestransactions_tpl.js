Template.lestransactions_tpl.ctx_lestransactions = function () {
	
  	console.log("-- Template.lestransactions_tpl.ctx_lestransactions --");

    var monuser = Meteor.user();
    console.log("monuser : " + monuser );


    var transacDemandeSelected = Session.get('transacDemandeSelected');
    var transacOffreSelected = Session.get('transacOffreSelected');
    var transacInfoSelected = Session.get('transacInfoSelected');
    var transacServiceSelected = Session.get('transacServiceSelected');
    var transacBienSelected = Session.get('transacBienSelected');

    console.log("transacDemandeSelected : " + transacDemandeSelected );
    console.log("transacOffreSelected : " + transacOffreSelected );
    console.log("transacInfoSelected : " + transacInfoSelected );
    console.log("transacServiceSelected : " + transacServiceSelected );
    console.log("transacBienSelected : " + transacBienSelected );

    
    var objetreq = {};
    var typereq = {};


    if ( transacDemandeSelected )
    {
        objetreq.demande = 1;
    }
    if ( transacOffreSelected )
    {
        objetreq.offre = 1;
    }
    if ( transacInfoSelected )
    {
        typereq.information = 1;
    }
    if ( transacServiceSelected )
    {
        typereq.service = 1;
    }
    if ( transacBienSelected )
    {
        typereq.bien = 1;
    }
    
    /*
    if ( monuser == null )
    {
        req.type = typereq;
        req.objet = objetreq;
        console.log( "req : " + JSON.stringify( req ) );
    }
    else
    {
        console.log("identifiant : " + monuser._id );
        req.type = typereq;
        req.objet = objetreq;
        //var userreq = { createur: {$ne : monuser._id } };
        req.createur = {$ne : monuser._id };
        console.log( "req : " + JSON.stringify( req ) );
        
    }
    */


    var lesTransactions = Transactions.find();

    console.log("lesTransactions count : " + lesTransactions.count() );

    var demandeData = [];

    lesTransactions.forEach( function (transac) {
        
        console.log('transac : ' + transac );
        var annon = Annonces.findOne( { _id : transac.annonce });

        if ( annon.objet in objetreq && annon.type in typereq )
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

  /*Template.transactions_demande_tpl.ctx_transactions_demande_count = function () {

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
    
  };*/



  Template.lestransactions_tpl.ctx_lestransactionsDemandeSelected = function () {

    return Session.get('transacDemandeSelected');
  };

  Template.lestransactions_tpl.ctx_lestransactionsOffreSelected = function () {

    return Session.get('transacOffreSelected');
  };

  Template.lestransactions_tpl.ctx_lestransactionsInfoSelected = function () {

    return Session.get('transacInfoSelected');
  };

  Template.lestransactions_tpl.ctx_lestransactionsServiceSelected = function () {

    return Session.get('transacServiceSelected');
  };

  Template.lestransactions_tpl.ctx_lestransactionsBienSelected = function () {

    return Session.get('transacBienSelected');
  };