import React from 'react'
import { useSelector } from "react-redux"
import {CategoriesWrapper ,CategoriesTitle, CategoriasContainer} from "./CategoriesStlyes"
// import { categories } from '../../data/Categories'
import Categorie from './Categorie'

const Categories = () => {

const {categories} = useSelector((state) => state.categories)

return (
    <>
        <CategoriesWrapper>
            <CategoriesTitle>
                <h2>CATEGORIAS</h2>
                <span></span>
            </CategoriesTitle>
            <CategoriasContainer>
                
                {
                    categories.map((category) => {
                        return <Categorie key={category.id} {...category} />
                    })
                }

            </CategoriasContainer>
        </CategoriesWrapper>

    </>
)
}

export default Categories