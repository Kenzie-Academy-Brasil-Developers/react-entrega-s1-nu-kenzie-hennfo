import "./style.css";
import { coinConvertion } from "../TotalMoney";
import TrashIcon from "../../img/trashcan.png";

function Card({ transaction, list, setList }) {
  function removeTransaction() {
    return setList(
      list.filter((card) => {
        return card !== transaction;
      })
    );
  }

  const className = `card ${transaction.type.toLowerCase()}`;
  return (
    <li className={className}>
      <h3>{transaction.description}</h3>
      <div className="price-button-display" onClick={removeTransaction}>
        <span>{coinConvertion(transaction.value)}</span>
        <button className="button button-trash">
          <img src={TrashIcon} alt="trash-icon" />
        </button>
      </div>
      <small>{transaction.type}</small>
    </li>
  );
}

export default Card;
