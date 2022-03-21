let list = document.querySelectorAll('.navigaiton li');
function activeLink() {
    list.forEach((item) => 
    item.clasList.remove('hovered'));
    this.classList.add('hovered');
}
list.forEach((item) =>
item.addEventListener('mouseover', activeLink));


//MENU TOGGLE
let toggle = document.querySelector('.toggle');
let navigaton = document.querySelector('.navigation');
let main = document.querySelector('.main');

toggle.onclick = function() {
    navigaton.classList.toggle('active');
    main.classList.toggle('active');
}