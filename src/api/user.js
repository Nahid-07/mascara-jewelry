export const saveUserToDB = (userData) =>{
    fetch("http://localhost:5000/users",{
        method : "POST",
        headers : {
            "content-type" : "application/json"
        },
        body: JSON.stringify(userData)
    }).then(res => res.json()).then(data => {
        return data
    } )
}