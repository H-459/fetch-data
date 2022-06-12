const SERVER_URL = "https://abra-course-server.herokuapp.com/";

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

    const response = await fetch(SERVER_URL + "register/",
    {
        headers: {
            'Content-Type': 'application/json'
        },
        method: "POST",
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
