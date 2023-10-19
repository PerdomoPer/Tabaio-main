import './Contato.css'
import LinkNav from './../linknav/LinkNav'

export function Contato(){
  return(
    <>
    <nav>
        <ul>
          <li>
            <LinkNav url="/" texto='Home'/>
          </li>
          <li>
            <LinkNav url="/noticias" texto='Noticias'/>
          </li>
          <li>
            <LinkNav url="/sobre" texto='Sobre'/>
          </li>
          <li className='ultimo'>
            <LinkNav url="/contato" texto='Contato'/>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Contato