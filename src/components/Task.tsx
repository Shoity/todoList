import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { PlusCircle } from "phosphor-react";
import { v4 as uuidv4 } from "uuid";

import styles from "./Task.module.css";
import { TaskCard } from "./TaskCard";

export interface TaskType {
  id: string;
  content: string;
  completed: boolean;
}

export function Task() {
  const [task, setTask] = useState<Array<TaskType>>([]);
  const [newTaskContent, setNewTaskContent] = useState("");

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTaskContent(event.target.value);
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    const newTaskInfo = {
      id: uuidv4(),
      content: newTaskContent,
      completed: false,
    };

    setTask([...task, newTaskInfo]);
    setNewTaskContent("");
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Insira a sua tarefa aqui.");
  }

  function handleCheckbox(taskCompletedId: string) {
    const changeTaskToCompleted = task.filter((task) => {
      if (task.id === taskCompletedId) {
        task.completed = !task.completed;
      }
      return task;
    });

    setTask(changeTaskToCompleted);
  }

  function handleDelete(DeletedTaskId: string) {
    const taskWithoutDeletedone = task.filter((task) => {
      return task.id !== DeletedTaskId;
    });
    setTask(taskWithoutDeletedone);
  }

  function completedTasksOfTotal() {
    return task.reduce((acc, task) => {
      if (task.completed) {
        acc += 1;
      }
      return acc;
    }, 0);
  }

  return (
    <>
      <form className={styles.addTask} onSubmit={handleCreateNewTask}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={newTaskContent}
          onChange={handleNewTaskChange}
          className={styles.addTaskInput}
          onInvalid={handleNewTaskInvalid}
          required
        />
        <button type="submit" className={styles.addBtn}>
          <strong>Criar</strong>
          <PlusCircle size={16} />
        </button>
      </form>

      <header className={styles.header}>
        <strong className={styles.taskCounter}>
          Tarefas criadas
          <span>
            <strong>{task.length}</strong>
          </span>
        </strong>

        <strong className={styles.finishedCounter}>
          Concluídas
          <span>
            <strong>
              {completedTasksOfTotal()} de {task.length}
            </strong>
          </span>
        </strong>
      </header>

      {task.map((task) => {
        return (
          <TaskCard
            key={task.id}
            task={task}
            onCompletedCheckbox={handleCheckbox}
            onDeleteTask={handleDelete}
          />
        );
      })}
    </>
  );
}
