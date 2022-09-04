import './header.css'
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
        <div className='header-top'>
          <p className="header-top__info">ENVÍO GRATIS COMPRA SUPERIOR A $15.000</p>
        </div>
        <nav className='nav'>
          <ul className="nav__box">
            <Link className='box__item__link' to="/"><li className ="box__item">INICIO</li></Link>
            <Link className='box__item__link' to="#"><li className ="box__item">PRODUCTOS</li></Link>
            <Link className='box__item__link' to="/product/create"><li className ="box__item">CONTACTO</li></Link>
            <Link className='box__item__link' to="/product/create"><li className ="box__item">POLÍTICA DE DEVOLUCIÓN</li></Link>
          </ul>
        </nav>
    </header>
  )
}
