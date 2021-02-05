import React from 'react'
import styles from "../../styles/Widgets.module.css";

import SearchIcon from '@material-ui/icons/Search';
// import WidgetsTrends from './WidgetsTrends';

function Widgets() {
    return (
        <div className={styles.widgets}>
            <div className={styles.widgets__container}>
                <div className={styles.widgets__inputs}>
                    <SearchIcon className={styles.widgets__icon}/>
                    <input className={styles.widgets__input} placeholder="Search Twitter"/>
                </div>
                <div className={styles.widgets__trends}>
                    {/* <WidgetsTrends ranking="1" title="NBA" retweets="614k"/>
                    <WidgetsTrends ranking="1" title="NBA" retweets="614k"/>
                    <WidgetsTrends ranking="1" title="NBA" retweets="614k"/>
                    <WidgetsTrends ranking="1" title="NBA" retweets="614k"/>
                    <WidgetsTrends ranking="1" title="NBA" retweets="614k"/>
                    <WidgetsTrends ranking="1" title="NBA" retweets="614k"/> */}
                </div>
               
            </div>
        </div>
    )
}

export default Widgets
