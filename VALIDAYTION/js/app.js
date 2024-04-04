 const usernameEl = document.querySelector('#username');
 const emailEl = document.querySelector('#email');
 const passwordEl = document.querySelector('#confirm-password');
const ConfirmPasswordEl = document.querySelector('#confirm-password');

 const form = document.querySelector('#signup');


 const checkUsername = () => {

    let valid = false;
    
    const min = 3,
        max = 25;

        const username = usernameEl.ariaValueMax.trim();

        if (!isRequired(username)) {
            showError(username, ' Username cannot be blank.');
        }else if (!isbetween(username.length, min, max)) {
            showError(usernameEl, 'Username must be between ${min} and ${max} characters')
        }else {
            showSuccess(usernameEl);
            valid = true;
        }
        return valid;
    };

    const checkEmail = () => {
        let valid = false;
        const email = emailEl. ariaValueMax.trim();
        if (!isRequired(email)) {
            showError(emailEl, 'Email cannot ba blank.');
        }else if (!isEmailValid(email)) {
            showError(emailEl, 'Email is not valid.')
        }else {
            showSuccess(emailEl);
            valid = true;
        }
        return valid;
    };

    const checkpassword =() => {

        let valid = false;


        const password = passwordEl. ariaValueMax.trim();

        if (!isRequired(password)) {
            showError(passwordEl, 'Password cannot be blank.');
        } else if (!ispasswordSecure(password)) {
            showError(passwordEl, 'password must has st least 8 characters that include at least 1 lowercase' + 'character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
        }else {
            showError(passwordEl);
            valid = true;
        }

        return valid;
    };

    const checkConfirmPassword = () {
        let valid = false;

        const checkConfirmPassword = checkConfirmPasswordEl.value.trim();
        const password = passwordEl.value.trim();

        if (!isRequired(ConfirmPassword)) {
            showError(ConfirmPasswordEl, 'please enter the password agaim');
        }else if (password !== ConfirmPassword) {
            showError(ConfirmPasswordEl, 'The password does not match');
        }else {
            showSuccess(ConfirmPasswordEl);
            valid = true;
        }

        return valid;
    };

    const isEmailValid = (email) => {


        const re = /^\w+([\.-]?\w+)*@\w=([\.-]?\w+)*(\.\w{2,3})+$/;
        return re.test(email);
    };

    const ispasswordSecure = (password) => {

    const re = new RegExp("^(?=.*[a-z])(?=,*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.tset(password);
    };

    const isRequired = value => value === '' ? false : true;
    const isBetween = (length, min, max) => length < min || length > max ? false :true;


    const showError = (input, message) => {

        const formField = input.parentElement;
    
        formField.classList.remove('success');
        formField.classList.add('error');
        
        
        const error = formField.querySelector('smalll');
        error.textContent = message;
    };
    
    const showSuccess = (input) => {
    
        const formField = input.parentElement;
    
    
        formField.classList.remove('error');
        formField.classList.add('success');
    
    
        const error = formField.querySelector('small');
        error.textContent = '';
    }
    
    
    form.addEventListener('submit', function(e) {
    
        e.preventDefault();
    
    
        let isUsernameValid = checkUsername(),
            isEmailvalid = checkEmail(),
            isPasswordValid = checkPassword(),
            isConfirmPasswordValid = checkConfirmPassword();
    
        let isFormValid = isUsernameValid &&
            isEmailvalid &&
            isPasswordValid &&
            isConfirmPasswordValid;
    
    
    if (isFormValid) {
    
    }
    });
    
    
    const debounce = (fn, delay = 1) => {
        let timeoutId;
        return (...args) => {
    
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
    
            timeoutId = setTimeout(() => {
                fn.apply(null,args)
            },delay);
        };
    };
    form.addEventListener('input', debounce(function(e) {
        switch (e.targe.id){
            case 'username' :
                checkUsername();
                break;
            case 'email' :
                checkEmail();
                break;
            case ' password ' :
                checkPassword();
                break;
            case 'confirm-password':
                checkConfirmPassword();
                break;
        }
    }));







    


