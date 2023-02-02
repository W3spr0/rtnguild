import Image from 'next/image'
import banner from  '../../public/banner3.png'
import events from '../../public/events.png'
import guia from '../../public/guia.png'
import recruit from '../../public/recruit.webp'
import mastercook from'../../public/mastercook.webp'
import gremios from'../../public/gremios.png'


import Link from 'next/link'

function Home() {
  return (
    <>
      <div className="container">
        <main>
          <Image src={banner} alt="Banner" id="banner"/>
          <div className="news">
            <h1>Sobre esta pagina</h1>
            <p className='normalFont'> Aquí encontrarás todo lo que necesitas para avanzar en el juego, desde guías de héroes hasta consejos sobre investigaciones, construcciones y composiciones de ejército. Nuestro objetivo es proporcionar a nuestros miembros toda la información y recursos necesarios para tener éxito en el juego y escalar en los rankings del reino. ¡Explora nuestra página y descubre todo lo que RTn tiene para ofrecerte!</p>
            <p className='normal'>Actualmente, nuestro gremio RTn, "Return fast 2023", es uno de los 10 mejores del reino 1231 de Lords Mobile. Este logro demuestra el compromiso y la dedicación de nuestro equipo unido y apasionado. Conseguimos en promedio 100 regalos al día, lo que refleja el poder de nuestra comunidad y nuestro espíritu de equipo. ¡Estamos emocionados de ver lo que podemos lograr en el futuro y seguir escalando los rankings del reino!</p>
            <h1>Eventos limitados()</h1>

            <div className="cards">
                <Link href="guia/mastercook">
                    <div className="card-guia">
                        <Image src={mastercook}/>
                        <h1>Desafio Limitado: Chef Loco (Inactivo)</h1>
                        <p></p>
                    </div>
                </Link>
            </div>
            <h2>Que son los eventos limitados?</h2>
            <p className='normalFont'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis fuga, atque cupiditate saepe provident quam esse porro dolorem nemo laudantium laborum aliquam, veniam voluptatibus? Illum, voluptas? Aperiam ducimus soluta voluptatum.</p>
            <Image src={gremios} className='spaccingTop imageWidth100'/>
            <h1>Eventos de gremios</h1>
            <p className='normalFont'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis fuga, atque cupiditate saepe provident quam esse porro dolorem nemo laudantium laborum aliquam, veniam voluptatibus? Illum, voluptas? Aperiam ducimus soluta voluptatum.</p>
            <h2 className='spaccingTop'>Arena dragon:</h2> 
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