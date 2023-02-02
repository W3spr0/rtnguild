import React from 'react'
import Link from 'next/link'

function Nav() {
  return (
    <>
    <nav>
    <h1><Link href="/" className='link-logo'>RTn</Link></h1>
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