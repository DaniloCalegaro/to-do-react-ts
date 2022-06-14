import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./InputNewTask.module.scss"

export function InputNewTask() {
  const [newTaskText, setNewTaskText] = useState('')

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()
    console.log('Tarefa criada: ' + newTaskText)
    setNewTaskText('')
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value)
  }

  return (
    <div className={styles.inputNewTask}>
      <form onSubmit={handleCreateNewTask}>
        <input 
          type="text" 
          placeholder="Adicione uma nova tarefa"
          value={newTaskText}
          onChange={handleNewTaskChange}
        />
        <button type="submit" className={styles.buttonCreate}>
          Criar
          <PlusCircle size={18}/>
        </button>
      </form>
    </div>
  )
}