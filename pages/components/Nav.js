import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import PeopleIcon from "@material-ui/icons/People";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import StoreIcon from "@material-ui/icons/Store";
import styles from "../../styles/Nav.module.css";
function Nav() {
  return (
    <nav className={styles.nav}>
        <h2>Social App</h2>
      {/* <img className={styles.image} src="" alt="" /> */}
      <div className={styles.icons__container}>
        <HomeIcon className={styles.blue} />
        <PeopleIcon className={styles.purple} />
        <SupervisedUserCircleIcon className={styles.orange} />
        <StoreIcon className={styles.pink} />
      </div>
    </nav>
  );
}

export default Nav;
