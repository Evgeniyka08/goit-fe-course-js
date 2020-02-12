"use strict";
const china = "КИТАЙ";
const chile = "ЧИЛИ";
const australia = "АВСТРАЛИЯ";
const india = "ИНДИЯ";
const jamaica = "ЯМАЙКА";
const chinaCosts = 100;
const chileCosts = 250;
const australiaCosts = 170;
const indiaCosts = 80;
const jamaicaCosts = 120;
let deliveryCosts;
let userSelectedCountry = prompt("Введите страну доставки.");
if (userSelectedCountry === null) {
  console.log("ничего не введено");
} else {
  switch (userSelectedCountry.toUpperCase()) {
    case china:
      deliveryCosts = chinaCosts;
      break;
    case chile:
      deliveryCosts = chileCosts;
      break;
    case australia:
      deliveryCosts = australiaCosts;
      break;
    case india:
      deliveryCosts = indiaCosts;
      break;
    case jamaica:
      deliveryCosts = jamaicaCosts;
      break;
    default:
      alert("В Вашей стране доставка не доступна");
  }
}
if (deliveryCosts > 0) {
  alert(
    `Доставка в ${userSelectedCountry} будет стоить ${deliveryCosts} кредитов`
  );
}
