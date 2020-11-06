import React,{Component} from "react";
import './App.css';
import SearchBar from "./searchbar";
import ProductTable from "./productTable";

class FilterableProductTable extends React.Component{

  state={checked:false,input:""}

  Checked=(checkboxStatus)=>{

      this.setState({checked:checkboxStatus})


  }
  SearchProduct=(searchValue)=>{

    this.setState({input:searchValue})


  }




  render(){
    const products = [
      {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
      {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
      {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
      {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
      {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
      {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
    ];

    let displayProducts;

    if(this.state.checked){

      displayProducts=products.filter(elm => elm.stocked)

    }else{


      displayProducts=products;

    }

    if(this.state.input != ""){

      displayProducts=products.filter(elm => elm.name.includes(this.state.input.toLowerCase()) || elm.name.includes(this.state.input.toUpperCase()))

    }

    if(this.state.checked && this.state.input != ""){

      displayProducts=products.filter(elm => elm.stocked);

      displayProducts=displayProducts.filter(elm => elm.name.includes(this.state.input.toLowerCase()) || elm.name.includes(this.state.input.toUpperCase()))



    }

    return(<div>


      <SearchBar Checked={this.Checked} SearchProduct={this.SearchProduct}/>
      <ProductTable products={displayProducts}/>
      
    </div>)
  }


}


export default FilterableProductTable;
