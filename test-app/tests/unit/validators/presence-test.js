import validatePresence from 'ember-changeset-validations/validators/presence';
import buildMessage from 'ember-changeset-validations/utils/validation-errors';
import { module, test } from 'qunit';

module('Unit | Validator | presence', function (hooks) {
  test('it accepts a `true` option', function (assert) {
    let key = 'firstName';
    let validator = validatePresence(true);

    assert.strictEqual(
      validator(key, undefined),
      buildMessage(key, { type: 'present' }),
    );
    assert.strictEqual(
      validator(key, null),
      buildMessage(key, { type: 'present' }),
    );
    assert.strictEqual(
      validator(key, ''),
      buildMessage(key, { type: 'present' }),
    );
    assert.true(validator(key, 'a'));
  });
});
