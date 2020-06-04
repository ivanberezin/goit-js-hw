'use strict';

import users from './users.js';

const getSortedUniqueSkills = users => {
  const sortedUniqueSkills = [];

  [
    ...users.reduce((skills, user) => {
      skills.push(...user.skills);
      return skills;
    }, []),
  ]
    .sort()
    .filter(skill => {
      if (!sortedUniqueSkills.includes(skill)) {
        sortedUniqueSkills.push(skill);
      }
      return sortedUniqueSkills;
    });

  return sortedUniqueSkills;
};

console.log(getSortedUniqueSkills(users));

// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
