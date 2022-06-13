import styles from './TaskCount.module.scss'

interface TaskCountProps {
  totalTasks: number
  totalTasksCompleted: number
}

export function TaskCount({totalTasks, totalTasksCompleted}: TaskCountProps){
  return (
    <header className={styles.headerTasks}>
        <p>Tarefas criadas <span>{totalTasks}</span></p>
        <p>Concluidas <span>{totalTasksCompleted} de {totalTasks}</span></p>
      </header>
  )
}