import React,{Component} from "react";



class SearchBar extends React.Component{
    state={checked:false,input:""}

    handleChange=(event)=>{
        const {name,value} = event.target;

        if(name == "input"){

            this.setState({input:value})

            this.props.SearchProduct(value);

        }


        if(name == "checked"){

        this.props.Checked(!this.state.checked)
        this.setState((state)=>({checked:!state.checked})) 
        
        }
       
        

    }

    render(){

    return(<div>

        <input type="text" value={this.state.input} onChange={this.handleChange} name="input"/><br></br>
         <input type="checkbox"  id="stockCheck" checked={this.state.checked} onChange={this.handleChange} name="checked"/>
        <label for="stockCheck">Only Show Products in Stock</label><br></br>

    </div>) 
    }
}

export default SearchBar;