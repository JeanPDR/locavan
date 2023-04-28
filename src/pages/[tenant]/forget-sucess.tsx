import { GetServerSideProps } from 'next';
import { useApi } from '../../../public/libs/useApi';
import styles from '../../styles/ForgetSucess.module.css'
import { type } from 'os';
import { Tenant } from '../../../types/Tenant';
import { useAppContext } from '../../../public/contexts/AppContext';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { Header } from '../../../public/components/Header';
import { InputField } from '../../../public/components/InputField';
import { Button } from '../../../public/components/Button';
import { useRouter } from 'next/router';


const ForgetSucess = (data: Props) => {
  const {tenant, setTenant} = useAppContext();

  useEffect(()=>{
    setTenant(data.tenant)
  }, []);

  const router = useRouter();
  
  const handleSubmit = () => {
    router.push(`/${data.tenant.slug}/login`)
  }

  return (
    <div className={styles.container}>
        <Head>
            <title>Verifique seu e-mail | {data.tenant.slug}</title>
        </Head>
        <Header color={data.tenant.mainColor} backHref={`/${data.tenant.slug}/forget`}/>

        <div className={styles.header}>
          <img src="/tmp/mail.png" alt="Icone e-mail sendo encaminhado"/>
        </div>
        
        <div className={styles.title}>Verifique seu e-mail </div>

        <div className={styles.subtitle}
        style={{borderBottomColor: data.tenant.mainColor}}
        >
          Enviamos as instruções para recuperação de senha para o seu e-mail.</div>
        
          <Button 
            color={data.tenant.mainColor}
            label='Fazer Login'
            onClick={handleSubmit}
            fill
            />
    </div>
  )
}

export default ForgetSucess; 

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