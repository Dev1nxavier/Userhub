import React, { useEffect, useState } from 'react';

import './Header.css';

const Header = ({ 
    userList,
    currentUser,
    setCurrentUser }) => {

  const [selectedUser, setSelectedUser] = useState();
  
  useEffect(()=>{
      setSelectedUser(userList[0]);
  }, [userList]);

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const handleSelectChange = (event) => {
    const id = event.target.value;
    const user = userList.find(user=>{
        return user.id === id;
    })
    setSelectedUser(user);
  }

  const handleUserLogin = (event) => {
    //   console.log('entered Header.js handleUserLogin');
    setCurrentUser(selectedUser);
    console.log('Selected User: ', selectedUser);
  }

  const handleUserLogout = (event) => {
    setSelectedUser(userList[0]);
    setCurrentUser(null);
  }

  return (
        <header>
        <h1>Welcome to UserHub</h1>
        <form 
            className="user-select" 
            onSubmit={ handleSubmit } >
            {
            currentUser
            ? <button onClick={ handleUserLogout }>LOG OUT, { currentUser.username }</button>
            : <>
                <select onChange={ handleSelectChange }>{
                    userList.map(user => (
                    <option key={ user.id } value={ user.id }>
                        { user.username }
                    </option>
                    ))
                }</select>
                <button onClick={ handleUserLogin }>LOG IN</button>
                </>
            }
        </form>
        </header>
    );
}

export default Header;