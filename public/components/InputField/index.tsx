import styles from './styles.module.css';
import EyeOff from './EyeOff.svg';
import EyeOn from './EyeOn.svg';
import  {useState}  from 'react';

type Props = {
    color: string;
    placeholder: string;
    value: string;
    onChange: (newValue: string) => void;
    password?: boolean;

}

export const InputField = ({color, placeholder, value, onChange, password}: Props) => {
    const [showPassword, setShowPassword] = useState(false);
    return(
        <div className={styles.container}>
            <input
                type= {password ? 'password' : 'text'}
                className={styles.input}
                placeholder={placeholder}
                value={value}
                onChange={e => onChange(e.target.value)}
            />
            {password &&
            <div className={styles.showPassword}>
                {showPassword && <EyeOn color='#e91e63'/>}
                {!showPassword && <EyeOff color='#e91e63'/>}
            </div>
            }
        </div>
    )
}