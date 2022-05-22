/* 
Tasks :
1. Create Register section
   For register show inputs for email/username/password/firstname/lastname. 
   on click return success or error.

2. Login secition :
   Allow typing in username and password and login with these credintials.
   Save username to local storage and show "Hello {username} for then given logged in user."

3. Create item section :
    Create an input to provide name for the new item.

4. Support Delete. (https://abra-course-server.herokuapp.com/items/<id>/ with DELETE method)

5. Support rename (https://abra-course-server.herokuapp.com/items/<id>/ with PATCH method and
   { name : <name>})

6. Logout. should erase local storage.

7. BONUS : learn about AXIOS, try to change fetch to axios.

*/

import { useState, useEffect } from 'react';

const SERVER_URL = "https://abra-course-server.herokuapp.com/";

const Items = (props) => {

    const [accessToken, setAccessToken] = useState(undefined);
    const [items, setItems] = useState(undefined);

    console.log(items);

    const getItems = async() => {
        const response = await fetch(SERVER_URL + "items/",
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            },
            method: "GET"
        })

        if (response.status === 200) {
            const data = await response.json();
            setItems(data);
        }

    }

    useEffect( () => {
        const token = localStorage.getItem("Token");
        setAccessToken(token);

    }, []);

    useEffect( () => {

        if (accessToken) {
            getItems();
        }

    }, [accessToken]);

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


    const createItem = async ( name ) => {

        const payload = {
            name
        };
        console.log(JSON.stringify(payload));
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

        getItems();

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
        { items && 
            <>
                <ul>
                    {items.map(item => {
                        return <li key={item.id}>{item.name}</li>
                    })} 
                </ul>
            </>}
        </>
    )
}

export default Items;
