Template.annonces_demande_tpl.ctx_annonces_demande = function () {
	
  	console.log("-- Template.annonces_demande_tpl.ctx_annonces_demande --");

  	var monuser = Meteor.user();
  	console.log("monuser : " + monuser );
  	

  	if ( monuser == null ) 
	{
		return Annonces.find({objet: 'demande'});
	}
	else
	{
		console.log("identifiant : " + monuser._id );
		return Annonces.find({objet: 'demande', createur: {$ne : monuser._id } });
	}
	
  };

  Template.annonces_demande_tpl.ctx_annonces_demande_count = function () {

    console.log("-- Template.annonces_demande_tpl.ctx_annonces_demande_count --");

    var monuser = Meteor.user();
  	console.log("monuser : " + monuser );
    
   	if ( monuser == null ) 
	{
		return Annonces.find({objet: 'demande'}).count();
	}
	else
	{
		console.log("identifiant : " + monuser._id );
		return Annonces.find({objet: 'demande', createur: {$ne : monuser._id } }).count();
	}
	
    
  };