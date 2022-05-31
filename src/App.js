import "./App.css";
import { useState } from "react";
import { TotalMoney } from "./components/TotalMoney";
import Form from "./components/Form";
import List from "./components/List";
import Filter from "./components/Filter";
import Homepage from "./components/Homepage";

function App() {
  const [listTransactions, setListTransactions] = useState([]);
  const [filterTarget, setFilterTarget] = useState("Todos");
  const [startPage, setStartPage] = useState(true);

  function changePage() {
    return setStartPage(startPage ? false : true);
  }

  return (
    <>
      {startPage ? (
        <Homepage
          startPage={startPage}
          setStartPage={setStartPage}
          changePage={changePage}
        />
      ) : (
        <div className="App">
          <header>
            <h1 className="logo">
              Nu <span>Kenzie</span>
            </h1>
            <button className="button button-start" onClick={changePage}>
              Início
            </button>
          </header>
          <div className="app-container">
            <aside>
              <Form
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
              />
              <div className="total-money-container">
                <div className="display-total-money">
                  <strong>Valor Total</strong>
                  <TotalMoney listTransactions={listTransactions} />
                </div>
                <small>O valor se refere ao saldo</small>
              </div>
            </aside>
            <main>
              <div className="main-header">
                <h2>Resumo Financeiro</h2>
                <nav>
                  <Filter
                    text="Todos"
                    filter="Todos"
                    filterTarget={filterTarget}
                    setFilterTarget={setFilterTarget}
                  />
                  <Filter
                    text="Entradas"
                    filter="Entrada"
                    filterTarget={filterTarget}
                    setFilterTarget={setFilterTarget}
                  />
                  <Filter
                    text="Despesas"
                    filter="Saída"
                    filterTarget={filterTarget}
                    setFilterTarget={setFilterTarget}
                  />
                </nav>
              </div>
              <List
                list={listTransactions}
                setList={setListTransactions}
                filter={filterTarget}
              />
            </main>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
