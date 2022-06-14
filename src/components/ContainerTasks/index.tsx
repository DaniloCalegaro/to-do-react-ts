import { v4 as uuidv4 } from "uuid";
import { NoTasks } from "../NoTask";
import { Task } from "../Task";
import styles from "./styles.module.scss";
import { ChangeEvent, FormEvent, InvalidEvent, useEffect, useState } from "react";
import { PlusCircle } from "phosphor-react";

interface Tasks {
  id: string;
  content: string;
  complete: boolean;
}

const tasksResponse: Tasks[] = []

export function ContainerTasks() {
  const [tasks, setTasks] = useState(tasksResponse)
  const [amountTask, setAmountTask] = useState(0) 
  const [amountTaskComplete, setAmountTaskComplete] = useState(0)
  const [newTaskText, setNewTaskText] = useState('')

  function refreshCountTasks(tasks: Tasks[]) {
    setAmountTask(tasks.length)
  }

  function refreshCountTasksComplete(tasks: Tasks[]) {
    const sumCountTaskComplete = tasks.reduce((sum, task) => {
      return sum = task.complete ? sum + 1 : sum
    }, 0)
    setAmountTaskComplete(sumCountTaskComplete)
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()
    //console.log('Tarefa criada: ' + newTaskText)
    const newObjectTask : Tasks= {
      id: uuidv4(),
      content: newTaskText,
      complete: false
    }
    setTasks([...tasks, newObjectTask])
    setNewTaskText('')
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewTaskText(event.target.value)
  }

  function deleteTask(idTask: string) {
    const tasksWithoutDeleteOne = tasks.filter(task => task.id !== idTask)
    setTasks(tasksWithoutDeleteOne)
  }

  function completeTask(idTask: string) {
    const tasksRefreshed = tasks.map(task => {
      if(task.id === idTask) {
        task.complete = !task.complete
      }
      return task
    })
    setTasks(tasksRefreshed)
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>){
    event.target.setCustomValidity('É obrigatório inserir uma tarefa')
  }

  useEffect(()=> {
    refreshCountTasks(tasks)
    refreshCountTasksComplete(tasks)
  }, [tasks])

  return (
    <div className={styles.mainTasks}>
      <div className={styles.inputNewTask}>
      <form onSubmit={handleCreateNewTask}>
        <input 
          type="text" 
          placeholder="Adicione uma nova tarefa"
          value={newTaskText}
          onChange={handleNewTaskChange}
          onInvalid={handleNewTaskInvalid}
          required
        />
        <button type="submit" className={styles.buttonCreate}>
          Criar
          <PlusCircle size={18}/>
        </button>
      </form>
    </div>

    <div className={styles.countTasks}>
        <p>Tarefas criadas <span>{amountTask}</span></p>
        <p>Concluídas <span>{amountTaskComplete} de {amountTask}</span></p>
    </div>

    <main className={styles.containerTasks}>
      {tasks.length === 0
        ? <NoTasks />
        : tasks.map((task) => {
          return (
            <Task
              key={task.id}
              id={task.id}
              content={task.content}
              complete={task.complete}
              onDeleteTask={deleteTask}
              onCheckTask={completeTask}
            />
          )
        })}
    </main>
  </div>

  )
}