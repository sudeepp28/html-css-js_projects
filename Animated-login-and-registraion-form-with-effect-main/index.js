const Loginform=document.querySelector('.Loginform')
const MainButton=document.querySelector('.MainButton')
const Registerform=document.querySelector('.Registerform')
const Registerbtn=document.querySelector('.Registerbtn')
const Loginbtn= document.querySelector('.Loginbtn')
const loginbtn= document.querySelector('.loginbtn')
const loggedin=document.querySelector('.loogedin')
MainButton.addEventListener('click',()=>{
    Loginform.classList.add('Loginform-box')
})
Registerbtn.addEventListener('click',()=>{
    Registerform.classList.add('Registerform-box')
    Loginform.classList.remove('Loginform-box')
})
Loginbtn.addEventListener('click',()=>{
    Loginform.classList.add('Loginform-box')
    Registerform.classList.remove('Registerform-box')
})
