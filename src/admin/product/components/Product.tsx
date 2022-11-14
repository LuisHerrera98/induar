import React from 'react'

const Product = ({name, price, category, image } : any) => {
  return (
    <div>
        <p> {name} </p>
        <p> {price} </p>
        <p> {category} </p>
        <img src={image} alt="" />
    </div>
  )
}

export default Product