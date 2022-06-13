import { useRef } from "react";

import { registerUser } from "../../Services/Api";

import {useForm} from 'react-hook-form';

const {register, handleSubmit} = useForm();

const Register = () => {
    console.log("In render");

    const username = useRef("");
    const password = useRef("");
    const email = useRef("");
    const firstName = useRef("");
    const lastName = useRef("");

    const Submit = async (event) => {
        event.preventDefault();
        try {
            const data = await registerUser(
                username.current.value, 
                password.current.value, 
                email.current.value, 
                firstName.current.value, 
                lastName.current.value);

            alert("Register user successfully.");

        } catch (err) {
            alert(err);
        }
    }
    
    return (
        <>
            <form>
                <label className="labels">Username :</label><input {...register("username")} ref={username} type="text"></input><br />
                <label className="labels">Email :</label><input {...register("email")} ref={email} type="email"></input><br />
                <label className="labels">Password :</label><input {...register("password")} ref={password} type="password"></input><br />
                <label className="labels">Firstname :</label><input {...register("firstName")} ref={firstName} type="text"></input><br />
                <label className="labels">LastName :</label><input ref={lastName} type="text"></input><br />
                <button onClick={Submit}>Submit</button>
            </form>
        </>
    )
}

export default Register;
