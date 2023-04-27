import Link from 'next/link'
import styles from './styles.module.css'
import ArrowBack from './arrowBack.svg'

type Props = {
    backHref: string;
    color: string;
    title?: string;
    subtitle?: string;
}
export const Header = ({backHref, color,title, subtitle}: Props) => {
    return(
        <div className={styles.container}>
            <div className={styles.leftSide}>
                <Link href={backHref}>
                    <ArrowBack color={color}/>
                </Link>
            </div>
            <div className={styles.centerSide}>
                {title && <div className={styles.title}>{title}</div>}
                {title && <div className={styles.subtitle}>{subtitle}</div>}
            </div>
            <div className={styles.rigthSide}>...</div>
        </div>
    )
}