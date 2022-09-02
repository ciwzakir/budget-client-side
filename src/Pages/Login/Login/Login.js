import React, { useRef } from "react";
import "./Login.css";
import { Button, Form, Toast } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Loading from "../../../Components/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import auth from "../../../Firebase/Firebase.init";
import useToken from "../../../Hooks/useToken";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  let errorElement;
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [token] = useToken(user);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  if (loading || sending) {
    return <Loading></Loading>;
  }

  if (token) {
    navigate("/");
  }

  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await signInWithEmailAndPassword(email, password);
    const { data } = await axios.post(
      "https://secret-mesa-56031.herokuapp.com/login",
      { email }
    );
    localStorage.setItem("accessToken", data.accessToken);
    navigate(from, { replace: true });
  };

  const navigateRegister = (event) => {
    navigate("/register");
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      Toast("Email sent for verification");
    } else {
      toast("please enter your valid email address");
    }
  };

  return (
    <div className="login-form">
      <div className="flex flex-col w-full ">
        <div className="grid  rounded-box place-items-left mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3 " controlId="formBasicEmail">
              <Form.Control
                ref={emailRef}
                type="email"
                placeholder="Enter email"
                autoComplete="off"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3 " controlId="formBasicPassword">
              <Form.Control
                ref={passwordRef}
                type="password"
                placeholder="Password"
                autoComplete="off"
                required
              />
            </Form.Group>
            <Button
              variant="info  d-block mb-2"
              type="submit"
              className="w-50 mx-auto px-20"
            >
              Login
            </Button>
          </Form>
          {errorElement}
          <p className="text-left">
            If you are new?
            <Link
              to="/register"
              className="text-primary p-2 text-decoration-none "
              onClick={navigateRegister}
            >
              Please Register
            </Link>
          </p>
          <p className="text-left p-2">
            Forget Password?
            <button
              className="btn btn-link text-primary pe-auto text-decoration-none "
              onClick={resetPassword}
            >
              Reset Password
            </button>
          </p>
        </div>
        <div className="divider">OR</div>
        <div className="grid h-100 card  rounded-box place-items-center">
          <SocialLogin></SocialLogin>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Login;
