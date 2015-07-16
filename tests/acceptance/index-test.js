import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'test-models-in-initializer/tests/helpers/start-app';
import Channel from 'test-models-in-initializer/models/channel';

var application;

module('Acceptance | index', {
  beforeEach: function() {
    window.BOOTSTRAP_DATA = {
      'channel': {
        'id': 0,
        'name': 'Test Channel',
        'internalName': 'test-channel',
        'logoUrl': '//somecdn.net/test-channel/logo.png'
      }
    };
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('channel type', function(assert) {
  let channel = application.registry.lookup('bootstrap-payload:channel');
  assert.ok(channel, "is registered");
  assert.ok(channel instanceof Channel);
});
