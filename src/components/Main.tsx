import { ClipboardText, Trash } from "phosphor-react";

import { InputAddNewAssignment } from "./InputAddNewAssignment";

import styles from "./Main.module.scss";

export function Main() {
  const haveNoTasks = false;

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
            <ClipboardText color="#3D3D3D" />

            <div className={styles.blockMessage}>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          </div>
        ) : (
          <ul className={styles.listTasks}>
            <li>
              <label>
                <input type="checkbox" />
                <span>
                  Integer urna interdum massa libero auctor neque turpis turpis
                  semper. Duis vel sed fames integer.
                </span>
              </label>

              <button type="button">
                <Trash color="#808080" />
              </button>
            </li>
          </ul>
        )}
      </main>
    </section>
  );
}
