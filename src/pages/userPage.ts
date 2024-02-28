import { User } from "../Declaration";
import { logInApp } from "../main";
import { Render, setTheme } from "../utility";
import logInPage from "./loginPage";
function setThemeUsers() {
  const themeBtn = document.getElementById("themeBtn");
  themeBtn?.addEventListener("click", () => {
    const theme = setTheme();
    themeBtn.innerHTML = theme ? "🌕" : "☀";
    themeBtn.style.backgroundColor = theme ? "#535bf2" : "#11161b";
    document
      .querySelectorAll<HTMLElement>(".userCard")
      .forEach(
        (el) => (el.style.backgroundColor = theme ? "#ff8b24" : "#11161b")
      );
  });
}
function onLogOut() {
  const logOutBtn = document.getElementById("logOutBtn");
  setThemeUsers();
  if (!!logOutBtn) {
    logOutBtn.addEventListener("click", () => {
      logInApp.logOut();
      const { htmlLogIn, logInListener } = logInPage();
      Render(htmlLogIn);
      logInListener();
    });
  }
}
function showUserCard() {
  return logInApp.users
    .map(
      (user: User) =>
        `<div class="userCard"><div class="userIcon">🙍‍♂️</div>
        <h2>${user.name}</h2><p>ultimo accesso:  ${user.latestAccess}</p><p> accessi totali: ${user.totalAccess}</p></div>`
    )
    .join("");
}
function userPage() {
  const htmlUsers = `  <button id=themeBtn>☀</button>
  <div id= "usersBox">

  <button id="logOutBtn">LogOut</button>
  <div id="usersContainer">
  ${showUserCard()}</div>
  </div>`;

  return {
    htmlUsers,
    logOutListener: () => {
      onLogOut();
    },
  };
}

export default userPage;
