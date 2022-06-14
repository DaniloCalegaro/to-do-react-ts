import { Header } from "./components/Header";
import { ContainerTasks } from "./components/ContainerTasks";

import styles from "./App.module.scss"

export function App() {
  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <ContainerTasks/>
      </div>
    </>
  )
}

