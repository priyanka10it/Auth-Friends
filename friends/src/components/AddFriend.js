import React, {useState} from 'react';
import {axiosWithAuth} from "../utils/axiosWithAuth";

const AddFriend = props =>{
    const [value, setValue] = useState({});

    const submit = e =>{
        e.preventDefault();
        axiosWithAuth()
        .post('/api/friends', value)
            .then(res=>{
                console.log(res);
                props.history.push('/FriendsList');
            })
    }

    const handleChange = e =>{
        setValue({
            ...value,
            [e.target.name]:e.target.value,
        })
    }

    return(
        <div>
            <form onSubmit={submit}>
                <input
                    type='text'
                    name='name'
                    value={value.name}
                    onChange={handleChange}
                    placeholder='Name'
                /><br/>
                <input
                    type='text'
                    name='age'
                    value={value.age}
                    onChange={handleChange}
                    placeholder='Age'
                /><br/>
                <input
                    type='text'
                    name='email'
                    value={value.email}
                    onChange={handleChange}
                    placeholder='email'
                /><br/>
                <button>Add Friend</button>
            </form>
        </div>
    )

}

export default AddFriend;