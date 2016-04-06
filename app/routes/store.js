import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('item');
  },

  actions: {
    saveItem(params) {
      var newItem = this.store.createRecord('item', params);
      newItem.save();
      this.transitionTo('store');
    },
    updateItem(item, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !==undefined && params[key] !=="") {
          item.set(key, params[key]);
        }
      });
      item.save();
      this.transitionTo('store');
    },
    destroyItem(item) {
      item.destroyRecord();
      this.transitionTo('store');
    },
  }
});
