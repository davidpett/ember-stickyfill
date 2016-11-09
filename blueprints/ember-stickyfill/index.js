/*jshint node:true*/
module.exports = {
  description: 'ember-stickyfill',
  normalizeEntityName: function() {},
  afterInstall: function() {
    return this.addBowerPackageToProject('Stickyfill');
  }
};
