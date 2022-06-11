import styles from "./NoTasks.module.scss";
import clipboard from "../assets/Clipboard.svg"


export function NoTasks() {
  return (
    <div className={styles.noTasks}>
      <img src={clipboard} alt="" />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  )
}