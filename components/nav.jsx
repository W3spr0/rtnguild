import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import logo from '../public/logo.png'
function Nav() {
  return (
    <>
    <nav>
        <Image src={logo}alt="Logo fst" id='logo-img'/>
        <ul>
            <li><Link href="oi">Calendario</Link></li>
            <li><Link href="oi">Reclutamiento</Link></li>
            <li><Link href="oi">Guia</Link></li>
        </ul>
        
    </nav>
    </>
  )
}

export default Nav