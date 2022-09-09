import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L6VtySHfYjvWIOcRythxMqkxVepEvK2zU27UO4JWWb9SX4Pkh8wKXqD4ks3AUVZxz5YK8nLhFcAKkLrT8ztBPAd00jhKskiv4"
);

const Payment = () => {
  const { id } = useParams();
  const url = `https://secret-mesa-56031.herokuapp.com/orders/${id}`;

  const { data: orders, isLoading } = useQuery(["orders", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div className="card-body">
          <p className="text-success font-bold">Hello, {orders.email}</p>
          <h2 className="card-title">Please Pay for {orders.name}</h2>

          <p>Please pay: ${orders.price}</p>
        </div>
      </div>
      <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm orders={orders} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
