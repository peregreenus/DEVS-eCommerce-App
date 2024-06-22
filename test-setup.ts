// eslint-disable-next-line import/no-extraneous-dependencies
import 'whatwg-fetch';

global.fetch = require('jest-fetch-mock');

fetch(JSON.stringify({ testing: true }));

window.matchMedia =
  window.matchMedia ||
  // eslint-disable-next-line func-names
  function () {
    return {
      matches: false,
      addListener() {},
      removeListener() {}
    };
  };
