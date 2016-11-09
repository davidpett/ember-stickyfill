import Ember from 'ember';
import layout from '../templates/components/x-sticky';

const {
  on,
  run: { next }
} = Ember;

export default Ember.Component.extend({
  classNames: ['sticky'],
  layout,

  initSticky: on('didInsertElement', function() {
    next(this, function() {
      this.$().Stickyfill();
    });
  })
});
