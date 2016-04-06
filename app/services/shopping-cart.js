import Ember from 'ember';

export default Ember.Service.extend({
  items: [],

  add(item) {
    this.get('items').addObject(item);
  },
  remove(item) {
    this.get('items').removeObject(item);
  },
  includes(item) {
    return this.get('items').includes(item);
  },
  empty() {
    this.get('items').setObjects([]);
  }
});
