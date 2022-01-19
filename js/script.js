/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

let recBlocks = document.getElementsByClassName('promo__adv')[0];
// recBlocks.querySelector('div').remove();
recBlocks.querySelectorAll('img').forEach(item => {
    item.remove();
});

let promoBg = document.getElementsByClassName('promo__bg')[0];
promoBg.querySelector('div').innerHTML = "Драма";

promoBg.style.cssText = "background: url(../img/bg.jpg)";

let promoInteractiveItem = document.querySelectorAll('.promo__interactive-item');

function addMovies(obj) {
obj.movies.sort();

        promoInteractiveItem.forEach((item,i) => {
            item.textContent = `${i+1}) ${obj.movies[i]}`;
        });  
}

addMovies(movieDB);
