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
            <Image src={mastercook} alt="mastercook"/>
            <div className="etapas">
              <div className="etapa">
                <h2>Etapa 1</h2>
                <h3>Heroes recomendados</h3>
                <ul className='list'>
                  <li>Prima Donna (Felicia)</li>
                  <li>Reina de la Nieve (Alice)</li>
                </ul>
                <Image class="fullWidth" src={mastercook1 }/>
                <br />
                <a href="https://youtu.be/6ipM4Yhaadg" target="_blank" rel="noopener noreferrer">Clique aqui para ver un video</a>
                <iframe width="80%" height="auto" src="https://www.youtube.com/embed/6ipM4Yhaadg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
              <div className="etapa">
                <h2>Etapa 2</h2>
                <h3>Heroes recomendados primera composicion:</h3>
                <ul className='list'>
                  <li>Prima Donna (Felicia)</li>
                  <li>Estafador (Chismoso)</li>
                  <li>Cuerno Nocturno (Ícaro)</li>
                </ul>
                <Image class="fullWidth" src={mastercook2}/><br />
                <a href="https://youtu.be/-QBmabmayx8" target="_blank" rel="noopener noreferrer">Video de la pimera composicion</a>
                <hr />
                <h3>Heroes recomendados segunda composicion:</h3>
                <ul className='list'>
                  <li>Prima Donna (Felicia)</li>
                  <li>Estafador (Chismoso)</li>
                  <li>Hijo de la Luz (Sparky)</li>
                </ul>
                <Image class="fullWidth" src={mastercook2_2}/><br />
                <a href="https://youtu.be/9tnN0aIOUiw" target="_blank" rel="noopener noreferrer">Video de la segunda composicion</a>
              </div>
             </div>
            <h2>Etapa 3</h2>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/OcspZRMfpS8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/gdSP20jN5BI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
