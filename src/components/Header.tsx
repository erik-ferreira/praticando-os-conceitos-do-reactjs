import logo from "../assets/logo.svg";

import styles from "./Header.module.scss";

export function Header() {
  return (
    <header className={styles.container}>
      <img src={logo} alt="Logo to do" />
    </header>
  );
}
