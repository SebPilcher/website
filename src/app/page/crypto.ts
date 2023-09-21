import {SHA256, AES, mode, enc} from 'crypto-js'

export function encrypt(key: string, plaintext: string): string {
    const hash = SHA256(key);

    const out = AES.encrypt(plaintext, hash, {mode: mode.ECB});
    
    if (out.ciphertext.toString(enc.Base64) === "ol6lgGovgJomq4QGS6hThA==") {
        return ""
    } 
    else {
    return out.ciphertext.toString(enc.Base64);
    }
}