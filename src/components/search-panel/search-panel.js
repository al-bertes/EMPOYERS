import React from 'react';
import './search-panel.css';

class SearchPanel extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      searchData: ''
    }
  }
  updateSearchPanel = (e) => {
    console.log(e.target.value)
    this.props.searchEmploy(e.target.value)
  }
  render() {

    return (
        <input type="text"
                className="form-control search-input"
                placeholder="Найти сотрудника"
                onChange={this.updateSearchPanel}/>
    )
  }
}

export default SearchPanel;