import React from 'react'
import { Table, Button } from 'react-bootstrap'
import CompanyDataRow from './CompanyDataRow'

class SectorCompaniesTable extends React.Component {

  render() {
    var onProductTableUpdate = this.props.onProductTableUpdate;
    var rowDel = this.props.onRowDel;
    var filterText = this.props.filterText;
    var product = this.props.products.map(function(product) {
      if (product.name.indexOf(filterText) === -1) {
        return;
      }
      return (<CompanyDataRow onProductTableUpdate={onProductTableUpdate} product={product} onDelEvent={rowDel.bind(this)} key={product.id}/>)
    });
    return (
      <div className="bumperTop-lg">
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Divident</th>
              <th>P/E</th>
              <th>Total Value</th>
            </tr>
          </thead>
          <tbody>
            {product}
          </tbody>
        </Table>
        <Button bsStyle="success" onClick={this.props.onRowAdd}>
            Add
        </Button>
      </div>
    );

  }

}

export default SectorCompaniesTable