// long In
var signinEmailInput = document.getElementById("signinEmail");
var signinPasswordInput = document.getElementById("signinPassword");
var signinMessage = document.getElementById("incorrect");
var username = document.getElementById("username");

// signUp
var signupNameInput = document.getElementById("signupName");
var signupEmailInput = document.getElementById("signupEmail");
var signupPasswordInput = document.getElementById("signupPassword");
var signUpMessage = document.getElementById("exist")
var logOut = document.querySelector(".logOut");
var signIn = document.querySelector(".signIn");

var EmailList = [];
if(localStorage.getItem("EmailList") != null){
    EmailList = JSON.parse(localStorage.getItem("EmailList"));
    // console.log(EmailList)
}

function validName(){
    var name = signupNameInput.value;
    var nameRegex = /^[a-zA-Z]{3,}$/;   //The name starts with at least three letters

    if(name < 3){
        signUpMessage.textContent = "Name required";
        return false
    }
    else {
        if(!nameRegex.test(name)){
            signUpMessage.textContent = "Name must start be 3 letters";
            return false
        }else {
            return true
        }
    }
}

function validEmail(){
    var email = signupEmailInput.value;
    var gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;   //Regular Expression user.name+123@gmail.com

    if(!email){
        signUpMessage.textContent = "Email required";
        return false
    }else {
        if(!gmailRegex.test(email)){
            signUpMessage.textContent = "Must be valid";
            return false
        }else{
            return true
        }
    }
}

function validPassword() {
    var password = signupPasswordInput.value;

    if(!password){
        signUpMessage.textContent = "Password required";
        return false
    }else {
        return true
    }
}

function signUp(){
    var user = {
        name: signupNameInput.value,
        email: signupEmailInput.value,
        password: signupPasswordInput.value
    }
    if(validName() && validEmail() && validPassword()){
        var existsEmail = false;
        for(i = 0; i < EmailList.length; i++){
            if(EmailList[i].email === user.email){
                existsEmail = true;
                break;
            }
        }

        if(existsEmail){
            signUpMessage.style.color = "red";
            signUpMessage.textContent = "Email already exists";
        }else {
            EmailList.push(user)
            localStorage.setItem("EmailList", JSON.stringify(EmailList));
            clearSignUpForm();
            signUpMessage.style.color = "green";
            signUpMessage.textContent = "sucsess";
            setTimeout(()=>{
                signUpMessage.textContent = "";
            },1000)
        }

        console.log(EmailList)
    }
    // incorrect email or password
}
var user;
function checkEmail() {
    emailSigin = signinEmailInput.value;
    var gmailCheckRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!emailSigin) {
        signinMessage.textContent = "Email required"
        return false;
    } else {
        existsEmail = false;
        
        for (i = 0; i < EmailList.length; i++) {
            if (EmailList[i].email === emailSigin) {
                existsEmail = true;
                user = EmailList[i].name
                break;
            }
        }
        if (existsEmail) {
            signinMessage.textContent = "";
            signinEmailInput.classList.remove("borderRed");
            return true;
        } else {
            if(!gmailCheckRegex.test(emailSigin)){
                signinMessage.textContent = "incorrect email"
                return false;
            }else {
                signinMessage.textContent = "dosn't exists email"
                signinEmailInput.classList.add("borderRed");
                return false;
            }
        }

    }
}
function checkPassword() {
    passwordSignIn = signinPasswordInput.value;
    if(!passwordSignIn){
        signinMessage.textContent = "Password required"
        return false;
    }else{
        for(i=0; i<EmailList.length; i++){
            if(EmailList[i].password !== passwordSignIn){
                signinMessage.textContent = "incorrect Password";
                signinPasswordInput.classList.add("borderRed");
                return false;
            }else {
                signinMessage.textContent = "";
                signinPasswordInput.classList.remove("borderRed");
                return true;
            }
        }
    }
}

function login() {

    if (checkEmail() && checkPassword()) {
        signIn.classList.add("d-none")
        logOut.classList.remove("d-none")
        logOut.classList.add("d-block")
        username.textContent = `Welcome ${user}`;
        // console.log(user)
        clearSignInForm()
    }
}

function logout() {
    window.location.href = "index.html";
    username.textContent = "";
    signIn.classList.remove("d-none");
    logOut.classList.add("d-none")
}

function clearSignUpForm(){
    signupNameInput.value = "";
    signupEmailInput.value = "";
    signupPasswordInput.value = "";
    signUpMessage.textContent = "";
}

function clearSignInForm(){
    signinPasswordInput.value ="";
    signinEmailInput.value = "";
    signinMessage.textContent = "";
}
// localStorage.clear();