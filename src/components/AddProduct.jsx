import React from "react";

const AddProduct = () => {
  // TODO: Remove below const and instead import them from chakra
  // const [form, setForm] = React.useState({});

  // const handleChange = () => {
  //   fetch("http://localhost:8080/products", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json"
  //     },
  //     body: JSON.stringify(
  //        ...form,
  //       [title]=value ,


  //     )
  //   });

    return (
      <>
        <button my={4} data-cy="add-product-button" >Add New Product</button>
        <div>
          <div pb={6}>
            <form>
              <label>Title</label>
              <input data-cy="add-product-title" />
              <label>Category</label>
              <select data-cy="add-product-category">
                <option data-cy="add-product-category-shirt" value="shirt">Shirt</option>
                <option data-cy="add-product-category-pant" value="pant">Pant</option>
                <option data-cy="add-product-category-jeans" value="jeans">Jeans</option>
              </select>
              <label>Gender</label>
              <select data-cy="add-product-gender" >
                <option data-cy="add-product-gender-male" value="male">Male</option>
                <option data-cy="add-product-gender-female" value="female">Female</option>
                <option data-cy="add-product-gender-unisex" value="unisex">unisex</option>
              </select>
              <label>Price</label>
              <input data-cy="add-product-price" />
              <button data-cy="add-product-submit-button" >Create</button>
            </form>
          </div>
        </div>
      </>
    );
  
  };


  export default AddProduct;
