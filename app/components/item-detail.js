import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  sortBy: ['rating:desc'],
  sortedComments: Ember.computed.sort('item.comments', 'sortBy'),

  averageRating: Ember.computed('sortedComments', function() {
    var total = 0;
    // var comments = 'sortedComments.length';
    for (var i = 0; i < this.get('sortedComments.length'); i++) {
      total += this.get('sortedComments')[i].get('rating');
    }
    var avg = total / this.get('sortedComments.length');
    // var avg = total % parseInt(comments);
    return avg;
  }),


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
