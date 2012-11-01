  // if the database is empty on server start, create some sample data.
Meteor.startup(function () {

	console.log( '#### STARTUP ####');

  if (Annonces.find().count() === 0) {

  	console.log( ' Startup : O Annonces donc création d \'annonces');
  	 //5.3879418
  	 //43.26180069999999


    var data = [
      	{
		titre: 			"Babysitting1", 
		description: 		"Je suis étudiante et j'adore m'occuper des enfants. Je propose mes services pour faire du baby sitting",
		image:			"http://www.quotidien.uqam.ca/storage/images/sassine_s.jpg",
		type: 			"service",
		objet: 			"demande",
		statut: 		"active",
		date_creation: 		new Date(),
		echeance: 		new Date("2012,06,07,12:00:00"),
		themes: 		["babysitting"],
		emplacement:		{ lat : 43.2618006, lon: 5.3879418 },
		createur: 		"1d5f6b5a-3383-47ac-8511-8d867825d1e7",
		start_date: 		new Date("2012,06,08,18:30:00"),
		end_date: 		new Date("2012,06,08,00:30:00"),
	},
	{
		titre: 			"Babysitting2", 
		description: 	"Je suis une jeune maman avec une jolie petite fille de 1 an 1/2 et j'ai besoin de quelqu'un de sérieux pour la garder.",
		image:          "http://www.femibion.fr/femibion/illustrations/maman2.jpg", 
		type: 			"service",
		objet: 			"offre",
		statut: 		"active",
		date_creation: 		new Date(),
		echeance: 		new Date("2012,06,07,12:00:00"),
		themes: 		["babysitting"],
		emplacement:		{ lat : 43.2618007, lon: 5.3879418 },
		createur: 		"1898698760986098",
		start_date: 		new Date("2012,06,08,18:30:00"),
		end_date: 		new Date("2012,06,08,00:30:00"),
	},
	{
		titre: 			"Babysitting3", 
		description: 	"Je suis étudiante et j'adore m'occuper des enfants. Je propose mes services pour faire du baby sitting",
		image:			"http://imworld.aufeminin.com/dossiers/D20090610/laure-155141_L.jpg",
		type: 			"service",
		objet: 			"offre",
		statut: 		"archive",
		date_creation: 		new Date(),
		echeance: 		new Date("2012,06,07,12:00:00"),
		themes: 		["babysitting"],
		emplacement:		{ lat : 43.2618005, lon: 5.3879418 },
		createur: 		"1898698760986098",
		start_date: 		new Date("2012,06,08,18:30:00"),
		end_date: 		new Date("2012,06,08,00:30:00"),
	},
	{
		titre: 			"Jardinier1", 
		description: 	"Je suis jardinier et paysagiste. Je propose mes services pour faire de votre jardin un havre de paix",
		image:			"http://images.forum-auto.com/mesimages/419547/Jardinier.jpg",
		type: 			"service",
		objet: 			"offre",
		statut: 		"active",
		date_creation: 		new Date(),
		echeance: 		new Date("2012,06,07,12:00:00"),
		themes: 		["jardinerie"],
		emplacement:		{ lat : 43.2618004, lon: 5.3879418 },
		createur: 		"1d5f6b5a-3383-47ac-8511-8d867825d1e7",
		start_date: 		new Date("2012,06,08,18:30:00"),
		end_date: 		new Date("2012,06,08,00:30:00"),
	},
	{
		titre: 			"Infirmière du quartier...", 
		description: 	"Je suis infirmière dans le quartier depuis de nombreuses années et je propose mes services pour vous rendre les soins plus agréables",
		image:			"http://static.commentcamarche.net/sante-medecine.commentcamarche.net/faq/images/23-istock-000001536056xsmall-s-.png",
		type: 			"service",
		objet: 			"offre",
		statut: 		"active",
		date_creation: 		new Date(),
		echeance: 		new Date("2012,06,07,12:00:00"),
		themes: 		["soin", "medical", "Infirmière"],
		emplacement:		{ lat : 43.2618008, lon: 5.3879418 },
		createur: 		"1d5f6b5a-3383-47ac-8511-8d867825d1e7",
		start_date: 		new Date("2012,06,08,18:30:00"),
		end_date: 		new Date("2012,06,08,00:30:00"),
	},
	{
		titre: 			"Veille dame", 
		description: 	"Veille dame du quartier a besoin qu'une Infirmière passe à son domicile tous les matins pour lui faire une piqure.",
		image:			"http://www.jepic.org/wp-content/uploads/2012/05/mamie-petrad.jpg",
		type: 			"service",
		objet: 			"demande",
		statut: 		"active",
		date_creation: 		new Date(),
		echeance: 		new Date("2012,06,07,12:00:00"),
		themes: 		["soin", "medical", "Infirmière"],
		emplacement:		{ lat : 43.2618002, lon: 5.3879418 },
		createur: 		"1898698760986098",
		start_date: 		new Date("2012,06,08,18:30:00"),
		end_date: 		new Date("2012,06,08,00:30:00"),
	},
	{
		titre: 			"Voiture", 
		description: 	"Voiture a vendre.",
		image:			"http://www.masculin.com/images/article/1096-citroen-2cv/citroen-2cv-ba3.jpg",
		type: 			"bien",
		objet: 			"demande",
		statut: 		"active",
		date_creation: 		new Date(),
		echeance: 		new Date("2012,06,07,12:00:00"),
		themes: 		["voiture","vente"],
		emplacement:		{ lat : 43.2618001, lon: 5.3879418 },
		createur: 		"1898698760986098",
		start_date: 		new Date("2012,06,08,18:30:00"),
		end_date: 		new Date("2012,06,08,00:30:00"),
	}
	,
	{
		titre: 			"Où trouver le trésor", 
		description: 	"Où trouver le trésor.",
		image:			"http://www.jepic.org/wp-content/uploads/2012/05/mamie-petrad.jpg",
		type: 			"info",
		objet: 			"demande",
		statut: 		"active",
		date_creation: 		new Date(),
		echeance: 		new Date("2012,06,07,12:00:00"),
		themes: 		["jeux","loisir"],
		emplacement:		{ lat : 43.2618009, lon: 5.3879418 },
		createur: 		"1898698760986098",
		start_date: 		new Date("2012,06,08,18:30:00"),
		end_date: 		new Date("2012,06,08,00:30:00"),
	}
    ];

    for (var i = 0; i < data.length; i++) {
        var annonce = data[i];
        Annonces.insert(annonce);
    }
  }

  console.log('Création de l\'index 2d');
  //Annonces._driver.mongo.db.ensureIndex("c_annonces",{ emplacement : "2d" });
  Annonces._ensureIndex("c_annonces",{ emplacement : "2d" , statut : 1 });

});
