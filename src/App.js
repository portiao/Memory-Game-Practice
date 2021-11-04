import { useState } from "react";
import "./App.css";
import SingleCard from "./components/SingleCard";

const cardImages = [
  { src: "/images/helmet-1.png" },
  { src: "/images/potion-1.png" },
  { src: "/images/ring-1.png" },
  { src: "/images/scroll-1.png" },
  { src: "/images/shield-1.png" },
  { src: "/images/sword-1.png" },
];

function App() {
  //卡片洗牌的狀態
  const [cards, setCards] = useState([]);
  //每次一回合後歸零的狀態
  const [turns, setTurns] = useState(0);

  //洗牌 比0.5大或小
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      // 把隨機排序的陣列map(),陣列裡面的東西叫card
      .map((card) => ({
        ...card,
        id: Math.random(),
      }));
      setCards(shuffledCards);
      setTurns(0);
  };

  console.log(cards, turns);

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      
      <div className="card-grid">
        {cards.map(card => (
          <SingleCard key={card.id} card={card}/>
        ))}
      </div>
    </div>
  );
}

export default App;
