import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr( ),
  info: DS.attr( ),
  category: DS.belogsTo( 'category', { async: true } ),
});
