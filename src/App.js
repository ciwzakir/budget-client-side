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
import ReportDashboard from "./Pages/Dashboard/Reports/ReportDashboard";
import Expense from "./Components/Expense/Expense";
import SumSuppliers from "./Components/Expense/Summary/SumSuppliers";
import Footer from "./Components/Footer/Footer";
import Certificate from "./Components/Expense/Summary/Certificates";
import SumOfCodes from "./Components/Expense/Summary/SumOfCodes";
import AckAllotment from "./Components/Expense/Summary/AckAllotment";
import AckRefunds from "./Components/Expense/Summary/AckRefunds";
import Backend from "./Components/Expense/Summary/Backend";
import Forwardings from "./Components/Expense/Summary/Forwardings";
import EducationDashboard from "./Pages/Dashboard/Education/EducationDashboard";
import Clause from "./Components/Educations/Grammar/Clause";
import Pronouns from "./Components/Educations/Grammar/Pronouns";
import Tense from "./Components/Educations/Grammar/Tense";
import Noun from "./Components/Educations/Grammar/Noun";
import Article from "./Components/Educations/Grammar/Article";
import Preposition from "./Components/Educations/Grammar/Preposition";
import VoiceChange from "./Components/Educations/Grammar/VoiceChange";
import Syntax from "./Components/Educations/Grammar/Syntax";
import SequenceOfTense from "./Components/Educations/Grammar/SequenceOfTense";




function App() {
  return (

      <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/product/:productId"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        />
     
        <Route
          path="/addproduct"
          element={
            <RequireAuth>
              <AddProduct></AddProduct>
            </RequireAuth>
          }
        />
        <Route
          path="/manageproducts"
          element={
            <RequireAuth>
              <ManageProducts></ManageProducts>
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<MyOrders />}></Route>
          <Route path="review" element={<MyReview />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="users" element={<Users />}></Route>
          <Route path="payment/:id" element={<Payment />}></Route>
        </Route>

         <Route
              path="/reports"
              element={
                <RequireAuth>
                <ReportDashboard></ReportDashboard>
                </RequireAuth>
              }
            >
             <Route index element={<MasterBills/>}></Route>
             {/* <Route path="reports/:detailOfId" element={<SingleDetails />}> </Route> */}
             <Route path=":detailOfId" element={<SingleDetails />}> </Route>
             <Route path="codes" element={<Expense/>}> </Route>
             <Route path="fundposition" element={<SumOfCodes/>}> </Route>
             <Route path="suppliers" element={<SumSuppliers/>}> </Route>
             <Route path="certificates" element={<Certificate/>}> </Route>
             <Route path="forwarding" element={<Forwardings/>}> </Route>
             <Route path="acknowbgt" element={<AckAllotment/>}> </Route>
             <Route path="ackrefund" element={<AckRefunds/>}> </Route>
             <Route path="backend" element={<Backend/>}> </Route>
           
        </Route> 
         <Route
              path="/study"
              element={
                <RequireAuth>
                <EducationDashboard></EducationDashboard>
                </RequireAuth>
              }
            >
             <Route index element={<Pronouns/>}></Route>
             <Route path="clause" element={<Clause />}> </Route>
             <Route path="article" element={<Article />}> </Route>
             <Route path="prepo" element={<Preposition />}> </Route>
             <Route path="voice" element={<VoiceChange />}> </Route>
             <Route path="noun" element={<Noun />}> </Route>
             <Route path="tense" element={<Tense />}> </Route>
             <Route path="syntax" element={<Syntax />}> </Route>
             <Route path="seqtense" element={<SequenceOfTense />}> </Route>
        </Route> 

        <Route
          path="/orders"
          element={
            <RequireAuth>
              <Orders></Orders>
            </RequireAuth>
          }
        />

        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/addreview" element={<AddReview />} />
        <Route path="/dashboard" element={<Register />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>

    
    </div>
 
  );
}

export default App;
