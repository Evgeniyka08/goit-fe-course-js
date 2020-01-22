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
let userSelectedCountry = prompt("Введите страну доставки.");
if (userSelectedCountry === null) {
  console.log("ничего не введено");
} else {
  switch (userSelectedCountry.toUpperCase()) {
    case china:
      alert(`Доставка в ${china} будет стоить ${chinaCosts} кредитов`);
      break;
    case chile:
      alert(`Доставка в ${chile} будет стоить ${chileCosts} кредитов`);
      break;
    case australia:
      alert(`Доставка в ${australia} будет стоить ${australiaCosts} кредитов`);
      break;
    case india:
      alert(`Доставка в ${india} будет стоить ${indiaCosts} кредитов`);
      break;
    case jamaica:
      alert(`Доставка в ${jamaica} будет стоить ${jamaicaCosts} кредитов`);
      break;

    default:
      alert("В Вашей стране доставка не доступна");
  }
}
