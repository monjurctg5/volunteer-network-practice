import React, { useEffect, useState } from 'react';
import useFirebase from '../../hooks/useFirebase';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';

const Admin = () => {
    const history = useHistory()
    const {user,setIsadmin,isAdmin} = useFirebase()
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        const email = "nboyctg9@gmail.com"
        if (user?.email==email && user?.email == data.email) {
            setIsadmin(true)
            history.push("/adminDash")
        }
        else {
            alert("please login as adming")
            history.push("/admin")
        }
    }
    return (
        <div className="login-container">
            <h1>Please Login as Admin</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("email")} placeholder=" write Admin email" />
               
                <input type="submit" />
            </form>
        </div>
    );
};

export default Admin;