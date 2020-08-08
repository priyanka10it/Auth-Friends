import React,{useState, useEffect} from 'react';
import {axiosWithAuth} from "../utils/axiosWithAuth";


const FriendsList = props =>{
    const [data, setData] = useState([{name:''}]);
    useEffect( ()=>{
        axiosWithAuth()
        .get('/api/friends')
            .then(res=>{
                console.log(res)
                setData(res.data);
                console.log(`data is ${data}`);
            })
            .catch(err=>{
                console.log(err);
            });
    },[])

 
    return(
        <div>
            <>
                {data.map(item=>{
                    return(
                        <div className="namer">{item.name}</div>
                    )
                })}

                </>
           

        </div>
    )
}

export default FriendsList;
