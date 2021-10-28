import React from 'react';
import "./addEvent.css"

import { useState } from 'react';
import useFirebase from '../../hooks/useFirebase';
import { useForm } from "react-hook-form";
const AddEvent = () => {
    const { register, handleSubmit, reset } = useForm();
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    const onSubmit = (data) => {
        fetch(`http://localhost:5000/Events`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(res=>{
            reset()
        })
    }
    return (
        <div className="addEvent-container">
            <h3 className="mt-5 fw-bold  text-success">Add  Event</h3>
            <div className="Event-container">

                <form onSubmit={handleSubmit(onSubmit)}>
                    <input required {...register("EventTitle")} placeholder=" Title" />
                    <input required {...register("Eventdate")} placeholder="Date" value={dateTime} />
                    <textarea required {...register("description")} placeholder="Descriptio" />
                    <input  {...register("img")} placeholder=" event image url" /> <br />


                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddEvent;