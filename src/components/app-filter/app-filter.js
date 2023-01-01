import cn from "classnames";
import "./app-filter.css";

const AppFilter = (props) => {
  const { activeBtn } = props;
  const classAll = cn("btn", {
    "btn-outline-light": activeBtn !== "all",
    "btn-light": activeBtn === "all",
  });

  const classIncr = cn("btn", {
    "btn-outline-light": activeBtn !== "incr",
    "btn-light": activeBtn === "incr",
  });

  const classMoreThen = cn("btn", {
    "btn-outline-light": activeBtn !== "moreThen",
    "btn-light": activeBtn === "moreThen",
  });
  return (
    <div className="btn-group">
      <button
        type="button"
        data-btn="all"
        onClick={(e) =>
          props.handleFilter(e.currentTarget.getAttribute("data-btn"))
        }
        className={classAll}
      >
        Все сотрудники
      </button>
      <button
        type="button"
        data-btn="incr"
        onClick={(e) =>
          props.handleFilter(e.currentTarget.getAttribute("data-btn"))
        }
        className={classIncr}
      >
        На повышение
      </button>
      <button
        type="button"
        data-btn="moreThen"
        onClick={(e) =>
          props.handleFilter(e.currentTarget.getAttribute("data-btn"))
        }
        className={classMoreThen}
      >
        З/П больше 1000$
      </button>
    </div>
  );
};

export default AppFilter;
