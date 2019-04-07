## Getting started

Install nodeJs, 8 or above.  `yarn` will install the node modules, including [canvas](https://www.npmjs.com/package/canvas), which will required the following dependencies on Mac OSX.


`brew install pkg-config cairo pango libpng jpeg giflib librsvg`


```
yarn
yarn test
```

To use the node debugger run

```
yarn test:watch
```

and visit chrome://inspect/#devices in chrome. In the list of Remote Targets, click the inspect link for `node_modules/.bin/jest`, and the dev tools should open.  If you add a debugger statement to your code, the devtools should break on it so you can inspect.
