import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({employes}) => {

    return (
        <ul className="app-list list-group">
          {employes.map((item) =>  <EmployeesListItem key={item.id} {...item}/>)}
        </ul>
    )
}

export default EmployeesList;

