"use strict";
const credits = 23580;
const pricePerDroid = 3000;
let userChoice = prompt("Введите количество!");
let totalPurchases = Number(userChoice);
let totalPrice = pricePerDroid * totalPurchases;
let creditsBalance;
if (userChoice === null) {
  console.log("Отменено пользователем!");
} else {
  totalPrice = totalPurchases * pricePerDroid;
}
if (totalPrice > credits) {
  console.log("Недостаточно средств на счету!");
} else {
  console.log(
    `Вы купили ${totalPurchases} дроидов, на счету осталось ${credits -
      totalPrice} кредитов.`
  );
}
