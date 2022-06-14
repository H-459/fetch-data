const axios = require('axios').default;

const SERVER_URL = "https://abra-course-server.herokuapp.com/";
const ITEMS_URL = "https://abra-course-server.herokuapp.com/items/";

const apiInstance = axios.create({
    baseURL:"https://abra-course-server.herokuapp.com/",
    headers:{
        "Content-Type":"application/json",
        "Access-Control-Allow-Origin": "true"
    }

});

export const loginUser = async (username,password) => {

    const response = await axios.post(SERVER_URL +'api/token/',{
        username:username,
        password:password
    });
    console.log("response");
    return response;

}

export const registerUser = async (username, password, email, firstName, lastName) =>{

    const response = await axios.post(SERVER_URL +'api/token/',{
        username:username,
        password:password
    });
    console.log("response");
    return response;
}

export const createItem = async ()=>{

}

export const delItem = async (postId) => {

    const data = await axios.delete(ITEMS_URL + postId);



}

export const renameItem = async (postId, newName ) =>{

    const data = await axios.patch(ITEMS_URL + postId,{
    name:newName   
    });


}

/*
export const loginUser = async (username,password) => {

    const response = await apiInstance.post('api/token/',{
        username:username,
        password:password
    });
    console.log("response");
    return response;

}

export const registerUser = async (username, password, email, firstName, lastName) =>{

    const response = await apiInstance.post('register/',{
        username: username,
        password: password,
        password2: password,
        email: email,
        first_name: firstName,
        last_name: lastName 

    });
    console.log("registerUser");
    return response;
}


/*
const apiCall = async (url, payload, method="GET") => {

    const response = await fetch(url,
    {
        headers: {
            'Content-Type': 'application/json'
        },
        method: method,
        body: JSON.stringify(payload)
    })

    const data = await response.json();

    if (response.status >= 200 && response.status < 300) {
        return data;
    }
    
    throw new Error(JSON.stringify(
        { 
            data : data, 
            status: response.status
        }));

}


export const registerUser = async (username, password, email, firstName, lastName) =>
{
    const payload = {
        username: username,
        password: password,
        password2: password,
        email: email,
        first_name: firstName,
        last_name: lastName 
    };

    const data = await apiCall(SERVER_URL + "register/", payload, "POST");

    return data;
}

export const loginUser = async (username, password) => {
    
    const payload = {
        username,
        password
    }

    const data = await apiCall(SERVER_URL + "api/token/", payload, "POST");

    return data.access;

}

*/