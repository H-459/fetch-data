const SERVER_URL = "https://abra-course-server.herokuapp.com/";

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