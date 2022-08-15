import { useState } from "react";
import { ClipboardText, Trash } from "phosphor-react";

import { InputAddNewAssignment } from "./InputAddNewAssignment";

import styles from "./Main.module.scss";

export function Main() {
  const haveNoTasks = false;
  const [checked, setCheched] = useState(false);

  return (
    <section className={styles.containerSection}>
      <header>
        <InputAddNewAssignment />
      </header>

      <main>
        <div className={styles.blockInfoTasks}>
          <div>
            <span className={`${styles.title} ${styles.createdTasks}`}>
              Tarefas criadas
            </span>
            <span className={styles.counterTasks}>0</span>
          </div>
          <div>
            <span className={`${styles.title} ${styles.completedTasks}`}>
              Concluídas
            </span>
            <span className={styles.counterTasks}>0</span>
          </div>
        </div>

        {haveNoTasks ? (
          <div className={styles.contentTasks}>
            <ClipboardText />

            <div className={styles.blockMessage}>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          </div>
        ) : (
          <ul className={styles.listTasks}>
            <li>
              <div className={checked ? styles.completed : ""}>
                <label className={styles.checkboxContainer}>
                  <input
                    type="checkbox"
                    readOnly
                    checked={checked}
                    onClick={() => setCheched((prevState) => !prevState)}
                  />
                  <span className={styles.checkmark} />
                </label>
                <p>
                  Integer urna interdum massa libero auctor neque turpis turpis
                  semper. Duis vel sed fames integer.
                </p>
              </div>

              <button type="button" onClick={() => console.log("remover")}>
                <Trash />
              </button>
            </li>
          </ul>
        )}
      </main>
    </section>
  );
}
