import React from "react";
import styles from "./card.module.scss";
interface cardProps {
  icon?: any;
  title?: string;
  sx?: any;
  onClick?: () => void;
  active?: boolean;
  description?: {
    title?: string;
    label?: string;
  }[];
}
const CardComponent = (props: cardProps) => {
  const { icon, title, sx, description } = props;

  return (
    <div className={styles.cardWrapper}>
      {icon && (
        <div className={styles.cardImage}>
          <img className={styles.iconImage} src={icon} alt={title} />
        </div>
      )}

      <div className={styles.cardTitle}>
        {title && (
          <h3 className={`mt-5 ${styles.iconTitle}`} style={{ ...sx }}>
            {title}
          </h3>
        )}
      </div>
      {description?.map((list, index) => {
        return (
          <div
            key={index}
            className={"w-full mt-1 grid lg:grid-cols-2 grid-cols-1"}
          >
            <p className={"text-left leading-5"}>{list?.title}</p>
            <p className={"lg:text-right text-left leading-5"}>{list?.label}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CardComponent;
