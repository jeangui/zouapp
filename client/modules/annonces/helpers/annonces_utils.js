/* ANNONCES UTILS CLASS */

/*
* Pour les requêtes sur l'onglet : lesannonces
*/
function req_lesannonces ()
{
	var monuser = Meteor.user();
	console.log("monuser : " + monuser );

	var marcheDemandeSelected 	= 	Session.get('marcheDemandeSelected');
	var marcheOffreSelected 	= 	Session.get('marcheOffreSelected');
	
	var marcheInfoSelected 		= 	Session.get('marcheInfoSelected');
	var marcheServiceSelected 	= 	Session.get('marcheServiceSelected');
	var marcheBienSelected 		= 	Session.get('marcheBienSelected');
	
	var lesannonces_theme_filter 			= 	Session.get('lesannonces_theme_filter');

	console.log("marcheDemandeSelected : " + marcheDemandeSelected );
	console.log("marcheOffreSelected : " + marcheOffreSelected );
	console.log("marcheInfoSelected : " + marcheInfoSelected );
	console.log("marcheServiceSelected : " + marcheServiceSelected );
	console.log("marcheBienSelected : " + marcheBienSelected );
	console.log("lesannonces_theme_filter : " + lesannonces_theme_filter );

	var req 		= {};
	var typereq 	= {$in : []};
	var objetreq 	= {$in : []};

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
	if (lesannonces_theme_filter) 
  	{
    	req.themes = lesannonces_theme_filter;
    }

	if ( monuser == null )
	{
		req.type = typereq;
		req.objet = objetreq;
		console.log( "req : " + JSON.stringify( req ) );
	}
	else
	{
		req.type = typereq;
		req.objet = objetreq;
		//var userreq = { createur: {$ne : monuser._id } };
		req.createur = {$ne : monuser._id };
		console.log( "req : " + JSON.stringify( req ) );
	}

	var annonces = Annonces.find(req);

	return annonces;
}



function req_mesannonces ()
{
	var monuser = Meteor.user();
  	console.log("monuser : " + monuser );

  	var mesDemandeSelected 	= 	Session.get('mesDemandeSelected');
	var mesOffreSelected 	= 	Session.get('mesOffreSelected');
	
	var mesInfoSelected 	= 	Session.get('mesInfoSelected');
	var mesServiceSelected 	= 	Session.get('mesServiceSelected');
	var mesBienSelected 	= 	Session.get('mesBienSelected');
	
	var mesannonces_theme_filter 	= 	Session.get('mesannonces_theme_filter');

	console.log("mesDemandeSelected : " + mesDemandeSelected );
	console.log("mesOffreSelected : " + mesOffreSelected );
	console.log("mesInfoSelected : " + mesInfoSelected );
	console.log("mesServiceSelected : " + mesServiceSelected );
	console.log("mesBienSelected : " + mesBienSelected );
	console.log("mesannonces_theme_filter : " + mesannonces_theme_filter );

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
	if (mesannonces_theme_filter) 
  	{
    	req.themes = mesannonces_theme_filter;
    }


	if ( monuser == null )
	{
		req.type = typereq;
		req.objet = objetreq;
		console.log( "req : " + JSON.stringify( req ) );
	}
	else
	{
		req.type = typereq;
		req.objet = objetreq;
		req.createur = monuser._id;
		console.log( "req : " + JSON.stringify( req ) );
	}

	var annonces = Annonces.find(req);

	return annonces;

}