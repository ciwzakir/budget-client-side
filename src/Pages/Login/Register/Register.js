import React from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/Firebase.init";
import Loading from "../../../Components/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import useToken from "../../../Hooks/useToken";

const Register = () => {
  const [
      createUserWithEmailAndPassword,
      user,
      loading,
      error,
  ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
 
  const navigate = useNavigate();
  const [token] = useToken(user);
  const navigateLogin = () => {
    navigate('/login');
  }
  let errorMessage = "";

  if(loading){
    return <Loading></Loading>
   }
  if(error){
    errorMessage = <p className="text-danger">Error : {error?.message}</p>
  }
  if(token){
      navigate('/login');
  }
  
  const handleRegister = async (event) => {
      event.preventDefault();
      const email = event.target.email.value;
      const password = event.target.password.value;
      await createUserWithEmailAndPassword(email, password);
      
  };

  return (
    <div className='register-form container w-1/3'>
    <h2 className="text-4xl text-center my-7">Please Register</h2>
    <form onSubmit={handleRegister} className="w-50 mx-auto">
        <input type="text" name="name" id="" placeholder='Your Name' />
        <input type="email" name="email" id="" placeholder='Email Address' required />
        <input type="password" name="password" id="" placeholder='Password' required />
        <input
            className='w-50 mx-auto btn btn-info mt-2'
            type="submit"
            value="Register" />
    </form>
    <p>If Already have an account? <Link to="/login" className='text-info pe-auto text-decoration-none w-1/2' onClick={navigateLogin}>Please Login</Link> </p>
    <SocialLogin></SocialLogin>

</div>
  );
};
export default Register;
