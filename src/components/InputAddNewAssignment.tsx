import { InputHTMLAttributes } from "react";
import { PlusCircle } from "phosphor-react";

import styles from "./InputAddNewAssignment.module.scss";

interface InputAddNewAssignmentProps
  extends InputHTMLAttributes<HTMLInputElement> {
  onAddNewTask?: () => void;
}

export function InputAddNewAssignment({
  onAddNewTask,
  ...rest
}: InputAddNewAssignmentProps) {
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Adicione uma nova tarefa" {...rest} />

      <button onClick={onAddNewTask}>
        Criar <PlusCircle />
      </button>
    </div>
  );
}
