import { useState } from "react";
import { hamburgers } from "./assets/data.ts";

type HamburgerType = {
  name: string;
  rank: number;
};

function App() {
  const [selectedHamburger, setSelectedHamburger] = useState("");
  const [rank, setRank] = useState<number>();

  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedHamburger(e.target.value);
  };

  const handleOnClick = () => {
    const target = hamburgers.find(
      (hamburger: HamburgerType) => hamburger.name === selectedHamburger
    );
    if (target) setRank(target!.rank);
    if (!target) setRank(0);
  };

  return (
    <>
      <header className="header">
        <h1 className="header__title">ハンバーガーランキング</h1>
      </header>
      <main>
        <div className="main__container">
          {/* Header */}
          {/* Main */}
          <div className="form__container">
            <select value={selectedHamburger} onChange={handleOnChange}>
              <option value="---">---</option>
              {hamburgers.map((hamburger: { name: string; rank: number }) => (
                <option key={hamburger.name} value={hamburger.name}>
                  {hamburger.name}
                </option>
              ))}
            </select>

            <div className="enter_button">
              <button onClick={handleOnClick}>決定</button>
            </div>
          </div>

          {/* Main Contents */}
          <div className="ranking__area">{rank ? rank : null}</div>
        </div>
      </main>
    </>
  );
}

export default App;
