Template.navbar_tpl.ctx_username = function () {
    console.log("-- Template.navbar_tpl.ctx_username --");
    console.log("Meteor.user() : " + Meteor.user() );
    return "toto";
  }
