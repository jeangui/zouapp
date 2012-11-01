Template.mesannonces_theme_filter_tpl.events = {
  'mousedown .theme': function () {
  	//alert(this.theme);
    if (Session.equals('mesannonces_theme_filter', this.theme))
      Session.set('mesannonces_theme_filter', null);
    else
      Session.set('mesannonces_theme_filter', this.theme);
  }
};