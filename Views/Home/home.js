const closeButton = document.querySelector('#closeButton'),
        loginWindow = document.querySelector('#modal-window'),
        container = document.querySelector('#mainWindow'),
        loginButton = document.querySelector('#login_btn'),
        loginForm = document.querySelector('.login-form'),
        inputUsername = document.querySelector('#input-username'),
        signupButton = document.querySelector('#signup_btn'),
        connectButton = document.querySelector('#connectButton'),
        inputPassword = document.querySelector('#input-password')
//Close modal login form
closeButton.addEventListener('click', () => {
    loginWindow.style.display = 'none';
    container.style.visibility = 'visible';
});
//SEND GET REQUEST with out credentials
loginButton.addEventListener('click', ()=>{
    connectButton.value = 'LOGIN';
    loginForm.reset();
    container.style.visibility = 'hidden';
    loginWindow.style.display = 'inline'
    connectButton.style.backgroundColor = 'rgba(69, 209, 65, 0.6)';
    loginForm.action = '/login';
    loginForm.method = 'GET';

    loginForm.submit();
    loginForm.reset();
});
//SEND POST REQUEST with out credentials
signupButton.addEventListener('click', () => { 
    connectButton.value = 'SIGN-UP';
    loginForm.reset();
    container.style.visibility = 'hidden';
    loginWindow.style.display = 'inline';
    connectButton.style.backgroundColor = 'rgba(44,118,187,0.6)';
    loginForm.action = '/login';
    loginForm.method = 'POST';
    
    loginForm.submit();
    loginForm.reset();
})