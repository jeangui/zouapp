Package.describe({
  summary: "Moment.js : library for manipulating dates."
});

Package.on_use(function (api) {
  api.add_files('moment.js', 'client');
});
