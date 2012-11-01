
Template.lesannonces_tpl.ctx_lesannonces = function () {
	
  	console.log("-- Template.lesannonces_tpl.ctx_lesannonces --");

  	var annonces = req_lesannonces();

  	return annonces;
	
  };



  Template.lesannonces_tpl.ctx_lesannonces_marcheDemandeSelected = function () {

  	return Session.get('marcheDemandeSelected');
  };

  Template.lesannonces_tpl.ctx_lesannonces_marcheOffreSelected = function () {

  	return Session.get('marcheOffreSelected');
  };

  Template.lesannonces_tpl.ctx_lesannonces_marcheInfoSelected = function () {

  	return Session.get('marcheInfoSelected');
  };

  Template.lesannonces_tpl.ctx_lesannonces_marcheServiceSelected = function () {

  	return Session.get('marcheServiceSelected');
  };

  Template.lesannonces_tpl.ctx_lesannonces_marcheBienSelected = function () {

  	return Session.get('marcheBienSelected');
  };


