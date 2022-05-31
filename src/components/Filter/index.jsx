import "./style.css";

function Filter({ text, filter, filterTarget, setFilterTarget }) {
  function changeFilterTarget(value) {
    return setFilterTarget(value);
  }

  return (
    <button
      className="button button-tag"
      onClick={() => changeFilterTarget(filter)}
    >
      {text}
    </button>
  );
}

export default Filter;
