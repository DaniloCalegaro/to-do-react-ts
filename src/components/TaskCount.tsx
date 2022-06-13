import styles from './TaskCount.module.scss'

export function TaskCount(){
  return (
    <header className={styles.headerTasks}>
        <p>Tarefas criadas <span>0</span></p>
        <p>Concluidas <span>2 de 5</span></p>
      </header>
  )
}