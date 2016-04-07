import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),


  actions: {
    addToCart(item) {
      this.get('shoppingCart').add(item);
    },
    removeFromCart(item) {
      this.get('shoppingCart').remove(item);
    },
    delete(item) {
      if(confirm("Are you sure you want to delete this?")) {
        this.sendAction('destroyItem', item);
      }
    },
    submitComment(params) {
      this.sendAction('submitComment', params);
    }
  }
});
