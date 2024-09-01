import { NavLink } from "react-router-dom";

export default function MainNavigation() {
    return (
        <div className="nav">
        <NavLink to='/' className={({isActive}) => isActive ? "active" : undefined}>Home</NavLink>
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/register'>Register</NavLink>
        </div>
    )
}