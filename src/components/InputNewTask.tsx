import { PlusCircle } from "phosphor-react";
import styles from "./InputNewTask.module.scss"

export function InputNewTask() {
  return (
    <div className={styles.inputNewTask}>
      <form>
        <input type="text" placeholder="Adicione uma nova tarefa"/>
        <button type="submit" className={styles.buttonCreate}>
          Criar
          <PlusCircle size={16}/>
        </button>
      </form>
    </div>
  )
}