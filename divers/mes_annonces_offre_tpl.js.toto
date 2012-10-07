Template.mesannonces_offre_tpl.ctx_mesannonces_offre = function () {

  	console.log("-- Template.mesannonces_offre_tpl.ctx_mesannonces_offre --");

    var monuser = Meteor.user();
  	console.log("monuser : " + monuser );
  	

  	if ( monuser == null ) 
	{
		return Annonces.find({objet: 'offre'});
	}
	else
	{
		console.log("identifiant : " + monuser._id );
		return Annonces.find({objet: 'offre', createur: monuser._id });
	}

  };

Template.mesannonces_offre_tpl.ctx_mesannonces_offre_count = function () {

	console.log("-- Template.mesannonces_offre_tpl.ctx_mesannonces_offre_count --");

	var monuser = Meteor.user();
  	console.log("monuser : " + monuser );
    
   	if ( monuser == null ) 
	{
		return Annonces.find({objet: 'offre'}).count();
	}
	else
	{
		console.log("identifiant : " + monuser._id );
		return Annonces.find({objet: 'offre', createur: monuser._id }).count();
	}

};