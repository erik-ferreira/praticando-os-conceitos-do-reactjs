import { PlusCircle } from "phosphor-react";

import styles from "./InputAddNewAssignment.module.scss";

export function InputAddNewAssignment() {
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Adicione uma nova tarefa" />

      <button>
        Criar <PlusCircle />
      </button>
    </div>
  );
}
