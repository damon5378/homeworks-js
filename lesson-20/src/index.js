'use strict';

import countTimer from './modules/countTimer';
import calc from './modules/calc';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import slider from './modules/slider';
import inputNumbers from './modules/inputNumbers';
import ourTeamWrap from './modules/ourTeamWrap';
import sendFormModule from './modules/sendForm';

countTimer('13 august 2019 00:00:00');

window.addEventListener('DOMContentLoaded', () => {
    
    toggleMenu();
    togglePopUp();
    tabs();
    slider();
    inputNumbers();
    calc();
    ourTeamWrap();
    sendFormModule(); 
});