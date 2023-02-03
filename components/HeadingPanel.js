import styles from '@/styles/Panels.module.scss'
import Image from 'next/image'

export const HeadingPanel = () => {
    return <div className={`${styles.Panel} ${styles.Panel__heading}`}>
        <h1>Wszystkie promocje streetwearowe w jednym miejscu — Promly</h1>
        <div className={styles.Panel__heading__buttons}>
            <a href='#' alt='Download Promly on Android'>
                <img src='play-store-badge.svg' alt='Play Store' />
            </a>
            <a href='#' alt='Download Promly on iOS' >
                <img src='app-store-badge.svg' alt='App Store' className={styles['Panel__heading__buttons--disabled']} />
            </a>

        </div>
        <span style={{ fontFamily: "Inter", color: 'rgba(255, 255, 255, 0.5)', fontSize: "0.7rem", marginTop: -20 }}>*Aplikacja na App Store obecnie nie jest dostępna</span>
        <div className={styles.Panel__heading__rating}>
            <Image src="star.svg" width={16} height={16} />
            <div>
                <span className={styles.Panel__heading__rating__heading}>4,5 Gwiazdek</span><br />
                <span className={styles.Panel__heading__rating__description}>na podstawie opinii z Google Play</span>
            </div>
        </div>
    </div >
}