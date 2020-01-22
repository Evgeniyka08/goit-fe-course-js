"use strict";
const total = 100;
const order = 50;
const messageNotcorrect = "На складе недостаточно твоаров!";
const messageCorrect = "Заказ оформлен, с вами свяжется менеджер!";
if (order > total) {
  console.log(messageNotcorrect);
} else {
  console.log(messageCorrect);
}
