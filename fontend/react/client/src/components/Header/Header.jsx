import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { FaUser } from "react-icons/fa";
import "./Header.scss";
import Search from "./Search/Search";
import { ShopCont } from "../../utils/context";
import { useAuth } from "../../utils/AuthContext"; // Import useAuth để kiểm tra trạng thái đăng nhập

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [searchModal, setSearchModal] = useState(false);
    const navigate = useNavigate();
    const { cartCount } = useContext(ShopCont);
    const { isLoggedIn, logout } = useAuth(); // Lấy isLoggedIn và logout từ AuthContext

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll); // Cleanup event listener
    }, []);

    const handleLoginClick = () => {
        if (!isLoggedIn) {
            navigate("/login"); // Chuyển đến login nếu chưa đăng nhập
        } else {
            // Nếu đã đăng nhập, gọi logout
            logout();
            navigate("/"); // Quay lại trang chủ sau khi đăng xuất
        }
    };

    const handleCartClick = () => {
        navigate("/cart");
    };

    const handleCategoriesClick = () => {
        navigate("/categories");
    };

    return (
        <>
            <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
                <div className="header-content">
                    <ul className="left">
                        <li onClick={() => navigate("/")}>Home</li>
                        <li onClick={() => navigate("/about")}>About</li>
                        <li onClick={handleCategoriesClick}>Categories</li>
                    </ul>
                    <div className="center" onClick={() => navigate("/")}>
                        EGA GEAR
                    </div>
                    <div className="right">
                        <TbSearch onClick={() => setSearchModal(true)} />
                        <span onClick={handleLoginClick} className="login-icon">
                            {isLoggedIn ? (
                                <span style={{ color: "#ffffff" }}>Logout</span> // Hiển thị "Logout" nếu đã đăng nhập
                            ) : (
                                <FaUser size={20} /> // Hiển thị icon user nếu chưa đăng nhập
                            )}
                        </span>
                        <span className="cart-icon" onClick={handleCartClick}>
                            <CgShoppingCart />
                            {!!cartCount && <span>{cartCount}</span>}
                        </span>
                    </div>
                </div>
            </header>
            {searchModal && <Search setSearchModal={setSearchModal} />}
        </>
    );
};

export default Header;