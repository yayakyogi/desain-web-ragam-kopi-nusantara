const menu = document.querySelector('.menu');
const btnclose = document.querySelector('.closebtn');
const btnshow = document.querySelector('.menubtn');

btnshow.addEventListener("click",function(){
    menu.classList.toggle('showMenu');
});

btnclose.addEventListener("click",function(){
    menu.classList.toggle('showMenu');
})