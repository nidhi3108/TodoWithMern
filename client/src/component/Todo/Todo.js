import React, { useEffect, useState } from "react";


const Todo=()=>{
    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('currentUser')))
      const [todo,setTodo]=useState("")
    //   const [something, setSomething] = useState([])
      const [backendtodoData , setBackendtodoData] = useState([])
      const saveTodo= async ()=>{
        console.log(todo);
        if(todo){
           const response = await fetch('http://localhost:5000/todo/save',{
            method: 'post',
            body: JSON.stringify({ todo: todo,createdBy: currentUser._id,description:todo}),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        console.log(response.status)
        const userData = await response.json();
        console.log(userData);
        // console.log(todo);
        // console.log(currentUser);
        // setBackendtodoData(userData)
        // setSomething([...something, userData]);
        getAlltodo();
        }
        setTodo('');
    }


    const getAlltodo = async ()=>{
        const allData= await fetch('http://localhost:5000/todo/getall')
        console.log(allData);
        console.log(allData.status);
        const data = await allData.json();  //backend se data lata h card ki details
        console.log(data);
        setBackendtodoData(data)
        console.log(backendtodoData);
    //    { showtodo(data)}
    }

console.log(backendtodoData);

    const showtodo=()=>{
        return (
            backendtodoData.map((data)=>{
                console.log("h");
                console.log(data.description);

                return(
                    <li className="list-group-item d-flex justify-content-between align-items-center" id={data._id} >
                    {data.description}
                    <div>
                        <button className="badge badge-info p-2 mx-2 rounded-pill"  onClick={(e)=>{editTodo(data)}}><i className="fas fa-pencil-alt    "></i></button>
                        <button className="badge badge-danger p-2 mx-2 rounded-pill"  onClick={(e)=>{deleteTodo(data)}} ><i className="fas fa-trash-alt    "></i></button>
                    </div>
                </li>
                )
            })
        )
       
    }

   const editTodo= async (description)=>{
    const updatedTodo = window.prompt('Enter Updated Todo')
        console.log(updatedTodo)
        if(updatedTodo!=null)
        {
            const response = await fetch('http://localhost:5000/todo/edit',{
                method: 'post',
                body: JSON.stringify({description: description, updateTodo: updatedTodo}),
                headers: {
                    'Content-Type':'application/json'
                }
            })

            const data = await response.json()
            console.log(data);
            if(response.status == 200)
            console.log("todo updated");
            // toast.success('Todo Updated');
           getAlltodo()
        }
    console.log("edit");


   }
   const deleteTodo=async (description)=>{
    console.log(description);
    // const currenttodoId=description._id;
    // console.log(currenttodoId);
    console.log("delete kro");
     const response=  await fetch('http://localhost:5000/todo/delete', {
        method: 'post',
        body: JSON.stringify(description),
        headers: {
            'Content-Type': 'application/json'
        }
    })
     console.log(response);
     if(response.status===200){
        console.log("todo deleted");
     }
     else{
        console.log("some error in deletion");
     }
     getAlltodo();
   }
   

    useEffect(()=>{
        getAlltodo();
    
    },[])

    const handleChange=(event)=>{
          const todoValue=event.target.value;
          console.log(todoValue)
          setTodo(todoValue)
    }
    return (
        <>
        <div className="container w-50 mt-4">
            <div className="card">
                <div className="Box d-flex">
                 <input style={{borderRadius:"3px",border: "1px solid black"}}
                 placeholder="Enter your todo here"
                 value={todo}
                 type="text" 
                 className="flex-fill" 
                 onChange={handleChange}
                 />
                 
                 <button className="bg-success" style={{borderRadius:"3px",border: "1px solid black"}} onClick={saveTodo}>Save</button>
                </div>
            </div>
        </div>
        <div className="container w-50 mt-4">
                <div className="card border border-primary">
                    <ul className="list-group list-group-light mx-5">

                    {showtodo()}
                    </ul>
                </div>
            </div>
       
       
        </>
    )
}
export default Todo