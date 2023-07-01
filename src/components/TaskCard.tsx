import { Trash } from "phosphor-react";
import Clipboard from "../assets/Clipboard.svg";

import styles from "./TaskCard.module.css";
import { TaskType } from "./Task";

interface propsTask {
  task: TaskType;
  onCompletedCheckbox: (task: string) => void;
  onDeleteTask: (task: string) => void;
}

export function TaskCard({
  task,
  onCompletedCheckbox,
  onDeleteTask,
}: propsTask) {
  function handleCheckboxClick() {
    onCompletedCheckbox(task.id);
  }

  function handleDeleteClick() {
    onDeleteTask(task.id);
  }

  return (
    <>
      <div className={styles.container}>
        {task ? (
          <label htmlFor="card" className={styles.card}>
            <input type="checkbox" onChange={handleCheckboxClick} />
            <div id="card">
              {task.completed ? <s>{task.content}</s> : <p>{task.content}</p>}
            </div>
            <button onClick={handleDeleteClick}>
              <Trash size={20} />
            </button>
          </label>
        ) : (
          <>
            <img src={Clipboard} alt="" />
            <p>
              Você ainda não tem tarefas cadastradas
              <span>Crie tarefas e organize seus itens a fazer</span>
            </p>
          </>
        )}
      </div>
    </>
  );
}
