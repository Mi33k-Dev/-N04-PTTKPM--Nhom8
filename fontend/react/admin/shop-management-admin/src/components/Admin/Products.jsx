import React, { useState } from 'react';
import './Admin.scss';

const Products = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product A', image: 'image-a.jpg' },
    { id: 2, name: 'Product B', image: 'image-b.jpg' },
  ]);
  const [newProduct, setNewProduct] = useState({ name: '', image: '' });

  const handleAdd = () => {
    const product = { id: Date.now(), ...newProduct };
    setProducts([...products, product]);
    setNewProduct({ name: '', image: '' });
  };

  const handleDelete = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setNewProduct({ ...newProduct, image: reader.result });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="products-content">
      <h1>Products</h1>
      <div className="add-product">
        <input
          type="text"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <input type="file" onChange={handleImageChange} />
        <button onClick={handleAdd}>Add Product</button>
      </div>
      <table className="products-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td><img src={product.image} alt={product.name} width="50" /></td>
              <td>
                <button onClick={() => handleDelete(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;