import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  commentForm: false,
  actions: {
    showCommentForm() {
      this.set('commentForm', true);
    },
    save() {
      var params = {
        user: this.get('user'),
        date: this.get('date') ? this.get('date') : moment().format('MMMM Do YYYY, h:mm a'),
        comment: this.get('comment'),
        item: this.get('item'),
        rating: this.get('rating')
      };
      this.set('commentForm', false);
      this.sendAction('submitComment', params);
    }
  }
});
