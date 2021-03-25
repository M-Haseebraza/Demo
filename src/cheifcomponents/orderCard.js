import React from 'react';
import "./order.css";
export default function OrderCard() {
    return (
        <div className='order-card' >
            <h1>Order 1</h1>
            <div className="order-items" >
                <h2>Table No:1</h2>
                <div className="table-info">
                    <div className="left">
                        <h3>Pizza</h3>
                        <h4>
                            Cheese Pizza
                        </h4>
                    </div>
                    <div className="right">
                        <div className="pizza-qty">
                            <h3> Qty</h3>
                            <h4>2</h4>
                        </div>
                        <div className='pizza-size'>
                            <h3>Size</h3>
                            <h4>Small</h4>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="table-info">
                    <div className="left">
                        <h3>Burgers</h3>
                        <h4>Zinger</h4>
                    </div>
                    <div className="right">
                        <div className="pizza-qty">
                            <h3> Qty</h3>
                            <h4>2</h4>
                        </div>

                    </div>
                </div>
                <hr></hr>
                <div className="table-info">
                    <div className="left">
                        <h3>Cold Drinks</h3>
                        <h4>
                            Coke
                        </h4>
                    </div>
                    <div className="right">
                        <div className="pizza-qty">
                            <h3> Qty</h3>
                            <h4>2</h4>
                        </div>
                        <div className='pizza-size'>
                            <h3>Size</h3>
                            <h4>Liter</h4>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}