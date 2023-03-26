export const saveUserToDB = (userData) =>{
    fetch("https://mascara-jwellary-server-nahid-07.vercel.app/users",{
        method : "POST",
        headers : {
            "content-type" : "application/json"
        },
        body: JSON.stringify(userData)
    }).then(res => res.json()).then(data => {
        return data
    } )
}