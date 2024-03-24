import {useEffect, useState} from 'react';

interface RequestType{
    id: string,
    description: string;
    status: string;

}
interface getallRequestTypeInterface{
    requestTypes: RequestType[];
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
            setRequestType(res.requestTypes);
        }).catch((error)=>{
            console.log(error);
        })
    },[]);
    return requestTypes;


}
