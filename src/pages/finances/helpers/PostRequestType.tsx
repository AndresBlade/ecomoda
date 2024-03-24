async function PostRequestType({description}: {description: string}){
    const response = await fetch('http://127.0.0.1:3000/api/requestTypes/createRequestType',{
        method:'POST',
        mode : 'cors',
        credentials: 'same-origin',
        headers:{
            'Content-type':'application/json',
        },
        body:JSON.stringify({
            description:description
        })
            
    }).then(Response=>{
        console.log(Response)
        if(!Response.ok){
            
            throw new Error(Response.statusText)
    
            alert(Response.statusText);
        }
        return Response.json();
    })
    console.log(response);


    return response;
}

export {PostRequestType};