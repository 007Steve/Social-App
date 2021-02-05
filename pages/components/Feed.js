import React, { useState } from "react";
import styles from "../../styles/Feed.module.css";
import Post from "./Post";
import PhotoIcon from "@material-ui/icons/Photo";
import YouTubeIcon from "@material-ui/icons/YouTube";
import CreateIcon from "@material-ui/icons/Create";
import EventIcon from "@material-ui/icons/Event";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import Card from "./Card";

function Feed() {
  const [texts, setexts] = useState("");
  console.log(texts);
  return (
    <div className={styles.feed}>
      <div className={styles.feed__storyContainer}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
      <div className={styles.feed__inputContainer}>
        <form className={styles.feed__formContainer}>
          <CreateIcon className={styles.feed__iconSearch} />
          <input
            className={styles.feed__input}
            type="text"
            placeholder="Whats's the lastest?"
            value={texts}
            onChange={(e) => setexts(e.target.value)}
          />
        </form>
        <div className={styles.feed__iconsContainer}>
          <div className={styles.feed__icons}>
            <PhotoIcon className={styles.feed__photo} />
            <p>Photo</p>
          </div>
          <div className={styles.feed__icons}>
            <YouTubeIcon className={styles.feed__video} />
            <p>Video</p>
          </div>
          <div className={styles.feed__icons}>
            <EventIcon className={styles.feed__event} />
            <p>Events</p>
          </div>
        </div>
      </div>
      <div className={styles.feed__cardContainer}>
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Feed;
