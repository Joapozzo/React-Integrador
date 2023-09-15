import React, { useEffect, useState } from 'react'
import {ProductsWrapper, ProductsContainer, ButtonsMainContainer, Buttons } from "./ProductsStyles"
import Product from './Product'
import {useSelector} from "react-redux"
import {selectCategory} from "../../redux/categories/categoriesSlices"
import { INITIAL_LIMIT } from '../../utils/constants'

const Products = () => {


const [limit, setLimit] = useState(INITIAL_LIMIT)

const totalProducts = useSelector((state) => state.products.totalProducts)

//consumimos products del redux - storage
let products = useSelector((state) => state.products.products)

const {selectedCategory} = useSelector((state) => state.categories)

if (selectedCategory) {
    products = { [selectedCategory]: products[selectedCategory] }
}

useEffect(() => {
    setLimit(INITIAL_LIMIT)
}, [selectedCategory])

return (
    <ProductsWrapper>
        <ProductsContainer>
            {
                //object.entries para poder hacer un array de arrays con un objeto, para poder mapearlo, ya que no se puede mapear directamente un obj
                Object.entries(products).map(([, foods]) => {
                    return foods.map((food) => {
                        if (limit >= food.id || selectedCategory) {
                            return <Product {...food} key={food.id} />
                        }
                        return null //retorno null en caso contrario, asi no me da undefined
                    })
                })
            }
        </ProductsContainer>
        {
        !selectedCategory && <ButtonsMainContainer>
            <Buttons
                onClick={() => setLimit((prevLimit) => prevLimit + INITIAL_LIMIT )}
                disabled={INITIAL_LIMIT === limit}>
                Ver mas
            </Buttons>
            <Buttons
                onClick={() => setLimit((prevLimit) => prevLimit - INITIAL_LIMIT )}
                disabled={totalProducts <= limit}>
                Ver menos
            </Buttons>
        </ButtonsMainContainer>
        }
    </ProductsWrapper>
)
}

export default Products