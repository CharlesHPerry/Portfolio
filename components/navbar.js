import Head from 'next/head';
import Link from 'next/link';
import {useState} from 'react';
import styles from '../styles/Home.module.css';
import {NavData} from './navdata';
import {ExternalLinks} from './externallinks';
import ListAltIcon from '@material-ui/icons/ListAlt';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

export default function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => {
        setSidebar(!sidebar);
        console.log("Clicked button")
        console.log(sidebar)
    }
    return (
        <>
            <div className={styles.nav_bar}>
                <div>
                    <h4 className={styles.nav_text}>Charles Perry</h4>
                    <p className={styles.nav_text}>Full Stack Developer</p>
                </div>
                <div className={styles.menu_bars} onClick={showSidebar}>
                    <MenuIcon/>
                </div>
            </div>
            <div className={sidebar ? styles.sidebar : styles.hidden}>
                <ul className={styles.sidebar_list}>
                    <div className={styles.close_icon} onClick={showSidebar}>
                        <CloseIcon/>
                    </div>
                    {NavData.map((val, key) => {
                        return (
                            <li key={key} onClick={() => {window.location.href = val.link}} className={styles.nav_item}>
                                <div onClick={showSidebar} className={styles.nav_item}>
                                    <div className={styles.navicon}>
                                        {val.Icon}
                                    </div>
                                    <div className={styles.navtitle}>
                                        {val.title}
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                    {ExternalLinks.map((val, key) => {
                        return (
                            <li key={key} className={styles.nav_item} onClick={showSidebar}>
                                <div className={styles.navicon}>
                                    {val.Icon}
                                </div>
                                <div className={styles.navtitle}>
                                    <a href={val.link} target="_blank" className={styles.link_txt}>{val.title}</a>
                                </div>
                            </li>
                        )
                    })}
                    <li className={styles.nav_item} onClick={showSidebar}>
                        <div className={styles.navicon}>
                            <ListAltIcon/>
                        </div>
                        <div className={styles.navtitle}>
                            <a href="/resume.pdf" target="_blank" className={styles.link_txt}>My Resume</a>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}