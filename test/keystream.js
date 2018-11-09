const {generateACPHeaderKey} = require('../dist/message');
const {generateACPKeystream, ACP_STATIC_KEY} = require('../dist/keystream');

const QUnit = require('qunit');

QUnit.test('Generate keystream', function (assert) {
    const expected_hex = '0e39f805c401554f0cac857d868ab5173e09c835';

    const key = generateACPKeystream(20);
    const key_hex = Buffer.from(key, 'binary').toString('hex');

    assert.equal(expected_hex, key_hex);
});

QUnit.test('Generate message header key', function (assert) {
    const expected_hex = '7a5c8b71ad6f324f0cac857d868ab5173e09c835f431657f3c9cb56d969aa507';

    const key = generateACPHeaderKey('testing');
    const key_hex = Buffer.from(key, 'binary').toString('hex');

    assert.equal(expected_hex, key_hex);
});