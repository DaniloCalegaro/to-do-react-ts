import { Header } from "./components/Header";
import { InputNewTask } from "./components/InputNewTask";

import styles from "./App.module.scss"
import { Tasks } from "./components/ListTasks";

export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <div className={styles.formTaskCreate}>
          <InputNewTask/>
        </div>
        <div className={styles.tasks}>
          <Tasks/>
        </div>
      </div>
    </div>
  )
}

