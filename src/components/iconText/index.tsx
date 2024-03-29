import React from "react";
import styles from "./icontext.module.scss";
interface IconTextProps {
  icon?: any;
  title?: string;
  sx?: any;
  onClick?: () => void;
  active?: boolean;
}
const IconText = (props: IconTextProps) => {
  const { icon, title, sx, onClick, active = false } = props;
  return (
    <div
      className={`${styles.iconTitleWrapper} ${
        active ? `${styles.iconTitleActive}` : ""
      }`}
      onClick={onClick}
    >
      <img className={styles.iconImage} src={icon} alt={title} />
      {title && (
        <h3 className={styles.iconTitle} style={{ ...sx }}>
          {title}
        </h3>
      )}
    </div>
  );
};

export default IconText;
