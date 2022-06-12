import {Trash } from "phosphor-react";
import styles from "./Task.module.scss";

import { RadioCheck } from "./RadioCheck";

interface Finished {
  finished?: boolean
}

export function Task({finished = false }: Finished) {
  return (
    <article 
      className={ finished ? `${styles.task} ${styles.finished}` : styles.task}>
        <RadioCheck checked = {finished}/>
        <p>
          Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
        </p>
        <Trash/>      
    </article>
  )
}