import React from 'react'
import Link from 'next/link'

import Image from 'next/image'
import banner from  '../../public/banner-guias.png'
import events from '../../public/events.png'
import guia from '../../public/guia.png'
import recruit from '../../public/recruit.webp'
import mastercook from'../../public/mastercook.webp'


export default function Mastercook() {
  return (
    <>
        <h1>Guia</h1>
        <div className="container">
            <main>
                <Image src={banner} alt="Banner" id="banner"/>
                <div className="news">
                <h1>Desafio Limitado: Chef Loco (Hasta 06/01/23)</h1>
            <p>Como pasar todas las etapas de chef loco sin y com caballera de la rosa desafío limitado maestro cocinero ramos</p>
            <Image src={mastercook}/>
            <h2>Etapa 1</h2>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/6ipM4Yhaadg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <h2>Etapa 2</h2>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/-QBmabmayx8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/9tnN0aIOUiw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <h2>Etapa 3</h2>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/OcspZRMfpS8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
