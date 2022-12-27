// Отдельное спасибо ментору Жене за помощь с формулой пересчета в проценты

// Вариант №1
// Стилизация шкалы
// Получаем объект inpun по классу
const input1 = document.querySelector('.input-1');

if (input1.value > 0) {
   // Функцию также надо подключить в поле input
   showProgress();
}

function showProgress() {
   // Получаем в переменные значения min и max input и пересчитываем их в процентное значение
   // Задавая любые значения min и max в input на выходе получаем значение value всегда от 0 до 100
   let min = +input1.min,
      max = +input1.max - min,
      value = +input1.value - min,
      c = 0;
   const result = (value / max * 100);
   if (result < 0) {
      c = 0;
   } else {
      c = `${result}`;
   }
   // Подставляем нужные цвета для заливки поля и готово =)
   input1.style.background = `linear-gradient(to right, #FF8A63 0%, #FF8A63 ${c}%, #E8E8E8 ${c}%, #E8E8E8 100%)`;
}
// =================================================================================================================================

// =================================================================================================================================
// Вариант №2
// Стилизация шкалы рейтинга без возможности пользователя указать его
// Каждое поле будед закрашено отдельно в соответствии заначению его value
// Получаем все объекты inpun по классу в массив и методом перебора обращаемся к каждому отдельно
document.querySelectorAll('.input-2').forEach((element) => {
   // Получаем в переменные значения min и max input и пересчитываем их в процентное значение
   // Задавая любые значения min и max в input на выходе получаем значение value всегда от 0 до 100
   let min = +element.min,
      max = +element.max - min,
      value = +element.value - min,
      c = 0;
   const result = (value / max * 100);
   if (result < 0) {
      c = 0;
   } else {
      c = `${result}`;
   }
   // Подставляем нужные цвета для заливки поля и готово =)
   element.style.background = `linear-gradient(to right, #00B67A 0%, #00B67A ${c}%, #E8E8E8 ${c}%, #E8E8E8 100%)`;
});
// =================================================================================================================================

// =================================================================================================================================
// Вариант №3
// Стилизация шкалы рейтинга (пользователь указывает рейтинг)
// Получаем объект inpun по классу
const input3 = document.querySelector('.input-3');
// Получаем объект с маской по классу
const maskInput = document.querySelector('.input-3__mask');

if (input3.value > 0) {
   // Функцию также надо подключить в поле input
   showRating();
}

// Функция обработки значения шкалы рейтинга
function showRating() {
   // Получаем в переменные значения min и max input и пересчитываем их в процентное значение
   // Задавая любые значения min и max в input на выходе получаем значение value всегда от 0 до 100
   let min = +input3.min,
      max = +input3.max - min,
      value = +input3.value - min,
      c = 0;
   const result = (value / max * 100);
   if (result < 0) {
      c = 0;
   } else {
      c = `${result}`;
   }

   // В этом варианте накладываем input поверх маски, делаем opacity: 0; и красим уже саму маску
   // Подставляем нужные цвета для заливки поля и готово =)
   maskInput.style.background = `linear-gradient(to right, #eeff00 0%, #eeff00 ${c}%, #E8E8E8 ${c}%, #E8E8E8 100%)`;
}

// Добавляем событие hover на input
input3.addEventListener("mouseover", function () {
   maskInput.style.background = "#949f01";
   maskInput.style.transition = "background 0.3s";
});
input3.addEventListener("mouseout", function () {
   showRating();
});

// =================================================================================================================================