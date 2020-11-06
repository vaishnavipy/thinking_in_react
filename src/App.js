import React,{Component} from "react";
import './App.css';
import SearchBar from "./searchbar";
import ProductTable from "./productTable";

class FilterableProductTable extends React.Component{



  render(){
    return(<div>

      <SearchBar />
      <ProductTable />
      
    </div>)
  }


}


export default FilterableProductTable;
