import { useState } from "react";
import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Task.module.css";

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Task({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);
  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1;
    });
  }

  function handlDeleteComent() {
    onDeleteComment(content);
  }
  return (
    <div className={styles.comment}>
      {/* <Avatar
        hasBorder={false}
        src="https://avatars.githubusercontent.com/u/60147880?v=4"
        alt=""
      /> */}
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          {/* <div className={styles.authorAndTime}>
              <strong>John Doe</strong>
              <time title="06 de Junho de 2022" dateTime="2022-06-06 17:12:25">
                Cerca de 2h atrás.
              </time>
            </div> */}
          <p>{content}</p>
          <button onClick={handlDeleteComent} title="Deletar comentário">
            <Trash size={24} />
          </button>
        </div>
        {/* <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer> */}
      </div>
    </div>
  );
}
