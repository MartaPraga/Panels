import styles from "./CardTamplate.module.css";
import { useState } from "react";

export const CardTamplate = ({ title, src, onClick, clickedButton,  }) => {
  return (
    <>
      <div
        onClick={onClick}
        className={
          clickedButton === title ? `${styles.active} ${styles.panel}` : styles.panel
        }
        style={{ backgroundImage: `url(${src})` }}
      >
        <h3 
        style={{ opacity: `${clickedButton === title ? "1" : "0"}`}}
        >
          {title}
        </h3>
      </div>
    </>
  );
};
