import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Button, Modal } from 'react-bootstrap';

const Edituser = (props) => {
  const navigate = useNavigate();
  let [open, setOpen] = useState(true);
  const [userInfo, setuserInfo] = useState({
    name: props.list.lists,
    
  });
  const onChangeValue = (e) => {
    setuserInfo({
      ...userInfo,
      [e.target.name]:e.target.value
    });
  } 
  // Inserting a new user into the Database.
  const submitUser = async(event) => {
    try {
      event.preventDefault();
      event.persist();
      axios.post(`http://292.468.0.305/Apicrud/editusers.php`, { 
        username: userInfo.name,
        useremail: userInfo.email,
        userids: props.list.user_id,
      })
      .then(res => {
        console.log(res.data);
        navigate(`/`);
        return;
       })
    } catch (error) { throw error;}    
  };
  function handleModalSave() {
    // todo[id] = todolist;
     setOpen(!open);
     axios.post(`http://localhost/todolist/edituser.php`, { 
        username: userInfo.name,
        
        userids: props.list.user_id,
      })
      .then(res => {
        console.log(res.data);
        navigate(`/`);
      })

}
function handleModalClose() {
     setOpen(!open);
     navigate(`/`);
    // setTodos(false);


}

        
         return (
             <>

                 <Modal show={open}>
                     <Modal.Header>Edit Todo</Modal.Header>
                     <Modal.Body>

                         <div className="mb-3 my-3">
                             <label htmlFor="exampleInputEmail1" className="form-label">Edit Todo</label>
                             <input type="text" className="form-control" value={userInfo.name} name="name"  onChange={onChangeValue}></input>
                         </div>

                     </Modal.Body>
                     <Modal.Footer>
                         <Button onClick={() => {
                             handleModalClose();
                         }}>close</Button>
                         <Button onClick={() => { handleModalSave(); }}>save</Button>

                     </Modal.Footer>
                 </Modal>
          
             </>
        );
        

     }


export default Edituser;