import Head from 'next/head';
import Link from 'next/link';
import {useEffect} from 'react';
import styles from '../styles/Home.module.css';
import {NavData} from './navdata';
import {ExternalLinks} from './externallinks';
import ListAltIcon from '@material-ui/icons/ListAlt';

export default function Navbar() {


    return (
        <div className={styles.sidebar}>
            <ul className={styles.sidebar_list}>
                {NavData.map((val, key) => {
                    return (
                        <li key={key} onClick={() => {window.location.href = val.link}} className={styles.nav_item}>
                            <div className={styles.navicon}>
                                {val.Icon}
                            </div>
                            <div className={styles.navtitle}>
                                {val.title}
                            </div>
                        </li>
                    )
                })}
                {ExternalLinks.map((val, key) => {
                    return (
                        <li key={key} className={styles.nav_item}>
                            <div className={styles.navicon}>
                                {val.Icon}
                            </div>
                            <div className={styles.navtitle}>
                                <a href={val.link} target="_blank">{val.title}</a>
                            </div>
                        </li>
                    )
                })}
                <li className={styles.nav_item}>
                    <div className={styles.navicon}>
                        <ListAltIcon/>
                    </div>
                    <div className={styles.navtitle}>
                        <a href="/resume.pdf" target="_blank">My Resume</a>
                    </div>
                </li>
            </ul>
        </div>
    )
}