import { v4 as uuidv4 } from "uuid";
import { NoTasks } from "./NoTasks";
import { Task } from "./Task";
import styles from "./ListTasks.module.scss";
import { useState } from "react";
import { TaskCount } from "./TaskCount";

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

  function deleteTask(contentTask: string) {
    const tasksWithoutDeleteOne = tasks.filter(task => task.content !== contentTask)
    setTasks(tasksWithoutDeleteOne)
    refreshCountTasks(tasksWithoutDeleteOne)
  }

  function refreshCountTasks(tasks: Tasks[]) {
    setAmountTask(tasks.length)
  }

  function refreshCountTasksComplete(content: string) {
    console.log(content)
    //const tasksComplete = tasks.filter(task => task.content !== content)
    //setAmountTaskComplete(tasksComplete.length)
    const tasksComplete = tasks.map(task => {
      if(task.content === content) {
        !task.complete
        console.log(!task.complete)
      }
      
      return task.complete
    })
    //console.log(tasksComplete)
  }

  return (
    <main className={styles.mainTasks}>
      <TaskCount 
        totalTasks={amountTask}  
        totalTasksCompleted={amountTaskComplete}    
      />

      {/* <NoTasks/> */}

      {tasks.length === 0
        ? <NoTasks />
        : tasks.map((task) => {
          return (
            <Task
              key={task.id}
              content={task.content}
              complete={task.complete}
              onDeleteTask={deleteTask}
              onCheckTask={refreshCountTasksComplete}
            />
          )
        })}
    </main>
  )
}