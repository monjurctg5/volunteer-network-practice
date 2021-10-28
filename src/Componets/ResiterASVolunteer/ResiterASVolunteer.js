import React from 'react';
import { useState } from 'react';
import useFirebase from '../../hooks/useFirebase';
import { useForm } from "react-hook-form";

const ResiterASVolunteer = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useFirebase()

    const [error, setError] = useState("")
    // const [result, setResult] = useState("");
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    const onSubmit = (data) => {


        fetch(`http://localhost:5000/volunteer`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
    };
    return (
        <div className="addEvent-container pb-5">
            <h3 className="mt-5 fw-bold  text-success">Register as a volunteer</h3>
            <div className="Event-container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input   {...register("name")} value={user?.displayName} placeholder=" name" />
                    <input value={user?.email} {...register("email")} placeholder="email" />
                    <input  {...register("date")} placeholder="Date" value={dateTime} />
                    <input  {...register("eventTitle")} placeholder="Event Title" />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default ResiterASVolunteer;