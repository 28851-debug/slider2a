import { useState } from 'react'
import './App.css'
import iphone1 from './assets/sued-alien-1.avif'
import iphone2 from './assets/sued-alien-2.avif'
import iphone3 from './assets/sued-alien-3.avif'
import LogoPuma from './assets/logo-puma-branco.png'
import LogoInsta from './assets/instagram.svg'
import LogoDiscord from './assets/discord.svg'
import LogoWhats from './assets/whatsapp.svg'
import Slider1 from './assets/slider1.jpg'
import Slider2 from './assets/slider2.jpg'
import Slider3 from './assets/slider3.jpg'
import Slider4 from './assets/slider4.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay} from 'swiper/modules'
import 'swiper/css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <header>
          {/* Aqui fica o SLIDER */}  
          <Swiper
          modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            className='mySwiper'
          >
            <SwiperSlide>
              <img src={Slider1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slider2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slider3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slider4} alt="" />
            </SwiperSlide>
          
          
          </Swiper>
        </header>
        <section className="produtos">
          
          {/* Card 1 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={iphone1} alt="" className="img-card"/>
              <h2>iPhone 17 Pro</h2>
              <p className="desc">O iPhone 17 apresenta design futurista com tela OLED avançada e performance turbo graças ao chip A17 Bionic. Além disso, traz câmeras aprimoradas para fotos profissionais e recursos de IA inovadores.</p>
              <p className="classificacao"> <span>★ ★ ★ ★ ☆</span> (1979)</p>
              <p className="preco">R$ 11.499,99</p>
              <p className="off">- 5%</p>
            </div>
          </a>

          {/* Card 2 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={iphone2} alt="" className="img-card"/>
              <h2>AirPods Pro 3</h2>
              <p className="desc">Os AirPods Pro 3 trazem cancelamento ativo de ruído aprimorado e áudio espacial envolvente. Com design confortável e resistência à água, oferecem até 6 horas de música com uma única carga.
              </p>
              <p className="classificacao"> <span>★ ★ ★ ★ ☆</span> (979)</p>
              <p className="preco">R$ 1.499,99</p>
              <p className="off">- 5%</p>
            </div>
          </a>

          {/* Card 3 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={iphone3} alt="" className="img-card"/>
              <h2>iPhone 16</h2>
              <p className="desc">O iPhone 16 oferece desempenho poderoso com o chip A16 Bionic e uma tela Super Retina XDR mais brilhante. Também aprimora a experiência fotográfica com câmeras inteligentes e bateria de longa duração.
              </p>
              <p className="classificacao"> <span>★ ★ ★ ★ ☆</span> (1879)</p>
              <p className="preco">R$ 6.799,99</p>
              <p className="off">- 5%</p>
            </div>
          </a>

        </section>
        <section className="destaque">

          <iframe src="https://www.youtube.com/embed/_-AS5DtDeqs?autoplay=1&mute=1&controls=0&loop=1&playlist=_-AS5DtDeqs&modestbranding=1&showinfo=0" frameborder="0" allow="autoplay; fullscreen"></iframe>

        </section>

        <footer>

          <img src={LogoPuma} alt="" className="logo-footer" />

          <div className="social-footer">
            <div className="icon-social">
              <a href="https://www.instagram.com/pumabrasil/" target="_blank">
                <img src={LogoInsta} alt="" className="instagram" />
              </a>
            </div>
            <div className="icon-social">
              <a href="https://discord.com/invite/puma" target="_blank">
                <img src={LogoDiscord} alt="" className="discord" />
              </a>
            </div>
            <div className="icon-social">
              <a href="https://web.whatsapp.com/" target="_blank">
                <img src={LogoWhats} alt="" className="whatsapp" />
              </a>
            </div>
          </div>

          <p className="txt-footer">
            IPHONE LTDA CNPJ 05.406.034/0023-00 Inscrição Estadual 278.205.224.119 Endereço: Rua Passadena 104 - Parque Industrial, Cotia - SP CEP: 06715864.
          </p>

        </footer>
      </main>
    </>
  )
}

export default App
