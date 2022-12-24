/*8. Write a function to hide email addresses to protect them from unauthorized users.
"somerandomaddress@example.com" -> "somerand...@example.com" */

function hideEmail(email) {
  let parts = email.split("@");
  let user = parts[0];
  let domain = parts[1];
  if (user.length <= 8) {
    return email;
  } else {
    return user.slice(0, 8) + "..." + "@" + domain;
  }
}

console.log(hideEmail("somerandomaddress@example.com"));


function hide(email) {
  let emailRep = email.replace('@', ' ');
  let result1 = emailRep.split(' ');
  let email1 = result1[0];
  let emailHalf = email1.length / 2;
  let emailCut = email1.slice(0, emailHalf);

  return `${emailCut}...@${result1[1]}`
}

console.log(hide("somerandomaddress@example.com")); // Output: "somera...@example.com"
