function validatePassword(password){
    let hasUpperCase=/[A-Z]/.test(password);
    let hasLowerCase=/[a-z]/.test(password);
    let hasDigits=/\d/.test(password);
    let hasSpecialChar=/[!@#$%^&*()_+<>?]/.test(password);
    let hasValidLength=password.length>=8;

    return hasUpperCase && hasLowerCase && hasDigits && hasSpecialChar && hasValidLength;
}


console.log(validatePassword('Aravind1@'));

