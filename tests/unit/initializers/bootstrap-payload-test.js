import Ember from 'ember';
import { initialize } from '../../../initializers/bootstrap-payload';
import { module, test } from 'qunit';
import Channel from 'test-models-in-initializer/models/channel';

var registry, application;

module('Unit | Initializer | bootstrap payload', {
  beforeEach: function() {
    window.BOOTSTRAP_DATA = {
      'channel': {
        'id': 0,
        'name': 'Test Channel',
        'internalName': 'test-channel',
        'logoUrl': '//somecdn.net/test-channel/logo.png'
      }
    };
    Ember.run(function() {
      application = Ember.Application.create();
      registry = application.registry;
      registry.register('model:channel', Channel);
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  initialize(registry, application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
