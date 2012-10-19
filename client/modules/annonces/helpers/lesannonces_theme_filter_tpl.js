Template.lesannonces_theme_filter_tpl.ctx_lesannonces_themes = function () {
  var theme_infos = [];
  var total_count = 0;

  var monuser = Meteor.user();
    console.log("monuser : " + monuser );

    var marcheDemandeSelected = Session.get('marcheDemandeSelected');
  var marcheOffreSelected = Session.get('marcheOffreSelected');
  var marcheInfoSelected = Session.get('marcheInfoSelected');
  var marcheServiceSelected = Session.get('marcheServiceSelected');
  var marcheBienSelected = Session.get('marcheBienSelected');

  console.log("marcheDemandeSelected : " + marcheDemandeSelected );
  console.log("marcheOffreSelected : " + marcheOffreSelected );
  console.log("marcheInfoSelected : " + marcheInfoSelected );
  console.log("marcheServiceSelected : " + marcheServiceSelected );
  console.log("marcheBienSelected : " + marcheBienSelected );

  var req = {};
  var typereq = {$in : []};
  var objetreq = {$in : []};
  

  if ( marcheDemandeSelected )
  {
    objetreq.$in.push('demande');
  }
  if ( marcheOffreSelected )
  {
    objetreq.$in.push('offre');
  }
  if ( marcheInfoSelected )
  {
    typereq.$in.push('information');
  }
  if ( marcheServiceSelected )
  {
    typereq.$in.push('service');
  }
  if ( marcheBienSelected )
  {
    typereq.$in.push('bien');
  }


  /*if ( typereq.$in.length == 0 || objetreq.$in.length == 0 )
  {
    console.log("{} ...");
    return "{}";
  }*/

  if ( monuser == null )
  {
    req.type = typereq;
    req.objet = objetreq;
    console.log( "req : " + JSON.stringify( req ) );
   }
  else
  {
    console.log("identifiant : " + monuser._id );
    req.type = typereq;
    req.objet = objetreq;
    //var userreq = { createur: {$ne : monuser._id } };
    req.createur = {$ne : monuser._id };
    console.log( "req : " + JSON.stringify( req ) );
   }

  var annonces = Annonces.find(req);

  console.log('Annonces nr : ' + annonces.count() );

  annonces.forEach(function (annon) {
    console.log('annon.titre : ' + annon.titre );
    console.log('annon.themes : ' + annon.themes );
    _.each(annon.themes, function (theme) {
      console.log('theme : ' + theme );
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

Template.lesannonces_theme_filter_tpl.ctx_lesannonces_theme_text = function () {
  return this.theme || "All items";
};

Template.lesannonces_theme_filter_tpl.ctx_lesannonces_selected = function () {
  return Session.equals('lesannonces_theme_filter', this.theme) ? 'selected' : '';
};