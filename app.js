// making account 
const user = document.getElementById('userLogo')
const regCont = document.getElementById('registerCont')

user.addEventListener('click', ()=>{
    regCont.classList.toggle('deactive')
})