import {v4 as uuidv4} from "uuid";
import { NoTasks } from "./NoTasks";
import { Task } from "./Task";
import styles from "./ListTasks.module.scss";

interface Tasks {
  id: string;
  content: string;
  complete: boolean;
} 

const tasksResponse : Tasks[] = [
  {
    id: uuidv4(),
    content: 'Projeto Exportação - Modelo Timberland',
    complete: false
  },

  {
    id: uuidv4(),
    content: 'Estuda programação em React',
    complete: true
  }

]

export function ListTasks() {
  return (
    <div>
      <header className={styles.headerTasks}>
        <p>Tarefas criadas <span>0</span></p>
        <p>Concluidas <span>2 de 5</span></p>
      </header>

      <main className={styles.mainTasks}>
         {/* <NoTasks/> */}
        {/* <Task />
        <Task finished /> */}
        {tasksResponse.map(task =>{
          return (
            <Task
              key={task.id}
              content={task.content}
              complete={task.complete}
            />
          )
        })}
      </main>
     
    </div>
  )
}