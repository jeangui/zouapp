Template.bigformulaire_tpl.events = {
  
  'click #btn-demandeInformationModal': function () {
	var titre = $("#demandeInformationModal #annonces-titre-input").val();
    var description = $("#demandeInformationModal #annonces-description-input").val();
    var urlimage = $("#demandeInformationModal #annonces-image-input").val();
    var datedebut = $("#demandeInformationModal #annonces-startdate-input").val();
    var datefin = $("#demandeInformationModal #annonces-enddate-input").val();
    var echeance = $("#demandeInformationModal #annonces-echeance-input").val();
    var themes = "[ " + $("#demandeInformationModal #annonces-themes-input").val() + " ]";
    var latitude = $("#demandeInformationModal #annonces-emplacement-latitude-input").val();
    var longitude = $("#demandeInformationModal #annonces-emplacement-longitude-input").val();
    var statut = $("#demandeInformationModal #annonces-statut-input").val();
  

    if ( urlimage == null || urlimage == undefined || urlimage == "") {
        urlimage = "image.png";
    }

    alert( urlimage );

    var annonce = {
        titre:          titre, 
        description:    description,
        image:          urlimage,
        type:           "information",
        objet:          "demande",
        statut:         statut,
        date_creation:  new Date(),
        echeance:       new Date("2012,06,07,12:00:00"),
        themes:         themes,
        emplacement:    { lat : parseFloat(latitude), lon : parseFloat(longitude) },
        createur:       Meteor.user()._id,
        start_date:     new Date("2012,06,08,18:30:00"),
        end_date:       new Date("2012,06,08,00:30:00"),
    };


    
    Annonces.insert(annonce);
    $("#demandeInformationModal").modal("hide");



  },

  'click #btn-offreInformationModal': function () {
		
    var titre = $("#offreInformationModal #annonces-titre-input").val();
    var description = $("#offreInformationModal #annonces-description-input").val();
    var urlimage = $("#offreInformationModal #annonces-image-input").val();
    var datedebut = $("#offreInformationModal #annonces-startdate-input").val();
    var datefin = $("#offreInformationModal #annonces-enddate-input").val();
    var echeance = $("#offreInformationModal #annonces-echeance-input").val();
    var themes = "[ " + $("#offreInformationModal #annonces-themes-input").val() + " ]";
    var latitude = $("#offreInformationModal #annonces-emplacement-latitude-input").val();
    var longitude = $("#offreInformationModal #annonces-emplacement-longitude-input").val();
    var statut = $("#offreInformationModal #annonces-statut-input").val();

    if ( urlimage == null || urlimage == undefined || urlimage == "") {
        urlimage = "image.png";
    }

    var annonce = {
        titre:          titre, 
        description:    description,
        image:          urlimage,
        type:           "information",
        objet:          "offre",
        statut:         statut,
        date_creation:  new Date(),
        echeance:       new Date("2012,06,07,12:00:00"),
        themes:         themes,
        emplacement:    { lat : parseFloat(latitude), lon : parseFloat(longitude) },
        createur:       Meteor.user()._id,
        start_date:     new Date("2012,06,08,18:30:00"),
        end_date:       new Date("2012,06,08,00:30:00"),
    };
    Annonces.insert(annonce);

    $("#offreInformationModal").modal("hide");

  },

  'click #btn-demandeServiceModal': function () {

	var titre = $("#demandeServiceModal #annonces-titre-input").val();
    var description = $("#demandeServiceModal #annonces-description-input").val();
    var urlimage = $("#demandeServiceModal #annonces-image-input").val();
    var datedebut = $("#demandeServiceModal #annonces-startdate-input").val();
    var datefin = $("#demandeServiceModal #annonces-enddate-input").val();
    var echeance = $("#demandeServiceModal #annonces-echeance-input").val();
    var themes = "[ " + $("#demandeServiceModal #annonces-themes-input").val() + " ]";
    var latitude = $("#demandeServiceModal #annonces-emplacement-latitude-input").val();
    var longitude = $("#demandeServiceModal #annonces-emplacement-longitude-input").val();
    var statut = $("#demandeServiceModal #annonces-statut-input").val();

    if ( urlimage == null || urlimage == undefined || urlimage == "") {
        urlimage = "image.png";
    }

    var annonce = {
        titre:          titre, 
        description:    description,
        image:          urlimage,
        type:           "service",
        objet:          "demande",
        statut:         statut,
        date_creation:  new Date(),
        echeance:       new Date("2012,06,07,12:00:00"),
        themes:         themes,
        emplacement:    { lat : parseFloat(latitude), lon : parseFloat(longitude) },
        createur:       Meteor.user()._id,
        start_date:     new Date("2012,06,08,18:30:00"),
        end_date:       new Date("2012,06,08,00:30:00"),
    };
    Annonces.insert(annonce);

    $("#demandeServiceModal").modal("hide");

  },

  'click #btn-offreServiceModal': function () {

	var titre = $("#offreServiceModal #annonces-titre-input").val();
    var description = $("#offreServiceModal #annonces-description-input").val();
    var urlimage = $("#offreServiceModal #annonces-image-input").val();
    var datedebut = $("#offreServiceModal #annonces-startdate-input").val();
    var datefin = $("#offreServiceModal #annonces-enddate-input").val();
    var echeance = $("#offreServiceModal #annonces-echeance-input").val();
    var themes = "[ " + $("#offreServiceModal #annonces-themes-input").val() + " ]";
    var latitude = $("#offreServiceModal #annonces-emplacement-latitude-input").val();
    var longitude = $("#offreServiceModal #annonces-emplacement-longitude-input").val();
    var statut = $("#offreServiceModal #annonces-statut-input").val();

    if ( urlimage == null || urlimage == undefined || urlimage == "") {
        urlimage = "image.png";
    }

    var annonce = {
        titre:          titre, 
        description:    description,
        image:          urlimage,
        type:           "service",
        objet:          "offre",
        statut:         statut,
        date_creation:  new Date(),
        echeance:       new Date("2012,06,07,12:00:00"),
        themes:         themes,
        emplacement:    { lat : parseFloat(latitude), lon : parseFloat(longitude) },
        createur:       Meteor.user()._id,
        start_date:     new Date("2012,06,08,18:30:00"),
        end_date:       new Date("2012,06,08,00:30:00"),
    };
    Annonces.insert(annonce);

    $("#offreServiceModal").modal("hide");

  },

  'click #btn-demandeBienModal': function () {

	var titre = $("#demandeBienModal #annonces-titre-input").val();
    var description = $("#demandeBienModal #annonces-description-input").val();
    var urlimage = $("#demandeBienModal #annonces-image-input").val();
    var datedebut = $("#demandeBienModal #annonces-startdate-input").val();
    var datefin = $("#demandeBienModal #annonces-enddate-input").val();
    var echeance = $("#demandeBienModal #annonces-echeance-input").val();
    var themes = "[ " + $("#demandeBienModal #annonces-themes-input").val() + " ]";
    var latitude = $("#demandeBienModal #annonces-emplacement-latitude-input").val();
    var longitude = $("#demandeBienModal #annonces-emplacement-longitude-input").val();
    var statut = $("#demandeBienModal #annonces-statut-input").val();

    if ( urlimage == null || urlimage == undefined || urlimage == "") {
        urlimage = "image.png";
    }

    var annonce = {
        titre:          titre, 
        description:    description,
        image:          urlimage,
        type:           "bien",
        objet:          "demande",
        statut:         statut,
        date_creation:  new Date(),
        echeance:       new Date("2012,06,07,12:00:00"),
        themes:         themes,
        emplacement:    { lat : parseFloat(latitude), lon : parseFloat(longitude) },
        createur:       Meteor.user()._id,
        start_date:     new Date("2012,06,08,18:30:00"),
        end_date:       new Date("2012,06,08,00:30:00"),
    };
    Annonces.insert(annonce);

    $("#demandeBienModal").modal("hide");

  },

  'click #btn-offreBienModal': function () {

	var titre = $("#offreBienModal #annonces-titre-input").val();
    var description = $("#offreBienModal #annonces-description-input").val();
    var urlimage = $("#offreBienModal #annonces-image-input").val();
    var datedebut = $("#offreBienModal #annonces-startdate-input").val();
    var datefin = $("#offreBienModal #annonces-enddate-input").val();
    var echeance = $("#offreBienModal #annonces-echeance-input").val();
    var themes = "[ " + $("#offreBienModal #annonces-themes-input").val() + " ]";
    var latitude = $("#offreBienModal #annonces-emplacement-latitude-input").val();
    var longitude = $("#offreBienModal #annonces-emplacement-longitude-input").val();
    var statut = $("#offreBienModal #annonces-statut-input").val();

    if ( urlimage == null || urlimage == undefined || urlimage == "") {
        urlimage = "image.png";
    }

    var annonce = {
        titre:          titre, 
        description:    description,
        image:          urlimage,
        type:           "bien",
        objet:          "offre",
        statut:         statut,
        date_creation:  new Date(),
        echeance:       new Date("2012,06,07,12:00:00"),
        themes:         themes,
        emplacement:    { lat : parseFloat(latitude), lon : parseFloat(longitude) },
        createur:       Meteor.user()._id,
        start_date:     new Date("2012,06,08,18:30:00"),
        end_date:       new Date("2012,06,08,00:30:00"),
    };
    Annonces.insert(annonce);

    $("#offreBienModal").modal("hide");

  }


};