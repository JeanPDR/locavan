import { GetServerSideProps } from 'next';
import { Banner } from '../../../public/components/Banner';
import { ContainerItem } from '../../../public/components/ContainerItem';
import { useApi } from '../../../public/libs/useApi';
import styles from '../../styles/Home.module.css'

const Home = () => {
  const api = useApi();
  const tenant = await api.getTenant('locavan');
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
      <div className={styles.grid}>
         <ContainerItem
         data ={{id: 1, image: '/tmp/job.png', category:'Tabalho',}}
         mainColor='#ed053f'
         />

        <ContainerItem
         data ={{id: 2, image: '/tmp/casa.png', category:'Casa', }}
         mainColor='#ed053f'
         />
         
      </div>
    </div>
  )
}

export default Home; 

export const getServerSideProps: GetServerSideProps = async (context) => {
  
}