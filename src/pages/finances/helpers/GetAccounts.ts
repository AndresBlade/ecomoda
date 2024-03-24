import {useEffect, useState} from 'react';

interface account{
    id: string,
    description: string;
    status: string;

}
interface getallaccountsInterface{
    accounts: account[];
}

export const GetAccounts = () => {
    const [accounts, setAccounts] = useState<account[]>([]);

    useEffect(()=>{
        fetch('http://127.0.0.1:3000/api/Accounts/getAllAccounts',{
            method:'GET',
            mode : 'cors',
            credentials: 'same-origin',
            headers:{
                'Content-type':'application/json',
            },
        }).then(res=> res.json())
        .then((res : getallaccountsInterface)=> {
            setAccounts(res.accounts);
        }).catch((error)=>{
            console.log(error);
        })
    },[]);
    return accounts;


}

export const GetInactiveAccounts = () => {
    const [accounts, setAccounts] = useState<account[]>([]);

    useEffect(()=>{
        fetch('http://127.0.0.1:3000/api/Accounts/getInactiveAccounts',{
            method:'GET',
            mode : 'cors',
            credentials: 'same-origin',
            headers:{
                'Content-type':'application/json',
            },
        }).then(res=> res.json())
        .then((res : getallaccountsInterface)=> {
            setAccounts(res.accounts);
        }).catch((error)=>{
            console.log(error);
        })
    },[]);
    return accounts;


}

export const GetActiveAccount = ()=>{
    const [accounts, setAccounts] = useState<account[]>([]);

    useEffect(()=>{
        fetch('http://127.0.0.1:3000/api/Accounts/getAccounts',{
            method:'GET',
            mode : 'cors',
            credentials: 'same-origin',
            headers:{
                'Content-type': 'application/json',	
            },
        }).then(res => res.json())
        .then((res:getallaccountsInterface)=>{
            setAccounts(res.accounts);
        }).catch((error)=>{
            console.log(error);
        })
    },[]);
    return accounts;
}