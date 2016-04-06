import Ember from 'ember';

export default Ember.Component.extend({
  updateItemForm: false,

  actions: {
    updateFormShow() {
      this.set('updateItemForm', true);
    },
    update(item) {
      var params = {
        name: this.get('name'),
        image: this.get('image'),
        cost: this.get('cost'),
        description: this.get('description')
      };
      this.set('updateItemForm', false);
      this.sendAction('updateItem', item, params);
      }
    }
  });
