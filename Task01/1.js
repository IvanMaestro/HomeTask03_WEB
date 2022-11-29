const celsium = Number.parseFloat(prompt("Введите температуру в Цельсиях: "));
alert(`Цельсий: ${celsium}, Фаренгейт: ${celsiusToFahrenheit(celsium).toFixed(1)}`);
function celsiusToFahrenheit(number) {
  return (9 / 5) * number + 32;
}