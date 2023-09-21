export function validateForm(email,password) {
    const emailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    const passwordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(password);
    if (emailValid && passwordValid) return null;
    else if (!emailValid) {
        return "Email is not valid";
    } else return "Password is not valid";
}