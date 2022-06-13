import {v4 as uuidv4} from "uuid";
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
  const [tasks, setTasks] = useState(tasksResponse)

  function deleteTask (contentTask: string) {
    const tasksWithoutDeleteOne = tasks.filter(task => task.content !== contentTask)
    setTasks(tasksWithoutDeleteOne)
    //console.log(tasksWithoutDeleteOne)
  }
  
  function thereTasks(tasks: Tasks[]) {
    if(tasks.length === 0) {
      return <NoTasks/>
    } else {
      tasks.map((task) =>{
        return (
          <Task
            key={task.id}
            content={task.content}
            complete={task.complete}
            onDeleteTask={deleteTask}
          />
        )
      })
    }
  }

  // console.log(thereTasks)

  return (   
    <main className={styles.mainTasks}>
      <TaskCount/>

      {/* <NoTasks/> */}

      {tasks.length === 0 
        ? <NoTasks/>
        : tasks.map((task) =>{
          return (
            <Task
              key={task.id}
              content={task.content}
              complete={task.complete}
              onDeleteTask={deleteTask}
            />
          )
      })}
    </main>
  )
}