import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {
  const employes = [
    {name: 'Albertik', salary: 8000, id: 1, increase: true, isFavorite: false},
    {name: 'Halera', salary: 2, id: 2, increase: false, isFavorite: false},
    {name: 'Ki', salary: 122, id: 3, increase: true, isFavorite: true}
  ];
  return (
    <div className="app">
      <AppInfo />
      <div className="search-panel">
        <SearchPanel/>
        <AppFilter/>
      </div>
      <EmployeesList employes={employes}/>
      <EmployeesAddForm/>
    </div>
  );
}

export default App;
