import './headerAdmin.css'
import { Link } from "react-router-dom";


export const HeaderAdmin = () => {
  
  return (
    <header>
      <div className='header-top'>
        <p className="header-top__info">ADMIN</p>
      </div>
      <nav className='nav'>
        <ul className="nav__box">
          <Link className='box__item__link' to="/"><li className="box__item">INICIO</li></Link>
          <Link className='box__item__link' to="/product/create"><li className="box__item">CREAR PRODUCTO</li></Link>
          <Link className='box__item__link' to="/category/create"><li className="box__item">CREAR CATEGORIA</li></Link>
        </ul>
      </nav>
    </header>
  )
}
