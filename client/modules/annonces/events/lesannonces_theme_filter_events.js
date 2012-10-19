Template.lesannonces_theme_filter_tpl.events = {
  'mousedown .theme': function () {
  	//alert(this.theme);
    if (Session.equals('lesannonces_theme_filter', this.theme))
      Session.set('lesannonces_theme_filter', null);
    else
      Session.set('lesannonces_theme_filter', this.theme);
  }
};