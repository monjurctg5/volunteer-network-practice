import React, { useState } from 'react';
import useFirebase from '../../hooks/useFirebase';
import { useForm } from "react-hook-form";
import './Login.css'
const Login = () => {
    const { register, handleSubmit } = useForm();
    const { googleSignin } = useFirebase()
    const [result, setResult] = useState("");
    const onSubmit = (data) => setResult(JSON.stringify(data));
    return (
        <div className="login-container">
            <h1>Please Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder=" name" />
                <input {...register("email")} placeholder=" email" /> <br />
                <input type="submit" />
            </form>
            <button onClick={googleSignin} type="button" className="btn btn-outline-primary">GoogleSignIn</button>


        </div>
    );
};

export default Login;