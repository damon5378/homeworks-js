'use strict';

function DomElement(selector, height, width, bg, fontSize){
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
}
let question = prompt('Введите . (точку) или # (решетку)');
DomElement.prototype.createElement = function(){
    let newDom;
    if(this.selector[0] === '.'){
        newDom = document.createElement('div');
        newDom.style.cssText = `height: ${this.height}px; width: ${this.width}px; background: ${this.bg}; font-size: ${this.fontSize}px;`;
    } else if (this.selector === '#') {
        newDom = document.createElement('p');
        newDom.style.cssText = `height: ${this.height}px; width: ${this.width}px; background: ${this.bg}; font-size: ${this.fontSize}px;`;
    }
    document.body.appendChild(newDom);
};

let dom = new DomElement(question, '100', '100', 'red', '18');
dom.createElement();
console.log(dom);
