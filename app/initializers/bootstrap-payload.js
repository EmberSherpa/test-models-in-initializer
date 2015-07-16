/*global BOOTSTRAP_DATA*/

export function initialize(container, application) {
  var store = container.lookup('service:store'),
    payloadKeys = Object.keys(BOOTSTRAP_DATA);

  payloadKeys.forEach((key) => {
    var registryKey = `bootstrap-payload:${key}`,
        model;

    model = store.createRecord(key, BOOTSTRAP_DATA[key]);
    application.register(registryKey, model, {instantiate:false});
  });
}

export default {
  name: 'bootstrap-payload',
  after: 'ember-data',
  initialize: initialize
};
