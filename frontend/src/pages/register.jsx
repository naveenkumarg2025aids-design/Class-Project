import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import z from "zod";
import { registerschema } from "../component/registerschema";
import { zodResolver } from "@hookform/resolvers/zod";

function Register() {
    const navigate=useNavigate();
   
    const {register, handleSubmit, formState:{errors}}=useForm({
        resolver: zodResolver(registerschema)
    })
    function onSubmit1(data){
        console.log(data)
        alert("register success")
        navigate("/",{state : data})
    }
    function Location(data)
    {
        console.log(data)
    }
    return (
        <>
        <div className="min-h-screen w-full bg-gradient-to-br from-red-500 via-white-400 to-black flex justify-center items-center p-4">
        <form onSubmit={handleSubmit(onSubmit1)} className="w-full max-w-sm bg-white p-6 sm:p-8 rounded-3xl shadow-2xl space-y-5">
            <div>
                <h1 className="text-center text-xl font-bold">Registration From </h1>
            </div>
            <label>Name : </label>
            <input placeholder="Enter your name" type="text" {...register("name")} />
            <p>{errors.name?.message}</p>

            <label>Email : </label>
            <input placeholder="Enter your email" type="email" {...register("email") } />
            <p>{errors.email?.message}</p>

            <label>Password : </label>
            <input placeholder="Enter Password"  type="password" {...register("password")} />
            <p>{errors.password?.message}</p>

            <label>Age : </label>
            <input placeholder="Enter your age"  type="number" {...register("age")} />
            <p>{errors.age?.message}</p>

            <button type="submit" className="w-full bg-red-300 p-2 font-bold rounded-3xl shadow-2xl space-y-5" >Submit</button>
        </form>
        </div>
        </>
    );
}

export default Register;