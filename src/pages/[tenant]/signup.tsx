import { GetServerSideProps } from 'next';
import { useApi } from '../../../public/libs/useApi';
import styles from '../../styles/Signup.module.css'
import { type } from 'os';
import { Tenant } from '../../../types/Tenant';
import { useAppContext } from '../../../public/contexts/AppContext';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { Header } from '../../../public/components/Header';
import { InputField } from '../../../public/components/InputField';
import { Button } from '../../../public/components/Button';
import { useRouter } from 'next/router';


const SignUp = (data: Props) => {
  const {tenant, setTenant} = useAppContext();

  useEffect(()=>{
    setTenant(data.tenant)
  }, []);

  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  
  const handleSubmit = () => {

  }

  const handleSingUp = () => {
    router.push(`/${data.tenant.slug}/signup`)
  }
  return (
    <div className={styles.container}>
        <Head>
            <title>Cadastro | {data.tenant.slug}</title>
        </Head>
        <Header color={data.tenant.mainColor} backHref={`/${data.tenant.slug}`}/>

        <div className={styles.header}>
          <img src="/tmp/locavan.png" alt="Logo Locavan"/>
        </div>

        <div className={styles.subtitle}
        style={{borderBottomColor: data.tenant.mainColor}}
        >
          Preencha os campos para criar seu cadastro.</div>
        <div className={styles.line}></div>
        <div className={styles.formArea}>
            <InputField
            color={data.tenant.mainColor}
            placeholder='Digite seu nome'
            value={name}
            onChange={setName}
            />
        </div>
        <div className={styles.formArea}>
            <InputField
            color={data.tenant.mainColor}
            placeholder='Digite seu e-mail'
            value={email}
            onChange={setEmail}
            />
        </div>
        <div className={styles.formArea}>
            <InputField
            color={data.tenant.mainColor}
            placeholder='Digite sua senha'
            value={password}
            onChange={setPassword}
            password
            />
        </div>
        <div className={styles.formArea}>
            <Button 
            color={data.tenant.mainColor}
            label='Cadastrar'
            onClick={handleSubmit}
            fill
            />
        </div>

        <div className={styles.forgetArea}
        >
          Já possui cadastro? <a style={{color: data.tenant.mainColor}} 
          href={`/${data.tenant.slug}/login`}>Fazer login.</a>
        </div>
    </div>
  )
}

export default SignUp; 

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