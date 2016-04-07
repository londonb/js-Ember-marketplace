import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr(),
  image: DS.attr(),
  cost: DS.attr('number'),
  description: DS.attr(),
  comments: DS.hasMany('comment', {async: true}),
  average: DS.attr('number'),

  shoppingCart: Ember.inject.service(),
  inCart: Ember.computed('shoppingCart.items.[]', function() {
    return this.get('shoppingCart').includes(this);
  })
});
