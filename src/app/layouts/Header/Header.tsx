import './header.css'
import { Link } from "react-router-dom";
import downArrow from '../../images/down-arrow.png'
import admin from '../../images/admin.png'
import { useState } from 'react';

export const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(false)
  const dropdownTrue = () => {
    setOpenDropdown(true)
  }

  const dropdownFalse = () => {
    setOpenDropdown(false)
  }

  return (
    <header>
      <div className='header-top'>
        <p className="header-top__info">ENVÍO GRATIS COMPRA SUPERIOR A $15.000</p>
      </div>
      <nav className='nav'>
        <ul className="nav__box">
          <Link className='box__item__link' to="/"><li className="box__item">INICIO</li></Link>
          <Link onMouseLeave={dropdownFalse} onMouseEnter={dropdownTrue} className='box__item__link box__item-product' to="#">
            <li className="box__item box__item2 ">PRODUCTOS</li>
            <img src={downArrow} alt="v" />
          </Link>
          <ul onMouseEnter={dropdownTrue} onMouseLeave={dropdownFalse} className={openDropdown ? "dropdown open" : "dropdown close"}>
            <li>JEANS</li>
            <li>CAMISAS</li>
            <li>CAMPERAS</li>
            <li>REMERAS</li>
          </ul>
          <Link className='box__item__link' to="#"><li className="box__item">CONTACTO</li></Link>
          <Link className='box__item__link' to="#"><li className="box__item">POLÍTICA DE DEVOLUCIÓN</li></Link>
          <Link className='box__item__link box__item-product admin' to="/admin/home">
            <img src={admin} alt="v" />
            <li className="box__item box__item2 ">ADMIN</li>
          </Link>
        </ul>
      </nav>
    </header>
  )
}
