import { Route, Routes } from "react-router-dom";
import NotFound from "./Components/NotFound/NotFound";
import Blogs from "./Pages/Blogs/Blogs";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Header from "./Components/Header/Header";
import Register from "./Pages/Login/Register/Register";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Orders from "./Pages/Orders/Orders";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import AddReview from "./Pages/Home/Reviews/AddReview";
import Reviews from "./Pages/Home/Reviews/Reviews";
import Products from "./Pages/Products/Products/Products";
import AddProduct from "./Pages/Products/Products/AddProduct/AddProduct";
import ManageProducts from "./Pages/Products/ManageProducts/ManageProducts";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyReview from "./Pages/Home/Reviews/MyReview";
import Profile from "./Pages/Dashboard/MyOrders/Profile/Profile";
import Purchase from "./Pages/Purchase/Purchase";
import MyOrders from "./Pages/Dashboard/MyOrders/MyOrders";
import Users from "./Pages/Dashboard/Users/Users";
import Payment from "./Pages/Dashboard/Payment";
import MasterBills from "./Components/Reports/Bills/MasterBills";
import SingleDetails from "./Components/Reports/Bills/SingleDetails";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/product/:productId" element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        } />
          <Route path="/addproduct" element={
            <RequireAuth>
              <AddProduct></AddProduct>
            </RequireAuth>
          }/>
          <Route path="/manageproducts" element={
            <RequireAuth>
              <ManageProducts></ManageProducts>
            </RequireAuth>
          }/>
          <Route path="/dashboard" element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }> 
            <Route index element={<MyOrders/>} ></Route>
            <Route path="review" element={<MyReview/>} > </Route>
            <Route path="profile" element={<Profile/>} > </Route>
            <Route path="users" element={<Users/>} > </Route>
            <Route path="payment/:id" element={<Payment/>} > </Route>
          </Route>
         
        <Route path="/orders" element={
          <RequireAuth>
            <Orders></Orders>
          </RequireAuth>
        } />
      

        <Route path="/blogs" element={<Blogs />} />
        <Route path="/reports" element={<MasterBills />} />
        <Route path="/reports/:detailOfId" element={<SingleDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/addreview" element={<AddReview />} />
        <Route path="/dashboard" element={<Register />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </div>
  );
}

export default App;
