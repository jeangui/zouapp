Template.mesannonces_demande_tpl.ctx_mesannonces_demande = function () {
  	console.log("-- Template.mesannonces_demande_tpl.ctx_mesannonces_demande --");
    
  	var monuser = Meteor.user();
  	console.log("monuser : " + monuser );
  	

  	if ( monuser == null ) 
	{
		return Annonces.find({objet: 'demande'});
	}
	else
	{
		console.log("identifiant : " + monuser._id );
		return Annonces.find({objet: 'demande', createur: monuser._id });
	}

  };

  Template.mesannonces_demande_tpl.ctx_mesannonces_demande_count = function () {

    console.log("-- Template.mesannonces_demande_tpl.ctx_mesannonces_demande_count --");

    var monuser = Meteor.user();
  	console.log("monuser : " + monuser );
    
   	if ( monuser == null ) 
	{
		return Annonces.find({objet: 'demande'}).count();
	}
	else
	{
		console.log("identifiant : " + monuser._id );
		return Annonces.find({objet: 'demande', createur: monuser._id }).count();
	}
  };