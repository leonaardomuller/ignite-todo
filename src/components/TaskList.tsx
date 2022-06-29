import clipboard from "../assets/clipboard.svg";
import { v4 as uuidv4 } from "uuid";

import styles from "./TaskList.module.css";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Task } from "./Task";

import igniteLogo from "../assets/logo.svg";
import plus from "../assets/plus.svg";

export interface Task {
  id: string;
  content: string;
  isDone: boolean;
}

export function Sidebar() {
  const [taskInputText, setTaskInputText] = useState("");
  const [allTasks, setAllTasks] = useState<Task[]>([]);
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);
  const createdTasks = allTasks.length;

  useEffect(() => {
    const completedTasks = allTasks.filter((task) => {
      if (task.isDone === true) {
        return task;
      }
    });
    setCompletedTasks(completedTasks);
  }, [allTasks]);

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    if (taskInputText !== "") {
      const newTask = {
        id: uuidv4(),
        content: taskInputText,
        isDone: false,
      };
      setAllTasks([...allTasks, newTask]);
      setTaskInputText("");
    } else {
      alert("O campo não pode ser vazio");
    }
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setTaskInputText(event.target.value);
  }

  function deleteTask(idToDelete: string) {
    const commentsWithoutDeletedOne = allTasks.filter((task) => {
      if (task.id !== idToDelete) {
        return task;
      }
    });
    setAllTasks(commentsWithoutDeletedOne);
  }

  function setTaskDone(idToMakeDone: string) {
    const taskCompleted = allTasks.map((task) =>
      task.id === idToMakeDone ? { ...task, isDone: !task.isDone } : task
    );
    const tasksNotDone = taskCompleted.filter((task) => {
      if (task.isDone !== true) {
        return task;
      }
    });
    const completedTasks = taskCompleted.filter((task) => {
      if (task.isDone === true) {
        return task;
      }
    });
    setCompletedTasks(completedTasks);
    setAllTasks([...tasksNotDone, ...completedTasks]);
  }

  return (
    <aside className={styles.sidebar}>
      <header>
        <img src={igniteLogo} alt="Logotipo do todo list" />
      </header>

      <div className={styles.profile}>
        <div className={styles.todo}>
          <input
            value={taskInputText}
            onChange={handleNewTaskChange}
            placeholder="Adicione uma nova tarefa"
            type="text"
          />
          <button onClick={handleCreateNewTask}>
            Criar <img src={plus} alt="Criar todo" />{" "}
          </button>
        </div>
        <div className={styles.createdAndCompletedTasks}>
          <div className={styles.taskBox}>
            <strong>Tarefas criadas</strong>
            <div className={styles.createdTasksCount}>
              <p>{createdTasks}</p>
            </div>
          </div>
          <div className={styles.taskBox}>
            <strong>Concluidas</strong>
            <div className={styles.completedTasksCount}>
              <p>{`${completedTasks.length} de ${createdTasks}`}</p>
            </div>
          </div>
        </div>
      </div>
      <section className={styles.tasks}>
        {allTasks.length === 0 ? (
          <>
            <img src={clipboard} alt="clipboard" />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </>
        ) : (
          allTasks.map(({ id, content }) => {
            return (
              <Task
                key={id}
                id={id}
                content={content}
                onDeleteTask={deleteTask}
                onMakeDone={setTaskDone}
              />
            );
          })
        )}
      </section>
    </aside>
  );
}
