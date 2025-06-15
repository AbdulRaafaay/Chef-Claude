export default function Ingredients (props) {

    const IngredientsList = props.ingredients.map ((e) =>
        <li key={e}>{e}</li>
    )

    return (
        <>
            {IngredientsList.length>0 && <section className='ingredients'>
                    <h1>Ingredients on hand:</h1>
                    <ul>
                        {IngredientsList}
                    </ul>
                </section>}
        </>
    )
}