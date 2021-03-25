import React from 'react';
import './cheifPanel.css';
import Header from "./cheifcomponents/header";
import OrderCard from './cheifcomponents/orderCard';
export default function CheifPanel(){
    return(
        <div className='cheif'>
         <Header/>
         <OrderCard/>
         <OrderCard/>
         </div>
    )
}