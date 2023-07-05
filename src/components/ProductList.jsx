import React from "react";

function ProductList({ products, removeProduct }) {
  const handleDeleteProduct = (product) => {
    removeProduct(product.id);
  };

  return (
    <table cellPadding={2} cellSpacing={2} border={1}>
      <thead>
        <tr>
          <td>ID</td>
          <td>Name</td>
          <td>Price</td>
          <td>Content</td>
          <td>Status</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => {
          return (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.content}</td>
              <td>{product.status}</td>
              <td>
                <button onClick={() => handleDeleteProduct(product)}>
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ProductList;
