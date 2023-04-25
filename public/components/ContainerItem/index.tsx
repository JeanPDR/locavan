import { type } from 'os';
import styles from './styles.module.css';
import { Item } from '../../../types/Item';
import { useAppContext } from '../../contexts/AppContext';

type Props ={
    data: Item;
}

export const ContainerItem = ({ data}: Props) => {
    const {tenant} = useAppContext();
    return(
      <a href={`/${tenant?.slug}/item/${data.id}`}>
        <div className={styles.container}>
          <div className={styles.head} style={{backgroundColor: tenant?.mainColor}}></div>
          <div className={styles.info}>
            <div className={styles.img}>
              <img  src={data.image} alt='' />
              <div className={styles.job}>{data.category}</div>
            </div>
          </div>
        </div>
      </a>
    )
}