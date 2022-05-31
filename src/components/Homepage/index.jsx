import "./style.css";
import CardImage from "../../img/homepage-card.svg";

function Homepage({ startPage, setStartPage, changePage }) {
  return (
    <div className="homepage-container">
      <div className="main">
        <section className="homepage-get-start">
          <h1 className="logo">
            Nu <span>Kenzie</span>
          </h1>
          <p>Centralize o controle das suas finanças</p>
          <small>de forma rápida e segura </small>
          <button className="button" onClick={changePage}>
            Iniciar
          </button>
        </section>
        <figure>
          <img src={CardImage} alt="" />
        </figure>
      </div>
    </div>
  );
}

export default Homepage;
