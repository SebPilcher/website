import { FormEvent, useState } from 'react';
import styles from './Page.module.css';
import { encrypt } from './crypto';

function Page() {
    const [key, setKey] = useState("");
    const [text, setText] = useState("");

    const ciphertext = encrypt(key, text);


    function inputKey(event: FormEvent<HTMLInputElement>) {
        const elem = event.target as HTMLInputElement;
        elem.value;
        setKey(elem.value);
    }


    function inputText(event: FormEvent<HTMLInputElement>) {
        const elem = event.target as HTMLInputElement;
        elem.value;
        setText(elem.value);
    }


    return(
        <div>
            <p className={styles.t1}>A basic file encryption/decryption program written in python.</p>
            <p className={styles.t2}>Secure AES-256 encryption is used to ensure the safety of your data.</p>
            <img className={styles.img1} src="./file.PNG" alt="Encrypted File"></img>
            <img className={styles.img2} src="./program.PNG" alt="Program Preview"></img>

            <div className={styles.functionality}>
                <h1>Trial Encryption</h1>
                <div className={styles.box}>
                    <div className={styles.inner}>
                        <label>Key: </label>
                        <input type="text" onInput={inputKey}></input>
                        <br></br>
                        <label>Text to encrypt: </label>
                        <input onInput={inputText}></input>
                        <p>{ciphertext}</p>
                    </div>
                </div>
                <br></br>
            </div>

        </div>

    )   
}


export default Page;