'use strict';

import users from './users.js';

const getUsersWithGender = (users, gender) => {
  return users.filter(user => gender === user.gender).map(user => user.name);
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]