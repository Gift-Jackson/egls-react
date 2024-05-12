import logo from '../assets/logo.png'
import styles from '../styles/preloader.module.css'

const PreLoader = () => {

 
  return (
      <>
          <div className={styles.loader}>
              <img src={logo} height={50} alt="loader" />
          </div>
    
      </>
  )
}

export default PreLoader