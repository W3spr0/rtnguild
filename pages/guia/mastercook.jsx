import React from 'react'
import Link from 'next/link'

import Image from 'next/image'
import banner from  '../../public/banner-guias.png'
import events from '../../public/events.png'
import guia from '../../public/guia.png'
import recruit from '../../public/recruit.webp'
import mastercook from'../../public/mastercook.webp'
import mastercook1 from'../../public/mastercook-1.png'
import mastercook2 from'../../public/mastercook-2.png'
import mastercook2_2 from'../../public/mastercook-2-2.png'
import mastercook3 from'../../public/mastercook-3.png'
import mastercook3_3 from'../../public/mastercook-3-3.png'

export default function Mastercook() {
  return (
    <>
        <h1>Guia</h1>
        <div className="container">
            <main>
              <Image src={banner} alt="Banner" id="banner"/>
              <div className="news">
                <div className="sec">
                  <h1>Desafio Limitado: Chef Loco (Hasta 06/01/23)</h1>
                  <p>Como pasar todas las etapas de chef loco sin y com caballera de la rosa desafío limitado maestro cocinero ramos</p>
                </div>
                <div className="sec">
                  <h2>Etapas:</h2>
                  <ul>
                    <li><Link href="#etapa1">Etapa 1</Link></li>
                    <li><Link href="#etapa2">Etapa 2</Link></li>
                    <li><Link href="#etapa3">Etapa 3</Link></li>
                    <li><Link href="">Etapa 4</Link></li>
                    <li><Link href="">Etapa 5</Link></li>
                    <li><Link href="">Etapa 6</Link></li>
                  </ul>
                </div>
                <div id='etapa1' className="sec">
                  <h2 >Etapa 1</h2>
                  <h3>Heroes recomendados</h3>
                  <Image class="fullWidth" src={mastercook1 }/>
                  <br />
                  <ul className='list'>
                    <li>Prima Donna (Felicia)</li>
                    <li>Reina de la Nieve (Alice)</li>
                  </ul>
                </div>
                <div id='etapa2'className="sec">
                  <h2>Etapa 2</h2>
                  <h3>Heroes recomendados primera composicion:</h3>
                  <Image class="fullWidth" src={mastercook2}/><br />
                  
                  <a href="https://youtu.be/-QBmabmayx8" target="_blank" rel="noopener noreferrer">Video de la pimera composicion</a><br />
                  <ul className='list'>
                    <li>Prima Donna (Felicia)</li>
                    <li>Estafador (Chismoso)</li>
                    <li>Cuerno Nocturno (Ícaro)</li>
                  </ul>
              </div>
              <div className="sec">
                <h3>Heroes recomendados segunda composicion:</h3>
                  <Image class="fullWidth" src={mastercook2_2}/><br />
                  <a href="https://youtu.be/9tnN0aIOUiw" target="_blank" rel="noopener noreferrer">Video de la segunda composicion</a>
                  <ul className='list'>
                    <li>Prima Donna (Felicia)</li>
                    <li>Estafador (Chismoso)</li>
                    <li>Hijo de la Luz (Sparky)</li>
                  </ul>
              </div>
              <div id='etapa3' className="sec">
              <h2>Etapa 3</h2>
              <h3>Heroes recomendados primera composicion:</h3>
                  <Image class="fullWidth" src={mastercook3}/><br />
                  <a href="https://www.youtube.com/embed/OcspZRMfpS8" target="_blank" rel="noopener noreferrer">Video de la segunda composicion</a>
                  <ul className='list'>
                    <li>Prima Donna (Felicia)</li>
                    <li>Guardián (Wesley)</li>
                    <li>Escudero del mar (Lochfin)</li>
                  </ul>
              </div>
              <div className="sec">
                <h3>Heroes recomendados segunda composicion:</h3>
                  <Image class="fullWidth" src={mastercook3_3}/><br />
                  <a href="https://www.youtube.com/embed/gdSP20jN5BI" target="_blank" rel="noopener noreferrer">Video de la segunda composicion</a>
                  <ul className='list'>
                    <li>Prima Donna (Felicia)</li>
                    <li>Guardián (Wesley)</li>
                    <li>Hijo de la Luz (Sparky)</li>
                  </ul>
              </div>
            <h2>Etapa 4</h2>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/0S8ycMN5RHo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/YUMSap6Em4M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <h2>Etapa 5</h2>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/QsppFvsSAUU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <h2>Etapa 6</h2>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/U32O0qUfeZI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
