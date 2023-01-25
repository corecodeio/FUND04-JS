const str = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
  nisi ut aliquip ex ea commodo consequat. 
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
  Excepteur sint occaecat cupidatat non proident, 
  sunt in culpa qui officia deserunt mollit anim id est laborum.`;

console.log(str.replace(/dolor/g, 'alegria'));

const ghostSpeak = 'boooh boooooooh';
const regexpSpooky = /bo{3}h/;

console.log(ghostSpeak.replace(regexpSpooky, 'buuu'));

const re = /(\w+)\s(\w+)/;
const str2 = 'Cruz Maria';
const newstr = str2.replace(re, '$2, $1');
console.log(newstr);

//console.clear();

const str3 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
  nisi ut aliquip ex ea commodo consequat. 
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
  Excepteur sint occaecat cupidatat non proident, 
  sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const toReplace = 'dolor';
console.log(str3.replace(new RegExp(toReplace, 'g'), 'alegria'));
