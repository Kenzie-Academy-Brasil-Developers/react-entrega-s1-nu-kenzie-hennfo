import Placeholder from "../../img/card-placeholder.svg";
import "./style.css";

function CardPlaceholder() {
  return (
    <li>
      <figure>
        <img className="placeholder" src={Placeholder} alt="empty card" />
      </figure>
    </li>
  );
}

export default CardPlaceholder;
