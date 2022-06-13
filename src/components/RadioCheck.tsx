import styles from './RadioCheck.module.scss';
import checkedBox from "../assets/checked.svg";
import uncheckedBox from "../assets/unchecked.svg";
interface CheckedProps {
  checked?: boolean
}

export function RadioCheck({checked = false} : CheckedProps) {
  return (
    <img 
      className={styles.radioCheck} 
      src={checked ? checkedBox : uncheckedBox}
      />
  )
}