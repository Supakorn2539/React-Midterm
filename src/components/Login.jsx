import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Todolist from '../components/Todolist'

function Login(props) {
    const {API,user,setUser,input,setInput} = props

    const hdlChange = (e) => {
        setInput(prv => ({...prv,[e.target.name] : e.target.value }))
    }

  
   
    const hdlSubmit = async (e) => {
        e.preventDefault()
        
        try {
            const resp = await axios.post(API,input)
            
            setUser(resp.data)
          
            
            
        }catch(err){

        }
    }
    return (
        <div className=' m-auto  flex-col flex  items-center gap-3'>
            {user.token?
                <Todolist user={user} setUser={setUser}/> :
                <>
                
                <h1 className='mt-24 text-5xl'>Welcome</h1>
            <form onSubmit={hdlSubmit}>
                
                <label>
                    <h2 className='mt-16 text-3xl'>
                    EmailOrMobile
                    </h2>
                    <input className='border-b-2 bg-inherit border-gray-500 text-2xl' name ='email' value={input.email} onChange={hdlChange} type="text" />
                    <h2 className='mt-16 text-3xl'>
                    Password
                    </h2>
                    <input className='border-b-2 bg-inherit border-gray-500 text-2xl' name ='password' value={input.password} onChange={hdlChange}type="text" />
                    <br />
                    <div className='flex justify-center'>
                    <button className='mt-20 btn btn-ghost text-3xl'>LOG IN</button>

                    </div>
                </label>
                
            </form>
                </>
            
            }
        </div>
            
    )
}

export default Login
