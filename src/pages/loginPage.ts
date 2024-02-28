import { logInApp } from "../main";
import { Render, setTheme } from "../utility";
import userPage from "./userPage";
function setThemeLogin() {
  const themeBtn = document.getElementById("themeBtn");
  themeBtn?.addEventListener("click", () => {
    const theme = setTheme();
    themeBtn.innerHTML = theme ? "🌕" : "☀";
    themeBtn.style.backgroundColor = theme ? "#535bf2" : "#11161b";
    document.getElementById("loginInput")!.style.backgroundColor = theme
      ? "white"
      : "#11161b";
  });
}
function onLogin() {
  const loginBtn = document.getElementById("loginBtn");
  setThemeLogin();
  if (!!loginBtn) {
    loginBtn.addEventListener("click", () => {
      const loginInput = document.getElementById(
        "loginInput"
      ) as HTMLInputElement;
      if (loginInput.value.length !== 0) {
        logInApp.logIn(loginInput.value);
        const { htmlUsers, logOutListener } = userPage();

        Render(htmlUsers);

        logOutListener();
      } else {
        alert("Inserisci lo UserName");
      }
    });
  }
}
function loginPage() {
  const htmlLogIn = `<button id=themeBtn>☀</button>
  <div id="loginBox">
    <input placeholder="...Username" type="text" id="loginInput"/>
    <button id="loginBtn">Login</button>
  </div>`;

  // Ritorna sia l'HTML che una funzione per aggiungere i listener
  return {
    htmlLogIn,
    logInListener: () => {
      onLogin();
    },
  };
}

export default loginPage;
