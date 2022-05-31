import { useState } from "react";
import "./style.css";

function Form({ listTransactions, setListTransactions }) {
  const [transaction, setTransaction] = useState({});
  const [selected, setSelected] = useState("Entrada");

  function handleTransaction(newData) {
    return setTransaction({ ...transaction, ...newData });
  }

  function createNewTransaction(transaction) {
    handleTransaction({ value: Number(transaction["value"]) });
    if (selected === "Saída") {
      handleTransaction({ value: -transaction["value"] });
    }
    setListTransactions([
      ...listTransactions,
      { ...transaction, ...{ type: selected } },
    ]);
    console.log(transaction);
    changeSelected("Entrada");
    return setTransaction({});
  }

  function changeSelected(value) {
    return setSelected(value);
  }

  return (
    <form className="set-form" onSubmit={(event) => event.preventDefault()}>
      <label htmlFor="description">Descriçao</label>
      <input
        id="description"
        type="text"
        placeholder="Descrição da transação"
        onChange={(event) =>
          handleTransaction({ description: event.target.value })
        }
        required={true}
      />
      <label htmlFor="Value">Valor</label>
      <input
        className="value-input"
        id="value"
        type="number"
        placeholder="Insira o valor da transação"
        onChange={(event) => handleTransaction({ value: event.target.value })}
        required={true}
      />
      <label htmlFor="options">Tipo de valor</label>
      <select
        className="options"
        id="options"
        name="transaction-method"
        onChange={(event) => changeSelected(event.target.value)}
        // defaultValue="Entrada"
      >
        <option value="Entrada">Entrada</option>
        <option value="Saída">Saída</option>
      </select>
      <button
        className="button button-form"
        type="reset"
        onClick={() => {
          createNewTransaction(transaction);
        }}
      >
        Inserir Valor
      </button>
    </form>
  );
}

export default Form;
