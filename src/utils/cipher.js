// import from packages
import CryptoJS from "crypto-js";

// key which is use for encryption and decryption of password
const key = process.env.REACT_APP_CIPHER_KEY

// for encrypt password
const encryptedText = (text) => {
    const data = CryptoJS.AES.encrypt(
        JSON.stringify(text),
        key
    ).toString();
    return data
};

// for decrypt password
const decryptedText = (text) => {
    const bytes = CryptoJS.AES.decrypt(text, key);
    const data = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return data
};
export {encryptedText,decryptedText}