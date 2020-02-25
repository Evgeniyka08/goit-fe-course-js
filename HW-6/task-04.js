"use strict";
import users from "./users.js";

const getInactiveUsers = users => {
  return users.filter(user => user.isActive === false).map(user => user.name);
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
