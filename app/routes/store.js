import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('item');
  },

  actions: {
    destroyItem(item) {
      item.destroyRecord();
      this.transitionTo('store');
    },
    saveItem(params) {
      var newItem = this.store.createRecord('item', params);
    newItem.save();
    this.transitionTo('store');
    }
  }
});
