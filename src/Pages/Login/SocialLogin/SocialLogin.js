import React from "react";
import "./SocialLogin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from "../../../Firebase/Firebase.init";
import Loading from "../../../Components/Loading/Loading";



const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, userGithub, loadingGithub, errorGithub] = useSignInWithGithub(auth);
  const navigate = useNavigate();
  let errorMessage = "";

  if(loading || loadingGithub){
      return <Loading></Loading>
  }
  if (error || errorGithub ) {
    errorMessage = <p className="text-danger">Error : {error?.message} {errorGithub?.message}</p>
  
  }
  if (user || userGithub) {
      navigate('/');
  }

  return (
    <div className="mx-auto socialLoginForm-container">
    
      {errorMessage}
        <button 
        onClick={() => signInWithGoogle()}
        className="btn btn-info w-48 d-block mx-auto my-2">
          <span className="mx-2">
              <FontAwesomeIcon icon={faGoogle}/>
          </span>
           Sign In with Google
        </button>

        <button 
        onClick={() => signInWithGithub()}
        className="btn btn-info w-48 d-block mx-auto">
          <span className="px-2">
                <span className="mx-2">
              <FontAwesomeIcon icon={faGithub} />
            </span>
             Sign In with Github
          </span>
        </button>
      </div>
  );
};

export default SocialLogin;
