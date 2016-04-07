import Ember from 'ember';

export default Ember.Component.extend({
  model(params) {
    return this.store.findRecord('item', params.item_id);
  },
  shoppingCart: Ember.inject.service(),
  inCart: Ember.inject.service(),

  cartTotal: Ember.computed('shoppingCart.items.[]', function() {
    var total = 0;
    for (var i = 0; i < this.get('shoppingCart.items.length'); i++) {
      total += this.get('shoppingCart.items')[i].get('cost');
    }
    return total;
  }),

});
