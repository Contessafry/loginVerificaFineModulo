import { LogInBusines } from "./loginClass";
import loginPage from "./pages/loginPage";
import userPage from "./pages/userPage";
import { Render } from "./utility";
import "../style.css";

export const logInApp = new LogInBusines();
window.onload = () => {
  if (!!logInApp.loggedUser) {
    const { htmlUsers, logOutListener } = userPage();
    Render(htmlUsers);
    logOutListener();
  } else {
    const { htmlLogIn, logInListener } = loginPage();
    Render(htmlLogIn);
    logInListener();
  }
  console.log(!!logInApp.loggedUser);
};
