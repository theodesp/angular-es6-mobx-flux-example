# angular-es6-mobx-flux-example

A simple, example app for Angular using es6, mobx and flux.
It uses open [punkapi](https://punkapi.com) 
to retrieve beer information and display them to the user.

* Webpack reasonable default config.
* Good use of Angular components as from 1.5 [see](https://docs.angularjs.org/guide/component)
* Beautiful css theme using the [wing.css](http://usewing.ml/)
* ES6, and ES7 support with babel.
* Source maps included in all builds.
* Development server with live reload.
* No gulp and no grunt, just npm scripts.

## Requirements
* node `^4.5.0`
* yarn `^0.17.0` or npm `^3.0.0`

## Install
Install dependencies and check to see it works. 
It is recommended that you use [Yarn](https://yarnpkg.com/) 
for deterministic installs, but `npm install` will work just as well.

```bash
$ yarn install    # Install project dependencies
$ yarn start      # Compile and launch (same as `npm start`)
```

## Thoughts

* It uses vanilla [Flux architecture](https://github.com/facebook/flux);
* It parses Punkapi's beer API [see](https://punkapi.com/);
* It uses vanilla [Mobx architecture](https://mobx.js.org/);
* Stores do not emit events. Instead all state changes are managed via [observable actions](https://mobx.js.org/refguide/action.html);
* In the component controller we utilize the Angular 1.5 (lifecycle hooks)[https://docs.angularjs.org/guide/component] to
register with [autorun](https://mobx.js.org/refguide/autorun.html) and de-register onDestroy.
* It is is built in ES6 using [Babel](https://babeljs.io) and [Webpack](https://github.com/webpack/webpack).


See and run the source to see it in action!