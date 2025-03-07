import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterest, FaCartPlus } from "react-icons/fa";
import "./SingleProduct.scss";
import { ShopCont } from "../../utils/context";
import { useAuth } from "../../utils/AuthContext";

const SingleProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { cartItems, setCartItems } = useContext(ShopCont);
    const { isLoggedIn } = useAuth();

    console.log("SingleProduct - isLoggedIn:", isLoggedIn); // Debug trạng thái đăng nhập

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:8088/api/products/${id}`);
                setProduct(response.data);
                setLoading(false);
            } catch (err) {
                setError("Không thể tải thông tin sản phẩm");
                setLoading(false);
                console.error("Lỗi khi lấy sản phẩm:", err);
            }
        };

        fetchProduct();
    }, [id]);

    const totalMoney = product ? quantity * product.price : 0;

    const increment = () => setQuantity(quantity + 1);
    const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

    const handleAddToCart = () => {
        if (!product) return;
        const existingItem = cartItems.find((item) => item.id === product.id);
        if (existingItem) {
            setCartItems(
                cartItems.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                )
            );
        } else {
            setCartItems([...cartItems, { ...product, quantity }]);
        }
        navigate("/cart");
    };

    const handleCheckout = () => {
        console.log("handleCheckout - isLoggedIn:", isLoggedIn); // Debug trước khi điều hướng
        if (!isLoggedIn) {
            navigate("/login");
        } else {
            navigate("/checkout", { state: { totalMoney } });
        }
    };

    if (loading) return <div>Đang tải sản phẩm...</div>;
    if (error) return <div>{error}</div>;
    if (!product) return <div>Sản phẩm không tồn tại</div>;

    return (
        <div className="single-product-main-content">
            <div className="layout">
                <div className="single-product-page">
                    <div className="left">
                        <img
                            src={`http://localhost:8088/uploads/${product.thumbnail}`}
                            alt={product.name}
                            style={{
                                width: "600px",
                                height: "600px",
                                objectFit: "contain",
                            }}
                            onError={(e) => {
                                e.target.src = "path/to/default-image.jpg";
                            }}
                        />
                    </div>
                    <div className="right">
                        <span className="name">{product.name}</span>
                        <span className="price">{product.price.toLocaleString("vi-VN")} đ</span>
                        <span className="desc">{product.description}</span>

                        <div className="cart-buttons">
                            <div className="quantity-buttons">
                                <span onClick={decrement}>-</span>
                                <span>{quantity}</span>
                                <span onClick={increment}>+</span>
                            </div>
                            <button className="add-to-cart-button" onClick={handleAddToCart}>
                                <FaCartPlus size={20} />
                                ADD TO CART
                            </button>
                        </div>

                        <span className="divider" />
                        <div className="info-item">
                            <span className="text-bold">
                                Total Money: <span>{totalMoney.toLocaleString("vi-VN")} đ</span>
                            </span>
                        </div>

                        <button className="checkout-button" onClick={handleCheckout}>
                            Thanh toán
                        </button>
                    </div>
                </div>
                <RelatedProducts />
            </div>
        </div>
    );
};

export default SingleProduct;