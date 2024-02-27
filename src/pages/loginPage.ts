import { logInApp } from "../main";
import { Render } from "../utility";
import userPage from "./userPage";
function onLogin() {
  const loginBtn = document.getElementById("loginBtn");

  if (!!loginBtn) {
    loginBtn.addEventListener("click", () => {
      //@ts-ignores
      logInApp.logIn(document.getElementById("loginInput")!.value || "");
      Render(userPage());
    });
  }
}
function loginPage() {
  const html = `<div id="loginBox">
    <input type="text" id="loginInput"/>
    <button id="loginBtn">Login</button>
  </div>`;

  // Ritorna sia l'HTML che una funzione per aggiungere i listener
  return {
    html,
    logInListener: () => {
      onLogin();
    },
  };
}

export default loginPage;
