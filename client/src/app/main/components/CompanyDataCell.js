import React from 'react'
import { FormControl } from 'react-bootstrap'

class CompanyDataCell extends React.Component {

  render() {
    return (
      <td>
        <FormControl
            type="text"
            name={this.props.cellData.type}
            id={this.props.cellData.id}
            value={this.props.cellData.value}
            onChange={this.props.onProductTableUpdate}/>
      </td>
    );

  }
}

export default CompanyDataCell;
