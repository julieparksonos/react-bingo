import "./App.css";

function App() {
  const freeSpace = "Adjusted EBITDA";
  const spaces = [
    "Tariffs",
    "Top line growth",
    "Fiscal year",
    "Year-over-year",
    "Profitability",
    "Balance sheet",
    "Share repurchases",
    "Provide more color",
    "Ikea partnership",
    "New demographic",
    "Reaching an inflection",
    "Home theater",
    "Number one driver",
    "Google litigation",
    "License agreements",
    "Gross margins",
    "Ramping inventory levels",
    "I have a follow-up",
    "Supply constrained",
    "Op-ex investments",
    "Direct channel",
    "Price point expansion",
    "Your line is open",
    "Investing aggressively",
    "Relative to expectations",
    "Too early to talk about that",
    "Channel mix",
    "Challenging supply chain",
    "Golden age of audio",
    "Hollywood at home",
    "Expand into new categories",
    "Strong demand",
    "As we look ahead",
    "Sustainable growth",
    "Huge opportunity ahead of us",
    "Restructuring expenses",
    "Long-term growth initiatives",
    "Higher marketing expenses",
    "Free cash flow",
    "Stronger than anticipated demand",
    "Tariff refunds",
    "Updated guidance",
    "Number of homes penetrated",
    "Not something we disclose",
    "Inflation",
    "Headwinds",
    "Impact of inflation",
    "Competitive market",
    "Included in guidance",
    "Sonos Radio HD",
    "Software meets audio",
    "Deliver new experiences",
    "We don’t disclose that",
    "Sorry I was on mute",
  ];
  const bingoList = document.getElementById("list");
  const totalSpaces = spaces.length;
  const spacesUsed = [];

  const addRow = (space) => {
    const bingoItem = document.createElement("li");
    bingoItem.innerText = space;
    bingoItem.addEventListener("click", toggleSpace);
    bingoList.appendChild(bingoItem);
  };

  const randomNumber = () => {
    return Math.floor(Math.random() * Math.floor(totalSpaces));
  };
  const getUnusedSpace = () => {
    let space = randomNumber();
    while (spacesUsed.includes(space)) {
      space = randomNumber();
    }
    spacesUsed.push(space);
    return spaces[space];
  };

  const toggleSpace = (e) => {
    const thisCell = e.target;

    thisCell.classList.toggle("clicked");
  };

  const totalBuckets = 25;
  let print = 1;

  while (print++ <= totalBuckets) {
    addRow(print === 14 ? freeSpace : getUnusedSpace());
  }

  return (
    <div className="App">
      <h1>Bingo</h1>
      <ul id="list"></ul>
    </div>
  );
}

export default App;
