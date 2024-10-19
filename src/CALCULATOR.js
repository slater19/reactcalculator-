import React, { useState, useEffect } from "react";
import './CALCULATOR.css';

import Button from "./Button";
import ButtonBox from "./ButtonBox";

const Calculator = () => {

    let [res,setRes]=useState("")
    let [res2,setRes2]=useState("")
    var btn1 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    var btn2 = ['+','-','*','/']


   
    function onClickHandler(event) {
        
        let btn=event.target.innerText

        if(btn1.includes(btn)){
            setRes(res+btn);
        }
        else if(btn==='C'){
            setRes('');
            setRes2('');
        }
        else if(btn2.includes(btn)&&res!==""){
            setRes(res+btn);
        }
        else if(btn==='='&&res!==""){
            let res1=eval(res)
            setRes2(res1);
        }
    }

    // function sub(a,b){
    //     let sub=a-b;
    //     return sub;
    // }
    // function mult(a,b){
    //     let mult=a-b;
    //     return mult;
    // }
    // function div(a,b){
    //     let div=a-b;
    //     return div;
    // }
    // function add(a,b){
    //     let add=a-b;
    //     return add;
    // }
    return (
    <>
    <h1>React Calculator</h1>
    <main className="container-center">

    <div >
    <input type="text" name="change"   value={res} />
      </div>   
    {res2&&<div>{res2}</div>}
    <div className="keypad">
          <table>
            <tbody>
              <tr>
                <td>
                  <button className="button" onClick={onClickHandler}>
                    7
                  </button>
                </td>
                <td>
                  <button className="button" onClick={onClickHandler}>
                    8
                  </button>
                </td>
                <td>
                  <button className="button" onClick={onClickHandler}>
                    9
                  </button>
                </td>
                <td>
                  <button className="button" onClick={onClickHandler}>
                    +
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    className="button"
                    onClick={onClickHandler}
                  >
                    4
                  </button>
                </td>
                <td>
                  <button
                    className="button"
                    onClick={onClickHandler}
                  >
                    5
                  </button>
                </td>
                <td>
                  <button
                    className="button"
                    onClick={onClickHandler}
                  >
                    6
                  </button>
                </td>
                <td>
                  <button className="button" onClick={onClickHandler}>
                    -
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    className="button"
                    onClick={onClickHandler}
                  >
                    1
                  </button>
                </td>
                <td>
                  <button
                    className="button"
                    onClick={onClickHandler}
                  >
                    2
                  </button>
                </td>
                <td>
                  <button
                    className="button"
                    onClick={onClickHandler}
                  >
                    6
                  </button>
                </td>
                <td>
                  <button className="button" onClick={onClickHandler}>
                    -
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    className="button-black button-number"
                    onClick={onClickHandler}
                  >
                    1
                  </button>
                </td>
                <td>
                  <button
                    className="button-black button-number"
                    onClick={onClickHandler}
                  >
                    2
                  </button>
                </td>
                <td>
                  <button
                    className="button-black button-number"
                    onClick={onClickHandler}
                  >
                    3
                  </button>
                </td>
                <td>
                  <button className="button-blue" onClick={onClickHandler}>
                    *
                  </button>
                </td>
              </tr>
              <tr align="right">
                <td>
                  <button className="button-black" onClick={onClickHandler}>
                    C
                  </button>
                </td>
                <td>
                  <button
                    className="button-black button-number"
                    onClick={onClickHandler}
                  >
                    0
                  </button>
                </td>
                <td>
                  <button className="button-red" onClick={onClickHandler}>
                    =
                  </button>
                </td>
                <td>
                  <button className="button-blue" onClick={onClickHandler}>
                    /
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div> 
    </main>
      
            
    
  

</>
)
}


export default Calculator;

