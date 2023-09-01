import React, { useState, useEffect } from "react";
import styles from "./button.module.scss";

interface ButtonAXProps {
  title?: string;
  type?: "button" | "submit" | "reset";
  children?: React.ReactNode;
  hasFullWidth?: boolean;
  // buttonColor?: "primary" | "danger" | "success" | "secondary"|undefined;
  buttonColor?: string;

  onClick?: () => void;
  id?: string;
  sx?: any;
}

export const ButtonOS = (props: ButtonAXProps) => {
  const { title, type, children, sx, hasFullWidth, buttonColor, onClick, id } =
    props;
  const [btnColor, setBtnColor] = useState("");

  useEffect(() => {
    switch (buttonColor) {
      case "danger":
        setBtnColor("buttonAXdanger");

        break;
      case "success":
        setBtnColor("buttonAXsuccess");
        break;

      case "secondary":
        setBtnColor("buttonAXsecondary");
        break;

      default:
        setBtnColor("buttonAXprimary");
        break;
    }
  }, [buttonColor]);
  return (
    <button
      id={id}
      type={type || "submit"}
      className={`${styles.buttonOS} ${btnColor} `}
      style={{ ...sx, width: hasFullWidth ? "100%" : "" }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
