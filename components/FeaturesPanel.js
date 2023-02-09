import styles from '@/styles/Panels.module.scss'
import Link from 'next/link'

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
                Gdy tylko pojawią się nowe ciekawe promocje w aplikacji, otrzymasz o nich błyskawicznie powiadomienie
            </h4>
            <img src='phone.png' className={styles.Card__phone}></img>
        </div>
        <div className={styles.Card}>
            <div className={styles.Card__badge}>
                Dostępność
            </div>
            <h3 className={styles.Card__title}>
                Popularne sklepy w Promly
            </h3>
            <h4 className={styles.Card__subtitle}>
                Promly obsługuje największe sklepy z odzieżą w polskim internecie, a m.in:
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
            {/* <div className={styles['Card__logos--text']}>
                <span>+ Zalando, Nike, Adidas, Snipes, Asos, Eastend, Footshop, Zalando, WS2</span>
            </div> */}
        </div>
        <div className={`${styles.Card} ${styles['Card--no-padding']}  ${styles.Card__column}`}>
            <div className={`${styles.Card__row}`}>
                <div className={styles.Card__row__image}>
                    <img src='selection.svg' />
                </div>
                <div className={styles.Card__row__content}>
                    <h3 className={styles.Card__title}>
                        Wysoka selekcja ofert
                    </h3>
                    <h4 className={styles.Card__subtitle}>
                        W trosce o jakość promocji w aplikacji, wszystkie produkty są analizowane i wybierane są te najbardziej okazyjne
                    </h4>
                </div>
            </div>
            <div className={`${styles.Card__row} ${styles['Card__row--reverse']} $`}>
                <div className={styles.Card__row__content}>
                    <h3 className={styles.Card__title}>
                        Promocje na bieżąco
                    </h3>
                    <h4 className={styles.Card__subtitle}>
                        Wszystkie sklepy są codziennie skanowane, aby dostarczyć jak najbardziej świeże oferty
                    </h4>
                </div>
                <div className={`${styles.Card__row__image} ${styles['Card__row__image--reverse']}`}>
                    <img src="flash.svg"></img>
                </div>
            </div>
            <div className={`${styles.Card__row}`}>
                <div className={styles.Card__row__image}>
                    <img src='globe.svg' />
                </div>
                {/* <img rc='discount.svg' className={styles.Card__row__image} /> */}
                <div className={styles.Card__row__content}>
                    <h3 className={styles.Card__title}>
                        Streetwearowy styl
                    </h3>
                    <h4 className={styles.Card__subtitle}>
                        W Promly znajdują się m.in. promocje odzieży w stylu streetwearowym
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
            <Link href='/contact' alt='Kontakt' style={{ marginRight: 10 }}>
                Kontakt
            </Link>
            <Link href='/contact' alt='Polityka prywatności' style={{ marginRight: 10 }}>
                Polityka prywatności
            </Link>
            <br />
            © 2021 - 2023 Promly - All Rights Reserved.
        </span>
    </div>
}

