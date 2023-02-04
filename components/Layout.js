import Image from "next/image"
import Link from "next/link"

export const Layout = ({ children }) => {
    return (
        <>
            <nav>
                <div className="row">
                    <Link href="/" style={{ lineHeight: 0 }}>
                        <Image src="promly.svg" width={73} height={21} alt="Promly" />
                    </Link>
                    <Link href='/contact' alt='Kontakt' className='--disable-mobile'>Kontakt</Link>
                    <Link href='/privacy-policy' alt='Polityka prywatności' className='--disable-mobile'>Polityka prywatności</Link>
                </div>
                <div className="row">
                    <Image src="instagram.svg" width={16} height={16} alt="Promly Instagram" />
                    <Image src="tiktok.svg" width={16} height={16} alt="Promly TikTok" />
                </div>
            </nav>
            <main>{children}</main>
        </>
    )
}