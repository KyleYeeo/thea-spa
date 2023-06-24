import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import cls from './LogInOut.module.css';

const LogOut = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
        <div className={ cls.logout_btn }>   
            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                Log out
            </button>
        </div>
    )
  );
};

export default LogOut;