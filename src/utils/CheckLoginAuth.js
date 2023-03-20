import { decryptedText } from "./cipher";

const logInData = JSON.parse(localStorage.getItem("signUpData"));


const checkLoginAuth = (values) => {
    let isLogin = false;
    let isUser = false
    isUser = logInData.some((item) => item.email === values.email && decryptedText(item.password) === values.password);

    if (!isUser) {
        toast.error('Invalid Credentials')
        isLogin = false;
    } else {
        const temp = logInData.map((item) => {
            if (item.email === values.email && decryptedText(item.password) === values.password) {
                item.isActive = true
            }
            return item
        })
        
        localStorage.setItem('signUpData', JSON.stringify(temp))
        isLogin = true;
    }
    return isLogin;
}

export default checkLoginAuth