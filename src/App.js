import React, { Component } from 'react';

import './App.css';
import Keyboard from "./Keyboard";

class App extends Component {
    constructor(props){
        super(props)
        this.state={
            products:[{name:"מקופלת",quantity:20,ID:"A4",price:19.99,imgUrl:"https://www.elite.co.il/areas/uploads/df670b85-7ebf-458b-bb7a-f36ee6e237a2.png"},
                {name:"כיףכף",quantity:20,ID:"B4",price:19.99,imgUrl:"https://www.elite.co.il/areas/uploads/291b6a09-87ff-42e1-89fd-6ae4f74c7a89.png"},
                {name:"במבה נוגט",quantity:20,ID:"C4",price:19.99,imgUrl:"https://www.rami-levy.co.il/files/products/big/7290100687109.jpg"},
                {name:"קנאביס",quantity:20,ID:"B2",price:19.99,imgUrl:"https://images1.calcalist.co.il/PicServer2/20122005/134296/joint183893_l.jpg"},
                {name:"שוקולוד נוגט",quantity:20,ID:"A3",price:19.99,imgUrl:"https://www.rami-levy.co.il/files/products/big/7290000170275.jpg"},
                {name:"שוקולד קרם חלב",quantity:20,ID:"A1",price:19.99,imgUrl:"https://www.rami-levy.co.il/files/products/big/7290003903955.jpg"},
            ]
        }
    }
  render() {
    return (
      <div className="App">
          <div className="OuterMachine">
             <div className="productsWindow">
                 {this.printProducts()}
             </div>
              <div className="machineSide">
                <Keyboard/>

              </div>

          </div>
      </div>
    );
  }

    printProducts=()=> {
        return this.state.products.map((product,index)=>{
            return (<div className="product" key={"div"+index} data-id={product.ID} >
                <img src={product.imgUrl} className="productImg" key={"img"+index} />
                <div className="productText" key={"txt"+index} >{product.name} - {product.ID} </div>
            </div>)
        })

    }
}

export default App;
