/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

let movieDB = {
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

function addMovies(obj) {
    let promoInteractiveItem = document.querySelectorAll('.promo__interactive-item');
    promoInteractiveItem.forEach(item => {
        item.remove();
    });
    obj.movies.sort();
    obj.movies.forEach((item, i) => {
        document.querySelector('.promo__interactive-list').innerHTML += `
        <li class="promo__interactive-item">${i + 1}) ${item}
                            <div class="delete"></div>
                        </li>
        `;
    });
}

addMovies(movieDB);

let buttonPress = document.querySelector('.add').querySelector('button');
buttonPress.addEventListener('click', addMoviesInPage);

function addMoviesInPage(EO) {
    EO = EO || window.event;
    let addingInput = document.querySelector('.adding__input');
    let val = addingInput.value;
    if(val.length > 21){
        val=val.slice(0,val.length-3)+'...';
    }
    addingInput.value = '';
    movieDB.movies.push(val);
    addMovies(movieDB);
}

// let buttonDelete = document.querySelectorAll('.delete');
// buttonDelete.forEach(item=>{
//     item.addEventListener('click',deleteMovie);
// });

// function deleteMovie(EO){
//     EO=EO||window.event;
//     EO.target.parentNode.remove();
// }

