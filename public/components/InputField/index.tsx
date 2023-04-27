import styles from './styles.module.css';
import Happy from './Happy.svg';
import Smile from './Smile.svg';
import  {useState}  from 'react';

type Props = {
    color: string;
    placeholder: string;
    value: string;
    onChange: (newValue: string) => void;
    password?: boolean;

}

export const InputField = ({color, placeholder, value, onChange, password}: Props) => {
    const [focused, setShowFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

   
    return(
        <div className={styles.container}
        style={{ 
            borderColor : focused ? color : '#f9f9fb',
            backgroundColor : focused ? '#FFF': '#f9f9fb'
        }}
        >
            <input
                type= {password ?(showPassword ? 'text' : 'password') : 'text'}
                className={styles.input}
                placeholder={placeholder}
                value={value}
                onChange={e => onChange(e.target.value)}
                onFocus={() => setShowFocused(true)}
                onBlur={() => setShowFocused(false)}
            />
            {password &&
            <div
            className={styles.showPassword}
            onClick={() => setShowPassword(!showPassword)}
            >
                {showPassword && <Smile color='#e91e63'/>}
                {!showPassword && <Happy color='#e91e63'/>}
            </div>
            }
        </div>
    )
}