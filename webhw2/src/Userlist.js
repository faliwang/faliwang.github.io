import React, { useEffect, useState } from 'react';
import './Userlist.css';

const Userlist = () => {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState("");

    const addUser = (name) => {
        setUsers([...users, name]);
    }

    useEffect(() => {
        const keyListener = (e) => {
            if (e.isComposing || e.keyCode === 229) return;
            else if (e.code === "Enter"){
                addUser(name);
            }
        }

        window.addEventListener('keydown', keyListener);
        return () => {window.removeEventListener('keydown', keyListener)};
    })

    return(
        <div className="Userlist">
            <p>I also made a user-list.</p>
            <h1>User List</h1>
            <h5>按Enter新增</h5>
            <ul style={{width: "300px", margin: "auto"}}>
                {users.map((user, idx) => <li key={idx}>{user}</li>)}
            </ul>
            <div style={{marginTop: "30px"}}>
                <label htmlFor="name">Name:  </label>
                <input id="name" type="text" value={name} onChange={e => setName(e.target.value)}/>
            </div>
        </div>
    );
}

export default Userlist;