import React, { useState } from 'react'

const Register = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const regUser=()=>{
      console.log(name,email,password)
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
