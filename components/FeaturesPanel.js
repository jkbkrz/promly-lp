import styles from '@/styles/Panels.module.scss'

export const FeaturesPanel = () => {
    return <div className={`${styles.Panel} ${styles.Panel__features}`}>
        <div className={`${styles.Card} ${styles['Card--no-bottom-padding']}`}>
            <div className={styles.Card__badge}>
                Promocje
            </div>
            <h3 className={styles.Card__title}>
                Otrzymuj powiadomienia o promocjach na bieżąco
            </h3>
            <h4 className={styles.Card__subtitle}>
                Skanujemy setki stron dziennie najpopularniejszych sklepów, aby dostarczyć naszym użytkownikom wyłącznie promocje
            </h4>
            <img src='phone.png' className={styles.Card__phone}></img>
        </div>
        <div className={styles.Card}>
            <div className={styles.Card__badge}>
                Promocje
            </div>
            <h3 className={styles.Card__title}>
                W Promly są tylko promocje
            </h3>
            <h4 className={styles.Card__subtitle}>
                Promly obsługuje największe sklepy z ubraniami w polskim internecie takie jak:
            </h4>
            <div className={styles.Card__logos}>
                <span>
                    <img src='nike.svg' />
                </span>
                <span>
                    <img src='adidas.svg' />
                </span>
                <span>
                    <img src='zalando.svg' />
                </span>
                <span>
                    <img src='ws2.svg' />
                </span>
            </div>
            <div className={styles['Card__logos--text']}>
                <span>+ Zalando, Nike, Adidas, Snipes, Asos, Eastend, Footshop, Zalando, WS2</span>
            </div>
        </div>
        <div className={`${styles.Card} ${styles['Card--no-padding']}  ${styles.Card__column}`}>
            <div className={`${styles.Card__row}`}>
                <div className={styles.Card__row__image}>
                    <img src='selection.svg' />
                </div>
                <div className={styles.Card__row__content}>
                    <h3 className={styles.Card__title}>
                        W Promly są tylko promocje
                    </h3>
                    <h4 className={styles.Card__subtitle}>
                        Promly obsługuje największe sklepy z ubraniami w polskim internecie takie jak:
                    </h4>
                </div>
            </div>
            <div className={`${styles.Card__row} ${styles['Card__row--reverse']} $`}>
                <div className={styles.Card__row__content}>
                    <h3 className={styles.Card__title}>
                        W Promly są tylko promocje
                    </h3>
                    <h4 className={styles.Card__subtitle}>
                        Promly obsługuje największe sklepy z ubraniami w polskim internecie takie jak:
                    </h4>
                </div>
                <div className={`${styles.Card__row__image} ${styles['Card__row__image--reverse']}`}>
                    <img src="flash.svg"></img>
                </div>
            </div>
            <div className={`${styles.Card__row}`}>
                <div className={styles.Card__row__image}>
                    <img src='discount.svg' />
                </div>
                {/* <img rc='discount.svg' className={styles.Card__row__image} /> */}
                <div className={styles.Card__row__content}>
                    <h3 className={styles.Card__title}>
                        W Promly są tylko promocje
                    </h3>
                    <h4 className={styles.Card__subtitle}>
                        Promly obsługuje największe sklepy z ubraniami w polskim internecie takie jak:
                    </h4>
                </div>
            </div>
        </div>
        <div className={styles.Card}>
            <div className={styles.Card__badge}>
                Oszczędność
            </div>
            <h3 className={styles.Card__title}>
                Z Promly oszczędasz średnio 30-40% na jednym kupowanym produkcie
            </h3>
        </div>

        <span className={styles.Footer}>
            <a href='#' alt='Kontakt' style={{ marginRight: 10 }}>Kontakt</a>
            <a href='#' alt='Polityka prywatności'>Polityka prywatności</a>
            <br />
            © 2021 - 2023 Promly - All Rights Reserved.
        </span>
    </div>
}