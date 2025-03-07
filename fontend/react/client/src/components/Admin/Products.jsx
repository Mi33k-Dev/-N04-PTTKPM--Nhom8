import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Products.scss";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [limit] = useState(5);
    const [totalPages, setTotalPages] = useState(1);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const THUMBNAIL_SIZE = { width: "50px", height: "50px" };

    useEffect(() => {
        fetchProducts();
    }, [page]);

    const fetchProducts = async () => {
        try {
            const token = localStorage.getItem("token");
            console.log("Token sent to GET /api/products:", token);
            if (!token) {
                setError("Vui lòng đăng nhập admin trước");
                navigate("/admin/login");
                return;
            }

            const response = await axios.get("http://localhost:8088/api/products", {
                params: {
                    page: page - 1,
                    limit: limit,
                },
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
            });

            const { products: productList, totalPages: pages } = response.data;
            console.log("API Response:", response.data);
            setProducts(productList || []);
            setTotalPages(pages || 1);
            setError(null);
        } catch (error) {
            setError(error.response?.data || "Lỗi khi lấy danh sách sản phẩm");
            console.error("Error fetching products:", error);
        }
    };

    const handleAddProduct = () => {
        navigate("/admin/add-product");
    };

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setPage(newPage);
        }
    };

    const handleUploadImages = (productId) => {
        navigate(`/admin/upload-product-images/${productId}`);
    };

    const handleShowDetails = (productId) => {
        navigate(`/admin/product-details/${productId}`);
    };

    const handleUpdateProduct = (productId) => {
        navigate(`/admin/update-product/${productId}`);
    };

    return (
        <div className="products">
            <div className="products-header-container">
                <h2>Products</h2>
                <div className="products-header">
                    <div className="search-bar">
                        <input type="text" placeholder="Search products..." />
                        <button>Search</button>
                    </div>
                    <button className="add-product-button" onClick={handleAddProduct}>
                        Add New Product
                    </button>
                </div>
            </div>
            {error && <p className="error-message">{error}</p>}
            <div className="products-table-container">
                <table className="products-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Thumbnail</th>
                            <th>Description</th>
                            <th>Category</th> {/* Thêm cột Category */}
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.length > 0 ? (
                            products.map((product) => (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>${product.price}</td>
                                    <td>
                                        {product.thumbnail ? (
                                            <img
                                                src={`http://localhost:8088/uploads/${product.thumbnail}`}
                                                alt={product.name}
                                                style={{
                                                    width: THUMBNAIL_SIZE.width,
                                                    height: THUMBNAIL_SIZE.height,
                                                    objectFit: "cover",
                                                }}
                                            />
                                        ) : (
                                            "No thumbnail"
                                        )}
                                    </td>
                                    <td>{product.description || "No description"}</td>
                                    <td>{product.category || "No category"}</td> {/* Hiển thị tên category */}
                                    <td>
                                        <button
                                            className="update-button"
                                            onClick={() => handleUpdateProduct(product.id)}
                                        >
                                            Update
                                        </button>
                                        <button className="delete-button">Delete</button>
                                        <button
                                            className="upload-images-button"
                                            onClick={() => handleUploadImages(product.id)}
                                        >
                                            Upload Images
                                        </button>
                                        <button
                                            className="show-details-button"
                                            onClick={() => handleShowDetails(product.id)}
                                        >
                                            Show
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7">Không có sản phẩm nào</td> {/* Cập nhật colSpan thành 7 */}
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <div className="pagination">
                <button
                    onClick={() => handlePageChange(page - 1)}
                    disabled={page === 1}
                >
                    Previous
                </button>
                <span>Page {page} of {totalPages}</span>
                <button
                    onClick={() => handlePageChange(page + 1)}
                    disabled={page === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Products;