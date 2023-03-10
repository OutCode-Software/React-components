import React from "react";
import styles from "./card.module.scss";
interface CardContainerProps {
  children: any;
}
const CardContainer = (props: CardContainerProps) => {
  const { children } = props;

  return <div className={`${styles.cardWrapperShadow}`}>{children}</div>;
};

export default CardContainer;
