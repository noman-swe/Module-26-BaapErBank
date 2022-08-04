document.getElementById('login-btn').addEventListener('click', function(){
    const emailField = document.getElementById('email');
    const userEmail = emailField.value;
    const passwordField = document.getElementById('password');
    const userPass = passwordField.value;

    if(userEmail != 'shanto@gmail.com' && userPass != 'shibly@'){
        const error = document.createElement('p');
        error.innerText = 'Wrong Password.';
        error.style.color = 'red';
        error.style.float = 'right';
        error.classList.add('w-1/2');

        const loginFormSection = document.getElementById('login-form');
        loginFormSection.appendChild(error);

    }
    else{
        location.href = 'banking.html';
        console.log('Login successfull...');
    }
});