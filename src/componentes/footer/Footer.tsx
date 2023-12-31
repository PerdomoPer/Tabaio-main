import './Footer.css'
import Link from './../linknav/LinkNav'
import imagem from ".././../assets/pp.png"
import imagem1 from ".././../assets/instagram_icon_logo.png"
import imagem2 from ".././../assets/facebook.png"
import imagem3 from ".././../assets/th.png"

export function Footer(){
    return(
      <footer>
        <div>
          <img className='LogoFooter' src={imagem} alt="" />
            <div className='redes'>
              <img className='rede' src={imagem1} alt="" />
              <img className='rede' src={imagem2} alt="" />
              <img className='rede' src={imagem3} alt="" />
            </div>
        </div>
        <nav>
          <ul>
                <li> <h1>Historico Escolar</h1>
              <Link url="#" texto='Flores'/>
              <Link url="#" texto='IFMS'/>
                </li>
            </ul>
        </nav>
        <nav>
            <ul>
                <li> <h1>Conquistas</h1>
              <Link url="#" texto='Menções'/>
              <Link url="#" texto='Medalhas'/>
                </li>
            </ul>
        </nav>
        <nav>
            <ul>
                <li> <h1>Contato</h1>
              <Link url="#" texto='Telefone'/>
              <Link url="#" texto='Email'/>
                </li>
            </ul>
        </nav>
        <nav>
            <ul> <h1>Termos e Condições</h1>
                <li>
              <Link url="#" texto='Declaração de Privacidade'/>
              <Link url="#" texto='Cookie Preferences'/>
              <h6>©2023 Perdomo</h6>
                </li>
            </ul>
        </nav>
      </footer>
    )
  }

export default Footer