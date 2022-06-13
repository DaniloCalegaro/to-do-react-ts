import { useState } from "react";

import {Trash } from "phosphor-react";
import { RadioCheck } from "./RadioCheck";
import styles from "./Task.module.scss";

interface TasksProps {
  content: string
  complete: boolean
}


export function Task({content, complete}: TasksProps) {
  const [statusTask, setStatusTask] = useState(complete)

  function handleCheck() {   
    setStatusTask((state) => {
      const toogleStatus = state ? false : true
      return toogleStatus
    })
  }
  return (
    <article className={ statusTask? `${styles.task} ${styles.finished}` : styles.task}>
      <div className={styles.taskCheck} onClick={handleCheck}>
        <RadioCheck 
          checked = {statusTask}
        />
        <p>{content}</p>
      </div>
      <i><Trash/> </i>     
    </article>
  )
}