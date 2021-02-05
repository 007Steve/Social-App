import React from "react";
import styles from "../../styles/Post.module.css";

function Post({}) {
  const b = "/Pexels Videos 4513.mp4";
  const y = {
    backgroundImage: `url(${b})`,
  };
  return (
    <div className={styles.post}>
      {/* <button className={styles.post__button}>+</button> */}
      <video
        autoPlay
        className={styles.post__video}
        src="/Pexels Videos 4513.mp4"
      ></video>
    </div>
  );
}

export default Post;
