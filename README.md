Boilerplate with Webpack, Express and React (structure, context, routes, flow typing)

##TODO:
* PWA
* GitHub Pages

Install dependencies:
```
yarn install
```
Run (dev mode):
```
yarn dev
```
<sup>Then go to http://localhost:8082/</sup>

Run (prod mode):
```
yarn start
```
#### Tests
```
yarn test
```

#### Notes
To upgrade all project dependencies:
```
npm i -g npm-check-updates
npm-check-updates -u
yarn install
```

To update flow types for project dependencies:
```
yarn global add flow-typed
yarn install
flow-typed install
```