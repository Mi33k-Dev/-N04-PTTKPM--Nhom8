import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import { loadStripe } from "@stripe/stripe-js";
// import { makePaymentRequest } from "../../utils/api";
import PRODUCTS from '../../mockData';
import { ShopCont } from '../../utils/context';
import "./Cart.scss";
import CardItem from '../Cart/CartItem/CartItem';

const Cart = () => {
    const { cartItems, setCartItems } = useContext(ShopCont);
    const navigate = useNavigate();

    const getTotalCartAmount = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const totalAmount = getTotalCartAmount();

    const incrementQuantity = (id) => {
        setCartItems(
            cartItems.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decrementQuantity = (id) => {
        setCartItems(
            cartItems.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    const handleRemove = (id) => {
        setCartItems(cartItems.filter((item) => item.id !== id));
    };

    return (
        <div className='cart'>
            {cartItems.length > 0 ? (
                <>
                    <h1>Your Cart Items</h1>
                    <table className="cart-table">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item) => (
                                <tr key={item.id}>
                                    <td><img src={item.image} alt={item.name} width="50" /></td>
                                    <td>{item.name}</td>
                                    <td>${item.price}</td>
                                    <td>
                                        <button onClick={() => decrementQuantity(item.id)}>-</button>
                                        {item.quantity}
                                        <button onClick={() => incrementQuantity(item.id)}>+</button>
                                    </td>
                                    <td>
                                        <MdClose onClick={() => handleRemove(item.id)} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className='checkout'>
                        <p>Total: ${totalAmount.toFixed(2)}</p>
                        <button onClick={() => navigate("/")}>Continue Shopping</button>
                        <button>Checkout</button>
                    </div>
                </>
            ) : (
                <h1>Your Cart is Empty :(</h1>
            )}
        </div>
    );
};

export default Cart;