import React from 'react'
import { FormControl } from 'react-bootstrap'

class CompanySearchBar extends React.Component {
  handleChange(event) {
    this.props.onUserInput(event.target.value);
  }
  render() {
    return (
        <FormControl
            className="bumperTop-lg"
            type="text"
            placeholder="Search..."
            value={this.props.filterText}
            ref="filterTextInput"
            onChange={this.handleChange.bind(this)}/>
    );
  }
}

export default CompanySearchBar