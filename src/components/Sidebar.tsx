import clipboard from "../assets/clipboard.svg";
import { Task } from "./Task";
import { v4 as uuidv4 } from "uuid";

import styles from "./Sidebar.module.css";
import { ChangeEvent, FormEvent, useState } from "react";
import { TaskProps } from "./Task";

export interface Task {
  id: string;
  content: string;
  // onDeleteTask: (comment: number) => void;
}

export function Sidebar() {
  
  const [taskInputText, setTaskInputText] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const createdTasks = tasks.length

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    const newTask = {
      id: uuidv4(),
      content: taskInputText,
    };
    setTasks([...tasks, newTask]);
    console.log(tasks);
    setTaskInputText("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setTaskInputText(event.target.value);
  }

  function deleteTask(idToDelete: string) {
    const commentsWithoutDeletedOne = tasks.filter((task) => {
      if (task.id !== idToDelete) {
        return task;
      }
    });
    console.log(commentsWithoutDeletedOne);
    setTasks(commentsWithoutDeletedOne);
  }

  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1619304290984-9345b8788868?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
      />
      <div className={styles.profile}>
        <div className={styles.todo}>
          <input
            value={taskInputText}
            onChange={handleNewTaskChange}
            placeholder="Adicione uma nova tarefa"
            type="text"
          />
          <button onClick={handleCreateNewTask}>Criar (+)</button>
        </div>
        <div className={styles.spans}>
          <span>Tarefas criadas</span>
          <div className={styles.createdTasksCount}>{createdTasks}</div>
          <span>Concluidas</span>
          <div className={styles.completedTasksCount}>0 de {createdTasks}</div>
        </div>
      </div>
      <section className={styles.tasks}>
        {tasks.length === 0 ? (
          <>
            <img src={clipboard} alt="clipboard" />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </>
        ) : (
          tasks.map(({ id, content }) => {
            return (
              <Task key={id} id={id} content={content} onDeleteTask={deleteTask} />
            );
          })
        )}
      </section>
    </aside>
  );
}
