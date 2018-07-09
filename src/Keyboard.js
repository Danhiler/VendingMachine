import React, {Component} from 'react';
import * as $ from 'jquery';

import './Keyboard.css';
//import {ClientApi} from "./ClientApi";

class Keyboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            screenText: 0


        }
        this.keys = ['A', 1, 2, 3, 'B', 4, 5, 6, 'C', 7, 8, 9]

    }

    componentDidMount(){
        document.querySelector(".keysDiv").addEventListener("click", (e) => {

            this.setState((prevstate) => {
                const exsistChar = prevstate.screenText
                const newChar = e.target.value

                if(isNaN(Number(newChar)))
                return {screenText: newChar}

                if(isNaN(Number(exsistChar))) {
                    const productID =  exsistChar + newChar
                    this.purchaseProduct(productID)
                    return {screenText: productID}
                }
            })


    })

}

render()
{
    return (<div className="userKeyboard">
            <div className="screen">{this.state.screenText}</div>
            <div className="keysDiv">
                {this.printKeys()}
            </div>

        </div>
    );
}

printKeys = () => {

    return this.keys.map((key, index) => {
        return (<input type="button" className="key" value={key} key={"inp" + index}/>)
    })

}

    paintProduct(productID) {
        $('.product[data-id="'+productID+'"]').addClass('productSelected');

    }

    purchaseProduct(productID) {
        this.paintProduct(productID)
        $('.key').attr('disabled', 'disabled');
        setTimeout(() => {
            $('.key').prop("disabled", false);
            $('.product[data-id="'+productID+'"]').removeClass('productSelected')
            // ClientApi.purchaseProduct({productId:productID})
            this.setState({screenText: 0})
        }, 3000)
    }
}

export default Keyboard;
