import React from 'react'
import Link from 'next/link'

import Image from 'next/image'
import banner from  '../../public/banner-guias.png'
import events from '../../public/events.png'
import guia from '../../public/guia.png'
import recruit from '../../public/recruit.webp'
import mastercook from'../../public/mastercook.webp'


export default function Guia() {
  return (
    <>
        <h1>Guia</h1>
        <div className="container">
            <main>
                <Image src={banner} alt="Banner" id="banner"/>
                <div className="cards">
                <Link href="mastercook">
                    <div className="card-guia">
                        <Image src={mastercook} alt="mastercook"/>
                        <h1>Desafio Limitado: Chef Loco</h1>
                        <p></p>
                    </div>
                </Link>
                </div>
            </main>
            <div className="lateral">
            <Link href="calendario">
            <div className="card">
              <Image src={events} alt="Calendario"/>
              <p>Calendario</p>
            </div>
            </Link>
            <Link href="">
              <div className="card">
                <Image src={recruit} alt="Reclutamiento"/>
                <p>Reclutamiento</p>
              </div>
            </Link>
            <Link href="guia">            
              <div className="card">
                <Image src={guia} alt="Guia"/>
                <p>Guia</p>
              </div>
            </Link>
            </div>
        </div>
    </>
  )
}
