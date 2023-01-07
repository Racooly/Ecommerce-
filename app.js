// user account click 
const user = document.getElementById('userLogo')
const regCont = document.getElementById('registerCont')

user.addEventListener('click', ()=>{
    regCont.classList.toggle('active')
})

//Burger menu
const Burger = document.getElementById('burger')
const closeB = document.getElementById('Close')
const burgerMenu = document.getElementById('burger_menu')

Burger.addEventListener('click', ()=>{
    burgerMenu.classList.add('activated')
})

closeB.addEventListener('click', ()=>{
    burgerMenu.classList.remove('activated')
})