import Card from "../Card";
import CardPlaceholder from "../CardPlaceholder";

function List({ list, setList, filter }) {
  function filtrateList(target) {
    let filterList = [...list];
    if (target === "Todos") {
      return filterList;
    } else {
      return filterList.filter((transaction) => {
        return transaction.type === target;
      });
    }
  }
  return (
    <ul>
      {list.length === 0 ? (
        <>
          <CardPlaceholder />
          <CardPlaceholder />
          <CardPlaceholder />
        </>
      ) : (
        filtrateList(filter).map((transaction) => {
          return (
            <Card transaction={transaction} list={list} setList={setList} />
          );
        })
      )}
    </ul>
  );
}

export default List;
