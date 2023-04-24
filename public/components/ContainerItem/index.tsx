import { type } from 'os';
import styles from './styles.module.css';
import { Item } from '../../../types/Item';

type Props ={

    data: Item;
    mainColor: string;
    secondColor: string;
}

export const ContainerItem = ({data, mainColor, secondColor}: Props) => {
    return(
      <a href={`/item/${data.id}`}>
        <div className={styles.container}>
          <div className={styles.head} style={{backgroundColor: mainColor}}></div>
          <div className={styles.info}>
            <div className={styles.img}>
              <img  src={data.image} alt={data.description} />
              <div className={styles.job}>{data.category}</div>
            </div>
          </div>
        </div>
      </a>
    )
}