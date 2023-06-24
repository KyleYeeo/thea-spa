import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import cls from './LogInOut.module.css';
import Swal from 'sweetalert2';
import 'animate.css';

const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  useEffect(() => {
    !isAuthenticated && (
    Swal.fire({
        title: 'Log in and get 10% discount',
        background: '#b9b4b0',
        confirmButtonColor: 'black',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
        }))
  }, [isAuthenticated])


  return (
    !isAuthenticated && (        
        <div>
            <div className={ cls.login_btn }>
                <button onClick={() => loginWithRedirect()}>Log in</button>
            </div>
        </div>
    )
  );
};

export default Login;