async function updateAccount({id,description,status}: {id: string, description:string, status:string}){
    const response = await fetch(`http://127.0.0.1:3000/api/Accounts/updateAccount/${id}`,{
        method:'PUT',
        mode : 'cors',
        credentials: 'same-origin',
        headers:{
            'Content-type':'application/json',
        },body:JSON.stringify({
            description:description,
            status:status
        })
            
    })
    console.log(response);
    if(!response.ok){
        throw new Error(response.statusText);
    }
    return response;
}
export {updateAccount};



// .then(Response=>{
//     console.log(Response)
//     if(!Response.ok){
        
//         throw new Error(Response.statusText)

//         alert(Response.statusText);
//     }
//     return Response.json();
// })