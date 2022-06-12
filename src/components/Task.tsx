import {Trash } from "phosphor-react";
import styles from "./Task.module.scss";

import { RadioCheck } from "./RadioCheck";

interface TasksProps {
  content: string
  complete: boolean
}


export function Task({content, complete = false }: TasksProps) {
  return (
    <article className={ complete? `${styles.task} ${styles.finished}` : styles.task}>
      <div className={styles.taskCheck}>
        <RadioCheck checked = {complete}/>
        <p>{content}</p>
      </div>
      <i><Trash/> </i>     
    </article>
  )
}