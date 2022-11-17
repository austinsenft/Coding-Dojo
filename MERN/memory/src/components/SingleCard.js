import './SingleCard.css'

export default function SingleCard( {card, handleChoice, flipped, disabled}) {
    const handleClick = () => {
        // only when the card is enabled will my handleChoice fire
        // prevents spam clicking on cards which messes up logic
        if (!disabled) {
            handleChoice(card)
        }
    }

    return (
        
            <div className="card">
                <div className={flipped ? "flipped" : ""}>
                    <img className="front" src={card.src} alt="card front" />
                    <img 
                    className="back"
                    src="/img/HuntersMark.png" 
                    onClick={handleClick} 
                    alt="card back" 
                    />
                </div>
            </div>
        
    )
}

