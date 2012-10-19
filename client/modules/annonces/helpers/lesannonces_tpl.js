
Template.lesannonces_tpl.ctx_lesannonces = function () {
	
  	console.log("-- Template.lesannonces_tpl.ctx_lesannonces --");

  	var monuser = Meteor.user();
  	console.log("monuser : " + monuser );

  	var marcheDemandeSelected = Session.get('marcheDemandeSelected');
	var marcheOffreSelected = Session.get('marcheOffreSelected');
	var marcheInfoSelected = Session.get('marcheInfoSelected');
	var marcheServiceSelected = Session.get('marcheServiceSelected');
	var marcheBienSelected = Session.get('marcheBienSelected');

	console.log("marcheDemandeSelected : " + marcheDemandeSelected );
	console.log("marcheOffreSelected : " + marcheOffreSelected );
	console.log("marcheInfoSelected : " + marcheInfoSelected );
	console.log("marcheServiceSelected : " + marcheServiceSelected );
	console.log("marcheBienSelected : " + marcheBienSelected );

	var req = {};
	var typereq = {$in : []};
	var objetreq = {$in : []};
	

	if ( marcheDemandeSelected )
	{
		objetreq.$in.push('demande');
	}
	if ( marcheOffreSelected )
	{
		objetreq.$in.push('offre');
	}
	if ( marcheInfoSelected )
	{
		typereq.$in.push('information');
	}
	if ( marcheServiceSelected )
	{
		typereq.$in.push('service');
	}
	if ( marcheBienSelected )
	{
		typereq.$in.push('bien');
	}


	/*if ( typereq.$in.length == 0 || objetreq.$in.length == 0 )
	{
		console.log("{} ...");
		return "{}";
	}*/

	if ( monuser == null )
	{
		req.type = typereq;
		req.objet = objetreq;
		console.log( "req : " + JSON.stringify( req ) );
		return Annonces.find(req);
	}
	else
	{
		console.log("identifiant : " + monuser._id );
		req.type = typereq;
		req.objet = objetreq;
		//var userreq = { createur: {$ne : monuser._id } };
		req.createur = {$ne : monuser._id };
		console.log( "req : " + JSON.stringify( req ) );
		return Annonces.find(req);
		
	}

	
	/*if ( monuser == null ) 
	{
		if ( marcheDemandeSelected && marcheOffreSelected && marcheInfoSelected && marcheServiceSelected && marcheBienSelected )
		{
			console.log("Annonces.find({}) ...");
			return Annonces.find({});
		}

		if ( !marcheDemandeSelected && !marcheOffreSelected && !marcheInfoSelected && !marcheServiceSelected && !marcheBienSelected )
		{
			console.log("{} ...");
			return "{}";
		}

		if ( marcheDemandeSelected && !marcheOffreSelected && marcheInfoSelected && marcheServiceSelected && marcheBienSelected ) 
		{
			console.log("Annonces.find({objet: 'demande'}) ...");
			return Annonces.find({objet: 'demande'});
		}

		if ( !marcheDemandeSelected && marcheOffreSelected && marcheInfoSelected && marcheServiceSelected && marcheBienSelected ) 
		{
			console.log("Annonces.find({objet: 'offre'}) ...");
			return Annonces.find({objet: 'offre'});
		}

		if ( marcheDemandeSelected && marcheOffreSelected && !marcheInfoSelected && marcheServiceSelected && marcheBienSelected )
		{
			console.log("Annonces.find({ type : {$in: ['service', 'bien']} }) ...");
			return Annonces.find({ type : {$in: ['service', 'bien']} } );
		}

		if ( marcheDemandeSelected && marcheOffreSelected && marcheInfoSelected && !marcheServiceSelected && marcheBienSelected ) 
		{
			console.log("Annonces.find({ type : {$in: ['info', 'bien']} }) ...");
			return Annonces.find({ type : {$in: ['info', 'bien']} } );
		}

		if ( marcheDemandeSelected && marcheOffreSelected && !marcheInfoSelected && marcheServiceSelected && !marcheBienSelected ) 
		{
			console.log("Annonces.find({ type : 'service' }) ...");
			return Annonces.find({ type : 'service' } );
		}

		if ( marcheDemandeSelected && marcheOffreSelected && !marcheInfoSelected && !marcheServiceSelected && marcheBienSelected )
		{
			console.log("Annonces.find({ type : 'bien' }) ...");
			return Annonces.find({ type : 'bien' } );
		}

		if ( marcheDemandeSelected && marcheOffreSelected && !marcheInfoSelected && marcheServiceSelected && !marcheBienSelected )
		{
			console.log("Annonces.find({ type : 'service' }) ...");
			return Annonces.find({ type : 'service' } );
		}

		if ( marcheDemandeSelected && marcheOffreSelected && marcheInfoSelected && !marcheServiceSelected && !marcheBienSelected )
		{
			console.log("Annonces.find({ type : 'info' }) ...");
			return Annonces.find({ type : 'info' } );
		}

		if ( marcheDemandeSelected && marcheOffreSelected && !marcheInfoSelected && marcheServiceSelected && marcheBienSelected )
		{
			console.log("Annonces.find({ objet: 'demande' , type : {$in: ['service', 'bien']} }) ...");
			return Annonces.find({ objet: 'demande' , type : {$in: ['service', 'bien']} } );
		}

		if ( marcheDemandeSelected && marcheOffreSelected && marcheInfoSelected && !marcheServiceSelected && marcheBienSelected )
		{
			console.log("Annonces.find({ objet: 'demande' , type : {$in: ['info', 'bien']} }) ...");
			return Annonces.find({ objet: 'demande' , type : {$in: ['info', 'bien']} } );
		}

		if ( marcheDemandeSelected && marcheOffreSelected && !marcheInfoSelected && marcheServiceSelected && !marcheBienSelected ) 
		{
			console.log("Annonces.find({ objet: 'demande' , type : 'service' }) ...");
			return Annonces.find({ objet: 'demande' , type : 'service' } );
		}

		if ( marcheDemandeSelected && marcheOffreSelected && !marcheInfoSelected && !marcheServiceSelected && marcheBienSelected )
		{
			console.log("Annonces.find({ objet: 'demande' , type : 'bien' }) ...");
			return Annonces.find({ objet: 'demande' , type : 'bien' } );
		}

		if ( marcheDemandeSelected && marcheOffreSelected && !marcheInfoSelected && marcheServiceSelected && !marcheBienSelected )
		{
			console.log("Annonces.find({ objet: 'demande' , type : 'service' }) ...");
			return Annonces.find({ objet: 'demande' , type : 'service' } );
		}

		if ( marcheDemandeSelected && marcheOffreSelected && marcheInfoSelected && !marcheServiceSelected && !marcheBienSelected )
		{
			console.log("Annonces.find({ objet: 'demande' , type : 'info' }) ...");
			return Annonces.find({ objet: 'demande' , type : 'info' } );
		}

		if ( marcheDemandeSelected && marcheOffreSelected && !marcheInfoSelected && marcheServiceSelected && marcheBienSelected ) 
		{
			console.log("Annonces.find({ objet: 'offre' , type : {$in: ['service', 'bien']} }) ...");
			return Annonces.find({ objet: 'offre' , type : {$in: ['service', 'bien']} } );
		}

		if ( marcheDemandeSelected && marcheOffreSelected && marcheInfoSelected && !marcheServiceSelected && marcheBienSelected )
		{
			console.log("Annonces.find({ objet: 'offre' , type : {$in: ['info', 'bien']} }) ...");
			return Annonces.find({ objet: 'offre' , type : {$in: ['info', 'bien']} } );
		}

		if ( marcheDemandeSelected && marcheOffreSelected && marcheInfoSelected && marcheServiceSelected && !marcheBienSelected )
		{
			console.log("Annonces.find({ objet: 'offre' , type : {$in: ['info', 'service']} }) ...");
			return Annonces.find({ objet: 'offre' , type : {$in: ['info', 'service']} } );
		}

		if ( marcheDemandeSelected && marcheOffreSelected && !marcheInfoSelected && !marcheServiceSelected && marcheBienSelected )
		{
			console.log("Annonces.find({ objet: 'offre' , type : 'bien' }) ...");
			return Annonces.find({ objet: 'offre' , type : 'bien' } );
		}

		if ( marcheDemandeSelected && marcheOffreSelected && !marcheInfoSelected && marcheServiceSelected && !marcheBienSelected )
		{
			console.log("Annonces.find({ objet: 'offre' , type : 'service' }) ...");
			return Annonces.find({ objet: 'offre' , type : 'service' } );
		}

		if ( marcheDemandeSelected && marcheOffreSelected && marcheInfoSelected && !marcheServiceSelected && !marcheBienSelected )
		{
			console.log("Annonces.find({ objet: 'offre' , type : 'info' }) ...");
			return Annonces.find({ objet: 'offre' , type : 'info' } );
		}
		if ( marcheDemandeSelected && marcheOffreSelected && !marcheInfoSelected && !marcheServiceSelected && !marcheBienSelected )
		{
			console.log("{} ...");
			return {};
		}

		console.log("PROBLEME !!!!!!!!!!!!!!!!!");
	}
	else
	{
		console.log("identifiant : " + monuser._id );

		if ( marcheDemandeSelected && marcheOffreSelected && marcheInfoSelected && marcheServiceSelected && marcheBienSelected )
		{
			console.log("Annonces.find({ createur: {$ne : monuser._id } }) ...");
			return Annonces.find({createur: {$ne : monuser._id }});
		}

		if ( !marcheDemandeSelected && !marcheOffreSelected && !marcheInfoSelected && !marcheServiceSelected && !marcheBienSelected )
		{
			console.log("Annonces.find({}) ...");
			return "{}";
		}

		if ( marcheDemandeSelected && !marcheOffreSelected && marcheInfoSelected && marcheServiceSelected && marcheBienSelected ) 
		{
			console.log("Annonces.find({objet: 'demande', createur: {$ne : monuser._id }}) ...");
			return Annonces.find({objet: 'demande', createur: {$ne : monuser._id }});
		}

		if ( !marcheDemandeSelected && marcheOffreSelected && marcheInfoSelected && marcheServiceSelected && marcheBienSelected ) 
		{
			console.log("Annonces.find({objet: 'offre', createur: {$ne : monuser._id }}) ...");
			return Annonces.find({objet: 'offre', createur: {$ne : monuser._id }});
		}

		if ( marcheDemandeSelected && marcheOffreSelected && !marcheInfoSelected && marcheServiceSelected && marcheBienSelected )
		{
			console.log("Annonces.find({type : {$in: ['service', 'bien']} , createur: {$ne : monuser._id }}) ...");
			return Annonces.find({ type : {$in: ['service', 'bien']} , createur: {$ne : monuser._id }} );
		}

		if ( marcheDemandeSelected && marcheOffreSelected && marcheInfoSelected && !marcheServiceSelected && marcheBienSelected ) 
		{
			console.log("Annonces.find({ type : {$in: ['info', 'bien']} , createur: {$ne : monuser._id } }) ...");
			return Annonces.find({ type : {$in: ['info', 'bien']} , createur: {$ne : monuser._id } } );
		}

		if ( marcheDemandeSelected && marcheOffreSelected && !marcheInfoSelected && marcheServiceSelected && !marcheBienSelected ) 
		{
			console.log("Annonces.find({ type : {$in: ['info', 'service']} , createur: {$ne : monuser._id } }) ...");
			return Annonces.find({ type : {$in: ['info', 'service']} , createur: {$ne : monuser._id } } );
		}

		if ( marcheDemandeSelected && marcheOffreSelected && !marcheInfoSelected && !marcheServiceSelected && marcheBienSelected )
		{
			console.log("Annonces.find({ type : 'bien' , createur: {$ne : monuser._id } }) ...");
			return Annonces.find({ type : 'bien' , createur: {$ne : monuser._id } } );
		}

		if ( marcheDemandeSelected && marcheOffreSelected && !marcheInfoSelected && marcheServiceSelected && !marcheBienSelected )
		{
			console.log("Annonces.find({ type : 'service' , createur: {$ne : monuser._id } }) ...");
			return Annonces.find({ type : 'service' , createur: {$ne : monuser._id } } );
		}

		if ( marcheDemandeSelected && marcheOffreSelected && marcheInfoSelected && !marcheServiceSelected && !marcheBienSelected )
		{
			console.log("Annonces.find({ type : 'info' , createur: {$ne : monuser._id }}) ...");
			return Annonces.find({ type : 'info' , createur: {$ne : monuser._id }} );
		}

		if ( marcheDemandeSelected && marcheOffreSelected && !marcheInfoSelected && marcheServiceSelected && marcheBienSelected )
		{
			console.log("Annonces.find({  objet: 'demande' , type : {$in: ['service', 'bien']} , createur: {$ne : monuser._id }}) ...");
			return Annonces.find({ objet: 'demande' , type : {$in: ['service', 'bien']} , createur: {$ne : monuser._id }} );
		}

		if ( marcheDemandeSelected && marcheOffreSelected && marcheInfoSelected && !marcheServiceSelected && marcheBienSelected )
		{
			return Annonces.find({ objet: 'demande' , type : {$in: ['info', 'bien']} , createur: {$ne : monuser._id } } );
		}

		if ( marcheDemandeSelected && marcheOffreSelected && !marcheInfoSelected && marcheServiceSelected && !marcheBienSelected ) 
		{
			console.log("Annonces.find({  objet: 'demande' , type : {$in: ['info', 'service']} , createur: {$ne : monuser._id } }) ...");
			return Annonces.find({ objet: 'demande' , type : {$in: ['info', 'service']} , createur: {$ne : monuser._id } } );
		}

		if ( marcheDemandeSelected && marcheOffreSelected && !marcheInfoSelected && !marcheServiceSelected && marcheBienSelected )
		{
			console.log("Annonces.find({ objet: 'demande' , type : 'bien' , createur: {$ne : monuser._id } }) ...");
			return Annonces.find({ objet: 'demande' , type : 'bien' , createur: {$ne : monuser._id } } );
		}

		if ( marcheDemandeSelected && marcheOffreSelected && !marcheInfoSelected && marcheServiceSelected && !marcheBienSelected )
		{
			console.log("Annonces.find({ objet: 'demande' , type : 'service' , createur: {$ne : monuser._id } }) ...");
			return Annonces.find({ objet: 'demande' , type : 'service' , createur: {$ne : monuser._id } } );
		}

		if ( marcheDemandeSelected && marcheOffreSelected && marcheInfoSelected && !marcheServiceSelected && !marcheBienSelected )
		{
			console.log("Annonces.find({ objet: 'demande' , type : 'info' , createur: {$ne : monuser._id } }) ...");
			return Annonces.find({ objet: 'demande' , type : 'info' , createur: {$ne : monuser._id } } );
		}

		if ( marcheDemandeSelected && marcheOffreSelected && !marcheInfoSelected && marcheServiceSelected && marcheBienSelected ) 
		{
			console.log("Annonces.find({ objet: 'offre' , type : {$in: ['service', 'bien']}, createur: {$ne : monuser._id } }) ...");
			return Annonces.find({ objet: 'offre' , type : {$in: ['service', 'bien']}, createur: {$ne : monuser._id } } );
		}

		if ( marcheDemandeSelected && marcheOffreSelected && marcheInfoSelected && !marcheServiceSelected && marcheBienSelected )
		{
			console.log("Annonces.find({ objet: 'offre' , type : {$in: ['info', 'bien']}, createur: {$ne : monuser._id } }) ...");
			return Annonces.find({ objet: 'offre' , type : {$in: ['info', 'bien']}, createur: {$ne : monuser._id } } );
		}

		if ( marcheDemandeSelected && marcheOffreSelected && !marcheInfoSelected && marcheServiceSelected && !marcheBienSelected )
		{
			console.log("Annonces.find({ objet: 'offre' , type : {$in: ['info', 'service']}, createur: {$ne : monuser._id } }) ...");
			return Annonces.find({ objet: 'offre' , type : {$in: ['info', 'service']}, createur: {$ne : monuser._id } } );
		}

		if ( marcheDemandeSelected && marcheOffreSelected && !marcheInfoSelected && !marcheServiceSelected && marcheBienSelected )
		{
			console.log("Annonces.find({ objet: 'offre' , type : 'bien', createur: {$ne : monuser._id } }) ...");
			return Annonces.find({ objet: 'offre' , type : 'bien', createur: {$ne : monuser._id } } );
		}

		if ( marcheDemandeSelected && marcheOffreSelected && !marcheInfoSelected && marcheServiceSelected && !marcheBienSelected )
		{
			console.log("Annonces.find({ objet: 'offre' , type : 'service', createur: {$ne : monuser._id } }) ...");
			return Annonces.find({ objet: 'offre' , type : 'service', createur: {$ne : monuser._id } } );
		}

		if ( marcheDemandeSelected && marcheOffreSelected && marcheInfoSelected && !marcheServiceSelected && !marcheBienSelected )
		{
			console.log("Annonces.find({ objet: 'offre' , type : 'info', createur: {$ne : monuser._id } }) ...");
			return Annonces.find({ objet: 'offre' , type : 'info', createur: {$ne : monuser._id } } );
		}
	}
	*/
	
  };



  Template.lesannonces_tpl.ctx_lesannonces_marcheDemandeSelected = function () {

  	return Session.get('marcheDemandeSelected');
  };

  Template.lesannonces_tpl.ctx_lesannonces_marcheOffreSelected = function () {

  	return Session.get('marcheOffreSelected');
  };

  Template.lesannonces_tpl.ctx_lesannonces_marcheInfoSelected = function () {

  	return Session.get('marcheInfoSelected');
  };

  Template.lesannonces_tpl.ctx_lesannonces_marcheServiceSelected = function () {

  	return Session.get('marcheServiceSelected');
  };

  Template.lesannonces_tpl.ctx_lesannonces_marcheBienSelected = function () {

  	return Session.get('marcheBienSelected');
  };