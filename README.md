# delighted-loader

Async loader for the Delighted JS API written in typescript with promises.

This package makes no changes to the functionality of the Delighted JS API, it merely provides an easy way to load it asynchronously and then execute calls against the API in a Typescript project.

## Installation

```
$ npm install --save delighted-loader
```

## Usage

```typescript
import { Delighted, Loader } from 'delighted-loader';

const loader = new Loader(yourApiToken);
loader.load().then((delighted: Delighted) => {
  delighted.survey({
    email: email,
    name: name,
    properties: {}
  });
});
```

The API only supports the `survey` call, which is documented [here](https://app.delighted.com/docs/api/web).

## Options

The options accepted by the `survey` function conform to the documentation [here](https://app.delighted.com/docs/api/web).
