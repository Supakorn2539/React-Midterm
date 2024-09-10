import React, { useState } from 'react'

function List(props) {
    const {el,deleteTodos,editTodo} = props
    const [isEdit,setIsedit] = useState(false)
    const [check,setCheck] = useState(false)
    const [form,setForm] = useState({
        title: el.title,
        status : el.status

    })
    const hdlOnChange = (e) =>{
        setForm({
            ...form,[e.target.name] : e.target.value
        })
    }
    const onChangeEdit = () =>{
        
        setIsedit(!isEdit)
    }
    const hdlConfirm = (id) =>{
        setIsedit(!isEdit)
        editTodo(id,form)
       
        
    }

    const hdlClick = () =>{
        setCheck(!check)
    }
  return (
    <div className=' border border-gray text-center'>
        <div className='flex justify-between items-center glass'> {
            isEdit ? 
           <>
           <input  type="text" name="title" value={form.title} onChange={hdlOnChange}/>
           </>
             : <>
             <input type="checkbox" className='check checkbox-primary' onClick={hdlClick}/>
             <span className={check? 'line-through' : ''}>{el.title}</span>
             </>
        }
            
            {isEdit ? <button className='btn btn-ghost' onClick={()=>hdlConfirm(el.id)}>Confirm</button> : <button className='btn btn-ghost' onClick={onChangeEdit}>Edit</button>}
            
            
            <button className='btn btn-ghost' onClick={()=>deleteTodos(el.id)}>Delete</button></div>
        
    </div>
  )
}

export default List
