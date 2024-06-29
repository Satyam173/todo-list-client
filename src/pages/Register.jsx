import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { base_url } from '../../url';

const Register = () => {
  const navigate = useNavigate();
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    useEffect(()=>{
      let auth = localStorage.getItem('user');
      if(auth){
        navigate('/')
      }
    },[])
    
    const regUser=async ()=>{
      console.log(name,email,password)
      try {
        let result = await fetch(`${base_url}/register`,{
          method: 'post',
          body: JSON.stringify({name,email,password}),
          headers:{
            'Content-Type':'application/json'
          }
        });
        result = await result.json()
        console.log(result)
        localStorage.setItem("user",JSON.stringify(result))
        navigate('/')
      } catch (error) {
        console.log(error)
      }
    }
  return (
    <div className='register'>
        <input type="text" placeholder='Enter name' value={name} onChange={(e)=>setName(e.target.value)} className='inputBox'/>
        <input type="text" placeholder='Enter email' value={email} onChange={(e)=>setEmail(e.target.value)} className='inputBox'/>
        <input type="password" placeholder='Enter password' value={password} onChange={(e)=>setPassword(e.target.value)} className='inputBox'/>
        <button className='appButton' type='button' onClick={regUser}>Register</button>
    </div>
  )
}

export default Register
