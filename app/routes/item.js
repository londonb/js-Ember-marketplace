import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('item', params.item_id);
  },
  shoppingCart: Ember.inject.service(),

  actions: {
    updateItem(item, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !==undefined && params[key]!=="") {
          item.set(key, params[key]);
        }
      });
    },
    destroyItem(item) {
      item.destroyRecord();
      this.transitionTo('store');
    },
    submitComment(params) {
      var newComment = this.store.createRecord('comment', params);
      var item = params.item;
      item.get('comments').addObject(newComment);
      newComment.save().then(function() {
        return item.save();
      });
      this.transitionTo('item', params.item.id);
    }
    }
  });
