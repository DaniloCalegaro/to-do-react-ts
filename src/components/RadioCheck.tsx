import { useState } from 'react';

import styles from './RadioCheck.module.scss';
import checkedBox from "../assets/checked.svg";
import uncheckedBox from "../assets/unchecked.svg";


interface CheckedProps {
  checked?: boolean
}

export function RadioCheck({checked = false} : CheckedProps) {
  const [check, setCheck] = useState(checked);  

  return (
    <img 
      className={styles.radioCheck} 
      src={checked ? checkedBox : uncheckedBox}
      />
  )
}