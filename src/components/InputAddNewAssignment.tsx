import iconPlus from "../assets/plus.svg";

import styles from "./InputAddNewAssignment.module.scss";

export function InputAddNewAssignment() {
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Adicione uma nova tarefa" />

      <button>
        Criar <img src={iconPlus} alt="Adicionar tarefa" />
      </button>
    </div>
  );
}
