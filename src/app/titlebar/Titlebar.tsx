import styles from './Titlebar.module.css';

function Titlebar() {

    
    return (
    <div className={styles.bar}>
        <div className={styles.sect1}>
            <img className={styles.logo} src="./logo.png"></img>
            <p className={styles.header}>filelocker</p>
        </div>
        <button className={styles.home}>Home</button>
        <button className={styles.project}>Project</button>
    </div>
    )
}

export default Titlebar;