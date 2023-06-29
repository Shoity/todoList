import styles from "./TaskList.module.css";

import Clipboard from "../assets/Clipboard.svg";

export function TaskList() {
  return (
    <>
      <header className={styles.header}>
        <strong className={styles.taskCounter}>
          Tarefas criadas
          <span>
            <strong>0</strong>
          </span>
        </strong>

        <strong className={styles.finishedCounter}>
          Concluídas
          <span>
            <strong>0</strong>
          </span>
        </strong>
      </header>

      <main className={styles.container}>
        <img src={Clipboard} alt="" />
        <p>
          Você ainda não tem tarefas cadastradas
          <p>Crie tarefas e organize seus itens a fazer</p>
        </p>
      </main>
    </>
  );
}
