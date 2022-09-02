import React from "react";
import UseProducts from "../../../Hooks/UseProducts";

const ManageProducts = () => {
  const [products, setProducts] = UseProducts();

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you confirm to delete it");
    if (confirm) {
      const url = `https://secret-mesa-56031.herokuapp.com/product/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = products.filter((product) => product._id !== id);
          setProducts(remaining);
        });
    }
  };
  return (
    <div className="container mx-auto table-zebra w-2/3">
      <h1 className="text-center text-5xl my-10">Manage all Products</h1>
      <table className="table w-full">
        <thead>
          <tr>
            <th>Parts Picture</th>
            <th>Parts Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => (
            <tr key={product._id}>
              <td>
                <div className="avatar">
                  <div className="w-12 h-12 rounded-full align-middle border-none">
                    <img
                      src={product.image}
                      alt="Avatar"
                      className="w-12 h-12"
                    />
                  </div>
                </div>
              </td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.AvailAbleQuantity}</td>
              <th>
                <button
                  className="btn btn-outline btn-error"
                  onClick={() => handleDelete(product._id)}
                >
                  Delete
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProducts;
