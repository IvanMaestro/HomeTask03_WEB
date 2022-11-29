const a = Number.parseFloat(prompt("Введите температуру в Цельсиях: "));
alert(`Цельсий: ${a}, Фаренгейт: ${celsiusToFahrenheit(a).toFixed(1)}`);
function celsiusToFahrenheit(number) {
  return (9 / 5) * number + 32;
}