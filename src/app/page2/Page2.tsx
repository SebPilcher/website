import styles from "./Page2.module.css"

function Page2() {

    return(
        <div>
            <p className={styles.t1}>The program can be downloaded at <a className={styles.link} href="https://github.com/stpilcher/filelocker/releases" target="_blank" rel="noreferrer noopener">filelocker GitHub Releases</a>.</p>
            <img className={styles.img1} src="./github.PNG" alt="github img"></img>
        </div>
    )
}

export default Page2;