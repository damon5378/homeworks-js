let week = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота'
  ];
  let day = new Date();
  let d = day.getDay();
  
  let time = day.getHours() + ":" + day.getMinutes() + ":" + day.getSeconds();


let one = new Date("January 01 2020 00:00:00"); 
let two = Date.now();
let remaining = one - two; 
remaining /= 1000; 
remaining /= 60;
remaining /= 60;
remaining /= 24;

day = new Date(); 
hour = day.getHours(); 
if (hour >= 5 && hour < 12) {
    greeting = "Доброе утро";
} else if (hour >= 12 && hour < 18) {
    greeting = "Добрый день";
} else if (hour >= 18 && hour < 24) {
    greeting = "Добрый вечер";
} else if (hour>=0 && hour<5) {
    greeting = "Доброй ночи";
} 

greeting.innerHTML = 'greeting';

document.write(`${greeting}<br>
Сегодня: ${week[d]}<br>
Текущее время: ${time}<br>
До нового года осталось: ${Math.ceil(remaining)} дня`);