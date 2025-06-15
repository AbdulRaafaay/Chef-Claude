export default function RecipeGet (props) {
    return (
        <>
            {props.ingredients.length>3 && <div className="recipe-container">
                    <div>
                        <p className='toptext'>Ready for a recipe?</p>
                        <p className='bottomtext'>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={props.getRecipe}>Get a recipe</button>
                </div>}
        </>
    )
}