import { useState , useEffect } from "react";
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
  //每次一回合(目前回合)的狀態
  const [turns, setTurns] = useState(0);
  //選擇一和選擇二的狀態，一開始值為空
  const [chioceOne, setChioceOne] = useState(null);
  const [chioceTwo, setChioceTwo] = useState(null);

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

  // console.log(cards, turns);
  const handleChoice = (card) => {
    chioceOne? setChioceTwo(card):setChioceOne(card);
  };

  //當選擇一或二倍更新時
  useEffect(()=>{
    if(chioceOne && chioceTwo ){
      if (chioceOne.src === chioceTwo.src){
        console.log('those card are same');
        resetTurn();
      }else{
        console.log('those card not same');
        resetTurn();
      }
    }
  },[chioceOne, chioceTwo])

  //重置回合
  const resetTurn = () => {
    setChioceOne(null);
    setChioceTwo(null);
    setTurns(prevTurn => prevTurn+1);
  }

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard 
            key={card.id} 
            card={card} 
            handleChoice={handleChoice} 

          />
        ))}
      </div>
    </div>
  );
}

export default App;
