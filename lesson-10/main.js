'use strict';

function DomElement(selector, height, width, bg, fontSize){
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
}
DomElement.prototype.createElement = function(){
    let newDom;
    if(this.selector[0] === '.'){
        newDom = document.createElement('div');
        newDom.classList.add(this.selector.substr(1));
    } else if (this.selector[0] === '#') {
        newDom = document.createElement('p');
    }
    newDom.style.cssText = "content: 'Logo'";
    newDom.style.height = this.height;
    newDom.style.width = this.width;
    newDom.style.bg = this.bg;
    newDom.style.fontSize = this.fontSize;
};
let dom = new DomElement('some', '100px', '100px', 'red', '18');
dom.createElement();
console.log(dom);
