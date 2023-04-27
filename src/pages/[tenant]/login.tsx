import { GetServerSideProps } from 'next';
import { useApi } from '../../../public/libs/useApi';
import styles from '../../styles/Login.module.css'
import { type } from 'os';
import { Tenant } from '../../../types/Tenant';
import { useAppContext } from '../../../public/contexts/AppContext';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { Header } from '../../../public/components/Header';
import { InputField } from '../../../public/components/InputField';

const Login = (data: Props) => {
  const {tenant, setTenant} = useAppContext();

  useEffect(()=>{
    setTenant(data.tenant)
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className={styles.container}>
        <Head>
            <title>Login | {data.tenant.slug}</title>
        </Head>
        <Header color={data.tenant.mainColor} backHref={`/${data.tenant.slug}`}/>

        <InputField
            color={data.tenant.mainColor}
            placeholder='Digite seu e-mail'
            value={email}
            onChange={setEmail}
        />

        <InputField
            color={data.tenant.mainColor}
            placeholder='Digite sua senha'
            value={password}
            onChange={setPassword}
            password
        />
        
        
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