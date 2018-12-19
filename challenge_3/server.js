const express = require('express');
const app = express();
const port = 3000;
const database = require('./DB');
app.use(express.static('public'));
app.use(express.json());

let customer;

app.listen(port, ()=> console.log('Listening on port ' + port));

//Routes: checkout, formone, formtwo, formthree, summary
app.get('/checkout', (req, res) => {
  customer = database.createCustomer();
  console.log('Here is customer:' ,customer);
  res.send('200');
});

app.post('/formone', (req, res) => {
  console.log('formone data:', req.body);
  let data = req.body;
  for (var key in data ) {
    console.log('Form 1 Data: ', data[key]);
  }
  customer.name = data.name;
  customer.email = data.email;
  customer.password = data.password;
  customer.save((err) => {
    if (err) {
      console.log('Error posting form one data to db');
    } else {
      console.log('Successfully posted form one data');
    }
  });
  res.send('201');
});

app.post('/formtwo', (req, res) => {
  console.log('formtwo data:', req.body);
  let data = req.body;
  for (var key in data ) {
    console.log('Form 2 Data: ', data[key]);
  }
  customer.addr1 = data.address1;
  customer.addr2 = data.address2;
  customer.city = data.city;
  customer.state = data.unitedState;
  customer.zip = data.zip;
  customer.phone = data.phone;
  customer.save((err) => {
    if (err) {
      console.log('Error posting form two data to db');
    } else {
      console.log('Successfully posted form two data');
    }
  });
  res.send('201');
});

app.post('/formthree', (req, res) => {
  console.log('formthree data:', req.body);
  let data = req.body;
  for (var key in data ) {
    console.log('Form 3 Data: ', data[key]);
  }
  customer.creditcard = data.cardNumber;
  customer.expirationdate = data.expirationDate;
  customer.cvv = data.cvv;
  customer.billingzip = data.billingZip;
  customer.save((err) => {
    if (err) {
      console.log('Error posting form three data to db');
    } else {
      console.log('Successfully posted form three data');
    }
  });
  res.send('201');
});

app.get('/summary', (req, res) => {
  let data = {
    name: customer.name,
    email: customer.email,
    password: customer.password,
    addr1: customer.addr1,
    addr2: customer.addr2,
    city: customer.city,
    state: customer.state,
    zip: customer.zip,
    phone: customer.phone,
    creditcard: customer.creditcard,
    expirationdate:customer.expirationdate,
    cvv: customer.cvv,
    billingzip: customer.billingzip
  };
  res.status('200').send(data);
});