import './App.css'
import { useEffect, useState } from 'react'
import SingleCard from './components/SingleCard'



const cardImages = [
  { "src": "/img/Ludwig.png", matched: false },
  { "src": "/img/ClericBeast.png", matched: false },
  { "src": "/img/rom-the-vacuous-spider.png", matched: false },
  { "src": "/img/Gerhman.png", matched: false },
  { "src": "/img/EbrietasCosmos.png", matched: false },
  { "src": "/img/BloodStarvedBeast.png", matched: false }
]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)

  //shuffle cards 
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

    setCards(shuffledCards)
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(0)
  }

  // handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  // compare two selected cards
  useEffect(() => {
    
    if (choiceOne && choiceTwo) {
      setDisabled(true)
      if (choiceOne.src === choiceTwo.src) {
        
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true }
            } else {
              return card
            }
          })
        })
        resetTurn()
      } else {

        //Allow time for users to see mismatched cards before flipping back over
        setTimeout(() => resetTurn(), 1000)
      }
    }
  }, [choiceOne, choiceTwo])


  // console.log(cards)

  // reset choices & increase turn 
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
  }


  //start game automatically
  useEffect(() => {
    shuffleCards()
  }, [])

  return (
    
    <div className="App" s>
      <h1>Bloodborne Memory</h1>

      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map(card => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
      <p>Turns:  {turns}</p>
    </div>
  );
}

export default App