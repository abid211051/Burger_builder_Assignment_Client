import React from 'react';

const Order = props => {
    const ingredientSummary = props.order.ingredients.map(item => {
        return (
            <span style={{
                border: "1px solid grey",
                borderRadius: "5px",
                padding: "5px",
                marginRight: "10px",
            }} key={item.type}>{item.amount}x <span style={{ textTransform: "capitalize" }}>{item.type}</span></span>
        )
    })
    return (
        <div style={{
            border: "1px solid grey",
            boxShadow: "1px 1px #888888",
            borderRadius: "5px",
            padding: "20px",
            marginBottom: "10px",
        }}>
            <p>Order Number: <span
                style={
                    { color: "black", fontSize: 16, fontWeight: "600" }
                }>{props.order.id}</span></p>
            <p>Delivery Address: <span
                style={
                    { color: "black", fontWeight: "600" }
                }>{props.order.customer.deliveryAddress}</span> </p>
            <p>Payment Type: <span
                style={
                    { color: "black", fontWeight: "600" }
                }>{props.order.customer.paymentType}</span></p>
            <hr />
            {ingredientSummary}
            <hr />
            <p>Order Status: <span
                style={
                    props.order.paymentStatus !== "Paid Successfully" ?
                        { color: "orange", fontSize: 18, fontWeight: "bold" } : { color: "green", fontSize: 18, fontWeight: "bold" }
                }>{props.order.paymentStatus}</span>
            </p>
            <p>Total: <span
                style={
                    { color: "#D70F64", fontSize: 16, fontWeight: "bold" }
                }>{props.order.price} BDT</span></p>
        </div>
    )
}

export default Order;
