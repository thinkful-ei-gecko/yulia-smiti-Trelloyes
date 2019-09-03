import Card from '/Card';

function List(props) {
    return (
        <section class="List">
            <header class="List-header">
                <h2>{props.header}</h2>
            </header>
            <div class="List-cards">
               {props.cards.map( card =>
               <Card title={card.title} content={card.content} />)}
            </div>
        </section>
    )
}