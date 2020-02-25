"use strict";
import users from "./users.js";
const getSortedUniqueSkills = users => {
  const allUserSkills = users
    .reduce((allSkills, user) => {
      allSkills.push(...user.skills);
      return allSkills;
    }, [])
    .sort();
  const uniqueUserSkills = [];
  allUserSkills.forEach(skill => {
    if (!uniqueUserSkills.includes(skill)) {
      uniqueUserSkills.push(skill);
    }
  });
  return uniqueUserSkills;
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
