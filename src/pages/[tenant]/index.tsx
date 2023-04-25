import { GetServerSideProps } from 'next';
import { Banner } from '../../../public/components/Banner';
import { ContainerItem } from '../../../public/components/ContainerItem';
import { useApi } from '../../../public/libs/useApi';
import styles from '../../styles/Home.module.css'
import { type } from 'os';
import { Tenant } from '../../../types/Tenant';
import { useAppContext } from '../../../public/contexts/AppContext';
import { useEffect } from 'react';

const Home = (data: Props) => {
  const {tenant, setTenant} = useAppContext();

  useEffect(()=>{
    setTenant(data.tenant)
  }, []);

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
        
         />

        <ContainerItem
         data ={{id: 2, image: '/tmp/casa.png', category:'Casa', }}
         
         />
         
      </div>
    </div>
  )
}

export default Home; 

type Props ={
  tenant: Tenant
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {tenant: tenantSlug} = context.query;
  const api = useApi();

  //Get Tenant
  const tenant = await api.getTenant(tenantSlug as string);
  if(!tenant) {
     return {
        redirect: {
          destination: '/',
          permanent: false
        }
     }
  }

  return{ 
    props: {
        tenant
    }
  }
}