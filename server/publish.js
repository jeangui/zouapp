


// Publie toutes les annonces actives dans le quartier
Meteor.publish('c_annonces_actives', function (mon_emplacement) {
	console.log("# Publication annonces actives ...");
	console.log(" mon identifiant : " + this.userId() );
	console.log(" mon emplacement : " + mon_emplacement );
	if (mon_emplacement != null) {
		console.log("\t longitude : " + mon_emplacement.lon );
		console.log("\t latitude : " + mon_emplacement.lat );
		return Annonces.find( { emplacement : { $near :  { "lat" : mon_emplacement.lat, "lon" :  mon_emplacement.lon } , $maxDistance : 0.1 },statut: "active" } );
		//return Annonces.find( { emplacement : { $near :  { "lat" : 43.2633, "lon" : 5.388383	 } , $maxDistance : 1 },statut: "active" } );
	}
	else
	{
		return Annonces.find({statut: 'active'});
	}
	
});



// Publie toutes les annonces actives dans le quartier
Meteor.publish('c_transactions_actives', function () {

	console.log(" mon identifiant : " + this.userId() );
	var lesTransactions = Transactions.find({ statut: {$ne : 'archivee' } , $or: [ { createur: this.userId() } , {acteur: this.userId() } ] } );

	/*
	console.log("transac count : " + lesTransactions.count() );

	lesTransactions.forEach(function (transac) {
	  	var annon = Annonces.findOne( { _id : transac.annonce });

	  	console.log("annon._id : " + annon._id );
	  	console.log("annon.titre : " + annon.titre );
	  	console.log("annon.objet : " + annon.objet );
	  	console.log("annon.type : " + annon.type );
	  	console.log("annon.description : " + annon.description );
	  	console.log("annon.createur : " + annon.createur );
	  	transac.annonce = annon._id;
	  	transac.titre = annon.titre;
	  	transac.objet = annon.objet;
	});
	*/

	return lesTransactions;
});










/*
// Publie toutes les annonces désactivées
Meteor.publish('c_annonces_desactive', function () {
	console.log("# Publication annonces désactivées ...");
  return Annonces.find({statut: 'desactive'});
});


// Publie toutes les annonces archivées
Meteor.publish('c_annonces_archives', function () {
	console.log("# Publication annonces archivées ...");

	console.log(" nombre : " + Annonces.find({statut: 'archive'}).count() );

  return Annonces.find({statut: 'archive'});
});
*/