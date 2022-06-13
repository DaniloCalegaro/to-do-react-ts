import styles from './RadioCheck.module.scss';
import checkedBox from "../assets/checked.svg";
import uncheckedBox from "../assets/unchecked.svg";
interface CheckedProps {
  checked?: boolean
}

export function RadioCheck({checked = false} : CheckedProps) {
  const imgSrc = checked ? checkedBox : uncheckedBox

  return (
    <img 
      className={styles.radioCheck} 
      src={imgSrc}
    />
  )
}