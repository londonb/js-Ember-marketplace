import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('store');
  this.route('item', {path: '/item/:item_id'});
  this.route('about');
  this.route('cart');
});

export default Router;
