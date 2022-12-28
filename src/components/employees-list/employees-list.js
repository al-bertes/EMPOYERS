import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({employes, onDelete, toggleStatus, changeSalary}) => {

    return (
        <ul className="app-list list-group">
          {employes.map((item) =>  {
            return <EmployeesListItem
                    key={item.id}
                    onDelete={() =>  onDelete(item.id)}
                    toggleStatus={(e) => toggleStatus(item.id, e.currentTarget.getAttribute('data-toggle'))}
                    changeSalary={(e) => changeSalary(item.id, e.currentTarget.value)}
                    {...item}/>
          }
          )}
        </ul>
    )
}

export default EmployeesList;

