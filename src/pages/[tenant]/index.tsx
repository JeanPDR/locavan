import { Banner } from '../../../public/components/Banner';
import styles from '../../styles/Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <div className={styles.headerTopLeft}>
              <div className={styles.headerTitle}>Seja Bem-Vindo (a)👋
              </div>
              <div className={styles.headerSubtitle}>Para onde iremos hoje?
              </div>
          </div>
          <div className={styles.headerTopRight}>
              <div className={styles.menuButton}>
                  <div className={styles.menuButtonLine}></div>
                  <div className={styles.menuButtonLine}></div>
                  <div className={styles.menuButtonLine}></div>
              </div>
          </div>
        </div>
      </header>

      <Banner/>
    </div>
  )
}

export default Home; 
