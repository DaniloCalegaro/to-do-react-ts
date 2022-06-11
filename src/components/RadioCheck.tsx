import styles from './RadioCheck.module.scss';

import checked from "../assets/checked.svg";
import unchecked from "../assets/unchecked.svg";

export function RadioCheck() {
  return (
    <>
    <img className={styles.radioUnCheck} src={unchecked} alt="Tarefa não finalizada" />
    {/* <img className={styles.radioCheck} src={checked} alt="Tarefa não finalizada" /> */}
    </>
  )
}