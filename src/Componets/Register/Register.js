import React from 'react';
import { useState } from 'react';
import useFirebase from '../../hooks/useFirebase';
import { useForm } from "react-hook-form";
const Register = () => {
    const { register, handleSubmit, reset } = useForm();
    const [error, setError] = useState("")
    const { googleSignin, manuallyRegistration, setUser } = useFirebase()
    // const [result, setResult] = useState("");
    const onSubmit = (data) => {
        manuallyRegistration(data.email, data.password)
            .then(res => {
                alert("from res")
                console.log(res.user);
                setUser(res.user)
                setError("")
            }).catch(er => setError(er.message))
    };
    return (
        <div className="login-container">
            <h1> Registration</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input required {...register("name")} placeholder=" name" />
                <input required {...register("email")} placeholder="email" />
                <input required {...register("password")} placeholder="password" />
            

                <input type="submit" />
            </form>
            <div>------or-------</div>
            <button onClick={googleSignin} type="button" className="btn btn-outline-primary">GoogleSignIn</button>
        </div>
    );
};


export default Register;