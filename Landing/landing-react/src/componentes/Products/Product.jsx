import React from 'react'
import {ProductCard, PartsPrice, Buttons, ButtonsContainer, ButtonsProducts} from "./ProductsStyles"

import {AiFillCreditCard} from "react-icons/ai"
import {BsBagFill} from "react-icons/bs"
import {AiFillEye} from "react-icons/ai"

const Product = ({img, nombre, precio}) => {
  return (
    <ProductCard>
        <img src={img} alt="" />
        <p>{nombre}</p>
        <h3>${precio}</h3>
        <PartsPrice>
            <AiFillCreditCard/>
            Hasta 6 cuotas sin interés
        </PartsPrice>
        <ButtonsContainer>
            <ButtonsProducts>
                <BsBagFill/> Comprar
            </ButtonsProducts>
            <ButtonsProducts>
                <AiFillEye/> Ver mas
            </ButtonsProducts>
        </ButtonsContainer>

    </ProductCard>
  )
}

export default Product