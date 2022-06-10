import { Header } from "./components/Header";
import { InputNewTask } from "./components/InputNewTask";

import styles from "./App.module.scss"

export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <InputNewTask/>
      </div>
    </div>
  )
}

