import React from "react";
import { MdClose } from "react-icons/md";
import "./CartItem.scss";

const CardItem = ({ item }) => {
    const { id, name, image, price, quantity } = item;

    return (
        <div className="cart-item">
            <img src={image} alt={name} />
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
                <span className="quantity">Quantity: {quantity}</span>
            </div>
            <MdClose className="remove-icon" />
        </div>
    );
};

export default CardItem;