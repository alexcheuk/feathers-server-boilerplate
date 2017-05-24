const users = require('./users/users.service.js')
const purchaseOrder = require('./purchase-order/purchase-order.service.js')
module.exports = function () {
  const app = this // eslint-disable-line no-unused-vars
  app.configure(users)
  app.configure(purchaseOrder)
};
