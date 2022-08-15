import { useState } from "react";
import { toast } from "react-toastify";
import { ClipboardText, Trash } from "phosphor-react";

import { InputAddNewAssignment } from "./InputAddNewAssignment";

import styles from "./Main.module.scss";

interface Task {
  id: number;
  checked: boolean;
  title: string;
}

export function Main() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const haveNoTasks = tasks.length === 0;
  const tasksCreated = tasks.length;
  const tasksCompleted = tasks.reduce((previousValue, task) => {
    if (task.checked) {
      return previousValue + 1;
    }
    return previousValue;
  }, 0);

  function handleAddNewTask() {
    if (!newTask) {
      toast.warning("Preencha o campo para adicionar uma nova task");
      return;
    }

    const listTitlesTasks = tasks.map((task) => task.title);

    if (listTitlesTasks.includes(newTask)) {
      toast.warning("Você ja possuí uma atividade com esse título");
      return;
    }

    const randomId = Math.floor(Math.random() * 100);
    setTasks((prevListTasks) => [
      ...prevListTasks,
      { id: randomId, title: newTask, checked: false },
    ]);
    setNewTask("");
  }

  function handleToggleTask(taskId: number) {
    const listTasksUpdated = tasks.map((task) =>
      task.id === taskId ? { ...task, checked: !task.checked } : task
    );

    setTasks(listTasksUpdated);
  }

  function handleRemoveTask(taskId: number) {
    const listTasksFiltered = tasks.filter((task) => task.id !== taskId);

    setTasks(listTasksFiltered);
  }

  return (
    <section className={styles.containerSection}>
      <header>
        <InputAddNewAssignment
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
          onAddNewTask={handleAddNewTask}
        />
      </header>

      <main>
        <div className={styles.blockInfoTasks}>
          <div>
            <span className={`${styles.title} ${styles.createdTasks}`}>
              Tarefas criadas
            </span>
            <span className={styles.counterTasks}>{tasksCreated}</span>
          </div>
          <div>
            <span className={`${styles.title} ${styles.completedTasks}`}>
              Concluídas
            </span>
            <span
              className={styles.counterTasks}
            >{`${tasksCompleted} de ${tasksCreated}`}</span>
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
            {tasks.map((task) => (
              <li key={task.id}>
                <div className={task.checked ? styles.completed : ""}>
                  <label className={styles.checkboxContainer}>
                    <input
                      type="checkbox"
                      readOnly
                      checked={task.checked}
                      onClick={() => handleToggleTask(task.id)}
                    />
                    <span className={styles.checkmark} />
                  </label>
                  <p>{task.title}</p>
                </div>

                <button type="button" onClick={() => handleRemoveTask(task.id)}>
                  <Trash />
                </button>
              </li>
            ))}
          </ul>
        )}
      </main>
    </section>
  );
}
