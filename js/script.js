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
        <li class="promo__interactive-item">${i+1}) ${item}
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
    EO.preventDefault();
    let addingInput = document.querySelector('.adding__input');
    let val = addingInput.value.toUpperCase();
    if (val.length > 21) {
        val = val.slice(0, val.length - 3) + '...';
    }
    if (val != '') {
        addingInput.value = '';
        let movieArray = movieDB.movies;
        movieArray.push(val);
        addMovies(movieDB);
        document.querySelectorAll('input').forEach(item=>{
            if(item.type=='checkbox'){
                if(item.checked){
                    alert('Добавляем любимый фильм');
                }
            }
        });
    }
   
    document.querySelectorAll('.delete').forEach(item => {
        item.addEventListener('click', deleteMovie);
    });
}


document.querySelectorAll('.delete').forEach(item => {
    item.addEventListener('click', deleteMovie);
});

function deleteMovie(EO) {
    EO = EO || window.event;
    EO.target.parentNode.remove();
    let delClick = EO.target.parentNode.textContent.trim().slice(3);
    movieDB.movies.forEach((item, i, mas) => {
        if (item == delClick) {
            mas.splice(i, 1);
        }
    });
    EO.target.parentNode.remove();
    addMovies(movieDB);
    document.querySelectorAll('.delete').forEach(item => {
        item.addEventListener('click', deleteMovie);
    });
}

