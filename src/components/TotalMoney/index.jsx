import "./style.css"

export function coinConvertion(number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  }).format(number);
}

export function TotalMoney({ listTransactions }) {
  return (
    <span className="price">
      {coinConvertion(
        listTransactions.reduce((acc, curr) => {
          let value = Number(curr.value);
          if (!isNaN(value)) {
            if (curr.type === "Saída") {
              return acc + -value;
            }
            return acc + value;
          }
          return 0;
        }, 0)
      )}
    </span>
  );
}
