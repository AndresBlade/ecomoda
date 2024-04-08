import {useEffect, useState} from 'react';

interface requests{
    id: string,
    amount: string;
    description: string;
    type_id: number;
    status: string;
    createdAt : string;
    updatedAt : string;

}
interface getallRequestInterface{
    request: requests[];
}
interface getallRequestEnEsperaInterface{
    selectedRequests: requests[];
}
export const GetRequest = () => {
    const [request, setRequest] = useState<requests[]>([]);

    useEffect(()=>{
        fetch('http://127.0.0.1:3000/api/Request/getAllRequest',{
            method:'GET',
            mode : 'cors',
            credentials: 'same-origin',
            headers:{
                'Content-type':'application/json',
            },
        }).then(res=> res.json())
        .then((res : getallRequestInterface)=> {
            setRequest(res.request);
        }).catch((error)=>{
            console.log(error);
        })
    },[]);
    
    return request;


}
export const GetRequestEnEspera = () => {
    const [request, setRequest] = useState<requests[]>([]);

    useEffect(()=>{
        fetch('http://127.0.0.1:3000/api/Request/getRequests/Espera',{
            method:'GET',
            mode : 'cors',
            credentials: 'same-origin',
            headers:{
                'Content-type':'application/json',
            },
        }).then(res=> res.json())
        .then((res : getallRequestEnEsperaInterface)=> {
            setRequest(res.selectedRequests);
        }).catch((error)=>{
            console.log(error);
        })
    },[]);
    
    return request;


}