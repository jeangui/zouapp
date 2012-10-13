//--------------------------------------------------------------
// TIMEPICKER BOOTSTRAP SMART PACKAGE
// 
//------------------------------------------------------------

Package.describe({
  summary: "Datepicker : Bootstrap comptible timepicker",
  internal: true
});

Package.on_use(function (api, where) {
  api.add_files([
    'js/bootstrap-timepicker.js',
    'compiled/timepicker.css'
  ], 'client');
});
