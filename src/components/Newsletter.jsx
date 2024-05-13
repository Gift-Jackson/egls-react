import toast from 'react-hot-toast';
import styles from '../styles/newsletter.module.css'

const Newsletter = () => {
  const notify = (e) => {
    e.preventDefault();

    toast.error('Newsletter not available yet!')
  };
  return (
      <div className={styles.container}>
          <div className={styles.wrapper}>
              <h2>Subscribe to our Newsletter</h2>
              <p>Get the latest updates and articles delivered right to your inbox.</p>
              <form onSubmit={notify} className={styles.form}>
                  <input type="text" placeholder='Enter E-mail Address...' />
                  <button  className={styles.btn}>Subscribe</button>
              </form>
          </div>
    </div>
  )
}

export default Newsletter