// console shim to prevent errors on certain devices and IE < 10
if (!window.console) {
  window.console = {};
}

function shimType(type) {
  if (typeof window.console[type] === 'function') return;
  if (type === 'log') {
    window.console.log = function () {};
    return;
  }
  window.console[type] = function () {
    window.console.log.apply(window.console, arguments);
  };
}

var consoleHelpers = {};

_.each(['log', 'debug', 'info', 'warn', 'error'], function (type) {
  shimType(type);

  consoleHelpers[type] = function () {
    console[type].apply(console, _.initial(arguments));
  };
});

Template.registerHelper('console', consoleHelpers);
