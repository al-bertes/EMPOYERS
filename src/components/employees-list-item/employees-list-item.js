import './employees-list-item.css';
import cn from 'classnames';
import React from 'react';

class EmployeesListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      increase: this.props.increase,
      isFavorite: this.props.isFavorite
    }
  }
  makeIncrease = () => {
    this.setState(({increase}) => ({
      increase: !increase
    }))
  }
  makeFavorite = () => {
    this.setState(({isFavorite}) => ({
      isFavorite: !isFavorite
    }))
  }
  render() {
  const classes = cn("list-group-item d-flex justify-content-between", {
    "increase": this.state.increase,
    "like": this.state.isFavorite
  });
  const { name, salary } = this.props;
  return (

    <li className={classes}>
      <span className="list-group-item-label" onClick={this.makeFavorite}>{name}</span>
      <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
      <div className='d-flex justify-content-center align-items-center'>
        <button type="button" className="btn-cookie btn-sm "  onClick={this.makeIncrease}>
          <i className="fas fa-cookie"></i>
        </button>
        <button type="button" className="btn-trash btn-sm ">
          <i className="fas fa-trash"></i>
        </button>
          <i className="fas fa-star"></i>
      </div>
    </li>
    )
  }
}

export default EmployeesListItem;