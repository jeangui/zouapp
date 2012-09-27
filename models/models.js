// --------------------
//		ANNONCES 
// --------------------
// Annonces -- {
//				titre: 			String, 
//				description: 	String,
//				image:			String,
//				type: 			String, (information,produit,service)
//				objet: 			String, (demande,offre)
//				statut: 		String, (active,desactive,archive)
//				date_creation: 	Date,
//				echeance: 		Date,
//           	themes: 		[String, ...],
//				emplacement:	{ lon : Number, lat: Number } 
//           	createur: 		String,
//				start_date: 	Date,
//				end_date: 		Date,
//}




Annonces = new Meteor.Collection("c_annonces");

// --------------------
//		TRANSACTIONS 
// --------------------
// Transactions -- {
//				statut: 		String, (initiee,info,tarif,contractee,annulee,encours,finalisee,validee,notee,archivee)
//				date_creation: 	Date,
//				createur: 		ObjectId, 
//				acteur: 		ObjectId,
//				annonce: 		ObjectId, 
//}

Transactions = new Meteor.Collection("c_transactions");