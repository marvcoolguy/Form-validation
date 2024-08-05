const wrapper = document.querySelector('.wrapper')
const loginLink = document.querySelector('.login-link')
const registerLink = document.querySelector('.register-link')
const btn = document.querySelector('.btn')
const icon = document.querySelector('.icon-close')

loginLink.addEventListener("click", ()=> {
    wrapper.classList.remove('active')
});

registerLink.addEventListener("click", ()=> {
    wrapper.classList.add('active')
});

btn.addEventListener("click", ()=> {
    wrapper.classList.add('active-pop-up')
});

icon.addEventListener("click", ()=> {
    wrapper.classList.remove('active-pop-up')
});