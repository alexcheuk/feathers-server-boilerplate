// Initializes the `purchase_order` service on path `/purchase-order`
const createService = require('feathers-mongoose');
const createModel = require('../../models/purchase-order.model');
const hooks = require('./purchase-order.hooks');
const filters = require('./purchase-order.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'purchase-order',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/purchase-order', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('purchase-order');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
