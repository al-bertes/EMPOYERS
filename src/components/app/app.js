import React from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import uniqueId from "lodash/uniqueId";
import "./app.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employes: [
        {
          name: "Albert Savchenko",
          salary: 1000,
          id: uniqueId(),
          increase: false,
          isFavorite: false,
        },
        {
          name: "Noy Potopov",
          salary: 1500,
          id: uniqueId(),
          increase: false,
          isFavorite: false,
        },
        {
          name: "Leonel Messi",
          salary: 400,
          id: uniqueId(),
          increase: true,
          isFavorite: true,
        },
        {
          name: "Papa Karlo",
          salary: 150,
          id: uniqueId(),
          increase: true,
          isFavorite: false,
        },
        {
          name: "Mamont Sibirsky",
          salary: 0,
          id: uniqueId(),
          increase: false,
          isFavorite: false,
        },
      ],
      searchData: "",
      activeFilter: "all",
    };
  }
  handleDelete = (idItem) => {
    this.setState(({ employes }) => {
      const newData = employes.filter(({ id }) => id !== idItem);
      return { employes: newData };
    });
    console.log(idItem);
  };
  handleAddEmploy = (e) => {
    e.preventDefault();

    this.setState(({ employes }) => {
      const formData = Object.fromEntries(new FormData(e.target));
      const newData = {
        ...formData,
        id: uniqueId(),
        increase: false,
        isFavorite: false,
      };
      document.querySelector("form").reset();
      return { employes: [...employes, newData] };
    });
  };

  toggleStatus = (id, target) => {
    this.setState(({ employes }) => ({
      employes: employes.map((item) => {
        if (id == item.id) {
          return { ...item, [target]: !item[target] };
        }
        return item;
      }),
    }));
  };

  searchEmploy = (e) => {
    this.setState(({ searchData }) => {
      return { searchData: e };
    });
  };

  generateData = () => {
    if (this.state.searchData.length > 0) {
      return this.state.employes.filter(({ name }) => {
        const nameNormolize = name
          .toLowerCase()
          .slice(0, this.state.searchData.length);

        if (name.includes(" ")) {
          const surName = name
            .split(" ")[1]
            .slice(0, this.state.searchData.length);
          return (
            surName.toLocaleLowerCase() ===
            this.state.searchData.toLocaleLowerCase()
          );
        }
        return nameNormolize === this.state.searchData.toLocaleLowerCase();
      });
    }
    if (this.state.activeFilter === "all") {
      return this.state.employes;
    }
    if (this.state.activeFilter === "incr") {
      return this.state.employes.filter(({ increase }) => increase);
    }
    if (this.state.activeFilter === "moreThen") {
      return this.state.employes.filter(({ salary }) => salary > 1000);
    }
  };

  handleFilter = (target) => {
    this.setState({ activeFilter: target });
    console.log(this.state);
  };
  changeSalary = (id, value) => {
    this.setState(({ employes }) => ({
      employes: employes.map((item) => {
        if (id == item.id) {
          return { ...item, salary: Number(value.slice(0, value.length - 1)) };
        }

        return item;
      }),
    }));
  };
  render() {
    return (
      <div className="app">
        <AppInfo
          increaseNumber={
            this.state.employes.filter((item) => item.increase).length
          }
          countEmpoyes={this.state.employes.length}
        />
        <div className="search-panel">
          <SearchPanel searchEmploy={this.searchEmploy} />
          <AppFilter
            activeBtn={this.state.activeFilter}
            handleFilter={this.handleFilter}
          />
        </div>
        <EmployeesList
          employes={this.generateData()}
          onDelete={this.handleDelete}
          toggleStatus={this.toggleStatus}
          changeSalary={this.changeSalary}
        />
        <EmployeesAddForm addEmploy={(e) => this.handleAddEmploy(e)} />
      </div>
    );
  }
}

export default App;
