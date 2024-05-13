import svg from '../assets/search.svg'
import styles from '../styles/noresult.module.css'
const NoResult = () => {
  return (
      <>
          <div className={styles.wrapper}>
              <div className={styles.wrap}>
                  <img src={svg} height={250}/>
              </div>
              <p>Waiting for search!</p>
      </div>
      </>
  )
}

export default NoResult