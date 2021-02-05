import React from "react";
import styles from "../../styles/Card.module.css";
import { Avatar } from "@material-ui/core";

function Card({name,time,texts,image,picture}) {
  return (
    <div className={styles.card}>
      <div className={styles.card__container}>
        <Avatar src={picture} className={styles.card__icon} />
        <div className={styles.card__info}>
          <h3 className={styles.card__name}>{name}</h3>
          <p className={styles.card__time}>{time}</p>
        </div>
      </div>
      <p  className={styles.card__texts}>{texts}</p>
      <img
        className={styles.card__image}
        src={image}
        alt=""
      />
    </div>
  );
}

export default Card;
