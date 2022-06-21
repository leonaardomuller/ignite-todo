import { PencilLine } from "phosphor-react";
// import { Avatar } from "./Avatar";

import styles from "./Sidebar.module.css";

export function Sidebar() {
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
          <span>Tarefas criadas (0)</span>
          <span>Concluidas (0)</span>
        </div>
      </div>
      <section className={styles.tasks}>
        {/* <a href="">
          <PencilLine size="20" />
          Editar seu perfil
        </a> */}
      </section>
    </aside>
  );
}
