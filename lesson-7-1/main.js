'use strict';

let collect = document.querySelectorAll('.books'),
    book = document.querySelectorAll('.book'),
    ul = document.querySelectorAll('ul'),
    li = document.querySelectorAll('li');

let addLi = document.createElement('li');
addLi.textContent = 'Глава 8: За пределами ES6';
ul[2].appendChild(addLi);
ul[2].insertBefore(li[26], null);

    console.log(collect);
    console.log(book);
    console.log(ul);
    console.log(li);

collect[0].insertBefore(book[1], book[0]);
collect[0].insertBefore(book[2], null);
collect[0].insertBefore(book[4], book[3]);


document.body.style.backgroundImage = 'url(image/you-dont-know-js.jpg)';

let h2 = document.querySelectorAll('h2');

h2[2].textContent = 'Книга 3. this и Прототипы Объектов';
h2[2].setAttribute('style', 'color: darkkhaki');

let adv = document.querySelector('.adv');

adv.setAttribute('style', 'display:none');

ul[0].insertBefore(li[2], null);
ul[0].insertBefore(li[6], li[4]);
ul[0].insertBefore(li[8], li[4]);
ul[0].insertBefore(li[2], li[10]);

ul[5].insertBefore(li[55], li[48]);
ul[5].insertBefore(li[49], li[48]);
ul[5].insertBefore(li[50], li[48]);
ul[5].insertBefore(li[52], li[51]);
ul[5].insertBefore(li[53], li[51]);
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