Template.annonce_tpl.events = {
  
  'click .entete-annonce-check': function () {
	
  		//alert("id : " + this._id );
  		var annonce_choisie = Annonces.findOne( { _id : this._id });
  		
  		var ma_tx = {
			titre: 			annonce_choisie.titre,
			objet: 			annonce_choisie.objet,
			type: 			annonce_choisie.type,
			description: 	annonce_choisie.description,
			statut: 		"initiee",
			date_creation: 	new Date(),
			createur: 		annonce_choisie.createur, 
			acteur: 		"8f898eaf-ea2f-4865-a930-e7d4cd0be878",
			annonce: 		annonce_choisie._id
		};

	Transactions.insert( ma_tx );

  }

};


