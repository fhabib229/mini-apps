var Summary = (props) => {
  function handleSubmit(e) {
    e.preventDefault();
    ReactDOM.render(<Checkout />, document.getElementById('checkout'))
  }
  return (
    <div>
      Summary Here
    <button type="button" onClick={handleSubmit}>Purchase</button>
    </div>
  );
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
    //insert records into database
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Credit Card Number:
          <input name="cardNumber" type="text" value={this.state.cardNumber} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Expiration Date:
          <input name="expirationDate" type="text" value={this.state.expirationDate} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          CVV:
          <input name="cvv" type="text" value={this.state.cvv} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Billing Zip Code:
          <input name="billingZip" type="text" value={this.state.billingZip} onChange={this.handleChange} />
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
      zip: ''
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
    console.log('address1 is: ' + this.state.address1 + '\naddress2 is: ' + this.state.address2 + '\ncity is ' + this.state.city + '\nstate is ' + this.state.unitedState + '\nzip is ' + this.state.zip);
    event.preventDefault();
    ReactDOM.render(<PurchaseInfo />, document.getElementById('checkout'))
    //insert records into database
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
          <input name="zip" type="text" value={this.state.zip} onChange={this.handleChange} />
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
    ReactDOM.render(<LocationInfo />, document.getElementById('checkout'))
    //Insert records into the database.
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
          <input name="password" type="text" value={this.state.password} onChange={this.handleChange} />
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
    ReactDOM.render(<PersonalInfo />, document.getElementById('checkout'))
  }
  return (
    <button type="button" onClick={handleSubmit}>Checkout</button>
  );
}

ReactDOM.render(<Checkout />, document.getElementById('checkout'));