import React from 'react'
import Link from 'next/link'

export const Header = () => {
    return (
        <nav>
            <div className="logo">
                <Link href="/"><img src="/istan-theme/logo-white.png" alt="Coderistan Logo"/></Link>
            </div>
            <ul>
                <li><Link href="/">Startseite</Link></li>
                <li><Link href="/articles">Artikel</Link></li>
                <li><Link href="/about">Über uns</Link></li>
                <li><Link href="/contact">Kontakt</Link></li>
            </ul>
        </nav>

    )
}

export default Header