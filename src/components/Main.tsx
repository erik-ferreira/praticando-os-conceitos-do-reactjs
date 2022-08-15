import { InputAddNewAssignment } from "./InputAddNewAssignment";

import clipboardIcon from "../assets/clipboard.svg";

import styles from "./Main.module.scss";

export function Main() {
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

        <div className={styles.tasks}>
          <img src={clipboardIcon} />

          <div className={styles.blockMessage}>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        </div>
      </main>
    </section>
  );
}
