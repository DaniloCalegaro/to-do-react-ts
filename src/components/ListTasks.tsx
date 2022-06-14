import { v4 as uuidv4 } from "uuid";
import { NoTasks } from "./NoTasks";
import { Task } from "./Task";
import styles from "./ListTasks.module.scss";
import { useState } from "react";

interface Tasks {
  id: string;
  content: string;
  complete: boolean;
}

const tasksResponse: Tasks[] = [
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
  const [tasks, setTasks] = useState(tasksResponse)
  const [amountTask, setAmountTask] = useState(tasksResponse.length) 
  const [amountTaskComplete, setAmountTaskComplete] = useState(0)

  function refreshCountTasks(tasks: Tasks[]) {
    setAmountTask(tasks.length)
  }

  function refreshCountTasksComplete(tasks: Tasks[]) {
    const sumCountTaskComplete = tasks.reduce((sum, task) => {
      return sum = task.complete ? sum + 1 : sum
    }, 0)
    setAmountTaskComplete(sumCountTaskComplete)
  }

  function deleteTask(contentTask: string) {
    const tasksWithoutDeleteOne = tasks.filter(task => task.content !== contentTask)
    setTasks(tasksWithoutDeleteOne)
    refreshCountTasks(tasksWithoutDeleteOne)
    refreshCountTasksComplete(tasksWithoutDeleteOne)
  }

  function completeTask(content: string) {
    const tasksRefreshed = tasks.map(task => {
      if(task.content ===content) {
        task.complete = !task.complete
      }
      return task
    })
    setTasks(tasksRefreshed)
    refreshCountTasksComplete(tasksRefreshed)
  }

  return (
    <div>
      <header className={styles.headerTasks}>
          <p>Tarefas criadas <span>{amountTask}</span></p>
          <p>Concluidas <span>{amountTaskComplete} de {amountTask}</span></p>
      </header>

      <main className={styles.mainTasks}>
        {tasks.length === 0
          ? <NoTasks />
          : tasks.map((task) => {
            return (
              <Task
                key={task.id}
                content={task.content}
                complete={task.complete}
                onDeleteTask={deleteTask}
                onCheckTask={completeTask}
              />
            )
          })}
      </main>
    </div>

  )
}