
Template.mesannonces_tpl.ctx_mesannonces = function () {
	
  	console.log("-- Template.mesannonces_tpl.ctx_mesannonces --");

  	var monuser = Meteor.user();
  	console.log("monuser : " + monuser );

  	var mesDemandeSelected = Session.get('mesDemandeSelected');
	var mesOffreSelected = Session.get('mesOffreSelected');
	var mesInfoSelected = Session.get('mesInfoSelected');
	var mesServiceSelected = Session.get('mesServiceSelected');
	var mesBienSelected = Session.get('mesBienSelected');

	console.log("mesDemandeSelected : " + mesDemandeSelected );
	console.log("mesOffreSelected : " + mesOffreSelected );
	console.log("mesInfoSelected : " + mesInfoSelected );
	console.log("meseServiceSelected : " + mesServiceSelected );
	console.log("mesBienSelected : " + mesBienSelected );

	var req = {};
	var typereq = {$in : []};
	var objetreq = {$in : []};
	

	if ( mesDemandeSelected )
	{
		objetreq.$in.push('demande');
	}
	if ( mesOffreSelected )
	{
		objetreq.$in.push('offre');
	}
	if ( mesInfoSelected )
	{
		typereq.$in.push('information');
	}
	if ( mesServiceSelected )
	{
		typereq.$in.push('service');
	}
	if ( mesBienSelected )
	{
		typereq.$in.push('bien');
	}


	/*
	if ( typereq.$in.length == 0 || objetreq.$in.length == 0 )
	{
		console.log("{} ...");
		return "{}";
	}
	*/

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
		req.createur = monuser._id;
		console.log( "req : " + JSON.stringify( req ) );
		return Annonces.find(req);		
	}


	/*
	if ( monuser == null ) 
	{
		if ( mesDemandeSelected && mesOffreSelected && mesInfoSelected && mesServiceSelected && mesBienSelected )
		{
			return Annonces.find({});
		}

		if ( !mesDemandeSelected && !mesOffreSelected && !mesInfoSelected && !mesServiceSelected && !mesBienSelected )
		{
			return "{}";
		}

		if ( mesDemandeSelected && !mesOffreSelected && mesInfoSelected && mesServiceSelected && mesBienSelected ) 
		{
			return Annonces.find({objet: 'demande'});
		}

		if ( !mesDemandeSelected && mesOffreSelected && mesInfoSelected && mesServiceSelected && mesBienSelected ) 
		{
			return Annonces.find({objet: 'offre'});
		}

		if ( mesDemandeSelected && mesOffreSelected && !mesInfoSelected && mesServiceSelected && mesBienSelected )
		{
			return Annonces.find({ type : {$in: ['service', 'bien']} } );
		}

		if ( mesDemandeSelected && mesOffreSelected && mesInfoSelected && !mesServiceSelected && mesBienSelected ) 
		{
			return Annonces.find({ type : {$in: ['info', 'bien']} } );
		}

		if ( mesDemandeSelected && mesOffreSelected && !mesInfoSelected && mesServiceSelected && !mesBienSelected ) 
		{
			return Annonces.find({ type : {$in: ['info', 'service']} } );
		}

		if ( mesDemandeSelected && mesOffreSelected && !mesInfoSelected && !mesServiceSelected && mesBienSelected )
		{
			return Annonces.find({ type : 'bien' } );
		}

		if ( mesDemandeSelected && mesOffreSelected && !mesInfoSelected && mesServiceSelected && !mesBienSelected )
		{
			return Annonces.find({ type : 'service' } );
		}

		if ( mesDemandeSelected && mesOffreSelected && mesInfoSelected && !mesServiceSelected && !mesBienSelected )
		{
			return Annonces.find({ type : 'info' } );
		}

		if ( mesDemandeSelected && mesOffreSelected && !mesInfoSelected && mesServiceSelected && mesBienSelected )
		{
			return Annonces.find({ objet: 'demande' , type : {$in: ['service', 'bien']} } );
		}

		if ( mesDemandeSelected && mesOffreSelected && mesInfoSelected && !mesServiceSelected && mesBienSelected )
		{
			return Annonces.find({ objet: 'demande' , type : {$in: ['info', 'bien']} } );
		}

		if ( mesDemandeSelected && mesOffreSelected && !mesInfoSelected && mesServiceSelected && !mesBienSelected ) 
		{
			return Annonces.find({ objet: 'demande' , type : {$in: ['info', 'service']} } );
		}

		if ( mesDemandeSelected && mesOffreSelected && !mesInfoSelected && !mesServiceSelected && mesBienSelected )
		{
			return Annonces.find({ objet: 'demande' , type : 'bien' } );
		}

		if ( mesDemandeSelected && mesOffreSelected && !mesInfoSelected && mesServiceSelected && !mesBienSelected )
		{
			return Annonces.find({ objet: 'demande' , type : 'service' } );
		}

		if ( mesDemandeSelected && mesOffreSelected && mesInfoSelected && !mesServiceSelected && !mesBienSelected )
		{
			return Annonces.find({ objet: 'demande' , type : 'info' } );
		}

		if ( mesDemandeSelected && mesOffreSelected && !mesInfoSelected && mesServiceSelected && mesBienSelected ) 
		{
			return Annonces.find({ objet: 'offre' , type : {$in: ['service', 'bien']} } );
		}

		if ( mesDemandeSelected && mesOffreSelected && mesInfoSelected && !mesServiceSelected && mesBienSelected )
		{
			return Annonces.find({ objet: 'offre' , type : {$in: ['info', 'bien']} } );
		}

		if ( mesDemandeSelected && mesOffreSelected && !mesInfoSelected && mesServiceSelected && !mesBienSelected )
		{
			return Annonces.find({ objet: 'offre' , type : {$in: ['info', 'service']} } );
		}

		if ( mesDemandeSelected && mesOffreSelected && !mesInfoSelected && !mesServiceSelected && mesBienSelected )
		{
			return Annonces.find({ objet: 'offre' , type : 'bien' } );
		}

		if ( mesDemandeSelected && mesOffreSelected && !mesInfoSelected && mesServiceSelected && !mesBienSelected )
		{
			return Annonces.find({ objet: 'offre' , type : 'service' } );
		}

		if ( mesDemandeSelected && mesOffreSelected && mesInfoSelected && !mesServiceSelected && !mesBienSelected )
		{
			return Annonces.find({ objet: 'offre' , type : 'info' } );
		}
	}
	else
	{
		console.log("identifiant : " + monuser._id );

		if ( mesDemandeSelected && mesOffreSelected && mesInfoSelected && mesServiceSelected && mesBienSelected )
		{
			return Annonces.find({ createur: monuser._id });
		}

		if ( !mesDemandeSelected && !mesOffreSelected && !mesInfoSelected && !mesServiceSelected && !mesBienSelected )
		{
			return "{}";
		}

		if ( mesDemandeSelected && !mesOffreSelected && mesInfoSelected && mesServiceSelected && mesBienSelected ) 
		{
			return Annonces.find({objet: 'demande', createur: monuser._id });
		}

		if ( !mesDemandeSelected && mesOffreSelected && mesInfoSelected && mesServiceSelected && mesBienSelected ) 
		{
			return Annonces.find({objet: 'offre', createur: monuser._id });
		}

		if ( mesDemandeSelected && mesOffreSelected && !mesInfoSelected && mesServiceSelected && mesBienSelected )
		{
			return Annonces.find({ type : {$in: ['service', 'bien']} , createur: monuser._id } );
		}

		if ( mesDemandeSelected && mesOffreSelected && mesInfoSelected && !mesServiceSelected && mesBienSelected ) 
		{
			return Annonces.find({ type : {$in: ['info', 'bien']} , createur: monuser._id  } );
		}

		if ( mesDemandeSelected && mesOffreSelected && !mesInfoSelected && mesServiceSelected && !mesBienSelected ) 
		{
			return Annonces.find({ type : {$in: ['info', 'service']} , createur: monuser._id  } );
		}

		if ( mesDemandeSelected && mesOffreSelected && !mesInfoSelected && !mesServiceSelected && mesBienSelected )
		{
			return Annonces.find({ type : 'bien' , createur: monuser._id  } );
		}

		if ( mesDemandeSelected && mesOffreSelected && !mesInfoSelected && mesServiceSelected && !mesBienSelected )
		{
			return Annonces.find({ type : 'service' , createur: monuser._id  } );
		}

		if ( mesDemandeSelected && mesOffreSelected && mesInfoSelected && !mesServiceSelected && !mesBienSelected )
		{
			return Annonces.find({ type : 'info' , createur: monuser._id } );
		}

		if ( mesDemandeSelected && mesOffreSelected && !mesInfoSelected && mesServiceSelected && mesBienSelected )
		{
			return Annonces.find({ objet: 'demande' , type : {$in: ['service', 'bien']} , createur: monuser._id } );
		}

		if ( mesDemandeSelected && mesOffreSelected && mesInfoSelected && !mesServiceSelected && mesBienSelected )
		{
			return Annonces.find({ objet: 'demande' , type : {$in: ['info', 'bien']} , createur: monuser._id  } );
		}

		if ( mesDemandeSelected && mesOffreSelected && !mesInfoSelected && mesServiceSelected && !mesBienSelected ) 
		{
			return Annonces.find({ objet: 'demande' , type : {$in: ['info', 'service']} , createur: monuser._id  } );
		}

		if ( mesDemandeSelected && mesOffreSelected && !mesInfoSelected && !mesServiceSelected && mesBienSelected )
		{
			return Annonces.find({ objet: 'demande' , type : 'bien' , createur: monuser._id  } );
		}

		if ( mesDemandeSelected && mesOffreSelected && !mesInfoSelected && mesServiceSelected && !mesBienSelected )
		{
			return Annonces.find({ objet: 'demande' , type : 'service' , createur: monuser._id  } );
		}

		if ( mesDemandeSelected && mesOffreSelected && mesInfoSelected && !mesServiceSelected && !mesBienSelected )
		{
			return Annonces.find({ objet: 'demande' , type : 'info' , createur: monuser._id  } );
		}

		if ( mesDemandeSelected && mesOffreSelected && !mesInfoSelected && mesServiceSelected && mesBienSelected ) 
		{
			return Annonces.find({ objet: 'offre' , type : {$in: ['service', 'bien']}, createur: monuser._id  } );
		}

		if ( mesDemandeSelected && mesOffreSelected && mesInfoSelected && !mesServiceSelected && mesBienSelected )
		{
			return Annonces.find({ objet: 'offre' , type : {$in: ['info', 'bien']}, createur: monuser._id  } );
		}

		if ( mesDemandeSelected && mesOffreSelected && !mesInfoSelected && mesServiceSelected && !mesBienSelected )
		{
			return Annonces.find({ objet: 'offre' , type : {$in: ['info', 'service']}, createur: monuser._id  } );
		}

		if ( mesDemandeSelected && mesOffreSelected && !mesInfoSelected && !mesServiceSelected && mesBienSelected )
		{
			return Annonces.find({ objet: 'offre' , type : 'bien', createur: monuser._id  } );
		}

		if ( mesDemandeSelected && mesOffreSelected && !mesInfoSelected && mesServiceSelected && !mesBienSelected )
		{
			return Annonces.find({ objet: 'offre' , type : 'service', createur: monuser._id  } );
		}

		if ( mesDemandeSelected && mesOffreSelected && mesInfoSelected && !mesServiceSelected && !mesBienSelected )
		{
			return Annonces.find({ objet: 'offre' , type : 'info', createur: monuser._id  } );
		}
	}
	*/

	
  	
/*
  	if ( monuser == null ) 
	{
		if ( mesDemandeSelected && mesOffreSelected ) {
			return Annonces.find({});
		}
		else
		{
			if ( mesDemandeSelected )
			{
				return Annonces.find({objet: 'demande'});
			}
			else
			{
				if ( mesOffreSelected )
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
		if ( mesDemandeSelected && mesOffreSelected ) {
			return Annonces.find({createur: monuser._id });
		}
		else
		{
			if ( mesDemandeSelected )
			{
				return Annonces.find({objet: 'demande', createur: monuser._id  });
			}
			else
			{
				if ( mesOffreSelected )
				{
					return Annonces.find({objet: 'offre', createur: monuser._id  } );
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



  Template.mesannonces_tpl.ctx_mesannonces_mesDemandeSelected = function () {

  	return Session.get('mesDemandeSelected');
  };

  Template.mesannonces_tpl.ctx_mesannonces_mesOffreSelected = function () {

  	return Session.get('mesOffreSelected');
  };

  Template.mesannonces_tpl.ctx_mesannonces_mesInfoSelected = function () {

  	return Session.get('mesInfoSelected');
  };

  Template.mesannonces_tpl.ctx_mesannonces_mesServiceSelected = function () {

  	return Session.get('mesServiceSelected');
  };

  Template.mesannonces_tpl.ctx_mesannonces_mesBienSelected = function () {

  	return Session.get('mesBienSelected');
  };