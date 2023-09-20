import styles from './Page.module.css'

function Page() {

    return(
        <div>
            <p className={styles.t1}>A basic file encryption/decryption program written in python.</p>
            <p className={styles.t2}>Secure AES-256 encryption is used to ensure the safety of your data.</p>
            <img className={styles.img1} src="./file.PNG" alt="Encrypted File"></img>
            <img className={styles.img2} src="./program.PNG" alt="Program Preview"></img>
            <div className={styles.filler}></div>
        </div>
    )   
}


export default Page