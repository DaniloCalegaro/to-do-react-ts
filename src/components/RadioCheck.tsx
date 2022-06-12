import styles from './RadioCheck.module.scss';

import checkedBox from "../assets/checked.svg";
import uncheckedBox from "../assets/unchecked.svg";

interface Checked {
  checked?: boolean;
}

export function RadioCheck({checked = false} : Checked) {
  return (
    <>
    <img 
      className={checked ? styles.radioCheck : styles.radioCheck} 
      src={checked ? checkedBox : uncheckedBox} 
      />
    </>
  )
}