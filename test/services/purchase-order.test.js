const assert = require('assert');
const app = require('../../src/app');

describe('\'purchase_order\' service', () => {
  it('registered the service', () => {
    const service = app.service('purchase-order');

    assert.ok(service, 'Registered the service');
  });
});
