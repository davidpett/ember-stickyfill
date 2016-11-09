/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-stickyfill',
  included: function(app) {
    this._super.included(app);
    if (!process.env.EMBER_CLI_FASTBOOT) {
      app.import(app.bowerDirectory + '/Stickyfill/dist/stickyfill.min.js');
    }
  }
};
