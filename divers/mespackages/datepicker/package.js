Package.describe({
  summary: "Datepicker for bootstrap and jquery"
});

Package.on_use(function (api) {
  api.add_files('css/datepicker.css', 'client');
  api.add_files('less/datepicker.less', 'client');
  api.add_files('js/bootstrap-datepicker.js', 'client');
  

});
