"use strict";
let input;
let total = 0;
while (input !== null) {
  input = prompt("Введите число");
  total = total += Number(input);
}
alert(`Общая сумма чисел равна ${total}`);
