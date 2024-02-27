import { LogInBusines } from "./loginClass";
import loginPage from "./pages/loginPage";
import userPage from "./pages/userPage";
import { Render } from "./utility";

export const logInApp = new LogInBusines();
window.onload = function () {
  const { loggedUser } = logInApp;

  if (!!loggedUser) {
    Render(userPage());
  } else {
    const { html, logInListener } = loginPage();
    Render(html);
    logInListener();
  }
  console.log(loggedUser);
};
