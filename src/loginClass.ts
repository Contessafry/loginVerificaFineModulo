import { User } from "./Declaration";
import { formattedData } from "./utility";

export class LogInBusines {
  loggedUser: User["name"] = localStorage.getItem("loggedUser") || "";
  users: User[] | [] = JSON.parse(localStorage.getItem("users") || "[]");

  toggleSaveLoggedUser() {
    localStorage.setItem(
      "loggedUser",
      !!this.loggedUser ? this.loggedUser : ""
    );
  }
  saveUsers() {
    localStorage.setItem("users", JSON.stringify(this.users || []));
  }
  logIn(name: string) {
    console.log(name);
    this.loggedUser = name;
    const userExist = this.users.find((user) => user.name === name);
    if (!!userExist) {
      (userExist.totalAccess = userExist.totalAccess + 1),
        (userExist.latestAccess = formattedData());
    } else {
      const newUser = {
        name,
        latestAccess: formattedData(),
        totalAccess: 1,
      };
      this.users = [...this.users, newUser];
    }
    this.saveUsers();
    this.toggleSaveLoggedUser();
  }
  logOut() {
    this.loggedUser = "";
    this.toggleSaveLoggedUser();
  }

  getUsers() {
    const usersFromStorage = localStorage.getItem("users");
    if (usersFromStorage) {
      this.users = JSON.parse(usersFromStorage);
    }
  }
}
