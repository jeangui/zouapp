Template.mesannonces_theme_filter_tpl.ctx_mesannonces_themes = function () {
  

  var annonces = req_mesannonces();


  var theme_infos = [];
  var total_count = 0;

  //console.log('Annonces nr : ' + annonces.count() );

  annonces.forEach(function (annon) {
    //console.log('annon.titre : ' + annon.titre );
    //console.log('annon.themes : ' + annon.themes );
    _.each(annon.themes, function (theme) {
      //console.log('theme : ' + theme );
      var theme_info = _.find(theme_infos, function (x) { return x.theme === theme; });
      if (! theme_info)
        theme_infos.push({theme: theme, count: 1});
      else
        theme_info.count++;
    });
    total_count++;
  });

  theme_infos = _.sortBy(theme_infos, function (x) { return x.theme; });
  theme_infos.unshift({theme: null, count: total_count});

  return theme_infos;
};

Template.mesannonces_theme_filter_tpl.ctx_mesannonces_theme_text = function () {
  return this.theme || "Tous";
};

Template.mesannonces_theme_filter_tpl.ctx_mesannonces_selected = function () {
  return Session.equals('mesannonces_theme_filter', this.theme) ? 'selected' : '';
};