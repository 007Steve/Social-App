import React from "react";
import styles from "../../styles/Sidebar.module.css";
import { Avatar, Button } from "@material-ui/core";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.container}>
        <div className={styles.image__container}>
        <img className={styles.image} src="https://media-exp1.licdn.com/dms/image/C4D03AQHeZuu5PGQzYw/profile-displayphoto-shrink_200_200/0/1600449353015?e=1617840000&v=beta&t=9A2ldiqPGwV46HZyBAkKpdDRWXYAx7K33FulIWbLTp8" alt=""/>
        </div>
        <div className={styles.info__container}>
            <div className={styles.info}>
                <h4 className={styles.info__number}>500</h4>
                <p className={styles.info__title}>Posts</p>
            </div>
            <div className={styles.info}>
                <h4 className={styles.info__number}>200</h4>
                <p className={styles.info__title}>Likes</p>
            </div>
            <div className={styles.info}>
                <h4 className={styles.info__number}>1200</h4>
                <p className={styles.info__title}>Followers</p>
            </div>
        
        </div>
       <button className={styles.button}>Post</button>
      </div>
    </div>
  );
}

export default Sidebar;
