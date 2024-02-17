import style from "./Container.module.css";
import { DATA_ARR } from "../../data";
import { CardTamplate } from "../CardTamplate/CardTamplate";
import { useState } from "react";

export default function Container() {
  const [clickedButton, setClickedButton] = useState("");

  const handleClick = (clickedButton) => {
    setClickedButton(clickedButton);
  };

  return (
    <div className={style.container}>
      {DATA_ARR.map((item, index) => {
        return (
          <CardTamplate
            clickedButton={clickedButton}
            title={item.title}
            key={index}
            src={item.src}
            onClick={() => handleClick(item.title)}
          />
        );
      })}
    </div>
  );
}
