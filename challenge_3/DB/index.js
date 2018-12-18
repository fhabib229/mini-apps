const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/customers');

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', ( ) => {
  console.log('Database Connection successful');
});

let customerSchema = new mongoose.Schema({
  name: String,
  email: String,
  Password: String,
  addr1: String,
  addr2: String,
  city: String,
  state: String,
  zip: Number,
  phone: Number,
  creditcard: Number,
  expirationdate:Number,
  cvv: Number,
  billingzip: Number
});

let Customer = mongoose.model('Customer', customerSchema);

let createCustomer = () => {
  let customer = new Customer();
  return customer;
};

module.exports = {
  createCustomer: createCustomer
};