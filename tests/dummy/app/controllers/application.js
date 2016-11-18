import Ember from 'ember';

export default Ember.Controller.extend({
  isSticky: true,

  actions: {
    toggleSticky() {
      this.toggleProperty('isSticky');
    }
  }
});
