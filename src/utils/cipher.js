import CryptoJS from "crypto-js";

// key which is use for encryption and decryption of password
const Key = "mnop2356LM";

// for encrypt password
const encryptedText = (text) => {
    const data = CryptoJS.AES.encrypt(
        JSON.stringify(text),
        Key
    ).toString();
    return data
};

// for decrypt password
const decryptedText = (text) => {
    const bytes = CryptoJS.AES.decrypt(text, Key);
    const data = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return data
};
export {encryptedText,decryptedText}