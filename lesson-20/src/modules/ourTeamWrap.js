// Our Team
const ourTeamWrap = () => {
  const ourTeam = document.getElementById('command');

let ourTeamFunction = (target) => {
  let defaultSrc = target.src;
  console.log('переменная с исходным src: ' + defaultSrc);
  target.src = target.dataset.img;
  console.log('новое значение src: ' + target.src);
  target.dataset.img = defaultSrc;
  console.log('новое значение data: ' + target.dataset.img);
};

ourTeam.addEventListener('mouseover', (event) => {
  let target = event.target;

  if(target.matches('.command__photo')){
    ourTeamFunction(target);
  }
});
ourTeam.addEventListener('mouseout', (event) => {
  let target = event.target;

  if(target.matches('.command__photo')){
    ourTeamFunction(target);
  }
});
};

export default ourTeamWrap;