import Image from 'next/image'
import banner from  '../public/banner.png'
import events from '../public/events.png'
import guia from '../public/guia.png'
import recruit from '../public/recruit.webp'
import Link from 'next/link'

function Home() {
  return (
    <>
      <div className="container">
        <main order>
          <Image src={banner} alt="Banner"/>
        </main>
        <div className="lateral">
          <Link href="calendario">
            <div className="card">
              <Image src={events} alt="Calendario"/>
              <p>Calendario</p>
            </div>
            <div className="card">
              <Image src={recruit} alt="Reclutamiento"/>
              <p>Reclutamiento</p>
            </div>
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