const form = document.getElementById('form')
const UserName= document.getElementById('UserName')
const Email= document.getElementById('Email')
const Password= document.getElementById('Password')
const Password2 = document.getElementById('Password2')


// show input error message
function showError(input , message){
    const formControl = input.parentElement
    formControl.className = 'Form-Control error ' 
    const small = formControl.querySelector('small')
    small.innerHTML = message
}

// show success outline
function showSuccess(input){
    const formControl = input.parentElement
    formControl.className = 'Form-Control success '
}

// check email valied
function isEmailValid(email){
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

form.addEventListener('submit' , function(e){
    e.preventDefault()
    
    if(UserName.value == ''){
        showError(UserName, "username is reqired")
    }else{
        showSuccess(UserName)
    }

    if(Email.value == ''){
        showError(Email, "email is reqired")
    }else if(!isEmailValid(Email.value)){
        showError(Email, 'email is not valid')
    }
    else{
        showSuccess(Email)
    }

    if(Password.value == ''){
        showError(Password, "password is reqired")
    }else{
        showSuccess(Password)
    }

    if(Password2.value == ''){
        showError(Password2 , "password2 is reqired")
    }else if(Password.value != Password2.value){
        showError(Password2 , 'the password is not same')
    }
    else{
        showSuccess(Password2 )
    }
})