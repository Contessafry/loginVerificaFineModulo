import { User } from "../Declaration";
import { logInApp } from "../main";

function userPage() {
  const { users } = logInApp;
  return `<div id= "usersBox">
  button id="logOutBtn">LogOut</button>
  ${users
    .map(
      (user: User) =>
        `<div class="userCard"><h2>${user.name}</h2><p>${user.latestAccess}</p><p>${user.totalAccess}</p></div>`
    )
    .join("")}
  </div>`;
}

export default userPage;
