import { useState } from "react";
import { Trash } from "phosphor-react";

import styles from "./Task.module.css";

export interface TaskProps {
  id: string;
  content: string;
  onDeleteTask: (id: string) => void;
}

export function Task({ id, content, onDeleteTask }: TaskProps) {
  function handlDeleteTask() {
    onDeleteTask(id);
  }
  return (
    <div className={styles.taskContent}>
      <p>{content}</p>
      <button onClick={handlDeleteTask} title="Deletar comentário">
        <Trash size={24} />
      </button>
    </div>
  );
}
