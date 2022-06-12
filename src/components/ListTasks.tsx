import { NoTasks } from "./NoTasks";
import { Task } from "./Task";
import styles from "./ListTasks.module.scss";


const tasksResponse= [
  {
    id: 1,
    content: 'Lavar a louça',
    complete: false
  },

  {
    id: 2,
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