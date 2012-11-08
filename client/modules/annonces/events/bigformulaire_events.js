Template.bigformulaire_tpl.events = {
  
  'click #btn-demandeInformationModal': function () {
	var titre = $("#demandeInformationModal #annonces-titre-input").val();
    var description = $("#demandeInformationModal #annonces-description-input").val();
    var urlimage = $("#demandeInformationModal #annonces-image-input").val();

    //var datedebut = $("#demandeInformationModal #annonces-startdate-input").val();
    //var datefin = $("#demandeInformationModal #annonces-enddate-input").val();
    //var echeance = $("#demandeInformationModal #annonces-echeance-input").val();
    var echeanceDate = $("#demandeInformationModal #annonces-echeancedate-input").val();
    var echeanceTime = $("#demandeInformationModal #annonces-echeancetime-input").val();
    var echeanceDateTimeString = echeanceDate + "T" + echeanceTime;
    var echeanceDateTime = moment( echeanceDateTimeString , "YYYY-MM-DDTHH:mm");


    var themes = trimArr( $("#demandeInformationModal #annonces-themes-input").val().split(",") );    

    var latitude = $("#demandeInformationModal #annonces-emplacement-latitude-input").val();
    var longitude = $("#demandeInformationModal #annonces-emplacement-longitude-input").val();
    var statut = $("#demandeInformationModal #annonces-statut-input").val();
  

    if ( urlimage == null || urlimage == undefined || urlimage == "") {
        urlimage = "image.png";
    }

    var annonce = {
        titre:          titre, 
        description:    description,
        image:          urlimage,
        type:           "information",
        objet:          "demande",
        statut:         statut,
        date_creation:  new Date(),
        echeance:       new Date( echeanceDateTime.valueOf() ), 
        themes:         themes,
        emplacement:    { lat : parseFloat(latitude), lon : parseFloat(longitude) },
        createur:       Meteor.user()._id//,
        //start_date:     new Date("2012,06,08,18:30:00"),
        //end_date:       new Date("2012,06,08,00:30:00"),
    };


    
    Annonces.insert(annonce);

    $('#ongletsTab a[href="#tabs1-pane2"]').tab('show');

    $("#demandeInformationModal").modal("hide");



  },

  'click #btn-offreInformationModal': function () {
		
    var titre = $("#offreInformationModal #annonces-titre-input").val();
    var description = $("#offreInformationModal #annonces-description-input").val();
    var urlimage = $("#offreInformationModal #annonces-image-input").val();
    //var datedebut = $("#offreInformationModal #annonces-startdate-input").val();
    //var datefin = $("#offreInformationModal #annonces-enddate-input").val();
    //var echeance = $("#offreInformationModal #annonces-echeance-input").val();

    var echeanceDate = $("#offreInformationModal #annonces-echeancedate-input").val();
    var echeanceTime = $("#offreInformationModal #annonces-echeancetime-input").val();
    var echeanceDateTimeString = echeanceDate + "T" + echeanceTime;
    var echeanceDateTime = moment( echeanceDateTimeString , "YYYY-MM-DDTHH:mm");

    var themes = trimArr( $("#offreInformationModal #annonces-themes-input").val().split(",") );
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
        echeance:       new Date( echeanceDateTime.valueOf() ), 
        themes:         themes,
        emplacement:    { lat : parseFloat(latitude), lon : parseFloat(longitude) },
        createur:       Meteor.user()._id//,
        //start_date:     new Date("2012,06,08,18:30:00"),
        //end_date:       new Date("2012,06,08,00:30:00"),
    };

    Annonces.insert(annonce);

    $('#ongletsTab a[href="#tabs1-pane2"]').tab('show');

    $("#offreInformationModal").modal("hide");

  },

  'click #btn-demandeServiceModal': function () {

	var titre = $("#demandeServiceModal #annonces-titre-input").val();
    var description = $("#demandeServiceModal #annonces-description-input").val();
    var urlimage = $("#demandeServiceModal #annonces-image-input").val();
    var datedebutDate = $("#demandeServiceModal #annonces-startdate-input").val();
    var datedebutTime = $("#demandeServiceModal #annonces-starttime-input").val();
    var dateDebutString = datedebutDate + "T" + datedebutTime;
    var startDate = moment( dateDebutString , "YYYY-MM-DDTHH:mm");
    var datefinDate = $("#demandeServiceModal #annonces-enddate-input").val();
    var datefinTime = $("#demandeServiceModal #annonces-endtime-input").val();
    var dateFinString = datefinDate + "T" + datefinTime;
    var endDate = moment( dateFinString , "YYYY-MM-DDTHH:mm");

    //var echeance = $("#demandeServiceModal #annonces-echeance-input").val();
    var themes = trimArr( $("#demandeServiceModal #annonces-themes-input").val().split(",") );
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
        //echeance:       new Date("2012,06,07,12:00:00"),
        themes:         themes,
        emplacement:    { lat : parseFloat(latitude), lon : parseFloat(longitude) },
        createur:       Meteor.user()._id,
        start_date:     new Date( startDate.valueOf() ),
        end_date:       new Date( endDate.valueOf() )
    };
    
    Annonces.insert(annonce);

    $('#ongletsTab a[href="#tabs1-pane2"]').tab('show');

    $("#demandeServiceModal").modal("hide");

  },

  'click #btn-offreServiceModal': function () {

	var titre = $("#offreServiceModal #annonces-titre-input").val();
    var description = $("#offreServiceModal #annonces-description-input").val();
    var urlimage = $("#offreServiceModal #annonces-image-input").val();
    var datedebutDate = $("#offreServiceModal #annonces-startdate-input").val();
    var datedebutTime = $("#offreServiceModal #annonces-starttime-input").val();
    var dateDebutString = datedebutDate + "T" + datedebutTime;
    var startDate = moment( dateDebutString , "YYYY-MM-DDTHH:mm");
    var datefinDate = $("#offreServiceModal #annonces-enddate-input").val();
    var datefinTime = $("#offreServiceModal #annonces-endtime-input").val();
    var dateFinString = datefinDate + "T" + datefinTime;
    var endDate = moment( dateFinString , "YYYY-MM-DDTHH:mm");
    //var echeance = $("#offreServiceModal #annonces-echeance-input").val();
    var themes = trimArr( $("#offreServiceModal #annonces-themes-input").val().split(",") );
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
        //echeance:       new Date("2012,06,07,12:00:00"),
        themes:         themes,
        emplacement:    { lat : parseFloat(latitude), lon : parseFloat(longitude) },
        createur:       Meteor.user()._id,
        start_date:     new Date( startDate.valueOf() ),
        end_date:       new Date( endDate.valueOf() )
    };

    Annonces.insert(annonce);

    $('#ongletsTab a[href="#tabs1-pane2"]').tab('show');

    $("#offreServiceModal").modal("hide");

  },

  'click #btn-demandeBienModal': function () {

	var titre = $("#demandeBienModal #annonces-titre-input").val();
    var description = $("#demandeBienModal #annonces-description-input").val();
    var urlimage = $("#demandeBienModal #annonces-image-input").val();
    //var datedebut = $("#demandeBienModal #annonces-startdate-input").val();
    //var datefin = $("#demandeBienModal #annonces-enddate-input").val();
    //var echeance = $("#demandeBienModal #annonces-echeance-input").val();
    var themes = trimArr( $("#demandeBienModal #annonces-themes-input").val().split(",") );
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
        //echeance:       new Date("2012,06,07,12:00:00"),
        themes:         themes,
        emplacement:    { lat : parseFloat(latitude), lon : parseFloat(longitude) },
        createur:       Meteor.user()._id//,
        //start_date:     new Date("2012,06,08,18:30:00"),
        //end_date:       new Date("2012,06,08,00:30:00")
    };
    
    Annonces.insert(annonce);

    $('#ongletsTab a[href="#tabs1-pane2"]').tab('show');

    $("#demandeBienModal").modal("hide");

  },

  'click #btn-offreBienModal': function () {

	var titre = $("#offreBienModal #annonces-titre-input").val();
    var description = $("#offreBienModal #annonces-description-input").val();
    var urlimage = $("#offreBienModal #annonces-image-input").val();
    //var datedebut = $("#offreBienModal #annonces-startdate-input").val();
    //var datefin = $("#offreBienModal #annonces-enddate-input").val();
    //var echeance = $("#offreBienModal #annonces-echeance-input").val();
    var themes = trimArr( $("#offreBienModal #annonces-themes-input").val().split(",") );
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
        //echeance:       new Date("2012,06,07,12:00:00"),
        themes:         themes,
        emplacement:    { lat : parseFloat(latitude), lon : parseFloat(longitude) },
        createur:       Meteor.user()._id//,
        //start_date:     new Date("2012,06,08,18:30:00"),
        //end_date:       new Date("2012,06,08,00:30:00")
    };
    
    Annonces.insert(annonce);

    $('#ongletsTab a[href="#tabs1-pane2"]').tab('show');

    $("#offreBienModal").modal("hide");

  }


};