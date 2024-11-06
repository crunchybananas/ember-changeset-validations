import getMessages from 'ember-changeset-validations/utils/get-messages';
import defaultMessages from 'ember-changeset-validations/utils/messages';
import { module, test } from 'qunit';

module('Unit | Utility | get messages', function () {
  test('it loads custom messages if defined', function (assert) {
    let messages = getMessages();

    // It has all the default messages
    Object.keys(defaultMessages).forEach((k) => {
      assert.ok(messages[k]);
    });

    // Check for custom message which means we loaded the right file
    assert.ok(messages.custom, 'It has the custom message');
  });

  test('it fallsback to default messages if not defined', function (assert) {
    let test-appModuleMap = {};
    assert.deepEqual(
      getMessages(test-appModuleMap, false),
      defaultMessages,
      'loads the correct module',
    );
  });
});
