import { useState } from "react";

import {Trash } from "phosphor-react";
import { RadioCheck } from "./RadioCheck";
import styles from "./Task.module.scss";

interface TasksProps {
  content: string
  complete: boolean
  onDeleteTask: (comment: string) => void
  onCheckTask: (comment: string) => void
}


export function Task({content, complete, onDeleteTask, onCheckTask}: TasksProps) {
  const [statusTask, setStatusTask] = useState(complete)

  function handleCheck() {   
    setStatusTask((state) => {
      const newState = !state
      onCheckTask(content)
      return newState
    })

  }

  function handleDeleteTask(){
    onDeleteTask(content)
  }

  const styleTask = statusTask ? `${styles.task} ${styles.finished}` : styles.task

  return (
    <article className={styleTask}>
      
      <div className={styles.taskCheck} onClick={handleCheck}>
        <RadioCheck 
          checked = {statusTask}
        />
        <p>{content}</p>
      </div>
      <i onClick={handleDeleteTask}>
        <Trash/>
      </i>     
    </article>
  )
}