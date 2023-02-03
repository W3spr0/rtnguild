import Image from 'next/image'
import banner from  '../../public/banner3.png'
import events from '../../public/events.png'
import guia from '../../public/guia.png'
import recruit from '../../public/recruit.webp'
import mastercook from'../../public/mastercook.webp'
import gremios from'../../public/gremios.png'

import PostCard from '../components/PostCard';

import Link from 'next/link'

function Home({ posts }) {
  return (
    <>
      <div className="container">
        <main>
        <div>

          </div>
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
                {posts.length === 0 ? (
                <h2>No added posts</h2>
            ) : (
                <ul>
                    {posts.map((post, i) => (
                        <PostCard post={post} key={i} />
                    ))}
                </ul>
            )}
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
                <p>Guias</p>
              </div>
            </Link>
        </div>
      </div>


    </>
  )
}

export default Home


export async function getServerSideProps(ctx) {
  // get the current environment
  let dev = process.env.NODE_ENV !== 'production';
  let { DEV_URL, PROD_URL } = process.env;

  // request posts from api
  let response = await fetch(`${dev ? DEV_URL : PROD_URL}/api/posts`);
  // extract the data
  let data = await response.json();

  return {
      props: {
          posts: data['message'],
      },
  };
}