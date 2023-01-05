import Image from 'next/image'
import banner from  '../public/banner.png'
import events from '../public/events.png'
import guia from '../public/guia.png'
import recruit from '../public/recruit.webp'
import mastercook from'../public/mastercook.webp'


import Link from 'next/link'

function Home() {
  return (
    <>
      <div className="container">
        <main>
          <Image src={banner} alt="Banner" id="banner"/>
          <div className="news">
            <h1>Arena dragon:</h1>
            <p>El evento sucedio el dia 30/12  a las 21:00(GMT-3) hasta 22:00(GMT-3) nuestro rival fue el gremio [W’R]Warrior Red del reino #1203 com mas de 500M de poder e 23 miembros participando. El gremio ganador fue el nuestro com una ventaja de 20k de pontos y com 19 miembros participando.</p>
            <div className="cards">
                <Link href="guia/mastercook">

                        <Image src={mastercook}/>
                        <h1>Desafio Limitado: Chef Loco</h1>
                        <p></p>

                </Link>
                </div>
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

export default Home