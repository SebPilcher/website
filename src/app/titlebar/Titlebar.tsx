import styles from './Titlebar.module.css';

function Titlebar() {
    return (
    <div>
        <img className={styles.logo} src="./logo.png"></img>
    </div>
    )
}

export default Titlebar;