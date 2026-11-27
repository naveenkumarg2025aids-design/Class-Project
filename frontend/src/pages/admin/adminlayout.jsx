import { Link, Outlet } from "react-router-dom";

function Admin() {
    return ( 
        <div>
            <nav>
                <Link to="/admin/dashboard">Dashboard</Link>
                 <Link to="/admin/settings">Settings</Link>
                  <Link to="/admin/userdetails">UserDetails</Link>
                  <Outlet/>
                
            </nav>
        </div>
     );
}

export default Admin;