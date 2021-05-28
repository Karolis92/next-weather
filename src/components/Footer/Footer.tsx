import { memo } from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <a className={styles.credit} href="https://lottiefiles.com/user/26177" target="_blank" rel="noreferrer">
        Weather animations by jochang on LottieFiles
      </a>
    </footer>
  );
}

export default memo(Footer);
