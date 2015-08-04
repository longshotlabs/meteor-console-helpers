aldeed:console-helpers
===============

```js
{{console.log foo bar this}}
{{console.debug foo bar this}}
{{console.info foo bar this}}
{{console.warn foo bar this}}
{{console.error foo bar this}}
```

Also contains a shim for the `console` object that prevents "Uncaught ReferenceError: console is not defined" errors on some devices and early IE.
