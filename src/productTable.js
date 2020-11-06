import React,{Component} from "react";

function TableHead(){

    return(<thead>
        <tr>
            <td>Name</td>
            <td>Price</td>
        </tr>
    </thead>)


}

const noStock={color:"red"}

function ProductRow(props){

    const {name,price,stock} = props;

    if(stock){

    return(<tr>
        <td>{name}</td>
        <td>{price}</td>
    </tr>) 
    }else{

        return(<tr>
            <td style={noStock}>{name}</td>
            <td>{price}</td>
        </tr>) 


    }


}

function CategoryRow(props){
    const {category} = props;

    

    return(<tr><strong>{category}</strong></tr>)

}







function ProductTable(props){

    const {products} = props;

    let category ="";
    let rows=[];

    products.forEach(function(elm){

        if(elm.category !== category ){

            rows.push(<CategoryRow category={elm.category} key={elm.category}/>)
            category = elm.category;

        }
        rows.push(<ProductRow name={elm.name} price={elm.price} stock={elm.stocked} key={elm.name}/>)



    })


    return(<div>
        <table>
        <TableHead />
        <tbody>
        
        {rows}
       
        </tbody>
        </table>
    </div>)
}

export default ProductTable;