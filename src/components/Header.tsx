import styles from "./Header.module.scss"

import logoToDo from "../assets/logoToDo.svg"

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoToDo} alt="Logo do ToDo" />
      <p>
        to
        <span>do</span>
      </p>
    </header>
  )
}