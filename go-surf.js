// Получаем текущую дату
let currentDate = new Date();

let day = String(currentDate.getDate()).padStart(2, '0');;
let month = String(currentDate.getMonth() + 1).padStart(2, '0');    // (начиная с 0, поэтому добавляем 1)
let year = currentDate.getFullYear();

// Вставляем месяц и год в соответствующие элементы
document.getElementById("day").innerHTML = day;
document.getElementById("month").innerHTML = month;
document.getElementById("year").innerHTML = year;