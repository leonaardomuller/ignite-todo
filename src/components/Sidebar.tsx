import { PencilLine } from "phosphor-react";
// import { Avatar } from "./Avatar";
import clipboard from "../assets/clipboard.svg";
import { Task } from "./Task";

import styles from "./Sidebar.module.css";
const tasks = [
  { id: 1, isDone: false, content: "BLABLABLA" },
  { id: 2, isDone: false, content: "BLBLBLBL" },
  { id: 3, isDone: false, content: "GEETETTE" },
];
export function Sidebar() {
  function handleDeleteComment() {
    console.log("Deleted");
  }
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1619304290984-9345b8788868?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
      />
      <div className={styles.profile}>
        <div className={styles.todo}>
          <input placeholder="Adicione uma nova tarefa" type="text" />
          <button>Criar (+)</button>
        </div>
        <div className={styles.spans}>
          <span>Tarefas criadas</span>
          <div className={styles.count}>0</div>
          <span>Concluidas</span>
          <div className={styles.count}>0</div>
        </div>
      </div>
      <section className={styles.tasks}>
        {tasks.map(({ id, content, isDone }) => {
          return (
            <Task
              key={id}
              content={content}
              onDeleteComment={handleDeleteComment}
            />
          );
        })}
        {/* <img src={clipboard} alt="clipboard" />
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p> */}
      </section>
    </aside>
  );
}
