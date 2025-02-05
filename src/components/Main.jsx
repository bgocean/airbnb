import Card from "./Card/Card";
import cardsData from "./../data/data.json";

const Main = () => {
  return (
    <main className="main">
      <div className="container">
        <div className="main__cards">
          <Card />
        </div>
      </div>
    </main>
  );
};

export default Main;
