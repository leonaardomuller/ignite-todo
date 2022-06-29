import { useState } from "react";
import { Trash } from "phosphor-react";

import styles from "./Task.module.css";

export interface TaskProps {
  id: string;
  content: string;
  onDeleteTask: (id: string) => void;
  onMakeDone: (id: string) => void;
}

export function Task({ id, content, onDeleteTask, onMakeDone }: TaskProps) {
  const [isDone, setIsDone] = useState(false);

  function handlDeleteTask() {
    onDeleteTask(id);
  }
  function handleMakeDone() {
    onMakeDone(id);
    setIsDone(!isDone);
  }
  return (
    <div className={styles.taskContent}>
      <input type="checkbox" onChange={handleMakeDone} checked={isDone} />
      <p>{content}</p>
      <button onClick={handlDeleteTask} title="Deletar comentário">
        <Trash size={24} />
      </button>
    </div>
  );
}
