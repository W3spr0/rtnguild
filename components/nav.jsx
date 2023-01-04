import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import logo from '../public/logo.png'
function Nav() {
  return (
    <>
    <nav>
        <Link href="/" className='link-logo'><Image src={logo}alt="Logo fst" id='logo-img'/></Link>
        <ul>
            <li><Link href="oi">Calendario</Link></li>
            <li><Link href="oi">Reclutamiento</Link></li>
            <li><Link href="guia">Guia</Link></li>
        </ul>
        
    </nav>
    </>
  )
}

export default Nav