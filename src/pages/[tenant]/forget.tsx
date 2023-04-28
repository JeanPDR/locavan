import { GetServerSideProps } from 'next';
import { useApi } from '../../../public/libs/useApi';
import styles from '../../styles/Forget.module.css'
import { type } from 'os';
import { Tenant } from '../../../types/Tenant';
import { useAppContext } from '../../../public/contexts/AppContext';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { Header } from '../../../public/components/Header';
import { InputField } from '../../../public/components/InputField';
import { Button } from '../../../public/components/Button';
import { useRouter } from 'next/router';


const Forget = (data: Props) => {
  const {tenant, setTenant} = useAppContext();

  useEffect(()=>{
    setTenant(data.tenant)
  }, []);

  const router = useRouter();

  const [email, setEmail] = useState("");
  
  const handleSubmit = () => {
    router.push(`/${data.tenant.slug}/forget-success`)
  }

  return (
    <div className={styles.container}>
        <Head>
            <title>Esqueci a senha | {data.tenant.slug}</title>
        </Head>
        <Header color={data.tenant.mainColor} backHref={`/${data.tenant.slug}/login`}/>

        <div className={styles.header}>
          <img src="/tmp/locavan.png" alt="Logo Locavan"/>
        </div>
        
        <div className={styles.title}>Esqueceu sua senha?</div>

        <div className={styles.subtitle}
        style={{borderBottomColor: data.tenant.mainColor}}
        >
          Preencha o campo com seu e-mail e receba as instruções necessárias para redefinir a sua senha.</div>
        <div className={styles.line}></div>
        <div className={styles.formArea}>
            <InputField
            color={data.tenant.mainColor}
            placeholder='Digite seu e-mail'
            value={email}
            onChange={setEmail}
            />
        </div>
        <div className={styles.formArea}>
            <Button 
            color={data.tenant.mainColor}
            label='Enviar'
            onClick={handleSubmit}
            fill
            />
        </div>

    </div>
  )
}

export default Forget; 

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