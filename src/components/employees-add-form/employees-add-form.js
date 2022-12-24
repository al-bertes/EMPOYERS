import React from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        salary: ''
      }
    }
  }
  handleInformEmpoyers = (e) => this.setState({[e.target.name]: e.target.value});
  submitForm = (e) => {
    e.preventDefault();
    console.log(this.state)
  }
  render() {
    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form className="add-form d-flex" onSubmit={this.submitForm}>
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Как его зовут?"
            name="name"
            onChange={this.handleInformEmpoyers}/>
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="З/П в $?"
            name="salary"
            onChange={this.handleInformEmpoyers}/>
          <button type="submit" className="btn btn-outline-light">Добавить</button>
        </form>
      </div>
   )
  }
}

export default EmployeesAddForm;