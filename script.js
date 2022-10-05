var variable1 = ["Коллеги,", "В то же время,", "Однако,", "Тем не менее,",  "Следовательно,", "Соответственно,",
 "Вместе с тем,", "С другой стороны,"];
var variable2 = ["парадигма цифровой экономики", "контекст цифровой трансформации", "диджитализация безенсс процессов",
 "прагматичный подход к цифровым ", "совокупность сквозных технологий", "программа прорывных исследований",
  "ускорение блокчейн-транзакций", "дэкспонциальный рост Big Data"];
var variable3 = ["открывает новые возможности", "выдвигает новые требования", "несёт в себе риски", "расширяет горизонты",
 "заставляет искать варианты", "не оставляет шанс для", "повышает вероятность", "обостряет проблему"];
var variable4 = ["дальнейшего углубления", "бюджетного финансирования", "синергетического эффекта", 
"компроментации конфиденциальных", "универсальной коммодитизации", "несанкционированной кастомизации", 
"нормативного регулирования", "практического регулирования"];
var variable5 = ["знаний и компитенций.", "непроверенных гипотез.", "волатильных активов.", "опасных экспериментов.",
 "государственно-частных партнёрств.", "цифровых следов грждан.", "нежелательных последствий.", "внезапных открытий."];

var random1 = variable1[Math.floor(Math.random() * 8)];

var random2= variable2[Math.floor(Math.random() * 8)];

var random3 = variable3[Math.floor(Math.random() * 8)];

var random4 = variable4[Math.floor(Math.random() * 8)];

var random5 = variable5[Math.floor(Math.random() * 8)];

var randomInsult = random1 + " " + random2+ " " + random3 + 
" " + random4+ " " + random5 ;


let myButtons = document.querySelector('#myButtons');
let list = document.querySelector('#list');

myButtons.addEventListener('click', function() {
    let newItem = document.createElement('li');
    newItem.classList.add('item');
    newItem.textContent = randomInsult;
 
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'плохой вариант';

    deleteButton.addEventListener('click', function() {
        list.removeChild(newItem);
       //randomInsult = undefined;  //работает, но не так хотел
       document.location.reload();
    })

    newItem.appendChild(deleteButton);
    list.appendChild(newItem);

    
});

