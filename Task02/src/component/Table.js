import React, { useEffect, useState } from 'react';
import './Add.css';
import axios from 'axios';


import {Link, useNavigate, useParams } from "react-router-dom";

const Add = () => {


    let [todouser, setTodouser] = useState("");
    let [empty, setEmpty] = useState("No todo list...");
    let [todo, setTodo] = useState([]);
    let [todolist, setTodolist] = useState("hi");
    let [todos, setTodos] = useState(false);
    let [count, setCount] = useState(0);
    let [id, setId] = useState(0);
    let [open, setOpen] = useState(false);
    let [edit, setEdit] = useState(["hi"]);
    const [userInfo, setuserInfo] = useState({
        todo:''
      });
      console.log("check")
    
   useEffect(()=>{
    fetch('http://localhost/todolist/view.php')
        .then((response)=>{return response.json()})
        .then((data)=>{
        console.log(data);
        setTodo(data);
        
         });

   },[]);
const navigate = useNavigate();
   const params = useParams();
 
        
            function addTodo () {

                 axios.post('http://localhost/todolist/add.php',{
                    usertodo: userInfo.todo,
                 }).then(res => {
                    console.log(res.data);
                        fetch('http://localhost/todolist/view.php')
        .then((response)=>{return response.json()})
        .then((data)=>{
        console.log(data);
        setTodo(data);
        
         });
                   
                   }) 
                setEmpty("")
                setCount(count + 1);
            }
            function Delete(id) {
                setCount(count - 1)
                axios.post('http://localhost/todolist/delete.php',{
                    userids: id,
                 }).then(res => {
                    console.log(res.data);
                      fetch('http://localhost/todolist/view.php')
        .then((response)=>{return response.json()})
        .then((data)=>{
        console.log(data);
        setTodo(data);
        
         });
                   
                   }) 

    
                const newTodo = todo.filter((data, index) => {
                    if (id !== index) {
                        return data;
                    }
                })
                setTodo(newTodo);
                if (count === 1) {
                    setEmpty("No todo list....");
                }
            }
    
            return (
                <div className='main'>
                       
                    
                    
                    <div className="mb-3 my-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Add Todos</label>
                        <input type="text" name="todo" className="form-control" required placeholder='Enter your title here...' value={userInfo.todo} onChange={(e) => {
                            setuserInfo({
                                ...userInfo,
                                [e.target.name]:e.target.value
                              });
                      }}></input>
    
                    </div>
                        {/* <img src="http://localhost/todolist/image/profilemain.jpg" alt="" /> */}


                    <button type="submit" className="btn btn-primary" onClick={addTodo}>Add</button>
                    <button type="submit" className="btn btn-primary" style={{ float: 'right' }} onClick={() => { setTodouser("") }}>clear</button>
    
    
                    <div className="list" style={{ minHeight: "50.4vh", marginBottom: "30px" }}>
                        <p>My todos list</p>
                        <table className="table table-dark table-striped">
                            <thead>
                                <tr>
                                    <th scope="col" style={{ width: "8%" }}>#</th>
                                    <th scope="col" style={{ width: "72%" }}>Title</th>
    
                                    <th scope="col" style={{ textAlign: "center" }}>Actions</th>
                                </tr>
                            </thead>
    
                            <tbody>
    
                                {todo.map((lists, index) => {
                                    return (
    
                                        <>
                                            <tr>
                                                <th scope="row">{index + 1}</th>
                                                <td>{lists.list}</td>
    
                                                <td >
                                                    <button type="submit" style={{ marginRight: '8px' }} className="btn btn-danger btn-sm" onClick={() => { Delete(lists.id) }}>Delete</button>
                                                    <button type="submit" style={{ marginRight: '8px' }} className="btn btn-primary btn-sm" onClick={() => {
                                                        setTodos(true);
                                                        setId(index);
                                                        setTodolist(lists);
                                                        
                                                        
                                                         setOpen(true)
                                                      
                                                        
                                                    }}><Link style={{color:'white'}} to={`user/${lists.id}/edit`} >Edit</Link></button>
                                                </td>
                                            </tr>
    
    
    
    
                                        </>
                                    )
                                })}
    
                            </tbody>
                        </table>
    
    
                    </div>
                </div>
            )
        

    }
    // if (todos === false) {
        
    //     return main(); 
    // }

    // if(todos===true) {
       
        
    //     function handleModalSave() {
    //         todo[id] = todolist;
    //         setOpen(!open);
    //         setTodos(false);

    //     }
    //     function handleModalClose() {
    //         setOpen(!open);
    //         setTodos(false);


    //     }
        
            
    //             axios.post('http://localhost/todolist/edit.php',{
    //                             userids: id,
    //                          }).then(res => {
    //                             console.log(res.data.userlist.userdata);
    //                             setEdit(res.data.userlist.userdata[0]);
                               
    //                            }) 
            
            
                
               
        
        
    //     return (
    //         <>
         
    //      {console.log(edit)}
    //         {main()}
    //             <Modal show={open}>
    //                 <Modal.Header>Edit Todo</Modal.Header>
    //                 <Modal.Body>

    //                     <div className="mb-3 my-3">
    //                         <label htmlFor="exampleInputEmail1" className="form-label">Edit Todo</label>
    //                         <input type="text" className="form-control" value={edit.lists} onChange={(e) => {
    //                             setTodolist(e.target.value)
    //                         }}></input>
    //                     </div>

    //                 </Modal.Body>
    //                 <Modal.Footer>
    //                     <Button onClick={() => {
    //                         handleModalClose();
    //                     }}>close</Button>
    //                     <Button onClick={() => { handleModalSave(); }}>save</Button>

    //                 </Modal.Footer>
    //             </Modal>
                
    //         </>
    //     );
        

    // }




export default Add;