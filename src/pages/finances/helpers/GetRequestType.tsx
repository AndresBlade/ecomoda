import {useEffect, useState} from 'react';

interface RequestType{
    id: string,
    description: string;
    status: string;

}
interface getallRequestTypeInterface{
    requestsTypes: RequestType[];
}
interface getallActiveRequestTypeInterface{
    selectedRequests: RequestType[];
}
interface getallInactiveRequestTypeInterface{
    selectedRequests: RequestType[];
}

export const GetRequestType = () => {
    const [requestTypes, setRequestType] = useState<RequestType[]>([]);

    useEffect(()=>{
        fetch('http://127.0.0.1:3000/api/requestTypes/getAllRequestType',{
            method:'GET',
            mode : 'cors',
            credentials: 'same-origin',
            headers:{
                'Content-type':'application/json',
            },
        }).then(res=> res.json())
        .then((res : getallRequestTypeInterface)=> {
            setRequestType(res.requestsTypes);
        }).catch((error)=>{
            console.log(error);
        })
    },[]);
    return requestTypes;


}
export const GetActiveRequestType = () => {
    const [requestTypes, setRequestType] = useState<RequestType[]>([]);

    useEffect(()=>{
        fetch('http://127.0.0.1:3000/api/requestTypes/getRequestsTypes/Activo',{
            method:'GET',
            mode : 'cors',
            credentials: 'same-origin',
            headers:{
                'Content-type':'application/json',
            },
        }).then(res=> res.json())
        .then((res : getallActiveRequestTypeInterface)=> {
            setRequestType(res.selectedRequests);
        }).catch((error)=>{
            console.log(error);
        })
    },[]);
    return requestTypes;


}
export const GetInactiveRequestType = () => {
    const [requestTypes, setRequestType] = useState<RequestType[]>([]);

    useEffect(()=>{
        fetch('http://127.0.0.1:3000/api/requestTypes/getRequestsTypes/Inactivo',{
            method:'GET',
            mode : 'cors',
            credentials: 'same-origin',
            headers:{
                'Content-type':'application/json',
            },
        }).then(res=> res.json())
        .then((res : getallInactiveRequestTypeInterface)=> {
            setRequestType(res.selectedRequests);
        }).catch((error)=>{
            console.log(error);
        })
    },[]);
    return requestTypes;


}
