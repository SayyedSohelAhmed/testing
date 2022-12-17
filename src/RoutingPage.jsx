import react,{useEffect, useReducer, useState} from 'react'
import {Routes, Route, Link } from "react-router-dom";
import {createContext} from "react"
import { Reducer } from './State/Reducer';
import Products from './component/Products';
import ProductDetails from './component/ProductDetails';
import { fetchApi } from './Api/api';

export const navigateData=createContext()

const RoutingPage=()=>{
  // console.log(productData)
  const initialState= {product:[],productId:null,price:0,qty:0}
  const [selector,dispatch]=useReducer(Reducer,initialState)
  // console.log("selector==>",selector);
  useEffect(() => {
    fetchApi()
        .then((res)=> res.json())
        .then((res)=>{
          dispatch({type:"STORE_DATA",payload:res})
          //  console.log(res);
        }).catch((err)=>{
           
        })
  }, []);

  return(
    <>
    <Routes>
    <Route path='/' element={<Products selector={selector} dispatch={dispatch} />}/>
    <Route path='/productDetails' element={<ProductDetails  selector={selector} dispatch={dispatch} /> }/>
    </Routes>
    </>
  )
}
export default RoutingPage;
