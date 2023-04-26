import { GetServerSideProps } from 'next';
import { useApi } from '../../../public/libs/useApi';
import styles from '../../styles/Home.module.css'
import { type } from 'os';
import { Tenant } from '../../../types/Tenant';
import { useAppContext } from '../../../public/contexts/AppContext';
import { useEffect } from 'react';
import Head from 'next/head';
import { Header } from '../../../public/components/Header';

const Login = (data: Props) => {
  const {tenant, setTenant} = useAppContext();

  useEffect(()=>{
    setTenant(data.tenant)
  }, []);

  return (
    <div className={styles.container}>
        <Head>
            <title>Login | {data.tenant.slug}</title>
        </Head>
        <Header/>
    </div>
  )
}

export default Login; 

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