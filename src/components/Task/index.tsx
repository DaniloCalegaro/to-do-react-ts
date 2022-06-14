import { useState } from "react";

import {Trash } from "phosphor-react";
import { RadioCheck } from "../RadioCheck";
import styles from "./styles.module.scss";

interface TasksProps {
  id: string
  content: string
  complete: boolean
  onDeleteTask: (comment: string) => void
  onCheckTask: (comment: string) => void
}


export function Task({id, content, complete, onDeleteTask, onCheckTask}: TasksProps) {
  const [statusTask, setStatusTask] = useState(complete)

  function handleCheck() {   
    setStatusTask((state) => {
      const newState = !state
      return newState
    })
    onCheckTask(id)
  }

  function handleDeleteTask(){
    onDeleteTask(id)
  }

  const styleTask = statusTask ? `${styles.task} ${styles.finished}` : styles.task

  return (
    <article className={styleTask}>
      
      <div className={styles.taskCheckAndCheck} >
        <div className={styles.taskCheck} onClick={handleCheck}>
          <RadioCheck 
            checked = {statusTask}
          />
        </div>
        <p>{content}</p>
      </div>
      <i onClick={handleDeleteTask}>
        <Trash/>
      </i>     
    </article>
  )
}