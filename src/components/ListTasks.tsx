import { NoTasks } from "./NoTasks";
import { Task } from "./Task";
import styles from "./ListTasks.module.scss";

export function Tasks() {
  return (
    <div>
      <header className={styles.headerTasks}>
        <p>Tarefas criadas <span>0</span></p>
        <p>Concluidas <span>2 de 5</span></p>
      </header>

      <main className={styles.mainTasks}>
         {/* <NoTasks/> */}
        <Task/>
        <Task finished />
      </main>
     
    </div>
  )
}