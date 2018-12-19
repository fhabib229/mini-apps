class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      address1: '',
      address2: '',
      city: '',
      unitedState: '',
      zip: '',
      phone: '',
      creditcard: '',
      expdate: '',
      cvv: '',
      billingZip: '',
      isLoaded: false,
      error: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch('/summary')
    .then(res => res.json())
    .then((result) => {
      this.setState({
        isLoaded: true,
        name: result.name,
        email: result.email,
        password: result.password,
        address1: result.addr1,
        address2: result.addr2,
        city: result.city,
        unitedState: result.state,
        zip: result.zip,
        phone: result.phone,
        creditcard: result.creditcard,
        expdate: result.expirationdate,
        cvv: result.cvv,
        billingZip: result.billingzip
      });
    },
    (error) => {
      this.setState({
        isLoaded: true,
        error
      });
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    ReactDOM.render(<Checkout />, document.getElementById('checkout'))
  }

  render() {
    if (this.state.error) {
      return <div>Error: {this.state.error.message}</div>;
    } else if (!this.state.isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div>
        <h3>Summary</h3>
        <br />
        <ul>
          <li>Name: {this.state.name}</li>
          <li>Email: {this.state.email}</li>
          <li>Password so everyone can see: {this.state.password}</li>
          <li>Address line 1: {this.state.address1}</li>
          <li>Address line 2: {this.state.address2}</li>
          <li>City: {this.state.city}</li>
          <li>State: {this.state.unitedState}</li>
          <li>Zip: {this.state.zip}</li>
          <li>Phone: {this.state.phone}</li>
          <li>Credit Card Number: {this.state.creditcard}</li>
          <li>Expiration Date: {this.state.expdate}</li>
          <li>CVV: {this.state.cvv}</li>
          <li>Billing Zip: {this.state.billingZip}</li>
        </ul>
        <br />
        <button type="button" onClick={this.handleSubmit}>Purchase</button>
        </div>
      );
    }
    }
}

class PurchaseInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardNumber: '',
      expirationDate: '',
      cvv: '',
      billingZip: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name] : event.target.value
    });
  }

  handleSubmit(event) {
    console.log('cardNumber: ', this.state.cardNumber, '\nexpirationDate: ', this.state.expirationDate, '\ncvv: ', this.state.cvv, '\nbillingZip', this.state.billingZip);
    event.preventDefault();
    ReactDOM.render(<Summary />, document.getElementById('checkout'))
    let options = {
      cardNumber: this.state.cardNumber,
      expirationDate: this.state.expirationDate,
      cvv: this.state.cvv,
      billingZip: this.state.billingZip
    }
    fetch('/formthree', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(options)
    })
    .then(
      (response)=> {
        response.json();
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Credit Card Number:
          <input name="cardNumber" type="number" value={this.state.cardNumber} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Expiration Date:
          <input name="expirationDate" type="number" value={this.state.expirationDate} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          CVV:
          <input name="cvv" type="number" value={this.state.cvv} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Billing Zip Code:
          <input name="billingZip" type="number" value={this.state.billingZip} onChange={this.handleChange} />
        </label>
        <br />
        <input type="submit" value="Next" />
      </form>
    );
  }
}

class LocationInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address1: '',
      address2: '',
      city: '',
      unitedState: '',
      zip: '',
      phone: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name] : event.target.value
    });
  }

  handleSubmit(event) {
    console.log('address1 is: ' + this.state.address1 + '\naddress2 is: ' + this.state.address2 + '\ncity is ' + this.state.city + '\nstate is ' + this.state.unitedState + '\nzip is ' + this.state.zip + '\nphone is ' + this.state.phone);
    event.preventDefault();
    ReactDOM.render(<PurchaseInfo />, document.getElementById('checkout'))
    let options = {
      address1: this.state.address1,
      address2: this.state.address2,
      city: this.state.city,
      unitedState: this.state.unitedState,
      zip: this.state.zip,
      phone: this.state.phone
    }
    fetch('/formtwo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(options)
    })
    .then(
      (response)=> {
        response.json();
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Address line 1:
          <input name="address1" type="text" value={this.state.address1} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Address line 2:
          <input name="address2" type="text" value={this.state.address2} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          City:
          <input name="city" type="text" value={this.state.city} onChange={this.handleChange} />
        </label>
        <br />
        <label>
        State:
          <input name="unitedState" type="text" value={this.state.unitedState} onChange={this.handleChange} />
        </label>
        <br />
        <label>
        Zip Code:
          <input name="zip" type="number" value={this.state.zip} onChange={this.handleChange} />
        </label>
        <br />
        <input type="submit" value="Next" onClick={this.handleSubmit}/>
      </form>
    );
  }
}

class PersonalInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name] : event.target.value
    });
  }

  handleSubmit(event) {
    console.log('Name is: ' + this.state.name + '\nemail is: ' + this.state.email + '\npassword is ' + this.state.password);
    event.preventDefault();
    let options = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }
    fetch('/formone', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(options)
    })
    .then(
      (response)=> {
        response.json();
    })
    ReactDOM.render(<LocationInfo />, document.getElementById('checkout'))
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input name="email" type="text" value={this.state.email} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Password:
          <input name="password" type="password" value={this.state.password} onChange={this.handleChange} />
        </label>
        <br />
        <input type="submit" value="Next" onClick={this.handleSubmit} />
      </form>
    );
  }
}


function Checkout() {
  function handleSubmit(e) {
    e.preventDefault();
    fetch('/checkout')
    .then(
      ()=> {
        console.log('Successfully routed to /checkout!')
      }, (error) => {
        console.log('Error routing to /checkout')
    });
    ReactDOM.render(<PersonalInfo />, document.getElementById('checkout'));
  }
  return (
    <button type="button" onClick={handleSubmit}>Checkout</button>
  );
}

ReactDOM.render(<Checkout />, document.getElementById('checkout'));