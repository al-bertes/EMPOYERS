import "./employees-list-item.css";
import cn from "classnames";

function EmployeesListItem({
  name,
  salary,
  onDelete,
  increase,
  isFavorite,
  toggleStatus,
  changeSalary,
}) {
  const classes = cn("list-group-item d-flex justify-content-between", {
    increase: increase,
    like: isFavorite,
  });

  return (
    <li className={classes}>
      <span
        className="list-group-item-label"
        onClick={toggleStatus}
        data-toggle="isFavorite"
      >
        {name}
      </span>
      <input
        type="text"
        className="list-group-item-input"
        onChange={changeSalary}
        defaultValue={salary + "$"}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn-cookie btn-sm "
          onClick={toggleStatus}
          data-toggle="increase"
        >
          <i className="fas fa-cookie"></i>
        </button>
        <button onClick={onDelete} type="button" className="btn-trash btn-sm ">
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
}

export default EmployeesListItem;
