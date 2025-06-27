import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__inner}>
          <div className={styles.header__logo}>Дошка емоцій</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
