
Template.mesannonces_tpl.ctx_mesannonces = function () {
	
  	console.log("-- Template.mesannonces_tpl.ctx_mesannonces --");

  	var annonces = req_mesannonces();

  	return annonces;
	
  };



  Template.mesannonces_tpl.ctx_mesannonces_mesDemandeSelected = function () {

  	return Session.get('mesDemandeSelected');
  };

  Template.mesannonces_tpl.ctx_mesannonces_mesOffreSelected = function () {

  	return Session.get('mesOffreSelected');
  };

  Template.mesannonces_tpl.ctx_mesannonces_mesInfoSelected = function () {

  	return Session.get('mesInfoSelected');
  };

  Template.mesannonces_tpl.ctx_mesannonces_mesServiceSelected = function () {

  	return Session.get('mesServiceSelected');
  };

  Template.mesannonces_tpl.ctx_mesannonces_mesBienSelected = function () {

  	return Session.get('mesBienSelected');
  };