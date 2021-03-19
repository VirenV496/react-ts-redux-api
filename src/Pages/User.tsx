 
import React, { useEffect } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import {fetchUsers} from '../redux/actions/userAction'
import {RootStore} from "../redux/Store";


import 'bootstrap/dist/css/bootstrap.min.css'
import Table from 'react-bootstrap/Table'


function User() {

    const dispatch = useDispatch()
    const users = useSelector((state: RootStore) => state.users);

    useEffect(() => {
        dispatch(fetchUsers()) 
      }, [])
      console.log()

    return (
      <div >        
<>
                <Table striped bordered hover variant="dark">
                  <thead>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Username</th>                  
                   </thead>

                        {users &&
                        users.users.map((user:any)=>

                    <tr key={user}  > 
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>            
                        </tr>

                 )} 
            </Table>  
</>
      </div>
       
    )
}



export default User

