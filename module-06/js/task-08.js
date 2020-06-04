'use strict';

import users from './users.js';

const getUsersWithFriend = (users, friendName) => {
  return users.reduce((usersWithFriend, user) => {
    if (user.friends.includes(friendName)) {
      usersWithFriend.push(user.name);
    }
    return usersWithFriend;
  }, []);
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]

console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
