import { useRef } from "react";

import { registerUser } from "../../Services/Api";

import {useForm} from 'react-hook-form';



const Register = () => {
    const {
        register, 
        handleSubmit,
        formState: {errors}
    } = useForm();
    console.log("In render");
    console.log(errors);

    const username = useRef("");
    const password = useRef("");
    const email = useRef("");
    const firstName = useRef("");
    const lastName = useRef("");

    const Submit = async (data) => {
        console.log(data);
        //event.preventDefault();
        try {
            const res = await registerUser(
                data.username, 
                data.password, 
                data.email, 
                data.firstName, 
               data.lastName);

            alert("Register user successfully.");

        } catch (err) {
            alert(err);
        }
    }
    
    return (
        <>
            <form onSubmit = {handleSubmit(Submit)} >
                <label className="labels">Username :</label><input {...register("username" , {required:"this is a required field"})}  type="text"></input><p>{errors.username?.message}</p><br />
                <label className="labels">Email :</label><input {...register("email",{required:"this is a required field"})} type="email"></input><br />
                <label className="labels">Password :</label><input {...register("password",{required:"this is a required field"})}  type="password"></input><br />
                <label className="labels">Firstname :</label><input {...register("firstName",{required:"this is a required field"})}  type="text"></input><br />
                <label className="labels">LastName :</label><input {...register("lastName",{required:"this is a required field"})} type="text"></input><br />
                <input type="submit"  />
            </form>
        </>
    )
}

export default Register;
