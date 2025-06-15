import ReactMarkdown from 'react-markdown'

export default function SuggestedRecipe (props) {
    return (
        <> 
            <section className="suggestedRecipe">
                <ReactMarkdown>{props.finalRecipe}</ReactMarkdown>
            </section>
        </>
    ) 
}