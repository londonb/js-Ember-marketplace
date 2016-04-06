import Ember from 'ember';

export default Ember.Component.extend({
  addNewItem: false,

  actions: {
    formItemShow() {
      this.set('addNewItem', true);
    },
    save() {
      var params = {
        name: this.get('name'),
        image: this.get('image'),
        cost: this.get('cost'),
        description: this.get('description')
      };
      this.set('addNewItem', false);
      this.sendAction('saveItem', params);
    }
  }
});
