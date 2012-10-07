
Template.annonces_offre_tpl.ctx_annonces_offre = function () {

  	console.log("-- Template.annonces_offre_tpl.ctx_annonces_offre --");

    var monuser = Meteor.user();
  	console.log("monuser : " + monuser );
  	

  	if ( monuser == null ) 
	{
		return Annonces.find({objet: 'offre'});
	}
	else
	{
		console.log("identifiant : " + monuser._id );
		return Annonces.find({objet: 'offre', createur: {$ne : monuser._id } });
	}


  };

  Template.annonces_offre_tpl.ctx_annonces_offre_count = function () {

    console.log("-- Template.annonces_offre_tpl.ctx_annonces_offre_count --");

    var monuser = Meteor.user();
  	console.log("monuser : " + monuser );
    
   	if ( monuser == null ) 
	{
		return Annonces.find({objet: 'offre'}).count();
	}
	else
	{
		console.log("identifiant : " + monuser._id );
		return Annonces.find({objet: 'offre', createur: {$ne : monuser._id } }).count();
	}


  };