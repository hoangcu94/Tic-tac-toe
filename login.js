import app from "./index.js";
import Register from "./register.js";

class Login {
  $txtEmail;
  $txtPassword;
  $btnSignIn;
  $formLogin;
  $errorMessage;

  constructor() {
    this.$txtEmail = document.createElement("input");
    this.$txtEmail.type = "email";
    this.$txtEmail.placeholder = "Enter your email...";
    this.$txtEmail.classList.add("form-input");

    this.$txtPassword = document.createElement("input");
    this.$txtPassword.type = "password";
    this.$txtPassword.placeholder = "Enter your password";
    this.$txtPassword.classList.add("form-input");

    this.$btnSignIn = document.createElement("button");
    this.$btnSignIn.type = "submit";
    this.$btnSignIn.innerHTML = "Sign In";
    this.$btnSignIn.classList.add('btn-lg')

    this.$errorMessage = document.createElement("p");
    this.$errorMessage.classList.add("error");

    this.$formLogin = document.createElement("form");
    this.$formLogin.addEventListener("submit", this.login);
  }
  login = (event) => {
    event.preventDefault();
    const email = this.$txtEmail.value;
    const password = this.$txtPassword.value;

    if (email === "") {
      this.setErrorMessage("Email cannot be empty");
      return;
    }
    if (password === "") {
      this.setErrorMessage("Password cannot be empty");
      return;
    }
    this.setErrorMessage("");

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log(userCredential);
      });
  };

  setErrorMessage = (content) => {
    this.$errorMessage.innerHTML = content;
    if (content === "") {
      this.$errorMessage.style.display = "none";
    } else {
      this.$errorMessage.style.display = "block";
    }
  };

  gotoRegister = () => {
    const register = new Register();
    app.changeActiveScreen(register);
  };

  initRender = (container) => {
    const flexContainer = document.createElement("div");
    flexContainer.classList.add(
      "d-flex",
      "flex-column",
      "centering",
      "bg-primary",
      "vh100"
    );

    const title = document.createElement("h1");
    title.innerHTML = "Login";
    title.classList.add("lg-title");
    flexContainer.appendChild(title);
    flexContainer.appendChild(this.$errorMessage);
    flexContainer.appendChild(this.$txtEmail);
    flexContainer.appendChild(this.$txtPassword);
    flexContainer.appendChild(this.$btnSignIn);

    const div = document.createElement("div");
    const span = document.createElement("span");
    span.innerHTML = "I don't have an account, ";
    const linkToRegister = document.createElement("a");
    linkToRegister.innerHTML = "Register";
    linkToRegister.href = "#";
    linkToRegister.addEventListener("click", this.gotoRegister);
    div.appendChild(span);
    div.appendChild(linkToRegister);

    flexContainer.appendChild(div);
    this.$formLogin.appendChild(flexContainer);
    container.appendChild(this.$formLogin);
  };
}

export default Login;
