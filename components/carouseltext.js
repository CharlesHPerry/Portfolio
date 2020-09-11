import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function CarouselText(props) {
    return (
        <div className={styles.cartext }>
            <p>{props.text}</p>
        </div>
    )
}