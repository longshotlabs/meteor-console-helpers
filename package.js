Package.describe({
  name: "aldeed:console-helpers",
  summary: "Helpers for console logging in Blaze templates",
  version: "0.0.1",
  git: "https://github.com/aldeed/meteor-console-helpers"
});

Package.onUse(function(api) {
  api.use('underscore@1.0.1');
  api.use('templating@1.0.9');

  api.addFiles('client/console-helpers.js', 'client');
});
