import React from "react";
import axios from "axios";
import Loan from "./Loan";
import AppBar from "./AppBar";
import Repayment from "./Repayment";
import Account from "./Account";
import Login from "./Login";
import Register from "./Register";
import Message from "./Message";

const interest = 1.07; // 7% monthly simple interest
const emailPattern = /^[.\w-]+@[a-zA-Z]+.[a-zA-Z]{2,}$/;
const phonePattern = /^\d{8}$/;

const ForwardRefToLoan = React.forwardRef((props, ref) => (
  <Loan forwardedRef={ref} {...props} />
));
const ForwardRefToRepayment = React.forwardRef((props, ref) => (
  <Repayment forwardedRef={ref} {...props} />
));

class App extends React.Component {
  state = {
    amount: "",
    term: 52,
    email: "",
    phone: "",
    id: "",
    name: "",
    acra: "",
    approved: false,
    loading: false,
    loan: true,
    route: "login",
    loggedIn: false,
    password: "",
    msgOpen: false,
    message: ""
  };

  input = React.createRef();
  card = React.createRef();

  handleChange = key => event => {
    this.setState({
      [key]: event.target.value
    });
  };

  handleSubmit = async () => {
    const { amount, term, email, phone, id, name, acra } = this.state;
    const files = this.input.current.files;
    const formData = new FormData();
    if (name.length === 0) {
      this.handleMessage("Please provide your legal name");
      return;
    }
    formData.append("name", name);
    if (!emailPattern.test(email)) {
      this.handleMessage("Please provide a valid email address.");
      return;
    }
    formData.append("email", email);
    if (!phonePattern.test(phone)) {
      this.handleMessage("Please provide a valid local phone number.");
      return;
    }
    formData.append("phone", phone);
    if (id.length <= 8) {
      this.handleMessage("Please provide a valid NRIC/Passport No.");
      return;
    }
    formData.append("id", id);
    if (acra.length <= 8) {
      this.handleMessage("Please provide a valid ACRA registered No.");
      return;
    }
    formData.append("acra", acra);
    if (amount <= 0) {
      this.handleMessage("Please enter an amount greater than $0.");
      return;
    }
    formData.append("amount", amount);
    formData.append("term", term);
    if (files.length === 0) {
      this.handleMessage(
        "Please provide financial statements and credit report."
      );
      return;
    }
    formData.append("files", files);
    try {
      this.setState({
        loading: true
      });
      // Backend APIs not implemented
      await axios.post("/loans", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
    } catch (error) {
      if (error.response.status === 404) {
        // Dummy way of approval
        setTimeout(() => {
          this.setState({
            approved: true,
            loading: false
          });
        }, 2000);
      }
    }
  };

  handleRoute = route => () => {
    const { loggedIn } = this.state;
    if (route === "register") {
      this.setState({
        route
      });
    } else if (!loggedIn) {
      this.setState({
        route: "login"
      });
    } else if (route === "logout") {
      this.setState({
        loggedIn: false,
        route: "login"
      });
    } else {
      this.setState({
        route
      });
    }
  };

  handleRepay = async () => {
    // Supposed to integrate with Stripe or alternative
    // To let them validate card information
    // by communicating with its own servers
    // So as not to store payment info on our server
    // Therefore only setting this dummy logic
    this.setState(state => ({
      route: "account",
      amount: state.amount - state.amount / state.term,
      term: state.term - 1,
      approved: state.term === 1 ? false : true
    }));
  };

  handleLogin = async () => {
    const { email, password } = this.state;
    if (!emailPattern.test(email)) {
      this.handleMessage("Please provide a valid email address.");
    } else if (password.length < 8) {
      this.handleMessage("Password must be more than 8 characters.");
    } else {
      try {
        await axios.post("/login", {
          email,
          password
        });
        this.setState({
          loggedIn: true,
          route: "loan"
        });
      } catch (error) {
        if (error.response.status === 404) {
          // Dummy way of logging in
          setTimeout(() => {
            this.setState({
              loggedIn: true,
              route: "loan"
            });
          }, 500);
        }
      }
    }
  };

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({ msgOpen: false });
  };

  handleMessage = message => {
    this.setState({
      msgOpen: true,
      message
    });
  };

  render() {
    const {
      route,
      amount,
      term,
      approved,
      email,
      password,
      loggedIn,
      message,
      msgOpen
    } = this.state;
    const pages = {
      loan: (
        <ForwardRefToLoan
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          {...this.state}
          ref={this.input}
        />
      ),
      repayment: (
        <ForwardRefToRepayment
          ref={this.card}
          amount={((amount / term) * interest).toFixed(2)}
          handleRepay={this.handleRepay}
          approved={approved}
        />
      ),
      account: (
        <Account
          interest={interest}
          amount={amount}
          term={term}
          approved={approved}
        />
      ),
      login: (
        <Login
          handleChange={this.handleChange}
          handleLogin={this.handleLogin}
          handleRoute={this.handleRoute}
          email={email}
          password={password}
        />
      ),
      register: (
        <Register
          handleChange={this.handleChange}
          handleLogin={this.handleLogin}
          handleMessage={this.handleMessage}
          email={email}
          password={password}
        />
      )
    };
    return (
      <>
        <AppBar handleRoute={this.handleRoute} loggedIn={loggedIn} />
        {pages[route]}
        <Message
          handleClose={this.handleClose}
          message={message}
          open={msgOpen}
        />
      </>
    );
  }
}

export default App;
