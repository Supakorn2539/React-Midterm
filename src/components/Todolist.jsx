import React, { useEffect, useState } from 'react'
import axios from 'axios'
import List from './List'

function Todolist(props) {
    const {user,setUser} = props
    const API = `http://139.5.146.186/api/v1/todo?userId=${user.user.userId}`
    const [todos,setTodos] = useState([])
    const [form,setForm] = useState({
        title : '',
        status : false
    })

    console.log(todos)
    useEffect(()=>{
        getData()
    },[])


    const getData = async () =>{
        try{
            const resp = await axios.get(API)
            setTodos(resp.data)
            
            
        }catch(err){
            console.log(err.message)
        }
    }

    const deleteTodos = async(id) => {
        const API = `http://139.5.146.186/api/v1/todo/${id}`
        try{
            const resp = await axios.delete(API)
            
            getData()
        }catch(err){
            console.log(err.message)
            
        }   
    }

    const hdlOnChange = (e)=>{
        
        setForm({
            ...form,[e.target.name] : e.target.value
        })
    }

    const handleAddTodo = async (form) => {
        try{
            const resp = await axios.post(API,form)
            console.log(resp)
            getData()

        }catch(err){
            console.log(err.message)
        }
    }


    
    const editTodo = async(id,data) => {
        const API = `http://139.5.146.186/api/v1/todo/${id}`
        try{
            const resp = await axios.patch(API, data)
            getData()
           
        }catch(err){
            console.log(err.message)
        }
    }

  return (
    <div className='flex flex-col justify-center w-1/2 h-screen' >
        <div className='flex justify-between'>
        <h1 className='text-5xl'>My ToDo </h1>
        <button className='btn btn-warning' onClick={()=> handleAddTodo(form)}>ADD</button>
        </div>
        <h2 className='text-3xl my-5'>NewTask</h2>
        <hr />
        <input className="bg-white p-4"type="text" name='title' onChange={hdlOnChange} />

        {
            todos.map((el,index )=>(<List key={index} el={el} deleteTodos={deleteTodos} editTodo={editTodo} />))
        }
        <button className='btn btn-outline my-12' onClick={()=>setUser({})}>Logout</button>
        
    </div>
  )
}

export default Todolist
