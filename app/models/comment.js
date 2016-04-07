import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr(),
  date: DS.attr(),
  comment: DS.attr(),
  item: DS.belongsTo('item', {async: true})
});
