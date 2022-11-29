const username = prompt("Введите Ваше имя: ");
function userGreeting(val) {
  return `Приветствую тебя, ${val}!`;
}
console.log(userGreeting(username));