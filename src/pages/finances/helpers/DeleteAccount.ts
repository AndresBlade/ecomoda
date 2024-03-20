async function deleteAccount({id}: {id: string}){
    const response = await fetch(`http://127.0.0.1:3000/api/Accounts/deleteAccount/${id}`,{
        method:'DELETE',
        mode : 'cors',
        credentials: 'same-origin',
        headers:{
            'Content-type':'application/json',
        }  
    })
    console.log(response);
    if(!response.ok){
        throw new Error(response.statusText);
    }
    return response;
}
export {deleteAccount};



// .then(Response=>{
//     console.log(Response)
//     if(!Response.ok){
        
//         throw new Error(Response.statusText)

//         alert(Response.statusText);
//     }
//     return Response.json();
// })