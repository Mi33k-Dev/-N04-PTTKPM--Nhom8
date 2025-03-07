import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../utils/AuthContext";
import axios from "axios"; // Import axios để gửi request
import "./CheckOut.scss";

const Checkout = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const { isLoggedIn, token } = useAuth(); // Lấy token để gửi trong header

    console.log("Checkout - isLoggedIn:", isLoggedIn); // Debug trạng thái đăng nhập

    const totalMoney = state?.totalMoney || 0;

    // State để lưu thông tin từ form
    const [formData, setFormData] = useState({
        userId: "", // Sẽ lấy từ token hoặc AuthContext sau (tạm thời để trống)
        fullName: "",
        email: "",
        phoneNumber: "",
        address: "",
        note: "",
        totalMoney: totalMoney,
        shippingAddress: "",
        shippingDate: "",
        paymentMethod: "COD", // Mặc định là COD
    });

    // Xử lý thay đổi trong input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Xử lý đặt hàng
    const handlePlaceOrder = async () => {
        if (!isLoggedIn) {
            navigate("/login");
            return;
        }

        try {
            // Gửi request đến backend
            const response = await axios.post(
                "http://localhost:8088/api/orders",
                {
                    ...formData,
                    userId: 1,
                    totalMoney: parseFloat(totalMoney), 
                    shippingDate: formData.shippingDate || new Date().toISOString().split("T")[0],
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            console.log("Order placed successfully:", response.data);
            alert("Đặt hàng thành công!");
            navigate("/");
        } catch (error) {
            console.error("Error placing order:", error);
            alert("Đặt hàng thất bại. Vui lòng thử lại!");
        }
    };

    if (!isLoggedIn) {
        return (
            <div>
                Vui lòng đăng nhập để tiếp tục thanh toán.{" "}
                <button onClick={() => navigate("/login")}>Đăng nhập</button>
            </div>
        );
    }

    return (
        <div className="checkout-container">
            <div className="checkout-left">
                <h2>Thông tin hàng</h2>
                <div className="form-group">
                    <label>Họ và tên *</label>
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Họ và tên"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email *</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Số điện thoại *</label>
                    <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="Số điện thoại"
                        required
                        minLength={5}
                    />
                </div>
                <div className="form-group">
                    <label>Địa chỉ *</label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Địa chỉ"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Địa chỉ giao hàng *</label>
                    <input
                        type="text"
                        name="shippingAddress"
                        value={formData.shippingAddress}
                        onChange={handleChange}
                        placeholder="Địa chỉ giao hàng"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Ngày giao hàng (tùy chọn)</label>
                    <input
                        type="date"
                        name="shippingDate"
                        value={formData.shippingDate}
                        onChange={handleChange}
                        placeholder="Ngày giao hàng"
                    />
                </div>
                <div className="form-group">
                    <label>Ghi chú (tùy chọn)</label>
                    <input
                        type="text"
                        name="note"
                        value={formData.note}
                        onChange={handleChange}
                        placeholder="Ghi chú"
                    />
                </div>
            </div>
            <div className="checkout-right">
                <h2>Đơn hàng (1 sản phẩm)</h2>
                <div className="order-item">
                    <span>Tạm tính</span>
                    <span>{totalMoney.toLocaleString("vi-VN")}đ</span>
                </div>
                <div className="order-item total">
                    <span>Tổng cộng</span>
                    <span>{totalMoney.toLocaleString("vi-VN")}đ</span>
                </div>
                <button className="place-order-button" onClick={handlePlaceOrder}>
                    Đặt hàng
                </button>
                <div className="payment-method">
                    <input
                        type="radio"
                        id="cod"
                        name="payment"
                        value="COD"
                        checked={formData.paymentMethod === "COD"}
                        onChange={handleChange}
                    />
                    <label htmlFor="cod">Thanh toán khi giao hàng (COD)</label>
                </div>
            </div>
        </div>
    );
};

export default Checkout;