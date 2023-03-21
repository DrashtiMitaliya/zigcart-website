import { decryptedText } from "./cipher";
import { toast } from 'react-hot-toast'

const logInData = JSON.parse(localStorage.getItem("signUpData"));


 /* It checks user log in credentials and if credentials is correct then redirect user to home page otherwise show error that given crendentials is wrong*/

const checkLoginAuth = (values) => {
    let isLogin = false;
    let isUser = false
    isUser = logInData.some((item) => item.email === values.email && decryptedText(item.password) === values.password);
    
    if (!isUser) {
        isLogin = false;
        toast.error('Invalid Credentials')
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