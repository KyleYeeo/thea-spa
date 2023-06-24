import Login from './LogIn';
import LogOut from './LogOut';
import cls from './Auth.module.css';


export const Auth = () => {
    return (
        <div className={ cls.auth_container}>
            <Login />
            <LogOut />
        </div>
    );
}
