import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { base_url } from '../url';

const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('')
    const navigate = useNavigate();

    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            navigate('/');
        }
    },[])

    const login = async ()=>{
        try {
            let result = await fetch(`${base_url}/login`,{
                method:'post',
                body: JSON.stringify({email,password}),
                headers:{
                    "Content-Type":"application/json"
                }
            });
            result = await result.json();
            console.log(result)
            if(result){
                localStorage.setItem("user",JSON.stringify(result));
                navigate('/')
            }else{
                alert("Please enter correct details");
            }
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className='register'>
      <input type="text" placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} className='inputBox'/>
      <input type="password" placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}} className='inputBox'/>
      <button className='appButton' type='buttton' onClick={login}>Login</button>
    </div>
  )
}

export default Login
