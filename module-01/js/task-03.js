const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
message = prompt('Enter your password');
if (message === null) {
  message = 'Canceled by User';
} else if (message === ADMIN_PASSWORD) {
  message = 'Welcome!';
} else if (message !== ADMIN_PASSWORD) {
  message = 'Access denied, wrong password!';
}
alert(message);
