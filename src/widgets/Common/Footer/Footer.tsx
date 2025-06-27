import dayjs from "dayjs";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__inner}>
          <p className={styles.footer__text}>
            {dayjs().format("YYYY")} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
