import { useState, useEffect } from 'react';

const SERVER_URL = "https://abra-course-server.herokuapp.com/";

const Items = (props) => {

    const [accessToken, setAccessToken] = useState(undefined);

    useEffect( () => {
       setAccessToken(localStorage.getItem("Token"));
    }, []);

    const login = async (username, password) => {
        
        const payload = {
            username,
            password
        }

        const response = await fetch(SERVER_URL + "api/token/",
        {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(payload)
        })

        const data = await response.json()

        return data.access;
    }

    const register = async (username, password, email, firstName, lastName) =>
    {
        const payload = {
            username: username,
            password: password,
            password2: password,
            email: email,
            first_name: firstName,
            last_name: lastName 
        };

        try {

            const response = await fetch(SERVER_URL + "register/",
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(payload)
            })

            const data = await response.json();
            console.log(data);
        } catch(err) {
            console.log(err);
        }
        
    }

    const getItems = async() => {
        const response = await fetch(SERVER_URL + "items/",
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            },
            method: "GET"
        })

        const data = await response.json();
        console.log(data);
    }

    const createItem = async ( name ) => {

        const payload = {
            name
        };
        const response = await fetch(SERVER_URL + "items/",
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            },
            method: "POST",
            body: JSON.stringify(payload)
        })

        const data = await response.json();
        console.log(data);

    }
    const loginUser = async () => {
        const accessToken = await login("test3","@Q1w2e3r4");
        setAccessToken(accessToken);
        localStorage.setItem("Token", accessToken);
        console.log(accessToken);
    }
    return (
        <>
        <button onClick={() => register("test3","@Q1w2e3r4","te3st@gmail.com","E","Z")}>Register</button>
        <button onClick={loginUser}>Login</button>
        <button onClick={getItems}>get Items</button>
        <button onClick={() => createItem("My new item")}>Create item</button>
        { accessToken && <p>Your acccess token : {accessToken}</p>}
        </>
    )
}

export default Items;
