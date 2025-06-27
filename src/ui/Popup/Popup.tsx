import cn from "classnames";

import { CloseIcon, Portal } from "@/shared";
import { PopupProps } from "./Popup.types";

import styles from "./Popup.module.scss";

const Popup = ({
  children,
  onChange,
  title,
  className,
  classNameInner
}: PopupProps) => {
  return (
    <Portal>
      <div className={cn(styles.popup, className)} onClick={onChange}>
        <div
          className={cn(styles.popup__inner, classNameInner)}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.popup__head}>
            <h3 className={styles.popup__head_title}>{title}</h3>
            <button
              type="button"
              className={styles.popup__head_close}
              onClick={onChange}
            >
              <CloseIcon />
            </button>
          </div>
          <div className={styles.popup__content}>{children}</div>
        </div>
      </div>
    </Portal>
  );
};

export default Popup;
