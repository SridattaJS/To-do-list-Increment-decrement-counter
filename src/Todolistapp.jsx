import React, { Fragment, useState } from 'react'

const Todo = () => {

    let [input,setInput] = useState("")
    let [task,setTask] = useState([])

    let inputData = (e)=>{
        setInput(e.target.value)
    }
    let addTask = (e)=>{
        e.preventDefault()
        if(input === ""){
            alert("please enter some task")
        }
        else{
            setTask([...task,input])
        }
    }
    console.log(task);

    let handleDelete = (x)=>{
        let updatedArray = task.filter((value,index)=> x!==index)
        console.log(updatedArray);
        setTask(updatedArray)
    }
  return (
    <>
    <h1>TO-DO List</h1>
    <form>
        <input type="text" name='task' placeholder='enter the task' value={input} onChange={inputData}/>
        <button onClick={addTask}>Add task</button>
    </form>
    {
        task.map((value,index)=>{
            return(
                <Fragment key={index}>
                    <p>{value}</p>
                    <button onClick={()=>handleDelete(index)}>Remove task</button>
                </Fragment>
            )
        })
    }
    </>
  )
}

export default Todo