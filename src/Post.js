import React from 'react';
import { useState,useEffect } from 'react';
import axios from "axios"
const Post = () => {
const[user,setUser]=useState("")
const[email,setEmail]=useState("")
const[password,setPassword]=useState("")



const handleforSubmit = async (e) => {
    e.preventDefault();
    await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5%27" ,{
      method: 'POST',
      headers: { 'Content-Type': 'application/json',"Access-Control-Allow-Origin":"*"},
      body: JSON.stringify({
        username: user,
        email: email,
        Password: password
      })
    }).catch(err=>{console.log(err)})
    console.log('Gönderim Başarılı')
  }


    return (

        <div>
            
<form  className='formregister'>

<input  type="text" placeholder='Username' onChange={(e)=>setUser(e.target.value)}></input>
<input  type="text" placeholder='Email' onChange={(e)=>setEmail(e.target.value)}></input>
<input  type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}></input>
<button type='submit' onClick={handleforSubmit}>Add User</button>

</form>

        </div>
    );
}

export default Post;
