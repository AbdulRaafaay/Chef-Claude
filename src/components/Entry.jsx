import './Entry.css'
import React from 'react'
import Ingredients from './Ingredients'
import RecipeGet from './RecipeGet'
import SuggestedRecipe from './SuggestedRecipe'
import { getRecipeFromMistral } from '../ai'

export default function Entry () {
    const [ingredients,setIngredients] = React.useState([])
    const [finalRecipe,setRecipe] = React.useState("")

    function addItem(formData) {
        const item = formData.get("item")
        setIngredients(prev =>
            [...prev,item]
        )
    }

    async function getRecipe () {
        const responseFromAi = await getRecipeFromMistral(ingredients)
        setRecipe(responseFromAi)
    }

    return (
        <>
            <main className='mainContent'>
            <form action={addItem} className='formMain'>
                    <input type='text' placeholder='e.g oregano' name='item'></input>
                    <button>+ Add Ingredient</button>
                </form>

                <Ingredients
                    ingredients={ingredients}
                />

                <RecipeGet 
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                />

                {finalRecipe && <SuggestedRecipe 
                    finalRecipe={finalRecipe}
                />}


            </main>
        </>
    )
}