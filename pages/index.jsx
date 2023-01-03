import Image from 'next/image'
import banner from  '../public/banner.png'
import events from '../public/events.png'
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
              <Image src={events} alt="Banner"/>
              <p>Calendario</p>
            </div>
          </Link>
        </div>
      </div>


    </>
  )
}

export default Home