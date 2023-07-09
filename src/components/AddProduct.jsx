import React, { useState } from "react";

function AddProduct({ addNewProduct }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("");

  const handleAddProduct = () => {
    addNewProduct({
      id: Math.floor(Math.random() * 100),
      name: name,
      price: price,
      content: content,
      status: status,
    });
    setName("");
    setPrice("");
    setContent("");
    setStatus("");
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangePrice = (event) => {
    setPrice(event.target.value);
  };

  const handleChangeContent = (event) => {
    setContent(event.target.value);
  };

  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
  };

  console.log("Render AddProduct component");
  return (
    <form>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>
              <input
                type="text"
                value={name}
                onChange={(event) => handleChangeName(event)}
              />
            </td>
          </tr>
          <tr>
            <td>Price</td>
            <td>
              <input
                type="number"
                value={price}
                onChange={(event) => handleChangePrice(event)}
              />
            </td>
          </tr>
          <tr>
            <td>Content</td>
            <td>
              <input
                type="text"
                value={content}
                onChange={(event) => handleChangeContent(event)}
              />
            </td>
          </tr>
          <tr>
            <td>Status</td>
            <td>
              <input
                type="text"
                value={status}
                onChange={(event) => handleChangeStatus(event)}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button type="button" onClick={() => handleAddProduct()}>
                Add
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default React.memo(AddProduct);
