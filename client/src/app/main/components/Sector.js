import React from 'react'
import { Sidebar } from 'app/main/components'

import SectorCompaniesTable from './SectorCompaniesTable'
import CompanySearchBar from './CompanySearchBar'


class Sector extends React.Component {
    constructor(props) {
    super(props);

    //  this.state.products = [];
    this.state = {};
    this.state.filterText = "";
    this.state.products = [
      {
        id: 1,
        category: 'Sporting Goods',
        price: '49.99',
        qty: 12,
        name: 'football'
      }, {
        id: 2,
        category: 'Sporting Goods',
        price: '9.99',
        qty: 15,
        name: 'baseball'
      }, {
        id: 3,
        category: 'Sporting Goods',
        price: '29.99',
        qty: 14,
        name: 'basketball'
      }, {
        id: 4,
        category: 'Electronics',
        price: '99.99',
        qty: 34,
        name: 'iPod Touch'
      }, {
        id: 5,
        category: 'Electronics',
        price: '399.99',
        qty: 12,
        name: 'iPhone 5'
      }, {
        id: 6,
        category: 'Electronics',
        price: '199.99',
        qty: 23,
        name: 'nexus 7'
      }
    ];

  }
  handleUserInput(filterText) {
    console.log('got filtertext', filterText)
    this.setState({filterText: filterText});
  };
  handleRowDel(product) {
    var index = this.state.products.indexOf(product);
    this.state.products.splice(index, 1);
    this.setState(this.state.products);
  };

  handleAddEvent(evt) {
    var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
    var product = {
      id: id,
      name: "",
      price: "",
      category: "",
      qty: 0
    }
    this.state.products.push(product);
    this.setState(this.state.products);

  }

  handleProductTable(evt) {
    var item = {
      id: evt.target.id,
      name: evt.target.name,
      value: evt.target.value
    };
    console.log(item);
    var products = this.state.products;

    var newProducts = products.map(function(product) {
      for (var key in product) {
        if (key == item.name && product.id == item.id) {
          product[key] = item.value;

        }
      }
      return product;
    });
    this.setState(newProducts);
  };

    titleCase(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    render() {
        const sectorName = this.titleCase(this.props.params.sector);
        return (
            <Sidebar>
                <p className="section-title">{sectorName} Sector</p>
                <p className="section-subitle">Pick companies</p>
                <CompanySearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)}/>
                <SectorCompaniesTable onProductTableUpdate={this.handleProductTable.bind(this)} onRowAdd={this.handleAddEvent.bind(this)} onRowDel={this.handleRowDel.bind(this)} products={this.state.products} filterText={this.state.filterText}/>
            </Sidebar>
        )
    }
}

export default Sector

