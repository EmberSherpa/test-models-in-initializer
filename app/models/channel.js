import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  internalName: DS.attr(),
  logoUrl: DS.attr()
});
