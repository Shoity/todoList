import { PlusCircle } from "phosphor-react";
import styles from "./Task.module.css";
import { TaskList } from "./TaskList";

export function Task() {
  return (
    <>
      <div className={styles.addTask}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          className={styles.addTaskInput}
        />
        <button className={styles.addBtn}>
          <strong>Criar</strong>
          <PlusCircle size={16} />
        </button>
      </div>

      <TaskList />
    </>
  );
}
