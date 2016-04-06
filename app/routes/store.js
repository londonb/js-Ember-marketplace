import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('item');
  },

  actions: {
    destroyItem(item) {
      item.destroyRecord();
      this.transitionTo('store');
    }
  }
});
