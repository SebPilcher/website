import styles from './App.module.css'
import Page from './page/Page'
import {useState} from 'react'


function App() {

  const [value, setValue] = useState<number>(0);

  const homeButtonClick = () => {
    setValue(0)
  }

  const projectButtonClick = () => {
    setValue(1)
  }



  return (
    <>
      <div className={styles.mainPage}>
        <div className={styles.bar}>

          <div className={styles.sect1}>
              <p>Count: {value}</p>
              <img className={styles.logo} src="./logo.png"></img>
              <p className={styles.header}>filelocker</p>

          </div>
          <button className={styles.home} onClick={homeButtonClick}>Home</button>
          <button className={styles.project} onClick={projectButtonClick}>Project</button>

        </div>

        <div className={styles.outerPage}>
          <div className={styles.innerPage}>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
