'use strict';

let collect = document.querySelectorAll('.books'),
    book = document.querySelectorAll('.book');
    console.log(collect);

// book = document.querySelectorAll('h2');
// book1_1 = document.querySelectorAll('ul');

// collect[0].appendChild(book[0]);
// collect[0].appendChild(book[2]);
// collect[0].appendChild(book[5]);

// collect[0].insertBefore(book[1], book[0]);
// collect[0].insertBefore(book[4], book[2]);
// collect[0].insertBefore(book[5], book[4]);

// collect[0].insertBefore(book[3], book[2]);

document.body.style.backgroundImage = 'url(image/you-dont-know-js.jpg)';

// let h2 = document.querySelectorAll('h2');

// h2[2].textContent = 'Книга 3. this и Прототипы Объектов';
// h2[4].innerHTML = <h2 style="color: darkkhaki;"></h2>

let adv = document.querySelector('.adv');
let span = document.querySelector('span');
adv.classList.remove('adv');

// let chapter = document.querySelectorAll('.book li');
// chapter.className += ' chapter';

// document.querySelectorAll('.book li').classList.add('chapter');

// let chap = document.querySelectorAll('books'),
//     booka = document.getElementsByClassName('book')[4].getElementsByTagName('LI')

    // chap[0].textContent = 'Глава 8: За пределами ES6';

    // const divSort = () => {
    //     let item = document.querySelectorAll('h2'),
    //       count = 1;
    //     newDiv = document.createElement('div');
      
    //     for (let i = 0; i < item.length; i++) {
    //       for (let j = 0; j < item.length; j++) {
      
    //         if (+item[j].textContent.slice(-1) == count) {
    //           newDiv.appendChild(item[j].parentNode);
    //           count++;
    //         }
      
    //       }
    //     }
      
    //     document.body.removeChild(document.querySelector('.books'));
    //     newDiv.classList.add('books');
    //     document.body.appendChild(newDiv)
    //   }
      
    //   divSort();