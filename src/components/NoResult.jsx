import svg from '../assets/no-result.svg'
import styles from '../styles/noresult.module.css'
const NoResult = () => {
  return (
      <>
          <div className={styles.wrapper}>
              <div className={styles.wrap}>
                  <img src={svg} height={250}/>
              </div>
              <p>No search result yet!</p>
      </div>
      </>
  )
}

export default NoResult