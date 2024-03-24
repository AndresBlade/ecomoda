async function LoanPost({monto, descripcion, tipo}: {monto:number,descripcion: string,tipo:number,}){
    const response = await fetch('http://127.0.0.1:3000/api/Request/createRequest',{
        method:'POST',
        mode : 'cors',
        credentials: 'same-origin',
        headers:{
            'Content-type':'application/json',
        },
        body:JSON.stringify({
            amount:monto,
            description:descripcion,
            type_id:tipo
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

export {LoanPost};