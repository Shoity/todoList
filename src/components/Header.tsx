import styles from "./Header.module.css";

import logo from "../assets/rocket.svg";

export function Header() {
  return (
    <header className={styles.wrapper}>
      <div className={styles.logo}>
        <img src={logo} />
        <h1>
          <span>to</span>
          <span>do</span>
        </h1>
      </div>
    </header>
  );
}
