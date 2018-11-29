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
    alert('Name is: ' + this.state.name + '\nemail is: ' + this.state.email + '\npassword is ' + this.state.password);
    event.preventDefault();
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
        <input type="submit" value="Next" />
      </form>
    );
  }
}

ReactDOM.render(<PersonalInfo/>, document.getElementById('form1'));