import React, { useEffect } from "react";
import './App.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";
import Header from "./Components/Nav/Header";
import RegisterComplete from './pages/auth/RegisterComplete'
import ForgotPassword from "./pages/auth/ForgotPassword";
import UserRoute from './Components/routes/UserRoute'
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminRoute from "./Components/routes/AdminRoute";
import Password from "./pages/user/Password";
import Wishlist from "./pages/user/Wishlist";
import History from "./pages/user/History";
import CategoryCreate from "./pages/admin/category/CategoryCreate";
import CategoryUpdate from "./pages/admin/category/CategoryUpdate";

import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { currentUser } from "./functions/auth";
import SubCreate from "./pages/admin/sub/subCreate";
import SubUpdate from "./pages/admin/sub/subUpdate";
import ProductCreate from "./pages/admin/product/productCreate";


function App() {
  const dispatch = useDispatch();

 
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        console.log("user", user);

        currentUser(idTokenResult.token)
          .then((res) => {
            dispatch({
              type: "LOGGED_IN_USER",
              payload: {
                name: res.data.name,
                email: res.data.email,
                token: idTokenResult.token,
                role: res.data.role,
                _id: res.data._id,
              },
            });
          })
          .catch((err) => console.log(err));
      }
    });
    // cleanup
    return () => unsubscribe();
  }, [dispatch]);
  return (
    <>
      <Header />
      <ToastContainer />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/register/complete' element={<RegisterComplete />} />
        <Route exact path='/forgot/password' element={<ForgotPassword />} />
        <UserRoute exact path="/user/history" element={<History />} />
        <UserRoute exact path="/user/password" element={<Password />} />
        <UserRoute exact path="/user/wishlist" element={<Wishlist />} />
        <AdminRoute exact path="/admin/dashboard" element={<AdminDashboard />} />
        <AdminRoute exact path="/admin/category" element={<CategoryCreate />} />
        <AdminRoute exact path="/admin/category/:slug" element={<CategoryUpdate />} />
        <AdminRoute exact path="/admin/sub" element={<SubCreate />} />
        <AdminRoute exact path="/admin/sub/:slug" element={<SubUpdate />} />
        <AdminRoute exact path="/admin/product" element={<ProductCreate />} />
      </Routes>
    </>
  );
}

export default App;
