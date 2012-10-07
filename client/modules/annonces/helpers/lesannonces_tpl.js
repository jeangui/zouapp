
Template.lesannonces_tpl.ctx_lesannonces = function () {
	
  	console.log("-- Template.lesannonces_tpl.ctx_lesannonces --");

  	var monuser = Meteor.user();
  	console.log("monuser : " + monuser );

  	var marcheDemandeSelected = Session.get('marcheDemandeSelected');
	var marcheOffreSelected = Session.get('marcheOffreSelected');
	var marcheInfoSelected = Session.get('marcheInfoSelected');
	var marcheServiceSelected = Session.get('marcheServiceSelected');
	var marcheBienSelected = Session.get('marcheBienSelected');


	
	if ( monuser == null ) 
	{
		if ( marcheDemandeSelected && marcheOffreSelected && marcheInfoSelected && marcheServiceSelected && marcheBienSelected )
		{
			return Annonces.find({});
		}

		if ( !marcheDemandeSelected && !marcheOffreSelected && !marcheInfoSelected && !marcheServiceSelected && !marcheBienSelected )
		{
			return "{}";
		}

		if ( marcheDemandeSelected && !marcheOffreSelected && marcheInfoSelected && marcheServiceSelected && marcheBienSelected ) 
		{
			return Annonces.find({objet: 'demande'});
		}

		if ( !marcheDemandeSelected && marcheOffreSelected && marcheInfoSelected && marcheServiceSelected && marcheBienSelected ) 
		{
			return Annonces.find({objet: 'offre'});
		}

		if ( marcheDemandeSelected && marcheOffreSelected && !marcheInfoSelected && marcheServiceSelected && marcheBienSelected )
		{
			return Annonces.find({ type : {$in: ['service', 'bien']} } );
		}

		if ( marcheDemandeSelected && marcheOffreSelected && marcheInfoSelected && !marcheServiceSelected && marcheBienSelected ) 
		{
			return Annonces.find({ type : {$in: ['info', 'bien']} } );
		}

		if ( marcheDemandeSelected && marcheOffreSelected && !marcheInfoSelected && marcheServiceSelected && !marcheBienSelected ) 
		{
			return Annonces.find({ type : {$in: ['info', 'service']} } );
		}

		if ( marcheDemandeSelected && marcheOffreSelected && !marcheInfoSelected && !marcheServiceSelected && marcheBienSelected )
		{
			return Annonces.find({ type : 'bien' } );
		}

		if ( marcheDemandeSelected && marcheOffreSelected && !marcheInfoSelected && marcheServiceSelected && !marcheBienSelected )
		{
			return Annonces.find({ type : 'service' } );
		}

		if ( marcheDemandeSelected && marcheOffreSelected && marcheInfoSelected && !marcheServiceSelected && !marcheBienSelected )
		{
			return Annonces.find({ type : 'info' } );
		}

		if ( marcheDemandeSelected && marcheOffreSelected && !marcheInfoSelected && marcheServiceSelected && marcheBienSelected )
		{
			return Annonces.find({ objet: 'demande' , type : {$in: ['service', 'bien']} } );
		}

		if ( marcheDemandeSelected && marcheOffreSelected && marcheInfoSelected && !marcheServiceSelected && marcheBienSelected )
		{
			return Annonces.find({ objet: 'demande' , type : {$in: ['info', 'bien']} } );
		}

		if ( marcheDemandeSelected && marcheOffreSelected && !marcheInfoSelected && marcheServiceSelected && !marcheBienSelected ) 
		{
			return Annonces.find({ objet: 'demande' , type : {$in: ['info', 'service']} } );
		}

		if ( marcheDemandeSelected && marcheOffreSelected && !marcheInfoSelected && !marcheServiceSelected && marcheBienSelected )
		{
			return Annonces.find({ objet: 'demande' , type : 'bien' } );
		}

		if ( marcheDemandeSelected && marcheOffreSelected && !marcheInfoSelected && marcheServiceSelected && !marcheBienSelected )
		{
			return Annonces.find({ objet: 'demande' , type : 'service' } );
		}

		if ( marcheDemandeSelected && marcheOffreSelected && marcheInfoSelected && !marcheServiceSelected && !marcheBienSelected )
		{
			return Annonces.find({ objet: 'demande' , type : 'info' } );
		}

		if ( marcheDemandeSelected && marcheOffreSelected && !marcheInfoSelected && marcheServiceSelected && marcheBienSelected ) 
		{
			return Annonces.find({ objet: 'offre' , type : {$in: ['service', 'bien']} } );
		}

		if ( marcheDemandeSelected && marcheOffreSelected && marcheInfoSelected && !marcheServiceSelected && marcheBienSelected )
		{
			return Annonces.find({ objet: 'offre' , type : {$in: ['info', 'bien']} } );
		}

		if ( marcheDemandeSelected && marcheOffreSelected && !marcheInfoSelected && marcheServiceSelected && !marcheBienSelected )
		{
			return Annonces.find({ objet: 'offre' , type : {$in: ['info', 'service']} } );
		}

		if ( marcheDemandeSelected && marcheOffreSelected && !marcheInfoSelected && !marcheServiceSelected && marcheBienSelected )
		{
			return Annonces.find({ objet: 'offre' , type : 'bien' } );
		}

		if ( marcheDemandeSelected && marcheOffreSelected && !marcheInfoSelected && marcheServiceSelected && !marcheBienSelected )
		{
			return Annonces.find({ objet: 'offre' , type : 'service' } );
		}

		if ( marcheDemandeSelected && marcheOffreSelected && marcheInfoSelected && !marcheServiceSelected && !marcheBienSelected )
		{
			return Annonces.find({ objet: 'offre' , type : 'info' } );
		}
	}
	else
	{
		console.log("identifiant : " + monuser._id );

		if ( marcheDemandeSelected && marcheOffreSelected && marcheInfoSelected && marcheServiceSelected && marcheBienSelected )
		{
			return Annonces.find({createur: {$ne : monuser._id }});
		}

		if ( !marcheDemandeSelected && !marcheOffreSelected && !marcheInfoSelected && !marcheServiceSelected && !marcheBienSelected )
		{
			return "{}";
		}

		if ( marcheDemandeSelected && !marcheOffreSelected && marcheInfoSelected && marcheServiceSelected && marcheBienSelected ) 
		{
			return Annonces.find({objet: 'demande', createur: {$ne : monuser._id }});
		}

		if ( !marcheDemandeSelected && marcheOffreSelected && marcheInfoSelected && marcheServiceSelected && marcheBienSelected ) 
		{
			return Annonces.find({objet: 'offre', createur: {$ne : monuser._id }});
		}

		if ( marcheDemandeSelected && marcheOffreSelected && !marcheInfoSelected && marcheServiceSelected && marcheBienSelected )
		{
			return Annonces.find({ type : {$in: ['service', 'bien']} , createur: {$ne : monuser._id }} );
		}

		if ( marcheDemandeSelected && marcheOffreSelected && marcheInfoSelected && !marcheServiceSelected && marcheBienSelected ) 
		{
			return Annonces.find({ type : {$in: ['info', 'bien']} , createur: {$ne : monuser._id } } );
		}

		if ( marcheDemandeSelected && marcheOffreSelected && !marcheInfoSelected && marcheServiceSelected && !marcheBienSelected ) 
		{
			return Annonces.find({ type : {$in: ['info', 'service']} , createur: {$ne : monuser._id } } );
		}

		if ( marcheDemandeSelected && marcheOffreSelected && !marcheInfoSelected && !marcheServiceSelected && marcheBienSelected )
		{
			return Annonces.find({ type : 'bien' , createur: {$ne : monuser._id } } );
		}

		if ( marcheDemandeSelected && marcheOffreSelected && !marcheInfoSelected && marcheServiceSelected && !marcheBienSelected )
		{
			return Annonces.find({ type : 'service' , createur: {$ne : monuser._id } } );
		}

		if ( marcheDemandeSelected && marcheOffreSelected && marcheInfoSelected && !marcheServiceSelected && !marcheBienSelected )
		{
			return Annonces.find({ type : 'info' , createur: {$ne : monuser._id }} );
		}

		if ( marcheDemandeSelected && marcheOffreSelected && !marcheInfoSelected && marcheServiceSelected && marcheBienSelected )
		{
			return Annonces.find({ objet: 'demande' , type : {$in: ['service', 'bien']} , createur: {$ne : monuser._id }} );
		}

		if ( marcheDemandeSelected && marcheOffreSelected && marcheInfoSelected && !marcheServiceSelected && marcheBienSelected )
		{
			return Annonces.find({ objet: 'demande' , type : {$in: ['info', 'bien']} , createur: {$ne : monuser._id } } );
		}

		if ( marcheDemandeSelected && marcheOffreSelected && !marcheInfoSelected && marcheServiceSelected && !marcheBienSelected ) 
		{
			return Annonces.find({ objet: 'demande' , type : {$in: ['info', 'service']} , createur: {$ne : monuser._id } } );
		}

		if ( marcheDemandeSelected && marcheOffreSelected && !marcheInfoSelected && !marcheServiceSelected && marcheBienSelected )
		{
			return Annonces.find({ objet: 'demande' , type : 'bien' , createur: {$ne : monuser._id } } );
		}

		if ( marcheDemandeSelected && marcheOffreSelected && !marcheInfoSelected && marcheServiceSelected && !marcheBienSelected )
		{
			return Annonces.find({ objet: 'demande' , type : 'service' , createur: {$ne : monuser._id } } );
		}

		if ( marcheDemandeSelected && marcheOffreSelected && marcheInfoSelected && !marcheServiceSelected && !marcheBienSelected )
		{
			return Annonces.find({ objet: 'demande' , type : 'info' , createur: {$ne : monuser._id } } );
		}

		if ( marcheDemandeSelected && marcheOffreSelected && !marcheInfoSelected && marcheServiceSelected && marcheBienSelected ) 
		{
			return Annonces.find({ objet: 'offre' , type : {$in: ['service', 'bien']}, createur: {$ne : monuser._id } } );
		}

		if ( marcheDemandeSelected && marcheOffreSelected && marcheInfoSelected && !marcheServiceSelected && marcheBienSelected )
		{
			return Annonces.find({ objet: 'offre' , type : {$in: ['info', 'bien']}, createur: {$ne : monuser._id } } );
		}

		if ( marcheDemandeSelected && marcheOffreSelected && !marcheInfoSelected && marcheServiceSelected && !marcheBienSelected )
		{
			return Annonces.find({ objet: 'offre' , type : {$in: ['info', 'service']}, createur: {$ne : monuser._id } } );
		}

		if ( marcheDemandeSelected && marcheOffreSelected && !marcheInfoSelected && !marcheServiceSelected && marcheBienSelected )
		{
			return Annonces.find({ objet: 'offre' , type : 'bien', createur: {$ne : monuser._id } } );
		}

		if ( marcheDemandeSelected && marcheOffreSelected && !marcheInfoSelected && marcheServiceSelected && !marcheBienSelected )
		{
			return Annonces.find({ objet: 'offre' , type : 'service', createur: {$ne : monuser._id } } );
		}

		if ( marcheDemandeSelected && marcheOffreSelected && marcheInfoSelected && !marcheServiceSelected && !marcheBienSelected )
		{
			return Annonces.find({ objet: 'offre' , type : 'info', createur: {$ne : monuser._id } } );
		}
	}

	
  	
/*
  	if ( monuser == null ) 
	{
		if ( marcheDemandeSelected && marcheOffreSelected ) {
			return Annonces.find({});
		}
		else
		{
			if ( marcheDemandeSelected )
			{
				return Annonces.find({objet: 'demande'});
			}
			else
			{
				if ( marcheOffreSelected )
				{
					return Annonces.find({objet: 'offre'});
				}
				else
				{
					return "{}";
				}
			}
		}

	}
	else
	{
		console.log("identifiant : " + monuser._id );
		if ( marcheDemandeSelected && marcheOffreSelected ) {
			return Annonces.find({createur: {$ne : monuser._id }});
		}
		else
		{
			if ( marcheDemandeSelected )
			{
				return Annonces.find({objet: 'demande', createur: {$ne : monuser._id } });
			}
			else
			{
				if ( marcheOffreSelected )
				{
					return Annonces.find({objet: 'offre', createur: {$ne : monuser._id } } );
				}
				else
				{
					return "{}";
				}
			}
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