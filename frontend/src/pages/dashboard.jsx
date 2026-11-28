import {useEffect, useState }from "react"
import { useLocation } from "react-router-dom";
import API from "../component/api";

function Dashboard() {
    const location = useLocation();
    const [userdata,setUserdata] = useState("");
    //function displaydata(){
      //  setUserdata(location.state);
        //console.log(userdata)

    //}
    useEffect(() =>{
        setUserdata(location.state);
    },[])

    const checkendpoint = async ()=>{
        const response = await API.get("/api/get");
        console.log(response.data);
    }
    return (
        <>
       <button onClick={checkendpoint}>Button</button>
        <div>{userdata.username}</div>
        <div>{userdata.password}</div>
        </>
      );
}

export default Dashboard;